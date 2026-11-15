import * as T from 'three';
type Path=(s:number)=>{x:number,y:number};
/** Low-poly set pieces. Fixed object counts; no texture downloads or postprocessing. */
export function createAdventure(scene:T.Scene,path:Path){
 const materials=new Map<string,T.MeshStandardMaterial>();const sphere=new T.IcosahedronGeometry(1,1),box=new T.BoxGeometry(1,1,1),cone=new T.ConeGeometry(1,1,7);
 function add(p:T.Object3D,g:T.BufferGeometry,c:string,x:number,y:number,z:number,sx:number,sy=sx,sz=sx){let m=materials.get(c);if(!m){m=new T.MeshStandardMaterial({color:c,roughness:.8});materials.set(c,m)}const o=new T.Mesh(g,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);p.add(o);return o}
 const manta=new T.Group();scene.add(manta);add(manta,sphere,'#467e96',0,0,0,7,1.6,4);add(manta,sphere,'#a9ddd6',0,-.7,1,5.8,.6,3.4);const fins=[-1,1].map(side=>{const pivot=new T.Group();pivot.position.x=side*4;manta.add(pivot);const fin=add(pivot,cone,'#659cb1',side*3,0,0,3,.4,6);fin.rotation.z=side*Math.PI/2;return pivot});for(const side of [-1,1])add(manta,sphere,'#ffda9c',side*2.4,.5,3.3,.4,.24,.24);const tail=add(manta,cone,'#467e96',0,0,-6,.5,9,.5);tail.rotation.x=Math.PI/2;
 const gates=Array.from({length:5},(_,i)=>{const g=new T.Group();scene.add(g);for(const side of [-1,1]){add(g,box,'#b6af9a',side*4.3,2.6,0,.7,5.2,.8);add(g,box,'#f0d3a1',side*4.3,5.2,0,1.2,.4,1.2)}add(g,box,'#cebd9e',0,5.5,0,9.6,.65,1);const rune=add(g,new T.TorusGeometry(.7,.08,5,20),'#7ce4f7',0,5.5,.6,1);return {g,rune,s:650+i*12}});
 const crystals=Array.from({length:22},(_,i)=>{const g=new T.Group();scene.add(g);const side=i%2?1:-1;for(let j=0;j<3;j++){const o=add(g,cone,j===1?'#b9c9ff':'#9b8bcb',side*(4.7+j*.6),.5+j*.3,0,.4,2+j*.7,.5);o.rotation.z=side*.2}return {g,s:935+i*21}});
 const birds=new T.Group();scene.add(birds);for(let i=0;i<6;i++){for(const side of [-1,1]){const wing=add(birds,box,'#f9e6cd',i*1.7+side*.4,Math.sin(i)*.4,-i*.6,.8,.06,.2);wing.userData.side=side}}
 const streaks=Array.from({length:10},(_,i)=>{const o=add(scene,box,'#d5f1ef',0,0,0,.025,.025,2.5);return o});
 return {update(s:number,t:number,reduced:boolean,speed:number,restored:boolean){const p=path(s);manta.visible=s>410&&s<640;if(manta.visible){const k=(s-410)/230;manta.position.set(p.x+Math.sin(k*5)*8-4,p.y+7+Math.sin(k*Math.PI)*3,-32+Math.cos(k*3)*5);manta.rotation.y=.5+k;fins.forEach((f,i)=>f.rotation.z=reduced?0:Math.sin(t*1.5+i*.3)*.18)}
 for(let i=0;i<gates.length;i++){const a=gates[i],d=a.s-s,pp=path(a.s),progress=T.MathUtils.clamp((70-d)/45,0,1);a.g.visible=d<100&&d>-12;a.g.position.set(pp.x,pp.y-(1-progress)*7,s-a.s);a.g.rotation.z=reduced?0:Math.sin((1-progress)*Math.PI)*(i%2?.25:-.25);a.rune.rotation.z=reduced?0:t*.3}
 for(const c of crystals){const pp=path(c.s);c.g.visible=Math.abs(c.s-s)<95;c.g.position.set(pp.x,pp.y+2.6,s-c.s)}birds.position.set(p.x+14,p.y+12,-45);birds.children.forEach((w,i)=>w.rotation.z=reduced?0:Math.sin(t*5+Math.floor(i/2))*.3*w.userData.side);
 streaks.forEach((o,i)=>{o.visible=!reduced&&speed>13;const phase=(t*speed*.55+i*7)%65;o.position.set(p.x+(i%2?1:-1)*(4.5+i*.25),p.y+.5+(i%3),phase-55);o.scale.z=1+speed*.08});
 const bg=new T.Color(s>900&&s<1370?'#a5a6cf':restored?'#c2e5eb':'#b7dfec');(scene.background as T.Color).lerp(bg,.04);if(scene.fog instanceof T.Fog)scene.fog.color.copy(scene.background as T.Color);
 }};
}
