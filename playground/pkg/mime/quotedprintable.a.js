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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �Y|��mime/quotedprintablequotedprintablebufiobytesfmtio�
$$ exports $$
pv0quotedprintable(mime/quotedprintable	NewReader rReaderioio Read p2nerr6   Reader br Reader
bufio
bufiobuf2 rd: r w err6 lastByte lastRuneSize $
ResetbJr:  
resetbJbuf2r:  fillbJ   readErrbJ  6 PeekbJn 2 6 DiscardbJndiscardederr6 ReadbJp2nerr6 ReadBytebJ c2err6 UnreadBytebJ  6 ReadRunebJ r4sizeerr6 UnreadRunebJ  6 BufferedbJ   ReadSlicebJ
delim2line2err6 ReadLinebJ line2isPrefix err6 ReadBytesbJ
delim2line2err6 ReadStringbJ
delim2line err6 WriteTobJwWriter 
Write p2nerr6  n
err6 writeBufbJw� 
 6  rerr 6 line 2 ReadrDp2nerr6  	NewWriter w� Writer 
Binary  w � i  line �2 cr   
Writew�p2nerr6 
Closew�  6 
writew�p2 6 encodew�b2 6 checkLastBytew�  6 &insertSoftLineBreakw�  6 insertCRLFw�  6 
flushw�  6  D�!AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E�	E=$pkg.Reader=$newType(0,$kindStruct,"quotedprintable.Reader","Reader","mime/quotedprintable",function(br_,rerr_,line_){this.$val=this;if(arguments.length===0){this.br=Q.nil;this.rerr=$ifaceNil;this.line=P.nil;return;}this.br=br_;this.rerr=rerr_;this.line=line_;});TT.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)}];��E.init([{prop:"br",name:"br",pkg:"mime/quotedprintable",typ:Q,tag:""},{prop:"rerr",name:"rerr",pkg:"mime/quotedprintable",typ:$error,tag:""},{prop:"line",name:"line",pkg:"mime/quotedprintable",typ:P,tag:""}]);Readermime/quotedprintable.Pmime/quotedprintable.Qmime/quotedprintable.Readermime/quotedprintable.T M�DM=$pkg.Writer=$newType(0,$kindStruct,"quotedprintable.Writer","Writer","mime/quotedprintable",function(Binary_,w_,i_,line_,cr_){this.$val=this;if(arguments.length===0){this.Binary=false;this.w=$ifaceNil;this.i=0;this.line=S.zero();this.cr=false;return;}this.Binary=Binary_;this.w=w_;this.i=i_;this.line=line_;this.cr=cr_;});��U.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"write",name:"write",pkg:"mime/quotedprintable",typ:$funcType([P],[$error],false)},{prop:"encode",name:"encode",pkg:"mime/quotedprintable",typ:$funcType([$Uint8],[$error],false)},{prop:"checkLastByte",name:"checkLastByte",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"insertSoftLineBreak",name:"insertSoftLineBreak",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"insertCRLF",name:"insertCRLF",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"flush",name:"flush",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)}];�FM.init([{prop:"Binary",name:"Binary",pkg:"",typ:$Bool,tag:""},{prop:"w",name:"w",pkg:"mime/quotedprintable",typ:D.Writer,tag:""},{prop:"i",name:"i",pkg:"mime/quotedprintable",typ:$Int,tag:""},{prop:"line",name:"line",pkg:"mime/quotedprintable",typ:S,tag:""},{prop:"cr",name:"cr",pkg:"mime/quotedprintable",typ:$Bool,tag:""}]);Writer	io.Writermime/quotedprintable.Pmime/quotedprintable.Smime/quotedprintable.Umime/quotedprintable.Writer PP=$sliceType($Uint8);P QQ=$ptrType(A.Reader);Qbufio.Reader RR=$sliceType($emptyInterface);R SS=$arrayType($Uint8,78);S TT=$ptrType(E);Tmime/quotedprintable.Reader UU=$ptrType(M);Umime/quotedprintable.Writer Jcrlf Klf L
softSuffix %    J=new P($stringToBytes("\r\n"));crlfmime/quotedprintable.Pmime/quotedprintable.crlf #    K=new P($stringToBytes("\n"));lfmime/quotedprintable.Pmime/quotedprintable.lf "    L=new P($stringToBytes("="));
softSuffixmime/quotedprintable.Pmime/quotedprintable.softSuffix mime/quotedprintable.NewReaderFgF=function(a){var $ptr,a;  Preturn new E.ptr(A.NewReader(a),$ifaceNil,P.nil);    };$pkg.NewReader=F;	NewReaderbufio.NewReaderbufio.Readermime/quotedprintable.NewReadermime/quotedprintable.Pmime/quotedprintable.Qmime/quotedprintable.Reader mime/quotedprintable.fromHexG��G=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �if(a>=48&&a<=57){  �return[a-48<<24>>>24,$ifaceNil];  �}else if(a>=65&&a<=70){  �return[(a-65<<24>>>24)+10<<24>>>24,$ifaceNil];  9}else if(a>=97&&a<=102){  Vreturn[(a-97<<24>>>24)+10<<24>>>24,$ifaceNil];    }  sb=C.Errorf("quotedprintable: invalid hex byte 0x%02x",new R([new $Uint8(a)]));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=2;case 2:return[0,b];    }return;}if($f===undefined){$f={$blk:G};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};fromHex
fmt.Errorfmime/quotedprintable.Rmime/quotedprintable.fromHex  mime/quotedprintable.readHexByteH�JH=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;    if(a.$length<2){    d=0;e=D.ErrUnexpectedEOF;b=d;c=e;return[b,c];    }  $f=0;g=0;h=f;i=g;  4k=G((0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]));$s=1;case 1:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;h=j[0];c=j[1];if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:    l=0;m=c;b=l;c=m;return[b,c];    case 3:  qo=G((1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]));$s=4;case 4:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;i=n[0];c=n[1];if(!($interfaceIsEqual(c,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:    p=0;q=c;b=p;c=q;return[b,c];    case 6:    r=((h<<4<<24>>>24)|i)>>>0;s=$ifaceNil;b=r;c=s;return[b,c];    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};readHexByteio.ErrUnexpectedEOFmime/quotedprintable.fromHex mime/quotedprintable.readHexByte *mime/quotedprintable.isQPDiscardWhitespaceI{I=function(a){var $ptr,a,b;  �b=a;  �if(b===10||b===13||b===32||b===9){  return true;    }  *return false;    };isQPDiscardWhitespace*mime/quotedprintable.isQPDiscardWhitespace #(*mime/quotedprintable.Reader).Read�pE.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  �d=this;  �case 1:if(!(a.$length>0)){$s=2;continue;}  if(d.line.$length===0){$s=3;continue;}$s=4;continue;    case 3:    if(!($interfaceIsEqual(d.rerr,$ifaceNil))){    e=b;f=d.rerr;b=e;c=f;return[b,c];    }  Vh=d.br.ReadSlice(10);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;d.line=g[0];d.rerr=g[1];  �i=B.HasSuffix(d.line,K);  �j=B.HasSuffix(d.line,J);  k=d.line;  l=B.TrimRightFunc(k,I);$s=6;case 6:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}d.line=l;  _if(B.HasSuffix(d.line,L)){$s=7;continue;}if(i){$s=8;continue;}$s=9;continue;    case 7:  �m=$subslice(k,d.line.$length);  �d.line=$subslice(d.line,0,(d.line.$length-1>>0));  �if(!B.HasPrefix(m,K)&&!B.HasPrefix(m,J)){$s=10;continue;}$s=11;continue;    case 10:  	4n=C.Errorf("quotedprintable: invalid bytes after =: %q",new R([m]));$s=12;case 12:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}d.rerr=n;    case 11:    $s=9;continue;    case 8:    if(j){  	�d.line=$append(d.line,13,10);    }else{  	�d.line=$append(d.line,10);    }    case 9:  
$s=1;continue;    case 4:  
%p=(o=d.line,(0>=o.$length?$throwRuntimeError("index out of range"):o.$array[o.$offset+0]));  
7if(p===61){$s=13;continue;}if((p===9)||(p===13)||(p===10)){$s=14;continue;}if(p<32||p>126){$s=15;continue;}$s=16;continue;  
Bcase 13:  
Tr=H($subslice(d.line,1));$s=17;case 17:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;p=q[0];c=q[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    s=b;t=c;b=s;c=t;return[b,c];    }  
�d.line=$subslice(d.line,2);    $s=16;continue;  
�case 14:  
$s=16;continue;    $s=16;continue;  case 15:    u=b;w=C.Errorf("quotedprintable: invalid unescaped byte 0x%02x in body",new R([new $Uint8(p)]));$s=18;case 18:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}v=w;b=u;c=v;$s=19;case 19:return[b,c];    case 16:  �(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=p);  �a=$subslice(a,1);  �d.line=$subslice(d.line,1);  �b=b+(1)>>0;    $s=1;continue;case 2:    x=b;y=$ifaceNil;b=x;c=y;return[b,c];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Read=function(a){return this.$val.Read(a);};Readerbytes.HasPrefixbytes.HasSuffixbytes.TrimRightFunc
fmt.Errorfmime/quotedprintable.Rmime/quotedprintable.Readermime/quotedprintable.crlf*mime/quotedprintable.isQPDiscardWhitespacemime/quotedprintable.lf mime/quotedprintable.readHexBytemime/quotedprintable.softSuffix mime/quotedprintable.NewWriterNaN=function(a){var $ptr,a;  return new M.ptr(false,a,0,S.zero(),false);    };$pkg.NewWriter=N;	NewWritermime/quotedprintable.NewWritermime/quotedprintable.Smime/quotedprintable.Writer $(*mime/quotedprintable.Writer).Write�'M.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  d=this;  9e=a;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;h=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  Qif(h>=33&&h<=126&&!((h===61))){$s=3;continue;}if(O(h)||!d.Binary&&((h===10)||(h===13))){$s=4;continue;}$s=5;continue;  �case 3:  �f++;$s=1;continue;    $s=5;continue;  �case 4:  �f++;$s=1;continue;    case 5:  	if(g>b){$s=6;continue;}$s=7;continue;    case 6:  i=d.write($subslice(a,b,g));$s=8;case 8:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;if(!($interfaceIsEqual(j,$ifaceNil))){$s=9;continue;}$s=10;continue;    case 9:    k=b;l=j;b=k;c=l;return[b,c];    case 10:  Yb=g;    case 7:  im=d.encode(h);$s=11;case 11:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;if(!($interfaceIsEqual(n,$ifaceNil))){$s=12;continue;}$s=13;continue;    case 12:    o=b;p=n;b=o;c=p;return[b,c];    case 13:  �b=b+(1)>>0;    f++;$s=1;continue;case 2:    if(b===a.$length){    q=b;r=$ifaceNil;b=q;c=r;return[b,c];    }  �s=d.write($subslice(a,b));$s=14;case 14:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}t=s;if(!($interfaceIsEqual(t,$ifaceNil))){$s=15;continue;}$s=16;continue;    case 15:    u=b;v=t;b=u;c=v;return[b,c];    case 16:    w=a.$length;x=$ifaceNil;b=w;c=x;return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Write=function(a){return this.$val.Write(a);};Writermime/quotedprintable.Writermime/quotedprintable.encode~!mime/quotedprintable.isWhitespacemime/quotedprintable.write~ $(*mime/quotedprintable.Writer).Close��M.ptr.prototype.Close=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �b=a.checkLastByte();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return c;    case 3:  d=a.flush();$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=5;case 5:return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Close=function(){return this.$val.Close();};Writermime/quotedprintable.Writer#mime/quotedprintable.checkLastByte~mime/quotedprintable.flush~ $(*mime/quotedprintable.Writer).write�SM.ptr.prototype.write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  kb=this;  �c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �if((e===10)||(e===13)){$s=3;continue;}$s=4;continue;    case 3:  if(b.cr&&(e===10)){$s=5;continue;}$s=6;continue;    case 5:  (b.cr=false;  9d++;$s=1;continue;    case 6:    if(e===13){  ^b.cr=true;    }  vf=b.checkLastByte();$s=7;case 7:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;if(!($interfaceIsEqual(g,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  �return g;    case 9:  �h=b.insertCRLF();$s=10;case 10:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;if(!($interfaceIsEqual(i,$ifaceNil))){$s=11;continue;}$s=12;continue;    case 11:  �return i;    case 12:  �d++;$s=1;continue;    case 4:  if(b.i===75){$s=13;continue;}$s=14;continue;    case 13:  !j=b.insertSoftLineBreak();$s=15;case 15:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;if(!($interfaceIsEqual(k,$ifaceNil))){$s=16;continue;}$s=17;continue;    case 16:  Rreturn k;    case 17:    case 14:  i(l=b.line,m=b.i,((m<0||m>=l.length)?$throwRuntimeError("index out of range"):l[m]=e));  {b.i=b.i+(1)>>0;  �b.cr=false;    d++;$s=1;continue;case 2:  �return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.write=function(a){return this.$val.write(a);};Writerwrite~mime/quotedprintable.Writer#mime/quotedprintable.checkLastByte~ mime/quotedprintable.insertCRLF~)mime/quotedprintable.insertSoftLineBreak~ %(*mime/quotedprintable.Writer).encode��M.ptr.prototype.encode=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �if((75-b.i>>0)<3){$s=1;continue;}$s=2;continue;    case 1:  �c=b.insertSoftLineBreak();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;if(!($interfaceIsEqual(d,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  return d;    case 5:    case 2:  /(e=b.line,f=b.i,((f<0||f>=e.length)?$throwRuntimeError("index out of range"):e[f]=61));  B(g=b.line,h=b.i+1>>0,((h<0||h>=g.length)?$throwRuntimeError("index out of range"):g[h]="0123456789ABCDEF".charCodeAt((a>>>4<<24>>>24))));  b(i=b.line,j=b.i+2>>0,((j<0||j>=i.length)?$throwRuntimeError("index out of range"):i[j]="0123456789ABCDEF".charCodeAt(((a&15)>>>0))));  �b.i=b.i+(3)>>0;  �return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.encode};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.encode=function(a){return this.$val.encode(a);};Writerencode~mime/quotedprintable.Writer)mime/quotedprintable.insertSoftLineBreak~ ,(*mime/quotedprintable.Writer).checkLastByte��M.ptr.prototype.checkLastByte=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  a=this;    if(a.i===0){  Greturn $ifaceNil;    }  Wd=(b=a.line,c=a.i-1>>0,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]));  kif(O(d)){$s=1;continue;}$s=2;continue;    case 1:  �a.i=a.i-(1)>>0;  �e=a.encode(d);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!($interfaceIsEqual(f,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  �return f;    case 5:    case 2:  �return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.checkLastByte};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.checkLastByte=function(){return this.$val.checkLastByte();};WritercheckLastByte~mime/quotedprintable.Writermime/quotedprintable.encode~!mime/quotedprintable.isWhitespace 2(*mime/quotedprintable.Writer).insertSoftLineBreak��M.ptr.prototype.insertSoftLineBreak=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  (b=a.line,c=a.i,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=61));  a.i=a.i+(1)>>0;  d=a.insertCRLF();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=2;case 2:return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.insertSoftLineBreak};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.insertSoftLineBreak=function(){return this.$val.insertSoftLineBreak();};WriterinsertSoftLineBreak~mime/quotedprintable.Writer mime/quotedprintable.insertCRLF~ )(*mime/quotedprintable.Writer).insertCRLF�(M.ptr.prototype.insertCRLF=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  =a=this;  ^(b=a.line,c=a.i,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=13));  r(d=a.line,e=a.i+1>>0,((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]=10));  �a.i=a.i+(2)>>0;  �f=a.flush();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=2;case 2:return f;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.insertCRLF};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.insertCRLF=function(){return this.$val.insertCRLF();};WriterinsertCRLF~mime/quotedprintable.Writermime/quotedprintable.flush~ $(*mime/quotedprintable.Writer).flush��M.ptr.prototype.flush=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �c=a.w.Write($subslice(new P(a.line),0,a.i));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];if(!($interfaceIsEqual(d,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �return d;    case 3:  a.i=0;  return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.flush=function(){return this.$val.flush();};Writerflush~mime/quotedprintable.Pmime/quotedprintable.Writer !mime/quotedprintable.isWhitespaceO=O=function(a){var $ptr,a;  Greturn(a===32)||(a===9);    };isWhitespace!mime/quotedprintable.isWhitespace �^{"Base":6247,"Files":[{"Name":"/usr/local/go/src/mime/quotedprintable/reader.go","Base":1,"Size":3018,"Lines":[0,55,109,159,160,240,253,277,278,287,296,305,312,318,320,321,362,383,403,435,484,486,487,552,590,607,633,636,638,639,676,686,714,736,764,791,823,851,878,881,950,952,953,1002,1019,1051,1054,1071,1113,1129,1132,1174,1190,1193,1217,1219,1220,1262,1274,1303,1317,1320,1334,1336,1337,1343,1372,1399,1425,1427,1428,1504,1557,1587,1660,1735,1784,1802,1826,1848,1869,1874,1915,1916,1968,2008,2050,2073,2139,2183,2228,2264,2350,2436,2442,2463,2478,2519,2532,2567,2573,2578,2590,2594,2611,2612,2623,2640,2676,2695,2713,2718,2778,2822,2831,2858,2943,2947,2958,2970,2992,2998,3001,3016],"Infos":null},{"Name":"/usr/local/go/src/mime/quotedprintable/writer.go","Base":3020,"Size":3226,"Lines":[0,55,109,159,160,184,185,197,198,220,221,294,315,393,424,437,438,454,464,479,490,492,493,545,583,605,607,608,680,757,822,876,899,910,948,989,1001,1066,1078,1082,1083,1096,1139,1157,1162,1171,1175,1176,1214,1231,1235,1241,1244,1245,1263,1279,1282,1283,1323,1339,1342,1343,1363,1365,1366,1440,1499,1532,1575,1588,1591,1592,1610,1612,1613,1689,1730,1753,1783,1854,1880,1897,1910,1915,1916,1934,1950,1955,1956,2001,2016,2021,2063,2078,2083,2095,2099,2100,2127,2178,2193,2198,2202,2203,2221,2229,2244,2247,2248,2260,2262,2263,2303,2330,2380,2394,2398,2401,2402,2421,2453,2487,2497,2498,2510,2512,2513,2549,2550,2625,2666,2681,2694,2697,2698,2718,2740,2748,2786,2800,2804,2807,2808,2820,2822,2823,2870,2889,2896,2897,2920,2922,2923,2961,2981,3003,3013,3014,3032,3034,3035,3068,3120,3133,3136,3137,3146,3158,3160,3161,3194,3224],"Infos":null}]}
 