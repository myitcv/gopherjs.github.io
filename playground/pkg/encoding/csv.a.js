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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �sl��encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8��version 4

 csv  ErrBareQuote & ErrFieldCount & ErrQuote & ErrTrailingComma &	 NewReader  Readerio  Read"p n &err r     	Comma|S  Comment|S  FieldsPerRecord  LazyQuotes   TrimLeadingSpace   ReuseRecord   TrailingComma     	bufio* buf"  rd<    w  &  lastByte  lastRuneSize & Buffered@b     Discard@8  discarded &   Peek@8  " &   @8 "  &   ReadByte@8  " &   ReadBytes@8 "	delim " &   ReadLine@8  "line  isPrefix &   ReadRune@8  |S size &   ReadSlice@8 "D "H &   ReadString@8 "D   &   	Reset@8 <    Size@     UnreadByte@8  &   UnreadRune@8  &   WriteTo@8  Writer  	Write"  & 0 
 &   fill@8     readErr@8  &   	reset@8 ", <    writeBuf@8 B0 
 &    numLine   rawBuffer "  recordBuffer "  fieldIndexes   lastRecord    >    record  &    ReadAll>    records  &    readLine >   " &   readRecord >   dst    &   	 NewWriter B0   ^  |S  UseCRLF   0  ^ &  ,"    wrB  AvailableF8     6F8     	FlushF8  &   ReadFromF8 < 
 &   TF8 B0    VF8     `F8 " nn &   WriteByteF8 "c &   WriteRuneF8 |S N &   WriteStringF8  s  &   
 	ErrorD0   &   �D0      `D0   t  &   WriteAllD0   x  &   fieldNeedsQuotes D0   	field       ParseError  StartLine  Line  Column  Err&  �He      >D.AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["strings"];a    $r=H.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["unicode"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["unicode/utf8"];a    $r=G.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I�8I=$pkg.ParseError=$newType(0,$kindStruct,"csv.ParseError",true,"encoding/csv",true,function(StartLine_,Line_,Column_,Err_){this.$val=this;if(arguments.length===0){this.StartLine=0;this.Line=0;this.Column=0;this.Err=$ifaceNil;return;}this.StartLine=StartLine_;this.Line=Line_;this.Column=Column_;this.Err=Err_;});QY.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];�;I.init("",[{prop:"StartLine",name:"StartLine",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Line",name:"Line",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Column",name:"Column",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"Err",name:"Err",anonymous:false,exported:true,typ:$error,tag:""}]);
