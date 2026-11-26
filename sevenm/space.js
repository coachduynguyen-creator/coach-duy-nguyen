import * as THREE from './assets/vendor/three.module.js';

// Ảnh điện ảnh giữ chất liệu; phối cảnh và các lớp trước/sau tạo chuyển động.
const host=document.querySelector('.hero-space');
const art=document.querySelector('.hero-art');
const hero=document.querySelector('.hero');
const dashboard=document.querySelector('.dashboard-plane');
const reduced=matchMedia('(prefers-reduced-motion:reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const pointer={x:0,y:0};
let x=0,y=0,previous=0,elapsed=0,raf=0,frames=0,stats=0,visible=true,renderer,camera,scene,mesh,dust;
const paused=()=>document.body.dataset.paused==='true'||reduced.matches;
window.addEventListener('pointermove',event=>{if(fine.matches&&event.pointerType==='mouse'){pointer.x=event.clientX/innerWidth*2-1;pointer.y=1-event.clientY/innerHeight*2;}},{passive:true});
window.addEventListener('pointerout',event=>{if(!event.relatedTarget){pointer.x=0;pointer.y=0;}},{passive:true});
try{
 renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;
 renderer.domElement.setAttribute('aria-hidden','true');host.append(renderer.domElement);host.dataset.renderer='loading';scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(30,1,.1,30);camera.position.z=5;
 const texture=await new THREE.TextureLoader().loadAsync('assets/horizon.png');texture.colorSpace=THREE.SRGBColorSpace;
 const uniforms={photo:{value:texture},aspect:{value:1},pointer:{value:new THREE.Vector2()},time:{value:0}};
 const material=new THREE.ShaderMaterial({uniforms,vertexShader:`varying vec2 vUv;void main(){vUv=uv;vec3 p=position;float dome=1.0-smoothstep(0.0,.8,length(vec2((uv.x-.5)*1.4,(uv.y-.15))));p.z+=dome*.12;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform sampler2D photo;uniform float aspect;uniform vec2 pointer;uniform float time;varying vec2 vUv;void main(){vec2 uv=vUv;float imageAspect=1.5;if(aspect>imageAspect){uv.y=(uv.y-.5)*imageAspect/aspect+.5;}else{uv.x=(uv.x-.5)*aspect/imageAspect+.5;}vec3 base=texture2D(photo,uv).rgb;float depth=smoothstep(.06,.5,base.r-max(base.g,base.b));uv+=pointer*vec2(.006,.003)*(depth*.8+.2);uv.x+=sin(time*.11)*.0015*depth;vec3 color=texture2D(photo,uv).rgb;float light=1.0+.025*sin(time*.15+uv.x*3.0)*depth;gl_FragColor=vec4(color*light,1.0);#include <tonemapping_fragment>
#include <colorspace_fragment>
}`.replace(';#include',';\n#include')});
 mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1,100,60),material);scene.add(mesh);
 const positions=new Float32Array(90*3);for(let i=0;i<90;i++){positions[i*3]=Math.sin(i*127.1)*8;positions[i*3+1]=Math.sin(i*79.4+2)*3.8;positions[i*3+2]=1+Math.abs(Math.sin(i*23.7))*.8;}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));dust=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#a4bdd2',size:.005,transparent:true,opacity:.16,depthWrite:false}));scene.add(dust);
 new ResizeObserver(entries=>{const r=entries[0].contentRect;if(r.width&&r.height){renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();const h=2*Math.tan(THREE.MathUtils.degToRad(15))*5;mesh.scale.set(h*camera.aspect*1.07,h*1.07,1);uniforms.aspect.value=camera.aspect;}}).observe(host);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{rootMargin:'100px'}).observe(art);
 host.dataset.renderer='webgl2';art.classList.add('webgl-ready');
 renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();host.dataset.renderer='fallback';art.classList.remove('webgl-ready');});
 renderer.domElement.addEventListener('webglcontextrestored',()=>{host.dataset.renderer='webgl2';art.classList.add('webgl-ready');});
}catch(error){host.dataset.renderer='fallback';art.classList.remove('webgl-ready');}
function updateMotion(delta){
 if(!paused()){
  elapsed+=delta;x=THREE.MathUtils.damp(x,pointer.x,3,delta);y=THREE.MathUtils.damp(y,pointer.y,3,delta);
  if(camera){camera.position.x=x*.065+Math.sin(elapsed*.19)*.018;camera.position.y=y*.035+Math.sin(elapsed*.13)*.008;camera.lookAt(0,0,0);mesh.material.uniforms.pointer.value.set(x,y);mesh.material.uniforms.time.value=elapsed;dust.rotation.z=Math.sin(elapsed*.035)*.025;}
  if(dashboard&&innerWidth>760){const r=dashboard.getBoundingClientRect();const progress=THREE.MathUtils.clamp(1-r.top/(innerHeight*.9),0,1);const rx=7*(1-progress)-y*.65,ry=x*.8;dashboard.style.transform=`rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg) translateZ(0)`;dashboard.style.setProperty('--light-x',`${50+x*28}%`);}
 }
}
function frame(now){raf=requestAnimationFrame(frame);if(now-previous<16)return;const delta=Math.min((now-previous)/1000||.016,.05);previous=now;if(document.hidden)return;updateMotion(delta);if(renderer&&host.dataset.renderer==='webgl2'&&visible)renderer.render(scene,camera);frames++;if(now-stats>1000){host.dataset.frames=String(frames);host.dataset.time=elapsed.toFixed(3);host.dataset.camera=camera?camera.position.toArray().map(n=>n.toFixed(4)).join(','):'';stats=now;}}
new MutationObserver(()=>{host.dataset.time=elapsed.toFixed(3);host.dataset.paused=String(paused());}).observe(document.body,{attributes:true,attributeFilter:['data-paused']});
requestAnimationFrame(frame);
window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);renderer?.dispose();});
