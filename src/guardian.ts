import * as T from 'three';
/** Original LUMO guardian, assembled from smooth reusable surfaces with articulated pivots. */
export function createGuardian(){
 const root=new T.Group(),body=new T.Group();root.add(body);const materials=new Map<string,T.MeshStandardMaterial>();
 const ellipsoid=new T.SphereGeometry(1,16,10),capsule=new T.CapsuleGeometry(.15,.35,4,8),box=new T.BoxGeometry(1,1,1);
 function part(p:T.Object3D,c:string,x:number,y:number,z:number,sx:number,sy=sx,sz=sx,g:T.BufferGeometry=ellipsoid){let mat=materials.get(c);if(!mat){mat=new T.MeshStandardMaterial({color:c,roughness:.7});materials.set(c,mat)}const m=new T.Mesh(g,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);p.add(m);return m}
 part(body,'#334f7e',0,.94,0,.43,.57,.31);part(body,'#ebcda2',0,1.28,-.08,.24,.16,.22);const head=new T.Group();head.position.y=1.66;body.add(head);part(head,'#e8a04d',0,.12,0,.56,.51,.43);part(head,'#ffe1ac',0,-.01,-.31,.4,.3,.2);
 for(const side of [-1,1]){const ear=part(head,'#df9140',side*.44,.51,0,.2,.5,.14);ear.rotation.z=-side*.42;const inner=part(head,'#edc0a5',side*.45,.55,-.105,.095,.3,.03);inner.rotation.z=-side*.42;part(head,'#fff8e5',side*.19,.13,-.421,.12,.15,.045);part(head,'#253449',side*.19,.13,-.465,.065,.1,.02);part(head,'#fff8e5',side*.17,.16,-.482,.023);part(head,'#d58943',side*.41,-.04,-.23,.18,.15,.16)}part(head,'#3a3a47',0,-.02,-.51,.08,.065,.05);
 const arms=[-1,1].map(side=>{const pivot=new T.Group();pivot.position.set(side*.46,1.14,0);body.add(pivot);part(pivot,'#466791',0,-.16,0,1,1,1,capsule);part(pivot,'#eab272',0,-.42,0,.17,.18,.17);return pivot});
 part(arms[1],'#bb935c',.02,-.38,-.03,.25,.26,.25);part(arms[1],'#46607a',.02,-.38,-.21,.2,.2,.045);part(arms[1],'#93edff',.02,-.38,-.26,.12,.13,.025);
 const legs=[-1,1].map(side=>{const pivot=new T.Group();pivot.position.set(side*.21,.64,0);body.add(pivot);part(pivot,'#263e61',0,-.16,0,.16,.28,.17);part(pivot,'#b47f4d',0,-.49,-.1,.22,.15,.3);part(pivot,'#ead4a7',0,-.57,-.11,.23,.04,.3);return pivot});
 part(body,'#ef7b5c',0,1.31,0,.5,.11,.35);const scarf=part(body,'#df6650',.19,1.04,.37,.22,.53,.07,box);scarf.rotation.x=-.3;
 const tailPivot=new T.Group();tailPivot.position.set(0,.67,.28);body.add(tailPivot);const tail=part(tailPivot,'#e8a04d',.13,.02,.35,.23,.24,.55);tail.rotation.x=.25;part(tailPivot,'#fff0d2',.13,.12,.77,.16,.18,.24);part(body,'#1d3553',0,1,.31,.32,.37,.13,box);part(body,'#dfb466',0,1,.45,.12,.12,.025,box);
 return {root,body,head,arms,legs,scarf,tail:tailPivot};
}