ParseErrorencoding/csv.ParseErrorencoding/csv.Y L��L=$pkg.Reader=$newType(0,$kindStruct,"csv.Reader",true,"encoding/csv",true,function(Comma_,Comment_,FieldsPerRecord_,LazyQuotes_,TrimLeadingSpace_,ReuseRecord_,TrailingComma_,r_,numLine_,rawBuffer_,recordBuffer_,fieldIndexes_,lastRecord_){this.$val=this;if(arguments.length===0){this.Comma=0;this.Comment=0;this.FieldsPerRecord=0;this.LazyQuotes=false;this.TrimLeadingSpace=false;this.ReuseRecord=false;this.TrailingComma=false;this.r=S.nil;this.numLine=0;this.rawBuffer=T.nil;this.recordBuffer=T.nil;this.fieldIndexes=U.nil;this.lastRecord=V.nil;return;}this.Comma=Comma_;this.Comment=Comment_;this.FieldsPerRecord=FieldsPerRecord_;this.LazyQuotes=LazyQuotes_;this.TrimLeadingSpace=TrimLeadingSpace_;this.ReuseRecord=ReuseRecord_;this.TrailingComma=TrailingComma_;this.r=r_;this.numLine=numLine_;this.rawBuffer=rawBuffer_;this.recordBuffer=recordBuffer_;this.fieldIndexes=fieldIndexes_;this.lastRecord=lastRecord_;});�OZ.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([],[V,$error],false)},{prop:"ReadAll",name:"ReadAll",pkg:"",typ:$funcType([],[W,$error],false)},{prop:"readLine",name:"readLine",pkg:"encoding/csv",typ:$funcType([],[T,$error],false)},{prop:"readRecord",name:"readRecord",pkg:"encoding/csv",typ:$funcType([V],[V,$error],false)}];�XL.init("encoding/csv",[{prop:"Comma",name:"Comma",anonymous:false,exported:true,typ:$Int32,tag:""},{prop:"Comment",name:"Comment",anonymous:false,exported:true,typ:$Int32,tag:""},{prop:"FieldsPerRecord",name:"FieldsPerRecord",anonymous:false,exported:true,typ:$Int,tag:""},{prop:"LazyQuotes",name:"LazyQuotes",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"TrimLeadingSpace",name:"TrimLeadingSpace",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"ReuseRecord",name:"ReuseRecord",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"TrailingComma",name:"TrailingComma",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"r",name:"r",anonymous:false,exported:false,typ:S,tag:""},{prop:"numLine",name:"numLine",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"rawBuffer",name:"rawBuffer",anonymous:false,exported:false,typ:T,tag:""},{prop:"recordBuffer",name:"recordBuffer",anonymous:false,exported:false,typ:T,tag:""},{prop:"fieldIndexes",name:"fieldIndexes",anonymous:false,exported:false,typ:U,tag:""},{prop:"lastRecord",name:"lastRecord",anonymous:false,exported:false,typ:V,tag:""}]);Readerencoding/csv.Readerencoding/csv.Sencoding/csv.Tencoding/csv.Uencoding/csv.Vencoding/csv.Wencoding/csv.Z P��P=$pkg.Writer=$newType(0,$kindStruct,"csv.Writer",true,"encoding/csv",true,function(Comma_,UseCRLF_,w_){this.$val=this;if(arguments.length===0){this.Comma=0;this.UseCRLF=false;this.w=X.nil;return;}this.Comma=Comma_;this.UseCRLF=UseCRLF_;this.w=w_;});��AA.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([V],[$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteAll",name:"WriteAll",pkg:"",typ:$funcType([W],[$error],false)},{prop:"fieldNeedsQuotes",name:"fieldNeedsQuotes",pkg:"encoding/csv",typ:$funcType([$String],[$Bool],false)}];��P.init("encoding/csv",[{prop:"Comma",name:"Comma",anonymous:false,exported:true,typ:$Int32,tag:""},{prop:"UseCRLF",name:"UseCRLF",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"w",name:"w",anonymous:false,exported:false,typ:X,tag:""}]);Writerencoding/csv.AAencoding/csv.Vencoding/csv.Wencoding/csv.Writerencoding/csv.X RR=$sliceType($emptyInterface);R SS=$ptrType(A.Reader);Sbufio.Reader TT=$sliceType($Uint8);T UU=$sliceType($Int);U VV=$sliceType($String);V WW=$sliceType(V);Wencoding/csv.V XX=$ptrType(A.Writer);Xbufio.Writer YY=$ptrType(I);Yencoding/csv.ParseError ZZ=$ptrType(L);Zencoding/csv.Reader AAAA=$ptrType(P);AAencoding/csv.Writer ErrTrailingComma ErrBareQuote ErrQuote ErrFieldCount JerrInvalidDelim C    $pkg.ErrTrailingComma=C.New("extra delimiter at end of line");encoding/csv.ErrTrailingComma
errors.New <    $pkg.ErrBareQuote=C.New("bare \" in non-quoted-field");encoding/csv.ErrBareQuote
errors.New E    $pkg.ErrQuote=C.New("extraneous or missing \" in quoted-field");encoding/csv.ErrQuote
errors.New 8    $pkg.ErrFieldCount=C.New("wrong number of fields");encoding/csv.ErrFieldCount
errors.New 8    J=C.New("csv: invalid field or comment delimiter");encoding/csv.errInvalidDelim
errors.New  (*encoding/csv.ParseError).Error��I.ptr.prototype.Error=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �if($interfaceIsEqual(a.Err,$pkg.ErrFieldCount)){$s=1;continue;}$s=2;continue;    case 1:  �b=D.Sprintf("record on line %d: %v",new R([new $Int(a.Line),a.Err]));$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    case 2:  if(!((a.StartLine===a.Line))){$s=4;continue;}$s=5;continue;    case 4:  c=D.Sprintf("record on line %d; parse error on line %d, column %d: %v",new R([new $Int(a.StartLine),new $Int(a.Line),new $Int(a.Column),a.Err]));$s=6;case 6:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    case 5:  �d=D.Sprintf("parse error on line %d, column %d: %v",new R([new $Int(a.Line),new $Int(a.Column),a.Err]));$s=7;case 7:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.Error};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Error=function(){return this.$val.Error();};
ParseErrorencoding/csv.ErrFieldCountencoding/csv.ParseErrorencoding/csv.Rfmt.Sprintf encoding/csv.validDelimKkK=function(a){var a;  
�return!((a===0))&&!((a===13))&&!((a===10))&&G.ValidRune(a)&&!((a===65533));    };
validDelimencoding/csv.validDelimunicode/utf8.ValidRune encoding/csv.NewReaderM��M=function(a){var a;  �return new L.ptr(44,0,0,false,false,false,false,A.NewReader(a),0,T.nil,T.nil,U.nil,V.nil);    };$pkg.NewReader=M;	NewReaderbufio.NewReaderbufio.Readerencoding/csv.NewReaderencoding/csv.Readerencoding/csv.Sencoding/csv.Tencoding/csv.Uencoding/csv.V (*encoding/csv.Reader).Read��L.ptr.prototype.Read=function(){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=V.nil;b=$ifaceNil;c=this;  �if(c.ReuseRecord){$s=1;continue;}$s=2;continue;    case 1:  �e=c.readRecord(c.lastRecord);$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];b=d[1];  c.lastRecord=a;    $s=3;continue;case 2:  *g=c.readRecord(V.nil);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;a=f[0];b=f[1];    case 3:    h=a;i=b;a=h;b=i;$s=-1;return[a,b];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Read=function(){return this.$val.Read();};Readerencoding/csv.Readerencoding/csv.Vencoding/csv.readRecord~ (*encoding/csv.Reader).ReadAll��L.ptr.prototype.ReadAll=function(){var a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=W.nil;b=$ifaceNil;c=this;  �case 1:  �e=c.readRecord(V.nil);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];    if($interfaceIsEqual(g,E.EOF)){    h=a;i=$ifaceNil;a=h;b=i;$s=-1;return[a,b];    }    if(!($interfaceIsEqual(g,$ifaceNil))){    j=W.nil;k=g;a=j;b=k;$s=-1;return[a,b];    }  (a=$append(a,f);    $s=1;continue;case 2:    $s=-1;return[a,b];}return;}if($f===undefined){$f={$blk:L.ptr.prototype.ReadAll};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.ReadAll=function(){return this.$val.ReadAll();};Readerencoding/csv.Readerencoding/csv.Vencoding/csv.Wencoding/csv.readRecord~io.EOF (*encoding/csv.Reader).readLine�L.ptr.prototype.readLine=function(){var a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  vc=a.r.ReadSlice(10);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];  �if($interfaceIsEqual(e,A.ErrBufferFull)){$s=2;continue;}$s=3;continue;    case 2:  �a.rawBuffer=$appendSlice($subslice(a.rawBuffer,0,0),d);  �case 4:if(!($interfaceIsEqual(e,A.ErrBufferFull))){$s=5;continue;}  g=a.r.ReadSlice(10);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;d=f[0];e=f[1];  2a.rawBuffer=$appendSlice(a.rawBuffer,d);    $s=4;continue;case 5:  cd=a.rawBuffer;    case 3:    if(d.$length>0&&$interfaceIsEqual(e,E.EOF)){  �e=$ifaceNil;    if((h=d.$length-1>>0,((h<0||h>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+h]))===13){  d=$subslice(d,0,(d.$length-1>>0));    }    }  /a.numLine=a.numLine+(1)>>0;  li=d.$length;    if(i>=2&&((j=i-2>>0,((j<0||j>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+j]))===13)&&((k=i-1>>0,((k<0||k>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+k]))===10)){  �(l=i-2>>0,((l<0||l>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+l]=10));  �d=$subslice(d,0,(i-1>>0));    }  �$s=-1;return[d,e];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.readLine};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.readLine=function(){return this.$val.readLine();};Reader	readLine~bufio.ErrBufferFullencoding/csv.Readerio.EOF encoding/csv.lengthNLN��N=function(a){var a,b;    if(a.$length>0&&((b=a.$length-1>>0,((b<0||b>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+b]))===10)){  sreturn 1;    }  �return 0;    };lengthNLencoding/csv.lengthNL encoding/csv.nextRuneOKO=function(a){var a,b,c;  �b=G.DecodeRune(a);c=b[0];   return c;    };nextRuneencoding/csv.nextRuneunicode/utf8.DecodeRune !(*encoding/csv.Reader).readRecord�aL.ptr.prototype.readRecord=function(a){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if((b.Comma===b.Comment)||!K(b.Comma)||(!((b.Comment===0))&&!K(b.Comment))){   �$s=-1;return[V.nil,J];    }  !c=T.nil;d=T.nil;e=c;f=d;  !9g=$ifaceNil;  !Hcase 1:if(!($interfaceIsEqual(g,$ifaceNil))){$s=2;continue;}  !_i=b.readLine();$s=3;case 3:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;e=h[0];g=h[1];    if(!((b.Comment===0))&&(O(e)===b.Comment)){  !�e=T.nil;  !�$s=1;continue;    }    if($interfaceIsEqual(g,$ifaceNil)&&(e.$length===N(e))){  "e=T.nil;  "+$s=1;continue;    }  "Nf=e;  "`$s=2;continue;    $s=1;continue;case 2:    if($interfaceIsEqual(g,E.EOF)){  "�$s=-1;return[V.nil,g];    }  "�j=$ifaceNil;  "�k=G.RuneLen(b.Comma);  #l=b.numLine;  #?b.recordBuffer=$subslice(b.recordBuffer,0,0);  #db.fieldIndexes=$subslice(b.fieldIndexes,0,0);  #�case 4:  #�if(b.TrimLeadingSpace){$s=6;continue;}$s=7;continue;    case 6:  #�m=B.TrimLeftFunc(e,F.IsSpace);$s=8;case 8:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}e=m;    case 7:  #�if((e.$length===0)||!(((0>=e.$length?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+0])===34))){$s=9;continue;}$s=10;continue;    case 9:  $6n=B.IndexRune(e,b.Comma);  $]o=e;    if(n>=0){  $~o=$subslice(o,0,n);    }else{  $�o=$subslice(o,0,(o.$length-N(o)>>0));    }    if(!b.LazyQuotes){  %(p=B.IndexByte(o,34);    if(p>=0){  %Xq=G.RuneCount($subslice(f,0,(f.$length-$subslice(e,p).$length>>0)));  %�j=new I.ptr(l,b.numLine,q,$pkg.ErrBareQuote);  %�$s=5;continue s;    }    }  &b.recordBuffer=$appendSlice(b.recordBuffer,o);  &Kb.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);    if(n>=0){  &�e=$subslice(e,(n+k>>0));  &�$s=4;continue s;    }  &�$s=5;continue s;    $s=11;continue;case 10:  'e=$subslice(e,1);  ''case 12:  '1r=B.IndexByte(e,34);  'Uif(r>=0){$s=14;continue;}if(e.$length>0){$s=15;continue;}$s=16;continue;    case 14:  '~b.recordBuffer=$appendSlice(b.recordBuffer,$subslice(e,0,r));  '�e=$subslice(e,(r+1>>0));  '�s=O(e);    if((s===34)){  (7b.recordBuffer=$append(b.recordBuffer,34);  (je=$subslice(e,1);    }else if((s===b.Comma)){  (�e=$subslice(e,k);  (�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  )'$s=4;continue s;    }else if((N(e)===e.$length)){  )�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  )�$s=5;continue s;    }else if(b.LazyQuotes){  *%b.recordBuffer=$append(b.recordBuffer,34);    }else{  *�t=G.RuneCount($subslice(f,0,((f.$length-e.$length>>0)-1>>0)));  *�j=new I.ptr(l,b.numLine,t,$pkg.ErrQuote);  +<$s=5;continue s;    }    $s=17;continue;    case 15:  +�b.recordBuffer=$appendSlice(b.recordBuffer,e);    if(!($interfaceIsEqual(g,$ifaceNil))){  +�$s=5;continue s;    }  ,v=b.readLine();$s=18;case 18:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;e=u[0];g=u[1];    if($interfaceIsEqual(g,E.EOF)){  ,Sg=$ifaceNil;    }  ,mf=e;    $s=17;continue;case 16:    if(!b.LazyQuotes&&$interfaceIsEqual(g,$ifaceNil)){  ,�w=G.RuneCount(f);  -j=new I.ptr(l,b.numLine,w,$pkg.ErrQuote);  -d$s=5;continue s;    }  -�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  -�$s=5;continue s;    case 17:    $s=12;continue;case 13:    case 11:    $s=4;continue;case 5:    if($interfaceIsEqual(j,$ifaceNil)){  -�j=g;    }  .�x=($bytesToString(b.recordBuffer));  .�a=$subslice(a,0,0);    if(a.$capacity<b.fieldIndexes.$length){  /a=$makeSlice(V,b.fieldIndexes.$length);    }  /:a=$subslice(a,0,b.fieldIndexes.$length);  /_y=0;  /kz=b.fieldIndexes;aa=0;while(true){if(!(aa<z.$length)){break;}ab=aa;ac=((aa<0||aa>=z.$length)?($throwRuntimeError("index out of range"),undefined):z.$array[z.$offset+aa]);  /�((ab<0||ab>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+ab]=$substring(x,y,ac));  /�y=ac;    aa++;}    if(b.FieldsPerRecord>0){    if(!((a.$length===b.FieldsPerRecord))&&$interfaceIsEqual(j,$ifaceNil)){  0Dj=new I.ptr(l,l,0,$pkg.ErrFieldCount);    }    }else if(b.FieldsPerRecord===0){  0�b.FieldsPerRecord=a.$length;    }  0�$s=-1;return[a,j];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.readRecord};}$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.readRecord=function(a){return this.$val.readRecord(a);};ReaderreadRecord~bytes.IndexBytebytes.IndexRunebytes.TrimLeftFuncencoding/csv.ErrBareQuoteencoding/csv.ErrFieldCountencoding/csv.ErrQuoteencoding/csv.ParseErrorencoding/csv.Readerencoding/csv.Tencoding/csv.Vencoding/csv.errInvalidDelimencoding/csv.lengthNLencoding/csv.nextRuneencoding/csv.readLine~encoding/csv.validDelimio.EOFunicode.IsSpaceunicode/utf8.RuneCountunicode/utf8.RuneLen encoding/csv.NewWriterQ[Q=function(a){var a;  4dreturn new P.ptr(44,false,A.NewWriter(a));    };$pkg.NewWriter=Q;	NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Writerencoding/csv.X (*encoding/csv.Writer).Write�7P.ptr.prototype.Write=function(a){var a,aa,ab,ac,ad,ae,af,ag,ah,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if(!K(b.Comma)){  5�$s=-1;return J;    }  5�c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  5�if(e>0){$s=3;continue;}$s=4;continue;    case 3:  5�h=b.w.WriteRune(b.Comma);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  6$s=-1;return i;    }    case 4:  6�if(!b.fieldNeedsQuotes(f)){$s=6;continue;}$s=7;continue;    case 6:  6�k=b.w.WriteString(f);$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;l=j[1];    if(!($interfaceIsEqual(l,$ifaceNil))){  6�$s=-1;return l;    }  6�d++;$s=1;continue;    case 7:  7m=b.w.WriteByte(34);$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;    if(!($interfaceIsEqual(n,$ifaceNil))){  73$s=-1;return n;    }  7Eo=f;p=0;case 10:if(!(p<o.length)){$s=11;continue;}q=$decodeRune(o,p);r=q[0];  7gs=$ifaceNil;    t=r;  7�if(t===(34)){$s=13;continue;}if(t===(13)){$s=14;continue;}if(t===(10)){$s=15;continue;}$s=16;continue;    case 13:  7�v=b.w.WriteString("\"\"");$s=18;case 18:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;s=u[1];    $s=17;continue;    case 14:  7�if(!b.UseCRLF){$s=19;continue;}$s=20;continue;    case 19:  7�w=b.w.WriteByte(13);$s=21;case 21:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}s=w;    case 20:    $s=17;continue;    case 15:  8	if(b.UseCRLF){$s=22;continue;}$s=23;continue;    case 22:  8y=b.w.WriteString("\r\n");$s=25;case 25:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}x=y;s=x[1];    $s=24;continue;case 23:  8Pz=b.w.WriteByte(10);$s=26;case 26:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}s=z;    case 24:    $s=17;continue;case 16:  8�ab=b.w.WriteRune(r);$s=27;case 27:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}aa=ab;s=aa[1];    case 17:    case 12:    if(!($interfaceIsEqual(s,$ifaceNil))){  8�$s=-1;return s;    }    p+=q[1];$s=10;continue;case 11:  8�ac=b.w.WriteByte(34);$s=28;case 28:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}ad=ac;    if(!($interfaceIsEqual(ad,$ifaceNil))){  8�$s=-1;return ad;    }    d++;$s=1;continue;case 2:  9ae=$ifaceNil;  9if(b.UseCRLF){$s=29;continue;}$s=30;continue;    case 29:  9/ag=b.w.WriteString("\r\n");$s=32;case 32:if($c){$c=false;ag=ag.$blk();}if(ag&&ag.$blk!==undefined){break s;}af=ag;ae=af[1];    $s=31;continue;case 30:  9\ah=b.w.WriteByte(10);$s=33;case 33:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ae=ah;    case 31:  9z$s=-1;return ae;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.Write};}$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Write=function(a){return this.$val.Write(a);};Writerencoding/csv.Writerencoding/csv.errInvalidDelimencoding/csv.fieldNeedsQuotes~encoding/csv.validDelim (*encoding/csv.Writer).Flush��P.ptr.prototype.Flush=function(){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  :"b=a.w.Flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;    $s=-1;return;}return;}if($f===undefined){$f={$blk:P.ptr.prototype.Flush};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Flush=function(){return this.$val.Flush();};Writerencoding/csv.Writer (*encoding/csv.Writer).Error�P.ptr.prototype.Error=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  :�c=a.w.Write(T.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  :�$s=-1;return d;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.Error};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Error=function(){return this.$val.Error();};Writerencoding/csv.Tencoding/csv.Writer (*encoding/csv.Writer).WriteAll��P.ptr.prototype.WriteAll=function(a){var a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  ;Pc=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  ;sf=b.Write(e);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;    if(!($interfaceIsEqual(g,$ifaceNil))){  ;�$s=-1;return g;    }    d++;$s=1;continue;case 2:  ;�h=b.w.Flush();$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return h;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.WriteAll};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.WriteAll=function(a){return this.$val.WriteAll(a);};Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes�^P.ptr.prototype.fieldNeedsQuotes=function(a){var a,b,c,d;b=this;    if(a===""){  ?&return false;    }    if(a==="\\."||H.ContainsRune(a,b.Comma)||H.ContainsAny(a,"\"\r\n")){  ?�return true;    }  ?�c=G.DecodeRuneInString(a);d=c[0];  ?�return F.IsSpace(d);    };P.prototype.fieldNeedsQuotes=function(a){return this.$val.fieldNeedsQuotes(a);};WriterfieldNeedsQuotes~encoding/csv.Writerstrings.ContainsAnystrings.ContainsRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString �{"Base":16372,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.NyQPsxBu6d/goroot/src/encoding/csv/reader.go","Base":1,"Size":12521,"Lines":[0,55,109,159,160,228,299,325,328,406,481,531,534,558,561,607,610,678,681,759,824,827,896,965,975,978,993,996,1028,1031,1056,1059,1096,1099,1169,1212,1215,1262,1265,1279,1282,1328,1331,1388,1391,1406,1429,1432,1446,1449,1465,1490,1502,1503,1512,1521,1530,1540,1547,1553,1564,1580,1582,1583,1631,1688,1713,1762,1812,1877,1914,1916,1917,1955,1984,2045,2048,2076,2195,2198,2284,2286,2287,2351,2357,2453,2515,2590,2647,2649,2650,2726,2727,2758,2843,2845,2846,2897,2900,2976,3050,3084,3087,3155,3226,3292,3313,3347,3390,3445,3496,3508,3509,3583,3647,3717,3762,3819,3870,3910,3924,3925,3990,4055,4133,4207,4282,4341,4362,4363,4436,4488,4505,4506,4582,4651,4674,4675,4749,4826,4912,4930,4931,4982,4983,5000,5001,5061,5074,5075,5140,5158,5159,5223,5292,5367,5427,5448,5449,5509,5576,5596,5597,5670,5691,5693,5694,5747,5785,5802,5816,5845,5848,5850,5851,5904,5957,6020,6082,6126,6192,6252,6287,6342,6362,6405,6429,6439,6473,6476,6496,6498,6499,6550,6587,6666,6744,6757,6818,6825,6860,6881,6904,6908,6926,6945,6949,6985,6988,6990,6991,7052,7117,7177,7238,7284,7318,7351,7400,7435,7470,7516,7520,7541,7544,7581,7593,7656,7689,7718,7722,7725,7738,7783,7854,7873,7893,7896,7914,7916,7917,7978,8008,8048,8059,8062,8072,8074,8075,8133,8164,8192,8202,8204,8205,8267,8364,8394,8397,8398,8472,8499,8518,8540,8571,8624,8638,8672,8676,8729,8743,8775,8779,8797,8805,8808,8832,8854,8857,8858,8894,8909,8936,8971,9021,9058,9095,9107,9114,9140,9192,9196,9236,9266,9305,9322,9337,9359,9371,9418,9423,9482,9504,9554,9621,9713,9735,9741,9746,9799,9863,9878,9907,9931,9936,9956,9967,9993,10019,10028,10064,10080,10104,10162,10192,10228,10249,10288,10339,10368,10393,10432,10461,10528,10554,10593,10632,10699,10722,10746,10782,10833,10847,10899,10972,11061,11084,11091,11121,11169,11223,11248,11271,11278,11312,11340,11360,11367,11388,11401,11444,11486,11524,11613,11636,11643,11709,11731,11737,11742,11746,11749,11766,11782,11785,11786,11842,11911,11989,12004,12041,12085,12088,12121,12137,12175,12202,12217,12220,12221,12273,12301,12352,12428,12432,12468,12499,12502,12519],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.NyQPsxBu6d/goroot/src/encoding/csv/writer.go","Base":12523,"Size":3848,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,288,291,360,435,515,518,551,554,635,656,715,772,795,797,798,850,888,905,919,948,951,953,954,1030,1098,1146,1173,1198,1201,1202,1234,1247,1300,1315,1320,1324,1325,1380,1437,1471,1524,1539,1544,1556,1560,1605,1619,1623,1624,1653,1670,1685,1698,1733,1747,1767,1798,1804,1818,1837,1875,1888,1919,1925,1937,1968,1973,1992,2007,2012,2016,2017,2062,2076,2080,2083,2098,2114,2149,2159,2187,2190,2202,2204,2205,2268,2331,2358,2371,2373,2374,2453,2486,2512,2524,2526,2527,2606,2660,2694,2719,2737,2751,2755,2758,2778,2780,2781,2855,2915,2978,3051,3127,3200,3272,3341,3396,3471,3511,3568,3623,3641,3656,3659,3759,3773,3776,3777,3818,3846],"Infos":null}]}
 