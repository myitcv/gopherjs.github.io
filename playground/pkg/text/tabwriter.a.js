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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �p���text/tabwriter	tabwriterbytesiounicode/utf8��version 4

 tabwriter  AlignRight % 	Debug %@ %DiscardEmptyColumns % Escape ,%� FilterHTML %	 NewWriter  Writerio  	Write"p n &err output  minwidth  tabwidth  padding  "padchar  	flags      <         "   padbytes "  &   buf  Buffer	bytes. *"  off  bootstrap�"  lastRead readOp  2 	Bytes@b  "   Cap@:     Grow@:     Len@:     Next@:  "   Read@: "  &   ReadByte@:  " &   ReadBytes@: "	delim "line &   ReadFrom@:  Reader  D"  & r 
 &   ReadRune@:  |SR size &   ReadString@: "J  L &   	Reset@:     String@:      Truncate@:     UnreadByte@:  &   UnreadRune@:  &   @: "  &   WriteByte@: "c &   WriteRune@: |SR  &   WriteString@:  s  &   WriteTo@: <w 
 &   	empty@:      grow@:     readSlice@: "J "L &   tryGrowByReslice@:        pos   cell  ||  V   	width   htab      endChar "  	lines F  widths  " 	Flush>:   &   Init>:  <       "  "|S  &  >   >:  "*    &    addLine >:      append >:  "text     dump >:      endEscape >:      	flush >:   &    format >:  pos0  	line0  	line1  z    	reset >:      startEscape >:  "ch     terminateCell >:   �     updateWidth >:      write0 >:  "*     writeLines >:  �  �  �  z    writeN >:  "src       writePadding >:  	textw  	cellw   useTabs      StripEscape % TabIndent % >*AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["unicode/utf8"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D��D=$pkg.cell=$newType(0,$kindStruct,"tabwriter.cell",true,"text/tabwriter",false,function(size_,width_,htab_){this.$val=this;if(arguments.length===0){this.size=0;this.width=0;this.htab=false;return;}this.size=size_;this.width=width_;this.htab=htab_;});��D.init("text/tabwriter",[{prop:"size",name:"size",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"width",name:"width",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"htab",name:"htab",anonymous:false,exported:false,typ:$Bool,tag:""}]);celltext/tabwriter.cell E��E=$pkg.Writer=$newType(0,$kindStruct,"tabwriter.Writer",true,"text/tabwriter",true,function(output_,minwidth_,tabwidth_,padding_,padbytes_,flags_,buf_,pos_,cell_,endChar_,lines_,widths_){this.$val=this;if(arguments.length===0){this.output=$ifaceNil;this.minwidth=0;this.tabwidth=0;this.padding=0;this.padbytes=Q.zero();this.flags=0;this.buf=new A.Buffer.ptr(M.nil,0,R.zero(),0);this.pos=0;this.cell=new D.ptr(0,0,false);this.endChar=0;this.lines=S.nil;this.widths=T.nil;return;}this.output=output_;this.minwidth=minwidth_;this.tabwidth=tabwidth_;this.padding=padding_;this.padbytes=padbytes_;this.flags=flags_;this.buf=buf_;this.pos=pos_;this.cell=cell_;this.endChar=endChar_;this.lines=lines_;this.widths=widths_;});��U.methods=[{prop:"addLine",name:"addLine",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"reset",name:"reset",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"Init",name:"Init",pkg:"",typ:$funcType([B.Writer,$Int,$Int,$Int,$Uint8,$Uint],[U],false)},{prop:"dump",name:"dump",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"write0",name:"write0",pkg:"text/tabwriter",typ:$funcType([M],[],false)},{prop:"writeN",name:"writeN",pkg:"text/tabwriter",typ:$funcType([M,$Int],[],false)},{prop:"writePadding",name:"writePadding",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Bool],[],false)},{prop:"writeLines",name:"writeLines",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Int],[$Int],false)},{prop:"format",name:"format",pkg:"text/tabwriter",typ:$funcType([$Int,$Int,$Int],[$Int],false)},{prop:"append",name:"append",pkg:"text/tabwriter",typ:$funcType([M],[],false)},{prop:"updateWidth",name:"updateWidth",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"startEscape",name:"startEscape",pkg:"text/tabwriter",typ:$funcType([$Uint8],[],false)},{prop:"endEscape",name:"endEscape",pkg:"text/tabwriter",typ:$funcType([],[],false)},{prop:"terminateCell",name:"terminateCell",pkg:"text/tabwriter",typ:$funcType([$Bool],[$Int],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"flush",name:"flush",pkg:"text/tabwriter",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([M],[$Int,$error],false)}];��E.init("text/tabwriter",[{prop:"output",name:"output",anonymous:false,exported:false,typ:B.Writer,tag:""},{prop:"minwidth",name:"minwidth",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"tabwidth",name:"tabwidth",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"padding",name:"padding",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"padbytes",name:"padbytes",anonymous:false,exported:false,typ:Q,tag:""},{prop:"flags",name:"flags",anonymous:false,exported:false,typ:$Uint,tag:""},{prop:"buf",name:"buf",anonymous:false,exported:false,typ:A.Buffer,tag:""},{prop:"pos",name:"pos",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"cell",name:"cell",anonymous:false,exported:false,typ:D,tag:""},{prop:"endChar",name:"endChar",anonymous:false,exported:false,typ:$Uint8,tag:""},{prop:"lines",name:"lines",anonymous:false,exported:false,typ:S,tag:""},{prop:"widths",name:"widths",anonymous:false,exported:false,typ:T,tag:""}]);Writer
