# -*- coding: utf-8 -*-
"""Dữ liệu cho hai trang bản mẫu: Founder Growth System và Community Growth System.

NGUỒN CỦA TỪNG PHẦN, để sau này kiểm lại được:
  ket_hero, ket_qua, phu_hop, khong_nhan, cho_ai, luan_diem  ->  chuong_trinh.py
  co_che của Founder Growth System                           ->  NGF-17 muc 5.3
  co_che của Community Growth System                         ->  NGF-17 muc 5.4
  dau_hieu                                                   ->  viết mới, là cách
      diễn đạt lại chính chỗ nghẽn đã ghi trong luan_diem và cho_ai, không thêm
      lời hứa nào chưa có trong tài liệu.

Chương trình chưa triển khai chi tiết nên hai trang này KHÔNG có giá, không có
lịch khai giảng, không có lộ trình theo buổi.

    python3 landing_du_lieu.py
"""
from landing import dung_landing

FGS = {
    "thu_muc": "founder-growth",
    "trang_ct": "founder-growth-system.html",
    "ten": "Founder Growth System",
    "ten_vi": "Hệ thống tăng trưởng cùng đội ngũ",
    "nhan_nho": "Năng lực xây hệ thống &middot; Coach Duy Nguyễn",
    "mo_ta": "Đưa một luồng công việc quan trọng ra khỏi đầu người chủ, để nó có kết quả rõ, có người chịu trách nhiệm và có dữ liệu để biết đang chạy tốt hay đang lệch.",
    "anh": "cd-giang-slide.webp",
    "alt": "Coach Duy Nguyễn đang trình bày bên màn hình chiếu",
    "cho_ai": "Nhà sáng lập đã có sản phẩm, khách hàng và đội ngũ nòng cốt, nhưng tăng trưởng và vận hành còn phụ thuộc vào mình.",

    "vien": "Cho nhà sáng lập đã có đội ngũ nhưng tăng trưởng vẫn chờ mình",
    "h1a": "Đội ngũ đông thêm mà bạn không nhẹ đi.",
    "h1b": "Vì kết quả vẫn nằm trong trí nhớ và sự đôn đốc của bạn.",
    "dan": "là chương trình đưa một luồng công việc quan trọng ra khỏi đầu người chủ, để luồng đó có kết quả rõ, có người chịu trách nhiệm và có dữ liệu để biết đang chạy tốt hay đang lệch.",
    "ket_hero": [
        "Một luồng thu hút, tư vấn, bán hàng hoặc vận hành chạy được mà không cần bạn đứng giữa.",
        "Một người chịu trách nhiệm cho luồng đó, không phải một phòng ban.",
        "Đủ số liệu để biết luồng đang khoẻ hay đang yếu, cùng một lịch rà soát cố định.",
        "Kế hoạch chín mươi ngày để đội ngũ làm tiếp sau khi chương trình kết thúc.",
    ],

    "vd_a": "Bạn giao việc rồi vẫn phải nhắc.",
    "vd_b": "Không nhắc thì việc đứng lại, và bạn thành chỗ nghẽn của chính doanh nghiệp mình.",
    "vd_dan": "Sáu câu dưới đây Duy nghe đi nghe lại ở những người chủ đã có đội ngũ. Nếu bạn nhận ra bốn trong sáu, chỗ nghẽn của bạn không nằm ở số người, mà nằm ở chỗ chưa có luồng nào chạy được khi bạn không nhìn tới.",
    "dau_hieu": [
        "Việc gì quan trọng cũng phải qua tôi mới yên tâm.",
        "Đội ngũ làm được, nhưng mỗi người một kiểu nên kết quả lúc được lúc không.",
        "Tôi giao rồi nhưng vẫn phải nhắc, không nhắc là việc đứng lại.",
        "Hỏi số thì mỗi người đưa một bảng, không biết con số nào mới đúng.",
        "Có thư mục quy trình khá đầy nhưng gần như không ai mở ra xem.",
        "Tháng nào tốt tháng nào xấu thì tôi biết, còn vì sao thì tôi đoán.",
    ],
    "luan_diem": "Kết quả không thể chỉ nằm trong trí nhớ và sự đôn đốc của người chủ. <i>Chừng nào một luồng còn cần bạn nhớ hộ và nhắc hộ, nó chưa phải hệ thống, nó vẫn là thói quen của riêng bạn.</i>",
    "luan_them": "Chương trình nhắm vào một luồng thôi, làm cho luồng đó chạy được, rồi lấy chính cách làm ấy nhân sang chỗ khác.",

    "cc_h2": "Sáu điểm làm nên một hệ thống chạy được",
    "cc_dan": "Duy dùng đúng sáu điểm này để xem một luồng công việc đã đủ chuẩn hay chưa. Thiếu một điểm thì luồng vẫn chạy được một thời gian, rồi quay về phụ thuộc người chủ.",
    "co_che": [
        ("Kết quả rõ", ["Luồng này sinh ra kết quả gì, và đo bằng con số nào. Không nói được kết quả thì không có gì để cải tiến."]),
        ("Một người chịu trách nhiệm cuối cùng", ["Một người, không phải một phòng ban. Khi luồng lệch, có đúng một người phải trả lời vì sao."]),
        ("Các bước và tiêu chuẩn cần thiết", ["Đủ để người mới làm được việc, chứ không phải một bộ tài liệu dày mà không ai mở ra."]),
        ("Dữ liệu để biết đang khoẻ hay đang lệch", ["Vài con số theo dõi đều đặn, nhìn vào là biết nên can thiệp hay nên để yên."]),
        ("Nhịp bàn giao, rà soát và xử lý ngoại lệ", ["Một lịch cố định để xem lại, và một cách xử lý sẵn cho những trường hợp không giống ai."]),
        ("Công nghệ dùng đúng chỗ", ["Đưa máy móc và trí tuệ nhân tạo vào phần việc lặp lại nhiều lần, giữ con người ở phần cần phán đoán."]),
    ],

    "kq_h2": "Doanh nghiệp giữ lại được gì sau chương trình",
    "ket_qua": [
        ("Một luồng chạy được", "Một luồng thu hút, tư vấn, bán hàng hoặc vận hành có kết quả rõ ràng."),
        ("Người chịu trách nhiệm", "Một người sở hữu luồng đó, không phải một phòng ban, và biết mình phải trả lời điều gì."),
        ("Số liệu và nhịp rà soát", "Đủ dữ liệu để biết luồng đang khoẻ hay đang yếu, cùng một lịch rà soát cố định."),
        ("Bản đồ CDN Trust Orbit", "Bản đồ quan hệ khách hàng của riêng doanh nghiệp bạn, vẽ theo cách Duy vẫn dùng, kèm những sản phẩm hợp với từng vòng quan hệ."),
        ("Kế hoạch chín mươi ngày", "Việc phải làm sau khi chương trình kết thúc, chia theo tuần và có người nhận."),
    ],

    "phu_hop": [
        "Bạn đã có sản phẩm, có khách hàng và một đội ngũ nòng cốt đang chạy.",
        "Tăng trưởng và vận hành vẫn phụ thuộc vào việc bạn có mặt.",
        "Có quản lý chủ chốt tham gia được một số phiên, để bạn không đi học một mình.",
        "Chấp nhận đưa số liệu vận hành thật ra bàn, kể cả phần chưa đẹp.",
        "Chọn được một luồng cụ thể để làm trước, thay vì muốn sửa cả doanh nghiệp cùng lúc.",
    ],
    "khong_nhan": [
        "Viết hộ quy trình cho toàn bộ doanh nghiệp.",
        "Nhận vai điều hành thay người chủ.",
        "Cam kết một con số doanh thu.",
    ],
    "da_chot": [
        "Chương trình dành cho ai, và giải chỗ nghẽn nào.",
        "Sáu điểm chuẩn của một hệ thống, dùng làm khung cho cả chương trình.",
        "Năm phần doanh nghiệp giữ lại sau khi chương trình kết thúc.",
        "Hình thức dự kiến là bốn tới sáu buổi trực tuyến, gồm một số phiên riêng cho quản lý chủ chốt.",
        "Ba việc chương trình không nhận, ghi rõ ngang phần kết quả.",
    ],

    "so_hoi": "Sáu",
    "hoi_dap": [
        ("Chương trình này khác gì một khoá quản trị hoặc một hợp đồng tư vấn quy trình?",
         "Chương trình không viết hộ quy trình cho cả doanh nghiệp. Duy làm cùng bạn đúng một luồng, đưa luồng đó đạt sáu điểm chuẩn phía trên, rồi bàn giao cách làm để bạn nhân sang chỗ khác. Quy trình chỉ là một trong sáu điểm, và thường không phải điểm khó nhất."),
        ("Tôi nên chọn luồng nào để làm trước?",
         "Luồng đang ngốn nhiều thời gian của bạn nhất và ảnh hưởng thẳng tới doanh thu. Việc chọn được bàn ngay ở buổi trao đổi đầu, vì chọn sai luồng thì chương trình vẫn chạy nhưng bạn không thấy nhẹ đi."),
        ("Tôi bận, giao cho quản lý đi học thay được không?",
         "Không. Điều kiện tham gia là quản lý chủ chốt học cùng bạn, chứ không học thay bạn. Người quyết định đánh đổi trong một luồng vẫn là bạn, nên bạn vắng thì phần khó nhất bị bỏ trống."),
        ("Doanh nghiệp tôi chưa có số liệu gì nhiều thì sao?",
         "Không cần có sẵn hệ thống báo cáo. Cần bạn chấp nhận đưa số thật đang có ra bàn, kể cả phần chưa đẹp. Một trong năm thứ giữ lại chính là bộ số tối thiểu để theo dõi luồng, nên phần đó được dựng trong chương trình."),
        ("Bao giờ mở, học bao lâu và mức đầu tư thế nào?",
         "Chưa chốt. Hình thức dự kiến là bốn tới sáu buổi trực tuyến, gồm một số phiên riêng cho quản lý chủ chốt. Lịch, thời lượng cuối cùng và mức đầu tư chỉ chốt sau khi chạy thử với vài doanh nghiệp thật, và trang này sẽ cập nhật khi có."),
        ("Duy có cam kết doanh thu tăng bao nhiêu không?",
         "Không. Chương trình không cam kết một con số doanh thu, và cũng không nhận vai điều hành thay bạn. Phần chương trình chịu trách nhiệm là một luồng chạy được, có người phụ trách và có số để theo dõi."),
    ],

    "bai": [
        ("kinh-nghiem-phai-thanh-he-thong.html", "Đừng để kinh nghiệm chỉ nằm trong trí nhớ vài người",
         "Thứ quý nhất trong một doanh nghiệp dịch vụ thường nằm trong đầu vài người. Vừa là sức mạnh, vừa là rủi ro."),
        ("nam-thu-lam-nen-mot-he-thong.html", "Năm phần làm nên một hệ thống chạy được",
         "Thư mục quy trình đầy tài liệu mà không ai mở là chuyện phổ biến, và quy trình thường là phần ít quan trọng nhất."),
        ("giao-quyen-ma-khong-mat-kiem-soat.html", "Giao quyền mà không mất kiểm soát",
         "Người chủ hay kẹt giữa hai thái cực, ôm hết vì sợ hỏng hoặc buông hết rồi phải nhảy vào cứu."),
    ],
}

