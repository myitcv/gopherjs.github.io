����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �*���image/internal/imageutil	imageutilimage�F
$$ exports $$
pv0imageutil0image/internal/imageutil	DrawYCbCr dstRGBA
image
imagePix Stride RectRectangleMin
PointX Y StringpF    AddpFqF F SubpFqF F MulpFk F DivpFk F InpFrB   ModpFrB F EqpFqF    MaxF "StringrB    DxrB   DyrB   SizerB  F AddrBpF B SubrBpF B 
InsetrBn B IntersectrBsB B 
UnionrBsB B 
EmptyrB    EqrBsB   OverlapsrBsB   InrBsB   
CanonrB  B AtrBxy 
Color
colorimage/color RGBA  rgba   BoundsrB  B ColorModelrB  
Model Convert cx x    ColorModelp<  � Boundsp<  B Atp<xy x RGBAAtp<xy RGBAR G B A RGBAc� rgba  PixOffsetp<xy  Setp<xycx  SetRGBAp<xyc�  SubImagep<rB 
Image At xy x Bounds   B ColorModel   �   Opaquep<    rBsrc
YCbCrY Cb� Cr� YStride CStride SubsampleRatio&YCbCrSubsampleRatioStrings�     RectB ColorModelp�  � Boundsp�  B Atp�xy x YCbCrAtp�xy 
YCbCrY Cb Cr RGBAc�       YOffsetp�xy  COffsetp�xy  SubImagep�rB � Opaquep�    spFok  AA=$packages["image"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} "image/internal/imageutil.DrawYCbCrB��B=function(a,b,c,d){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,e,ea,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=false;  <d=$clone(d,A.Point);  b=$clone(b,A.Rectangle);  Mf=$imul(((b.Min.X-a.Rect.Min.X>>0)),4);  sg=$imul(((b.Max.X-a.Rect.Min.X>>0)),4);  �h=b.Min.Y-a.Rect.Min.Y>>0;  �i=b.Max.Y-a.Rect.Min.Y>>0;    j=c.SubsampleRatio;    if(j===(0)){   k=h;l=d.Y;m=k;n=l;while(true){if(!(!((m===i)))){break;}  So=$subslice(a.Pix,($imul(m,a.Stride)));  up=($imul(((n-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �q=($imul(((n-c.Rect.Min.Y>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;   r=f;while(true){if(!(!((r===g)))){break;}  �t=$imul(((s=c.Y,((p<0||p>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+p]))>>0),65792);  �v=((u=c.Cb,((q<0||q>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+q]))>>0)-128>>0;  �x=((w=c.Cr,((q<0||q>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+q]))>>0)-128>>0;  	
y=((t+($imul(91881,x))>>0))>>16>>0;  	+z=(((t-($imul(22554,v))>>0)-($imul(46802,x))>>0))>>16>>0;  	Xaa=((t+($imul(116130,v))>>0))>>16>>0;    if(y<0){  	�y=0;    }else if(y>255){  	�y=255;    }    if(z<0){  	�z=0;    }else if(z>255){  	�z=255;    }    if(aa<0){  
aa=0;    }else if(aa>255){  
7aa=255;    }  
J(ab=r+0>>0,((ab<0||ab>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+ab]=(y<<24>>>24)));  
c(ac=r+1>>0,((ac<0||ac>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+ac]=(z<<24>>>24)));  
|(ad=r+2>>0,((ad<0||ad>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+ad]=(aa<<24>>>24)));  
�(ae=r+3>>0,((ae<0||ae>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+ae]=255));  af=r+4>>0;ag=p+1>>0;ah=q+1>>0;r=af;p=ag;q=ah;}  <ai=m+1>>0;aj=n+1>>0;m=ai;n=aj;}    }else if(j===(1)){  
�ak=h;al=d.Y;am=ak;an=al;while(true){if(!(!((am===i)))){break;}  ao=$subslice(a.Pix,($imul(am,a.Stride)));  .ap=($imul(((an-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  rar=($imul(((an-c.Rect.Min.Y>>0)),c.CStride))-(aq=c.Rect.Min.X/2,(aq===aq&&aq!==1/0&&aq!==-1/0)?aq>>0:$throwRuntimeError("integer divide by zero"))>>0;  �as=f;at=d.X;au=as;av=at;while(true){if(!(!((au===g)))){break;}  �ax=ar+(aw=av/2,(aw===aw&&aw!==1/0&&aw!==-1/0)?aw>>0:$throwRuntimeError("integer divide by zero"))>>0;  Yaz=$imul(((ay=c.Y,((ap<0||ap>=ay.$length)?$throwRuntimeError("index out of range"):ay.$array[ay.$offset+ap]))>>0),65792);  �bb=((ba=c.Cb,((ax<0||ax>=ba.$length)?$throwRuntimeError("index out of range"):ba.$array[ba.$offset+ax]))>>0)-128>>0;  �bd=((bc=c.Cr,((ax<0||ax>=bc.$length)?$throwRuntimeError("index out of range"):bc.$array[bc.$offset+ax]))>>0)-128>>0;  �be=((az+($imul(91881,bd))>>0))>>16>>0;  bf=(((az-($imul(22554,bb))>>0)-($imul(46802,bd))>>0))>>16>>0;  0bg=((az+($imul(116130,bb))>>0))>>16>>0;    if(be<0){  bbe=0;    }else if(be>255){  �be=255;    }    if(bf<0){  �bf=0;    }else if(bf>255){  �bf=255;    }    if(bg<0){  �bg=0;    }else if(bg>255){  bg=255;    }  "(bh=au+0>>0,((bh<0||bh>=ao.$length)?$throwRuntimeError("index out of range"):ao.$array[ao.$offset+bh]=(be<<24>>>24)));  ;(bi=au+1>>0,((bi<0||bi>=ao.$length)?$throwRuntimeError("index out of range"):ao.$array[ao.$offset+bi]=(bf<<24>>>24)));  T(bj=au+2>>0,((bj<0||bj>=ao.$length)?$throwRuntimeError("index out of range"):ao.$array[ao.$offset+bj]=(bg<<24>>>24)));  m(bk=au+3>>0,((bk<0||bk>=ao.$length)?$throwRuntimeError("index out of range"):ao.$array[ao.$offset+bk]=255));  �bl=au+4>>0;bm=av+1>>0;bn=ap+1>>0;au=bl;av=bm;ap=bn;}  
�bo=am+1>>0;bp=an+1>>0;am=bo;an=bp;}    }else if(j===(2)){  �bq=h;br=d.Y;bs=bq;bt=br;while(true){if(!(!((bs===i)))){break;}  �bu=$subslice(a.Pix,($imul(bs,a.Stride)));  bv=($imul(((bt-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  Jbz=($imul((((bw=bt/2,(bw===bw&&bw!==1/0&&bw!==-1/0)?bw>>0:$throwRuntimeError("integer divide by zero"))-(bx=c.Rect.Min.Y/2,(bx===bx&&bx!==1/0&&bx!==-1/0)?bx>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))-(by=c.Rect.Min.X/2,(by===by&&by!==1/0&&by!==-1/0)?by>>0:$throwRuntimeError("integer divide by zero"))>>0;  �ca=f;cb=d.X;cc=ca;cd=cb;while(true){if(!(!((cc===g)))){break;}  �cf=bz+(ce=cd/2,(ce===ce&&ce!==1/0&&ce!==-1/0)?ce>>0:$throwRuntimeError("integer divide by zero"))>>0;  5ch=$imul(((cg=c.Y,((bv<0||bv>=cg.$length)?$throwRuntimeError("index out of range"):cg.$array[cg.$offset+bv]))>>0),65792);  xcj=((ci=c.Cb,((cf<0||cf>=ci.$length)?$throwRuntimeError("index out of range"):ci.$array[ci.$offset+cf]))>>0)-128>>0;  �cl=((ck=c.Cr,((cf<0||cf>=ck.$length)?$throwRuntimeError("index out of range"):ck.$array[ck.$offset+cf]))>>0)-128>>0;  �cm=((ch+($imul(91881,cl))>>0))>>16>>0;  �cn=(((ch-($imul(22554,cj))>>0)-($imul(46802,cl))>>0))>>16>>0;  co=((ch+($imul(116130,cj))>>0))>>16>>0;    if(cm<0){  >cm=0;    }else if(cm>255){  acm=255;    }    if(cn<0){  �cn=0;    }else if(cn>255){  �cn=255;    }    if(co<0){  �co=0;    }else if(co>255){  �co=255;    }  �(cp=cc+0>>0,((cp<0||cp>=bu.$length)?$throwRuntimeError("index out of range"):bu.$array[bu.$offset+cp]=(cm<<24>>>24)));  (cq=cc+1>>0,((cq<0||cq>=bu.$length)?$throwRuntimeError("index out of range"):bu.$array[bu.$offset+cq]=(cn<<24>>>24)));  0(cr=cc+2>>0,((cr<0||cr>=bu.$length)?$throwRuntimeError("index out of range"):bu.$array[bu.$offset+cr]=(co<<24>>>24)));  I(cs=cc+3>>0,((cs<0||cs>=bu.$length)?$throwRuntimeError("index out of range"):bu.$array[bu.$offset+cs]=255));  �ct=cc+4>>0;cu=cd+1>>0;cv=bv+1>>0;cc=ct;cd=cu;bv=cv;}  �cw=bs+1>>0;cx=bt+1>>0;bs=cw;bt=cx;}    }else if(j===(3)){  �cy=h;cz=d.Y;da=cy;db=cz;while(true){if(!(!((da===i)))){break;}  �dc=$subslice(a.Pix,($imul(da,a.Stride)));  �dd=($imul(((db-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  &dg=($imul((((de=db/2,(de===de&&de!==1/0&&de!==-1/0)?de>>0:$throwRuntimeError("integer divide by zero"))-(df=c.Rect.Min.Y/2,(df===df&&df!==1/0&&df!==-1/0)?df>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;  qdh=f;while(true){if(!(!((dh===g)))){break;}  �dj=$imul(((di=c.Y,((dd<0||dd>=di.$length)?$throwRuntimeError("index out of range"):di.$array[di.$offset+dd]))>>0),65792);  5dl=((dk=c.Cb,((dg<0||dg>=dk.$length)?$throwRuntimeError("index out of range"):dk.$array[dk.$offset+dg]))>>0)-128>>0;  Xdn=((dm=c.Cr,((dg<0||dg>=dm.$length)?$throwRuntimeError("index out of range"):dm.$array[dm.$offset+dg]))>>0)-128>>0;  {dp=((dj+($imul(91881,dn))>>0))>>16>>0;  �dq=(((dj-($imul(22554,dl))>>0)-($imul(46802,dn))>>0))>>16>>0;  �dr=((dj+($imul(116130,dl))>>0))>>16>>0;    if(dp<0){  �dp=0;    }else if(dp>255){  dp=255;    }    if(dq<0){  @dq=0;    }else if(dq>255){  cdq=255;    }    if(dr<0){  �dr=0;    }else if(dr>255){  �dr=255;    }  �(ds=dh+0>>0,((ds<0||ds>=dc.$length)?$throwRuntimeError("index out of range"):dc.$array[dc.$offset+ds]=(dp<<24>>>24)));  �(dt=dh+1>>0,((dt<0||dt>=dc.$length)?$throwRuntimeError("index out of range"):dc.$array[dc.$offset+dt]=(dq<<24>>>24)));  �(du=dh+2>>0,((du<0||du>=dc.$length)?$throwRuntimeError("index out of range"):dc.$array[dc.$offset+du]=(dr<<24>>>24)));  (dv=dh+3>>0,((dv<0||dv>=dc.$length)?$throwRuntimeError("index out of range"):dc.$array[dc.$offset+dv]=255));  �dw=dh+4>>0;dx=dd+1>>0;dy=dg+1>>0;dh=dw;dd=dx;dg=dy;}  �dz=da+1>>0;ea=db+1>>0;da=dz;db=ea;}    }else{    e=false;return e;    }    e=true;return e;    };$pkg.DrawYCbCr=B;	DrawYCbCrimage.Pointimage.Rectangle"image/internal/imageutil.DrawYCbCr �T{"Base":5708,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UeTKywUWG7/goroot/src/image/internal/imageutil/imageutil.go","Base":1,"Size":276,"Lines":[0,55,109,159,160,188,189,258],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UeTKywUWG7/goroot/src/image/internal/imageutil/impl.go","Base":278,"Size":5429,"Lines":[0,46,47,65,66,75,84,86,87,164,236,300,303,375,448,481,578,654,731,791,795,869,942,1012,1089,1097,1101,1200,1204,1278,1333,1334,1372,1410,1442,1474,1503,1504,1540,1594,1628,1695,1696,1763,1818,1819,1895,1962,1997,2032,2065,2110,2144,2159,2170,2194,2207,2213,2228,2239,2263,2276,2282,2297,2308,2332,2345,2351,2352,2377,2402,2427,2447,2452,2456,2457,2493,2547,2581,2648,2649,2713,2778,2802,2803,2879,2946,2981,3016,3049,3094,3128,3143,3154,3178,3191,3197,3212,3223,3247,3260,3266,3281,3292,3316,3329,3335,3336,3361,3386,3411,3431,3436,3440,3441,3477,3531,3565,3632,3633,3701,3766,3790,3791,3867,3934,3969,4004,4037,4082,4116,4131,4142,4166,4179,4185,4200,4211,4235,4248,4254,4269,4280,4304,4317,4323,4324,4349,4374,4399,4419,4424,4428,4429,4465,4519,4553,4620,4621,4692,4747,4748,4824,4891,4926,4961,4994,5039,5073,5088,5099,5123,5136,5142,5157,5168,5192,5205,5211,5226,5237,5261,5274,5280,5281,5306,5331,5356,5376,5381,5385,5386,5396,5411,5414,5427],"Infos":null}]}
 