bytes.Buffer	io.Writertext/tabwriter.Mtext/tabwriter.Qtext/tabwriter.Rtext/tabwriter.Stext/tabwriter.Ttext/tabwriter.Utext/tabwriter.Writertext/tabwriter.cell F��F=$pkg.osError=$newType(0,$kindStruct,"tabwriter.osError",true,"text/tabwriter",false,function(err_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;return;}this.err=err_;});dF.init("text/tabwriter",[{prop:"err",name:"err",anonymous:false,exported:false,typ:$error,tag:""}]);osErrortext/tabwriter.osError MM=$sliceType($Uint8);M NN=$sliceType(D);Ntext/tabwriter.cell OO=$ptrType(N);Otext/tabwriter.N PP=$ptrType($error);P QQ=$arrayType($Uint8,8);Q RR=$arrayType($Uint8,64);R SS=$sliceType(N);Stext/tabwriter.N TT=$sliceType($Int);T UU=$ptrType(E);Utext/tabwriter.Writer Gnewline Htabs Ivbar Khbar     G=new M([10]);newlinetext/tabwriter.Mtext/tabwriter.newline 3    H=(new M($stringToBytes("\t\t\t\t\t\t\t\t")));tabstext/tabwriter.Mtext/tabwriter.tabs     I=new M([124]);vbartext/tabwriter.Mtext/tabwriter.vbar (    K=(new M($stringToBytes("---\n")));hbartext/tabwriter.Mtext/tabwriter.hbar  (*text/tabwriter.Writer).addLine��E.ptr.prototype.addLine=function(){var a;a=this;  �a.lines=$append(a.lines,new N([]));    };E.prototype.addLine=function(){return this.$val.addLine();};WriteraddLine~text/tabwriter.Ntext/tabwriter.Writertext/tabwriter.cell (*text/tabwriter.Writer).reset�"E.ptr.prototype.reset=function(){var a;a=this;  2a.buf.Reset();  Aa.pos=0;  LD.copy(a.cell,new D.ptr(0,0,false));  ]a.endChar=0;  la.lines=$subslice(a.lines,0,0);  �a.widths=$subslice(a.widths,0,0);  �a.addLine();    };E.prototype.reset=function(){return this.$val.reset();};Writerreset~text/tabwriter.Writertext/tabwriter.addLine~text/tabwriter.cell (*text/tabwriter.Writer).Init�AE.ptr.prototype.Init=function(a,b,c,d,e,f){var a,b,c,d,e,f,g,h,i,j,k;g=this;    if(b<0||c<0||d<0){  �$panic(new $String("negative minwidth, tabwidth, or padding"));    }  g.output=a;  'g.minwidth=b;  >g.tabwidth=c;  Ug.padding=d;  jh=g.padbytes;i=0;while(true){if(!(i<8)){break;}j=i;  �(k=g.padbytes,((j<0||j>=k.length)?($throwRuntimeError("index out of range"),undefined):k[j]=e));    i++;}    if(e===9){  �f=(f&~(4))>>>0;    }  �g.flags=f;  g.reset();  return g;    };E.prototype.Init=function(a,b,c,d,e,f){return this.$val.Init(a,b,c,d,e,f);};Writertext/tabwriter.Writertext/tabwriter.reset~ (*text/tabwriter.Writer).dump��E.ptr.prototype.dump=function(){var a,b,c,d,e,f,g,h,i;a=this;  jb=0;  tc=a.lines;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �console.log("(",e,") ");  �g=f;h=0;while(true){if(!(h<g.$length)){break;}i=$clone(((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]),D);  �console.log("[",($bytesToString($subslice(a.buf.Bytes(),b,(b+i.size>>0)))),"]");   b=b+(i.size)>>0;    h++;}   console.log("\n");    d++;}   %console.log("\n");    };E.prototype.dump=function(){return this.$val.dump();};Writerdump~text/tabwriter.Writertext/tabwriter.cell (*text/tabwriter.Writer).write0�
E.ptr.prototype.write0=function(a){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  !d=b.output.Write(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!((e===a.$length))&&$interfaceIsEqual(f,$ifaceNil)){  !Rf=B.ErrShortWrite;    }    if(!($interfaceIsEqual(f,$ifaceNil))){  !$panic((g=new F.ptr(f),new g.constructor.elem(g)));    }    $s=-1;return;}return;}if($f===undefined){$f={$blk:E.ptr.prototype.write0};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.write0=function(a){return this.$val.write0(a);};Writerwrite0~io.ErrShortWritetext/tabwriter.Writertext/tabwriter.osError (*text/tabwriter.Writer).writeN��E.ptr.prototype.writeN=function(a,b){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  !�case 1:if(!(b>a.$length)){$s=2;continue;}  !�$r=c.write0(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  !�b=b-(a.$length)>>0;    $s=1;continue;case 2:  !�$r=c.write0($subslice(a,0,b));$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:E.ptr.prototype.writeN};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writeN=function(a,b){return this.$val.writeN(a,b);};WriterwriteN~text/tabwriter.Writertext/tabwriter.write0~ %(*text/tabwriter.Writer).writePadding��E.ptr.prototype.writePadding=function(a,b,c){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;  "�if((d.padbytes[0]===9)||c){$s=1;continue;}$s=2;continue;    case 1:    if(d.tabwidth===0){  "�$s=-1;return;    }  #ib=$imul((e=(((b+d.tabwidth>>0)-1>>0))/d.tabwidth,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero")),d.tabwidth);  #�f=b-a>>0;    if(f<0){  #�$panic(new $String("internal error"));    }  #�$r=d.writeN(H,(g=(((f+d.tabwidth>>0)-1>>0))/d.tabwidth,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero")));$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $*$s=-1;return;    case 2:  $b$r=d.writeN($subslice(new M(d.padbytes),0),b-a>>0);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:E.ptr.prototype.writePadding};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writePadding=function(a,b,c){return this.$val.writePadding(a,b,c);};WriterwritePadding~text/tabwriter.Mtext/tabwriter.Writertext/tabwriter.tabstext/tabwriter.writeN~ #(*text/tabwriter.Writer).writeLines�_E.ptr.prototype.writeLines=function(a,b,c){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=0;e=this;  $�d=a;  $�f=b;case 1:if(!(f<c)){$s=2;continue;}  %h=(g=e.lines,((f<0||f>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+f]));  %ki=!((((e.flags&16)>>>0)===0));  %�j=h;k=0;case 3:if(!(k<j.$length)){$s=4;continue;}l=k;m=$clone(((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]),D);  %�if(l>0&&!((((e.flags&32)>>>0)===0))){$s=5;continue;}$s=6;continue;    case 5:  %�$r=e.write0(I);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 6:  &if(m.size===0){$s=8;continue;}$s=9;continue;    case 8:  &-if(l<e.widths.$length){$s=11;continue;}$s=12;continue;    case 11:  &I$r=e.writePadding(m.width,(n=e.widths,((l<0||l>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+l])),i);$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 12:    $s=10;continue;case 9:  &�i=false;  &�if(((e.flags&4)>>>0)===0){$s=14;continue;}$s=15;continue;    case 14:  &�$r=e.write0($subslice(e.buf.Bytes(),d,(d+m.size>>0)));$s=17;case 17:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  'd=d+(m.size)>>0;  ')if(l<e.widths.$length){$s=18;continue;}$s=19;continue;    case 18:  'F$r=e.writePadding(m.width,(o=e.widths,((l<0||l>=o.$length)?($throwRuntimeError("index out of range"),undefined):o.$array[o.$offset+l])),false);$s=20;case 20:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 19:    $s=16;continue;case 15:  '�if(l<e.widths.$length){$s=21;continue;}$s=22;continue;    case 21:  '�$r=e.writePadding(m.width,(p=e.widths,((l<0||l>=p.$length)?($throwRuntimeError("index out of range"),undefined):p.$array[p.$offset+l])),false);$s=23;case 23:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 22:  '�$r=e.write0($subslice(e.buf.Bytes(),d,(d+m.size>>0)));$s=24;case 24:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  (d=d+(m.size)>>0;    case 16:    case 10:    k++;$s=3;continue;case 4:  (>if((f+1>>0)===e.lines.$length){$s=25;continue;}$s=26;continue;    case 25:  (�$r=e.write0($subslice(e.buf.Bytes(),d,(d+e.cell.size>>0)));$s=28;case 28:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  (�d=d+(e.cell.size)>>0;    $s=27;continue;case 26:  );$r=e.write0(G);$s=29;case 29:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 27:  %f=f+(1)>>0;    $s=1;continue;case 2:  )U$s=-1;return d;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.writeLines};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.writeLines=function(a,b,c){return this.$val.writeLines(a,b,c);};WriterwriteLines~text/tabwriter.Writertext/tabwriter.celltext/tabwriter.newlinetext/tabwriter.vbartext/tabwriter.write0~text/tabwriter.writePadding~ (*text/tabwriter.Writer).format��E.ptr.prototype.format=function(a,b,c){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=0;e=this;  *�d=a;  *�f=e.widths.$length;  *�g=b;case 1:if(!(g<c)){$s=2;continue;}  *�i=(h=e.lines,((g<0||g>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+g]));  *�if(f>=(i.$length-1>>0)){$s=3;continue;}$s=4;continue;    case 3:  *�g=g+(1)>>0;    $s=1;continue;    case 4:  ,lj=e.writeLines(d,b,g);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}d=j;  ,�b=g;  ,�k=e.minwidth;  ,�l=true;  -8while(true){if(!(g<c)){break;}  -Xi=(m=e.lines,((g<0||g>=m.$length)?($throwRuntimeError("index out of range"),undefined):m.$array[m.$offset+g]));    if(f>=(i.$length-1>>0)){  -�break;    }  -�n=$clone(((f<0||f>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+f]),D);  -�o=n.width+e.padding>>0;    if(o>k){  .k=o;    }    if(n.width>0||n.htab){  .]l=false;    }  -Lg=g+(1)>>0;    }    if(l&&!((((e.flags&8)>>>0)===0))){  .�k=0;    }  /�e.widths=$append(e.widths,k);  /�p=e.format(d,b,g);$s=6;case 6:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}d=p;  /�e.widths=$subslice(e.widths,0,(e.widths.$length-1>>0));  0b=g;  *�g=g+(1)>>0;    $s=1;continue;case 2:    q=e.writeLines(d,b,c);$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}d=q;$s=-1;return d;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.format};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.format=function(a,b,c){return this.$val.format(a,b,c);};Writerformat~text/tabwriter.Writertext/tabwriter.celltext/tabwriter.format~text/tabwriter.writeLines~ (*text/tabwriter.Writer).append��E.ptr.prototype.append=function(a){var a,b;b=this;  0�b.buf.Write(a);  0�b.cell.size=b.cell.size+(a.$length)>>0;    };E.prototype.append=function(a){return this.$val.append(a);};Writerappend~text/tabwriter.Writer $(*text/tabwriter.Writer).updateWidth��E.ptr.prototype.updateWidth=function(){var a;a=this;  1(a.cell.width=a.cell.width+(C.RuneCount($subslice(a.buf.Bytes(),a.pos,a.buf.Len())))>>0;  1ja.pos=a.buf.Len();    };E.prototype.updateWidth=function(){return this.$val.updateWidth();};WriterupdateWidth~text/tabwriter.Writerunicode/utf8.RuneCount $(*text/tabwriter.Writer).startEscape�E.ptr.prototype.startEscape=function(a){var a,b,c;b=this;    c=a;    if(c===(255)){  3:b.endChar=255;    }else if(c===(60)){  3Zb.endChar=62;    }else if(c===(38)){  3wb.endChar=59;    }    };E.prototype.startEscape=function(a){return this.$val.startEscape(a);};WriterstartEscape~text/tabwriter.Writer "(*text/tabwriter.Writer).endEscape��E.ptr.prototype.endEscape=function(){var a,b;a=this;    b=a.endChar;    if(b===(255)){  4�a.updateWidth();    if(((a.flags&2)>>>0)===0){  5a.cell.width=a.cell.width-(2)>>0;    }    }else if(b===(62)){    }else if(b===(59)){  5ea.cell.width=a.cell.width+(1)>>0;    }  5�a.pos=a.buf.Len();  5�a.endChar=0;    };E.prototype.endEscape=function(){return this.$val.endEscape();};Writer
endEscape~text/tabwriter.Writertext/tabwriter.updateWidth~ &(*text/tabwriter.Writer).terminateCell�WE.ptr.prototype.terminateCell=function(a){var a,b,c,d;b=this;  6qb.cell.htab=a;  6�d=(c=b.lines,$indexPtr(c.$array,c.$offset+(b.lines.$length-1>>0),O));  6�d.$set($append(d.$get(),b.cell));  6�D.copy(b.cell,new D.ptr(0,0,false));  6�return d.$get().$length;    };E.prototype.terminateCell=function(a){return this.$val.terminateCell(a);};WriterterminateCell~text/tabwriter.Ntext/tabwriter.Otext/tabwriter.Writertext/tabwriter.cell text/tabwriter.handlePanicJ�J=function(a,b){var a,b,c,d,e,f;  7c=$recover();    if(!($interfaceIsEqual(c,$ifaceNil))){  7:d=$assertType(c,F,true);e=$clone(d[0],F);f=d[1];    if(f){  7[a.$set(e.err);  7nreturn;    }  7{$panic(new $String("tabwriter: panic during "+b));    }    };handlePanictext/tabwriter.handlePanictext/tabwriter.osError (*text/tabwriter.Writer).Flush��E.ptr.prototype.Flush=function(){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  8�b=a.flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Flush};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Flush=function(){return this.$val.Flush();};Writertext/tabwriter.Writertext/tabwriter.flush~ (*text/tabwriter.Writer).flush��E.ptr.prototype.flush=function(){var a,b,c,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=[a];a[0]=$ifaceNil;b=this;  8�$deferred.push([$methodVal(b,"reset"),[]]);  9$deferred.push([J,[(a.$ptr||(a.$ptr=new P(function(){return this.$target[0];},function($v){this.$target[0]=$v;},a))),"Flush"]]);    if(b.cell.size>0){    if(!((b.endChar===0))){  9�b.endEscape();    }  9�b.terminateCell(false);    }  :c=b.format(0,0,b.lines.$length);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;    a[0]=$ifaceNil;$s=-1;return a[0];    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return a[0];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:E.ptr.prototype.flush};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};E.prototype.flush=function(){return this.$val.flush();};Writerflush~text/tabwriter.Ptext/tabwriter.Writertext/tabwriter.endEscape~text/tabwriter.format~text/tabwriter.handlePanictext/tabwriter.reset~text/tabwriter.terminateCell~ (*text/tabwriter.Writer).Write�
�E.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=[b];c=0;b[0]=$ifaceNil;d=this;  ;$deferred.push([J,[(b.$ptr||(b.$ptr=new P(function(){return this.$target[0];},function($v){this.$target[0]=$v;},b))),"Write"]]);  ;Xc=0;  ;_e=a;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);  ;zif(d.endChar===0){$s=3;continue;}$s=4;continue;    case 3:    i=h;  ;�if((i===(9))||(i===(11))||(i===(10))||(i===(12))){$s=7;continue;}if(i===(255)){$s=8;continue;}if((i===(60))||(i===(38))){$s=9;continue;}$s=10;continue;    case 7:  ;�d.append($subslice(a,c,g));  < d.updateWidth();  <c=g+1>>0;  <1j=d.terminateCell(h===9);  <[if((h===10)||(h===12)){$s=11;continue;}$s=12;continue;    case 11:  <�d.addLine();  <�if((h===12)||(j===1)){$s=13;continue;}$s=14;continue;    case 13:  =�k=d.Flush();$s=15;case 15:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}b[0]=k;    if(!($interfaceIsEqual(b[0],$ifaceNil))){  >$s=-1;return[c,b[0]];    }  >$if((h===12)&&!((((d.flags&32)>>>0)===0))){$s=16;continue;}$s=17;continue;    case 16:  >r$r=d.write0(K);$s=18;case 18:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 17:    case 14:    case 12:    $s=10;continue;    case 8:  >�d.append($subslice(a,c,g));  >�d.updateWidth();  >�c=g;    if(!((((d.flags&2)>>>0)===0))){  ?$c=c+(1)>>0;    }  ?Bd.startEscape(255);    $s=10;continue;    case 9:    if(!((((d.flags&1)>>>0)===0))){  ?�d.append($subslice(a,c,g));  ?�d.updateWidth();  ?�c=g;  @d.startEscape(h);    }    case 10:    case 6:    $s=5;continue;case 4:    if(h===d.endChar){  @zl=g+1>>0;    if((h===255)&&!((((d.flags&2)>>>0)===0))){  @�l=g;    }  @�d.append($subslice(a,c,l));  @�c=g+1>>0;  Ad.endEscape();    }    case 5:    f++;$s=1;continue;case 2:  AEd.append($subslice(a,c));  AXc=a.$length;  Af$s=-1;return[c,b[0]];    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,b[0]];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:E.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};E.prototype.Write=function(a){return this.$val.Write(a);};Writertext/tabwriter.Ptext/tabwriter.Writertext/tabwriter.addLine~text/tabwriter.append~text/tabwriter.endEscape~text/tabwriter.handlePanictext/tabwriter.hbartext/tabwriter.startEscape~text/tabwriter.terminateCell~text/tabwriter.updateWidth~text/tabwriter.write0~ text/tabwriter.NewWriterL��L=function(a,b,c,d,e,f){var a,b,c,d,e,f;  BRreturn new E.ptr($ifaceNil,0,0,0,Q.zero(),0,new A.Buffer.ptr(M.nil,0,R.zero(),0),0,new D.ptr(0,0,false),0,S.nil,T.nil).Init(a,b,c,d,e,f);    };$pkg.NewWriter=L;	NewWriter
bytes.Buffertext/tabwriter.Mtext/tabwriter.Ntext/tabwriter.NewWritertext/tabwriter.Qtext/tabwriter.Rtext/tabwriter.Stext/tabwriter.Ttext/tabwriter.Writertext/tabwriter.cell ��{"Base":17058,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.NyQPsxBu6d/goroot/src/text/tabwriter/tabwriter.go","Base":1,"Size":17056,"Lines":[0,55,109,159,160,231,297,300,368,424,427,502,520,521,530,539,545,561,563,564,644,669,670,744,819,892,919,922,941,975,1010,1074,1076,1077,1143,1196,1199,1268,1337,1407,1439,1442,1511,1582,1651,1718,1790,1862,1926,1998,2001,2015,2030,2039,2056,2059,2130,2198,2255,2258,2330,2404,2419,2422,2490,2554,2619,2633,2636,2704,2763,2836,2839,2904,2970,3038,3104,3170,3236,3305,3320,3323,3392,3461,3530,3596,3644,3647,3714,3783,3822,3825,3846,3864,3884,3898,3912,3926,3944,3959,3960,3978,4048,4149,4255,4377,4446,4530,4532,4533,4600,4601,4629,4656,4671,4682,4699,4714,4738,4764,4777,4779,4780,4824,4827,4908,4986,5035,5102,5184,5263,5289,5360,5410,5483,5542,5545,5598,5651,5704,5757,5810,5860,5910,5962,5963,6013,6021,6080,6137,6166,6167,6228,6289,6302,6303,6346,6377,6389,6390,6446,6480,6501,6502,6564,6625,6636,6637,6704,6763,6770,6772,6773,6855,6936,6939,6992,7058,7121,7161,7218,7276,7334,7394,7453,7482,7485,7594,7644,7695,7698,7717,7740,7763,7784,7813,7839,7842,7864,7905,7928,7931,7948,7949,7960,7961,7971,7973,7974,8014,8040,8050,8082,8104,8131,8189,8206,8210,8224,8227,8240,8242,8243,8313,8388,8410,8421,8423,8424,8462,8493,8527,8552,8555,8572,8594,8597,8599,8600,8645,8665,8681,8697,8700,8720,8722,8723,8729,8753,8791,8793,8794,8858,8897,8928,8951,9006,9010,9062,9123,9165,9178,9205,9209,9255,9264,9267,9268,9312,9351,9353,9354,9377,9378,9446,9458,9492,9513,9514,9576,9612,9613,9640,9676,9705,9724,9729,9730,9750,9768,9795,9846,9852,9864,9886,9906,9953,10000,10019,10047,10097,10104,10132,10160,10210,10217,10264,10283,10289,10294,10298,10299,10326,10392,10428,10478,10500,10511,10551,10572,10576,10579,10587,10589,10590,10656,10723,10788,10819,10822,10886,10898,10923,10966,10990,10991,11020,11032,11036,11081,11124,11182,11240,11298,11316,11317,11369,11408,11423,11424,11448,11494,11573,11604,11628,11658,11668,11673,11706,11727,11746,11790,11804,11809,11834,11864,11888,11893,11897,11919,11920,11960,12015,12028,12032,12033,12095,12164,12215,12250,12306,12321,12324,12325,12361,12401,12403,12404,12436,12475,12494,12520,12522,12523,12549,12582,12648,12669,12671,12672,12736,12806,12873,12911,12914,12995,12998,13020,13021,13044,13084,13097,13111,13132,13143,13161,13172,13190,13193,13195,13196,13270,13346,13418,13448,13451,13482,13502,13516,13534,13566,13619,13623,13655,13666,13712,13715,13736,13751,13753,13754,13825,13884,13887,13935,13955,13989,14020,14037,14056,14058,14059,14101,14132,14167,14186,14196,14200,14241,14244,14246,14247,14312,14378,14433,14470,14503,14521,14523,14524,14563,14614,14648,14649,14683,14705,14727,14781,14798,14802,14827,14830,14831,14861,14891,14903,14905,14906,14933,14934,14971,15020,15070,15073,15129,15163,15164,15190,15197,15223,15245,15266,15281,15313,15332,15355,15375,15404,15446,15480,15503,15520,15556,15622,15687,15753,15814,15840,15879,15893,15901,15945,15978,16000,16008,16015,16021,16022,16038,16071,16094,16114,16124,16158,16183,16189,16215,16216,16234,16269,16302,16330,16354,16375,16386,16409,16415,16420,16421,16432,16452,16476,16501,16516,16566,16593,16599,16622,16651,16669,16674,16678,16681,16682,16707,16726,16740,16748,16750,16751,16814,16871,16874,16976,17054],"Infos":null}]}
 