CGS = {
    "thu_muc": "community-growth",
    "trang_ct": "community-growth-system.html",
    "ten": "Community Growth System",
    "ten_vi": "Hệ thống tăng trưởng từ cộng đồng",
    "nhan_nho": "Năng lực kiến tạo cộng đồng &middot; Coach Duy Nguyễn",
    "mo_ta": "Thiết kế một cộng đồng mà giá trị do thành viên tạo cho nhau: có lời hứa, tiêu chuẩn thành viên, nhịp hoạt động và một vòng sinh hoạt được chạy thử thật.",
    "anh": "dh-phong-lon.webp",
    "alt": "Một buổi gặp mặt đông người trong hội trường lớn",
    "cho_ai": "Nhà sáng lập đã có khách hàng, học viên hoặc người theo dõi, nhưng quan hệ thường kết thúc sau giao dịch và mọi giá trị vẫn phụ thuộc vào mình.",

    "vien": "Cho nhà sáng lập đã có khách hàng, học viên hoặc người theo dõi",
    "h1a": "Bạn có rất nhiều mối quan hệ tốt.",
    "h1b": "Nhưng chúng rời rạc, và giá trị nào cũng phải do bạn tạo ra.",
    "dan": "là chương trình thiết kế một cộng đồng mà giá trị được tạo giữa các thành viên với nhau, không chỉ chảy một chiều từ người sáng lập xuống.",
    "ket_hero": [
        "Lời hứa cộng đồng rõ ràng, cùng tiêu chuẩn để biết ai nên vào và ai chưa hợp.",
        "Trải nghiệm mười bốn ngày đầu, giúp người mới có một kết quả nhỏ sớm.",
        "Nhịp hoạt động đều đặn, để thành viên biết khi nào quay lại và quay lại để làm gì.",
        "Một vòng sinh hoạt thật được chạy thử ngay trong chương trình, không dừng ở bản thiết kế.",
    ],

    "vd_a": "Khách quý bạn, học viên biết ơn bạn.",
    "vd_b": "Nhưng xong việc là quan hệ đứng lại, và lần sau vẫn phải bắt đầu từ bạn.",
    "vd_dan": "Sáu câu dưới đây hay đi cùng nhau ở những người đã có tệp quan hệ tốt nhưng chưa có cộng đồng. Nếu bạn nhận ra bốn trong sáu, nhóm bạn đang có mới là một kênh của riêng bạn, chưa phải một cộng đồng.",
    "dau_hieu": [
        "Tôi có nhóm mấy nghìn người, nhưng tôi không đăng bài thì nhóm im.",
        "Thành viên vào rồi ở đó, ít khi nói chuyện với nhau.",
        "Mọi câu hỏi đều chờ tôi trả lời, tôi bận vài hôm là nhóm nguội.",
        "Người mới vào được một tuần rồi lặng mất, tôi không biết vì sao.",
        "Học viên cũ quý tôi lắm, nhưng hết khoá là hết liên lạc.",
        "Tôi không biết cộng đồng đang khoẻ hay yếu, chỉ nhìn được số thành viên.",
    ],
    "luan_diem": "Cộng đồng không phải nhóm đăng bài, cũng không phải chỗ để chào hàng. <i>Chừng nào giá trị còn chỉ chảy một chiều từ bạn xuống, nhóm của bạn vẫn là một kênh của riêng bạn.</i>",
    "luan_them": "Chương trình nhắm vào việc tạo giá trị giữa các thành viên, và bắt đầu bằng một vòng sinh hoạt thật được chạy thử ngay khi bạn còn đang học.",

    "cc_h2": "Sáu việc một người kiến tạo cộng đồng phải biết làm",
    "cc_dan": "Lập nhóm, đăng bài và tổ chức sự kiện mới là phần nhìn thấy được. Sáu việc dưới đây mới quyết định cộng đồng có sống hay không, và chương trình đi theo đúng thứ tự này.",
    "co_che": [
        ("Chọn đúng người", ["Chọn đúng người và giữ chất lượng thành viên. Ai cũng vào được thì không ai thấy mình thuộc về."]),
        ("Thiết kế lúc bắt đầu", ["Người mới cần sớm cảm thấy mình thuộc về nơi này, và cảm giác đó được thiết kế chứ không tự nhiên mà có."]),
        ("Nhịp hoạt động", ["Một lịch sinh hoạt đều đặn để thành viên học, làm, kết nối và đóng góp, thay vì chỉ vào đọc rồi thoát."]),
        ("Ghép đúng nhu cầu với đúng năng lực", ["Trong cộng đồng luôn có người đang cần và người làm được. Bạn phải nhìn ra và để hai bên gặp nhau."]),
        ("Giá trị tạo giữa các thành viên", ["Không dồn mọi kỳ vọng vào người sáng lập, vì đó chính là chỗ khác nhau giữa một cộng đồng và một kênh."]),
        ("Chuyển kết quả thành cơ hội", ["Kết quả của thành viên trở thành câu chuyện, lời giới thiệu và cơ hội hợp tác, luôn có sự đồng ý của người trong cuộc."]),
    ],

    "kq_h2": "Bạn giữ lại được gì sau chương trình",
    "ket_qua": [
        ("Lời hứa và tiêu chuẩn thành viên", "Cộng đồng của bạn hứa điều gì, và ai thì nên có mặt trong đó."),
        ("Trải nghiệm mười bốn ngày đầu", "Chuỗi việc giúp người mới có một kết quả nhỏ nhìn thấy được ngay trong hai tuần."),
        ("Nghi thức và nhịp hoạt động", "Lịch sinh hoạt cố định, để thành viên biết khi nào quay lại và quay lại để làm gì."),
        ("Cơ chế tạo quan hệ và giới thiệu", "Cách để thành viên quen nhau, ở lại, giới thiệu và làm ăn được với nhau."),
        ("Một vòng sinh hoạt đã chạy thử", "Bản thiết kế được đem chạy trọn một vòng từ đầu tới cuối ngay trong chương trình, để bạn biết chỗ nào chưa ổn trước khi mở rộng."),
    ],

    "phu_hop": [
        "Bạn đã có khách hàng, học viên hoặc người theo dõi, tức là đã có người để tập hợp.",
        "Quan hệ hiện nay thường kết thúc sau giao dịch, và mọi giá trị vẫn phụ thuộc vào bạn.",
        "Có người phụ trách cộng đồng tham gia cùng, không giao lại cho một người làm nội dung.",
        "Sẵn sàng chạy thử một vòng sinh hoạt thật ngay trong thời gian học.",
    ],
    "khong_nhan": [
        "Vận hành cộng đồng thay bạn, kể cả trong giai đoạn chạy thử.",
        "Bảo đảm số thành viên, dù cộng đồng của bạn đang có sẵn bao nhiêu người.",
        "Làm cùng người chỉ muốn có thêm một nhóm để bán hàng.",
    ],
    "da_chot": [
        "Chương trình dành cho ai, và giải chỗ nghẽn nào.",
        "Sáu việc của một người kiến tạo cộng đồng, dùng làm khung cho cả chương trình.",
        "Năm phần bạn giữ lại sau khi chương trình kết thúc.",
        "Hình thức dự kiến là bốn tới sáu buổi trực tuyến, kết hợp thiết kế và chạy thử một vòng sinh hoạt thật.",
        "Ba việc chương trình không nhận, ghi rõ ngang phần kết quả.",
    ],

    "so_hoi": "Sáu",
    "hoi_dap": [
        ("Tôi đã có nhóm mấy nghìn người rồi, còn cần chương trình này không?",
         "Số thành viên và một cộng đồng sống là hai chuyện khác nhau. Nếu bạn ngừng đăng bài mà nhóm im, nhóm đó vẫn là một kênh của riêng bạn. Chương trình nhắm vào phần giá trị được tạo giữa các thành viên, không nhắm vào việc tăng số người."),
        ("Cộng đồng của tôi lập ra để bán hàng, có hợp không?",
         "Không hợp. Phần không nhận ghi rõ là chương trình không làm cùng người chỉ muốn có thêm một nhóm để bán hàng. Lời giới thiệu và cơ hội kinh doanh vẫn xuất hiện, nhưng đến sau khi thành viên tạo được giá trị cho nhau, không đi theo chiều ngược lại."),
        ("Tôi có nhất thiết cần một người phụ trách cộng đồng không?",
         "Có, và đó là điều kiện tham gia. Người phụ trách học cùng bạn, chứ không phải bạn giao lại cho một người làm nội dung. Lịch sinh hoạt cần có người giữ hằng tuần, việc đó khác hẳn việc sản xuất bài đăng."),
        ("Chương trình có vận hành cộng đồng giúp tôi không?",
         "Không. Duy thiết kế cùng bạn và ngồi cùng khi bạn chạy thử một vòng sinh hoạt thật, nhưng người vận hành vẫn là đội ngũ của bạn. Cộng đồng giao cho người ngoài vận hành thì mất đúng phần làm nên nó."),
        ("Bao giờ mở, học bao lâu và mức đầu tư thế nào?",
         "Chưa chốt. Hình thức dự kiến là bốn tới sáu buổi trực tuyến, kết hợp thiết kế và chạy thử một vòng sinh hoạt thật, gồm một số phiên cho người phụ trách cộng đồng. Lịch, thời lượng cuối cùng và mức đầu tư chỉ chốt sau khi chạy thử với vài cộng đồng thật, và trang này sẽ cập nhật khi có."),
        ("Duy có bảo đảm số thành viên không?",
         "Không. Phần không nhận ghi rõ chương trình không bảo đảm số thành viên. Phần chương trình chịu trách nhiệm là lời hứa, tiêu chuẩn thành viên, trải nghiệm mười bốn ngày đầu, nhịp hoạt động và một vòng sinh hoạt đã chạy thử được."),
    ],

    "bai": [
        ("cong-dong-khong-phai-nhom-dang-bai.html", "Một nhóm đăng bài chưa phải là cộng đồng",
         "Mở một nhóm rất dễ. Tạo được giá trị giữa các thành viên với nhau mới là việc khó."),
        ("muoi-bon-ngay-dau.html", "Hai tuần đầu quyết định gần như tất cả",
         "Người mới quyết định ở lại hay không trong hai tuần đầu, và họ quyết dựa trên một kết quả nhỏ nhìn thấy được."),
        ("do-cong-dong-bang-gi.html", "Ngoài số người, còn đo cộng đồng bằng gì",
         "Số thành viên là chỉ số dễ đo nhất và dễ đánh lừa nhất. Có bốn con số khác nói đúng hơn."),
    ],
}

if __name__ == "__main__":
    for d in (FGS, CGS):
        print("XONG:", dung_landing(d))
