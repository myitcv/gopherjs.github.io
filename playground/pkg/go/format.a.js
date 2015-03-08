p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �7���	go/formatformatbytesfmtgo/ast	go/parser
go/printergo/tokeniostrings��package format
import bytes "bytes"
import fmt "fmt"
import ast "go/ast"
import parser "go/parser"
import printer "go/printer"
import token "go/token"
import io "io"
import strings "strings"
func @"".Node(@"".dst @"io".Writer, @"".fset *@"go/token".FileSet, @"".node interface {  }) (? error)
func @"".Source(@"".src []byte) (? []byte, ? error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
import nosync "github.com/gopherjs/gopherjs/nosync"
type @"go/token".FileSet struct { @"go/token".mutex @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"go/token".base int; @"go/token".files []*@"go/token".File; @"go/token".last *@"go/token".File }
func (? *@"go/token".FileSet) @"go/token".AddFile(@"go/token".filename string, @"go/token".base int, @"go/token".size int) (? *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Base() (? int)
func (? *@"go/token".FileSet) @"go/token".File(@"go/token".p @"go/token".Pos) (@"go/token".f *@"go/token".File)
func (? *@"go/token".FileSet) @"go/token".Iterate(@"go/token".f func (? *@"go/token".File) (? bool)) ()
func (? *@"go/token".FileSet) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".PositionFor(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".FileSet) @"go/token".Read(@"go/token".decode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".Write(@"go/token".encode func (? interface {  }) (? error)) (? error)
func (? *@"go/token".FileSet) @"go/token".file(@"go/token".p @"go/token".Pos) (? *@"go/token".File)
type @"github.com/gopherjs/gopherjs/nosync".RWMutex struct { @"github.com/gopherjs/gopherjs/nosync".writeLocked bool; @"github.com/gopherjs/gopherjs/nosync".readLockCounter int }
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RLock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RUnlock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"go/token".File struct { @"go/token".set *@"go/token".FileSet; @"go/token".name string; @"go/token".base int; @"go/token".size int; @"go/token".lines []int; @"go/token".infos []@"go/token".lineInfo }
func (? *@"go/token".File) @"go/token".AddLine(@"go/token".offset int) ()
func (? *@"go/token".File) @"go/token".AddLineInfo(@"go/token".offset int, @"go/token".filename string, @"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Base() (? int)
func (? *@"go/token".File) @"go/token".Line(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".LineCount() (? int)
func (? *@"go/token".File) @"go/token".MergeLine(@"go/token".line int) ()
func (? *@"go/token".File) @"go/token".Name() (? string)
func (? *@"go/token".File) @"go/token".Offset(@"go/token".p @"go/token".Pos) (? int)
func (? *@"go/token".File) @"go/token".Pos(@"go/token".offset int) (? @"go/token".Pos)
func (? *@"go/token".File) @"go/token".Position(@"go/token".p @"go/token".Pos) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".PositionFor(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".SetLines(@"go/token".lines []int) (? bool)
func (? *@"go/token".File) @"go/token".SetLinesForContent(@"go/token".content []byte) ()
func (? *@"go/token".File) @"go/token".Size() (? int)
func (? *@"go/token".File) @"go/token".position(@"go/token".p @"go/token".Pos, @"go/token".adjusted bool) (@"go/token".pos @"go/token".Position)
func (? *@"go/token".File) @"go/token".unpack(@"go/token".offset int, @"go/token".adjusted bool) (@"go/token".filename string, @"go/token".line int, @"go/token".column int)
type @"go/token".Pos int
func (? @"go/token".Pos) @"go/token".IsValid() (? bool)
func (? *@"go/token".Pos) @"go/token".IsValid() (? bool)
type @"go/token".Position struct { @"go/token".Filename string; @"go/token".Offset int; @"go/token".Line int; @"go/token".Column int }
func (? @"go/token".Position) @"go/token".String() (? string)
func (? *@"go/token".Position) @"go/token".IsValid() (? bool)
func (? *@"go/token".Position) @"go/token".String() (? string)
type @"go/token".lineInfo struct { @"go/token".Offset int; @"go/token".Filename string; @"go/token".Line int }
$$
AA=$packages["bytes"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["fmt"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["go/ast"];<    $r=C.$init();$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["go/parser"];<    $r=D.$init();$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["go/printer"];<    $r=E.$init();$s=5;case 5:if($r&&$r.$blocking){$r=$r();} FF=$packages["go/token"];<    $r=F.$init();$s=6;case 6:if($r&&$r.$blocking){$r=$r();} GG=$packages["io"];<    $r=G.$init();$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["strings"];<    $r=H.$init();$s=8;case 8:if($r&&$r.$blocking){$r=$r();} PP=$ptrType(C.File);Pgo/ast.File QQ=$ptrType(E.CommentedNode);Qgo/printer.CommentedNode RR=$sliceType($emptyInterface);R SS=$ptrType(C.CommentGroup);Sgo/ast.CommentGroup TT=$sliceType(S);Tgo/format.S UU=$sliceType($Uint8);U VV=$ptrType(C.GenDecl);Vgo/ast.GenDecl Iconfig     I=new E.Config.ptr(6,8,0);configgo/format.configgo/printer.Config go/format.NodeJ��J=$pkg.Node=function(a,b,c){var $ptr={},$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;var $f=function(){s:while(true){switch($s){case 0:  �  �d=P.nil;  �  �e=Q.nil;  �f=c;  �if($assertType(f,P,true)[1]){g=f.$val;  d=g;      }else if($assertType(f,Q,true)[1]){g=f.$val;  *  -h=$assertType(g.Node,P,true);i=h[0];j=h[1];    if(j){  Rd=i;  ^e=g;    }    }  �if(!(d===P.nil)&&L(d)){$s=1;continue;}$s=2;continue;    case 1:  ,  0k=$clone(new A.Buffer.ptr(),A.Buffer);  Cl=I.Fprint(k,b,d);$s=3;case 3:if(l&&l.$blocking){l=l();}m=l;  l    if(!($interfaceIsEqual(m,$ifaceNil))){  return m;    }  �o=D.ParseFile(b,"",k.Bytes(),4);$s=4;case 4:if(o&&o.$blocking){o=o();}n=o;d=n[0];m=n[1];  �if(!($interfaceIsEqual(m,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  (p=B.Errorf("format.Node internal error (%s)",new R([m]));$s=7;case 7:if(p&&p.$blocking){p=p();}return p;    case 6:  h$r=C.SortImports(b,d);$s=8;case 8:if($r&&$r.$blocking){$r=$r();}  �c=d;  �    if(!(e===Q.nil)){  �c=new E.CommentedNode.ptr(d,e.Comments);    }    case 2:  q=I.Fprint(a,b,c);$s=9;case 9:if(q&&q.$blocking){q=q();}return q;    case-1:}return;}};$f.$blocking=true;return $f;};Nodebytes.Buffer
fmt.Errorfgo/ast.CommentGroupgo/ast.Filego/ast.SortImportsgo/format.Nodego/format.Pgo/format.Qgo/format.Rgo/format.Sgo/format.Tgo/format.configgo/format.hasUnsortedImportsgo/parser.ParseFilego/printer.CommentedNode go/format.SourceK�QK=$pkg.Source=function(a){var $ptr={},$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i;var $f=function(){s:while(true){switch($s){case 0:  
b=F.NewFileSet();  
�d=M(b,"",a,true);$s=1;case 1:if(d&&d.$blocking){d=d();}c=d;e=c[0];f=c[1];g=c[2];h=c[3];  
�    if(!($interfaceIsEqual(h,$ifaceNil))){  
�return[U.nil,h];    }  if(f===$throwNilPointerError){$s=2;continue;}$s=3;continue;    case 2:  _$r=C.SortImports(b,e);$s=4;case 4:if($r&&$r.$blocking){$r=$r();}    case 3:  �i=N(b,e,f,g,a,I);$s=5;case 5:if(i&&i.$blocking){i=i();}return i;    case-1:}return;}};$f.$blocking=true;return $f;};Sourcego/ast.SortImportsgo/format.Sourcego/format.Ugo/format.configgo/format.formatgo/format.parsego/token.NewFileSet go/format.hasUnsortedImportsL��L=function(a){var $ptr={},a,b,c,d,e,f,g;  �b=a.Decls;c=0;while(true){if(!(c<b.$length)){break;}d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  e=$assertType(d,V,true);f=e[0];g=e[1];  -    if(!g||!((f.Tok===75))){  �return false;    }  �    if(new F.Pos(f.Lparen).IsValid()){  @return true;    }    c++;}  �return false;    };hasUnsortedImportsgo/ast.GenDeclgo/format.Vgo/format.hasUnsortedImportsgo/token.Pos go/format.parseM��M=function(a,b,c,d){var $ptr={},$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=P.nil;f=$throwNilPointerError;g=0;h=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  j=D.ParseFile(a,b,c,4);$s=1;case 1:if(j&&j.$blocking){j=j();}i=j;e=i[0];h=i[1];  if($interfaceIsEqual(h,$ifaceNil)||!d){k=true;$s=4;continue s;}l=h.Error();$s=5;case 5:if(l&&l.$blocking){l=l();}m=H.Contains(l,"expected 'package'");$s=6;case 6:if(m&&m.$blocking){m=m();}k=!m;case 4:if(k){$s=2;continue;}$s=3;continue;    case 2:  ureturn[e,f,g,h];    case 3:  >n=$appendSlice(new U($stringToBytes("package p;")),c);  lp=D.ParseFile(a,b,n,4);$s=7;case 7:if(p&&p.$blocking){p=p();}o=p;e=o[0];h=o[1];  �if($interfaceIsEqual(h,$ifaceNil)){$s=8;continue;}$s=9;continue;    case 8:  �f=(function(q,r){var $ptr={},$r,$s=0,$this=this,q,r,s;var $f=function(){s:while(true){switch($s){case 0:  <q=$subslice(q,(r+10>>0));  es=A.TrimSpace(q);$s=1;case 1:if(s&&s.$blocking){s=s();}return s;    case-1:}return;}};$f.$blocking=true;return $f;});  �return[e,f,g,h];    case 9:  1q=h.Error();$s=12;case 12:if(q&&q.$blocking){q=q();}r=H.Contains(q,"expected declaration");$s=13;case 13:if(r&&r.$blocking){r=r();}if(!r){$s=10;continue;}$s=11;continue;    case 10:  oreturn[e,f,g,h];    case 11:  �s=$append($appendSlice(new U($stringToBytes("package p; func _() {")),c),10,125);  �u=D.ParseFile(a,b,s,4);$s=14;case 14:if(u&&u.$blocking){u=u();}t=u;e=t[0];h=t[1];      if($interfaceIsEqual(h,$ifaceNil)){  !f=(function(v,w){var $ptr={},$r,$s=0,$this=this,v,w,x;var $f=function(){s:while(true){switch($s){case 0:  y    if(w<0){  �w=0;    }  *v=$subslice(v,((2*w>>0)+21>>0));  av=$subslice(v,0,(v.$length-((w+3>>0))>>0));  �x=A.TrimSpace(v);$s=1;case 1:if(x&&x.$blocking){x=x();}return x;    case-1:}return;}};$f.$blocking=true;return $f;});  g=-1;    }  Breturn[e,f,g,h];    case-1:}return;}};$f.$blocking=true;return $f;};parsebytes.TrimSpacego/format.Pgo/format.Ugo/format.parsego/parser.ParseFilestrings.Contains go/format.formatN�FN=function(a,b,c,d,e,f){var $ptr={},$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;var $f=function(){s:while(true){switch($s){case 0:  kf=$clone(f,E.Config);  �if(c===$throwNilPointerError){$s=1;continue;}$s=2;continue;    case 1:  �  �g=$clone(new A.Buffer.ptr(),A.Buffer);  �h=f.Fprint(g,a,b);$s=3;case 3:if(h&&h.$blocking){h=h();}i=h;      if(!($interfaceIsEqual(i,$ifaceNil))){  return[U.nil,i];    }  -return[g.Bytes(),$ifaceNil];    case 2:  �j=0;k=0;l=j;m=k;  �while(true){if(!(m<e.$length&&O(((m<0||m>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+m])))){break;}  �    if(((m<0||m>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+m])===10){  �l=m+1>>0;    }    m=m+(1)>>0;        }    "n=U.nil;  .n=$appendSlice(n,$subslice(e,0,l));  �o=0;  �p=false;  q=$subslice(e,l,m);r=0;while(true){if(!(r<q.$length)){break;}s=((r<0||r>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+r]);  #t=s;  0if(t===32){  =p=true;      O}else if(t===9){  ]  ]o=o+(1)>>0;        }    r++;}  n    if((o===0)&&p){  �o=1;    }  �  �u=0;while(true){if(!(u<o)){break;}  �n=$append(n,9);      �  �u=u+(1)>>0;    }  %f.Indent=o+d>>0;  F  Jv=$clone(new A.Buffer.ptr(),A.Buffer);  \w=f.Fprint(v,a,b);$s=4;case 4:if(w&&w.$blocking){w=w();}x=w;  �    if(!($interfaceIsEqual(x,$ifaceNil))){  �return[U.nil,x];    }  �y=c(v.Bytes(),f.Indent);$s=5;case 5:if(y&&y.$blocking){y=y();}n=$appendSlice(n,y);  l=e.$length;  while(true){if(!(l>0&&O((z=l-1>>0,((z<0||z>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+z]))))){break;}  <  <l=l-(1)>>0;        }  Dreturn[$appendSlice(n,$subslice(e,l)),$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};formatbytes.Buffergo/format.Ugo/format.formatgo/format.isSpacego/printer.Config go/format.isSpaceOTO=function(a){var $ptr={},a;  �return(a===32)||(a===9)||(a===10)||(a===13);    };isSpacego/format.isSpace ��{"Base":7874,"Files":[{"Name":"/usr/local/go/src/go/format/format.go","Base":1,"Size":7872,"Lines":[0,55,109,159,160,223,238,239,248,257,264,274,287,301,313,319,330,332,333,419,420,460,461,537,540,612,685,755,827,896,899,970,1042,1045,1117,1180,1200,1234,1261,1278,1289,1319,1358,1370,1383,1387,1390,1391,1422,1468,1536,1577,1600,1641,1659,1673,1677,1743,1761,1828,1889,1893,1923,1924,1963,1977,1997,2068,2072,2075,2076,2115,2117,2118,2188,2258,2329,2332,2406,2482,2559,2640,2643,2685,2713,2776,2793,2811,2814,2815,2838,2865,2908,2938,2941,2942,3004,3006,3007,3054,3086,3114,3150,3198,3230,3246,3250,3276,3331,3388,3403,3407,3453,3456,3470,3472,3473,3553,3574,3577,3648,3715,3718,3774,3775,3832,3888,3968,3985,4033,4049,4061,4065,4095,4158,4249,4311,4378,4466,4475,4478,4479,4536,4571,4633,4668,4714,4778,4795,4847,4880,4920,4961,4992,4996,5005,5008,5069,5127,5167,5228,5237,5240,5241,5296,5351,5408,5470,5505,5581,5645,5662,5714,5749,5768,5783,5788,5815,5857,5926,5981,6027,6058,6062,6120,6153,6170,6173,6174,6208,6216,6218,6219,6289,6358,6376,6389,6411,6428,6476,6492,6505,6526,6546,6569,6596,6619,6657,6675,6694,6698,6724,6727,6728,6753,6794,6808,6847,6869,6927,6931,6937,6940,6956,6987,6988,7046,7095,7138,7151,7170,7200,7213,7225,7244,7257,7269,7273,7276,7306,7319,7322,7353,7379,7382,7383,7406,7459,7492,7514,7551,7568,7586,7589,7647,7648,7689,7703,7737,7743,7746,7783,7785,7786,7814,7870],"Infos":null}]}
 