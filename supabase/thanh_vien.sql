-- Bảng thành viên cổng NGF. Hai cấp: mien_phi (tự đăng ký) và master_club (Coach cấp bằng tay).
-- Cấp Master Club: update public.thanh_vien set cap = 'master_club' where email = '...';
create table if not exists public.thanh_vien (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  ho_ten text, zalo text, vai_tro text, linh_vuc text, giai_doan text, thoi_gian_kd text, quy_mo text,
  cap text not null default 'mien_phi' check (cap in ('mien_phi', 'master_club')),
  tao_luc timestamptz not null default now()
);
alter table public.thanh_vien enable row level security;
-- Thành viên chỉ đọc được dòng của mình; không có quyền sửa nên không tự nâng cấp được.
drop policy if exists "doc_dong_cua_minh" on public.thanh_vien;
create policy "doc_dong_cua_minh" on public.thanh_vien for select to authenticated using ((select auth.uid()) = id);
revoke insert, update, delete on public.thanh_vien from anon, authenticated;

-- Đăng ký xong thì tự tạo dòng từ thông tin phiếu đăng ký, cấp luôn là mien_phi.
create or replace function public.tao_thanh_vien() returns trigger
language plpgsql security definer set search_path = '' as $$
declare m jsonb := coalesce(new.raw_user_meta_data, '{}');
begin
  insert into public.thanh_vien (id, email, ho_ten, zalo, vai_tro, linh_vuc, giai_doan, thoi_gian_kd, quy_mo)
  values (new.id, new.email, left(m->>'ho_ten', 200), left(m->>'zalo', 20), left(m->>'vai_tro', 100), left(m->>'linh_vuc', 100),
          left(m->>'giai_doan', 100), left(m->>'thoi_gian_kd', 100), left(m->>'quy_mo', 100));
  return new;
end $$;
drop trigger if exists khi_dang_ky on auth.users;
create trigger khi_dang_ky after insert on auth.users for each row execute function public.tao_thanh_vien();
