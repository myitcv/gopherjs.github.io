0�~+index/suffixarray�-�package suffixarray
import sort "sort"
import bytes "bytes"
import binary "encoding/binary"
import io "io"
import regexp "regexp"
type @"".Index struct { @"".data []byte; @"".sa []int }
func (? *@"".Index) @"".Bytes() (? []byte)
func (? *@"".Index) @"".FindAllIndex(@"".r *@"regexp".Regexp, @"".n int) (@"".result [][]int)
func (? *@"".Index) @"".Lookup(@"".s []byte, @"".n int) (@"".result []int)
func (? *@"".Index) @"".Read(@"".r @"io".Reader) (? error)
func (? *@"".Index) @"".Write(@"".w @"io".Writer) (? error)
func (? *@"".Index) @"".at(@"".i int) (? []byte)
func (? *@"".Index) @"".lookupAll(@"".s []byte) (? []int)
func @"".New(@"".data []byte) (? *@"".Index)
type @"".suffixSortable struct { @"".sa []int; @"".inv []int; @"".h int; @"".buf []int }
func (? *@"".suffixSortable) @"".Len() (? int)
func (? *@"".suffixSortable) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".suffixSortable) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".suffixSortable) @"".updateGroups(@"".offset int) ()
import syntax "regexp/syntax"
import sync "sync"
type @"regexp".Regexp struct { @"regexp".expr string; @"regexp".prog *@"regexp/syntax".Prog; @"regexp".onepass *@"regexp".onePassProg; @"regexp".prefix string; @"regexp".prefixBytes []byte; @"regexp".prefixComplete bool; @"regexp".prefixRune rune; @"regexp".prefixEnd uint32; @"regexp".cond @"regexp/syntax".EmptyOp; @"regexp".numSubexp int; @"regexp".subexpNames []string; @"regexp".longest bool; @"regexp".mu @"sync".Mutex; @"regexp".machine []*@"regexp".machine }
func (? *@"regexp".Regexp) @"regexp".Expand(@"regexp".dst []byte, @"regexp".template []byte, @"regexp".src []byte, @"regexp".match []int) (? []byte)
func (? *@"regexp".Regexp) @"regexp".ExpandString(@"regexp".dst []byte, @"regexp".template string, @"regexp".src string, @"regexp".match []int) (? []byte)
func (? *@"regexp".Regexp) @"regexp".Find(@"regexp".b []byte) (? []byte)
func (? *@"regexp".Regexp) @"regexp".FindAll(@"regexp".b []byte, @"regexp".n int) (? [][]byte)
func (? *@"regexp".Regexp) @"regexp".FindAllIndex(@"regexp".b []byte, @"regexp".n int) (? [][]int)
func (? *@"regexp".Regexp) @"regexp".FindAllString(@"regexp".s string, @"regexp".n int) (? []string)
func (? *@"regexp".Regexp) @"regexp".FindAllStringIndex(@"regexp".s string, @"regexp".n int) (? [][]int)
func (? *@"regexp".Regexp) @"regexp".FindAllStringSubmatch(@"regexp".s string, @"regexp".n int) (? [][]string)
func (? *@"regexp".Regexp) @"regexp".FindAllStringSubmatchIndex(@"regexp".s string, @"regexp".n int) (? [][]int)
func (? *@"regexp".Regexp) @"regexp".FindAllSubmatch(@"regexp".b []byte, @"regexp".n int) (? [][][]byte)
func (? *@"regexp".Regexp) @"regexp".FindAllSubmatchIndex(@"regexp".b []byte, @"regexp".n int) (? [][]int)
func (? *@"regexp".Regexp) @"regexp".FindIndex(@"regexp".b []byte) (@"regexp".loc []int)
func (? *@"regexp".Regexp) @"regexp".FindReaderIndex(@"regexp".r @"io".RuneReader) (@"regexp".loc []int)
func (? *@"regexp".Regexp) @"regexp".FindReaderSubmatchIndex(@"regexp".r @"io".RuneReader) (? []int)
func (? *@"regexp".Regexp) @"regexp".FindString(@"regexp".s string) (? string)
func (? *@"regexp".Regexp) @"regexp".FindStringIndex(@"regexp".s string) (@"regexp".loc []int)
func (? *@"regexp".Regexp) @"regexp".FindStringSubmatch(@"regexp".s string) (? []string)
func (? *@"regexp".Regexp) @"regexp".FindStringSubmatchIndex(@"regexp".s string) (? []int)
func (? *@"regexp".Regexp) @"regexp".FindSubmatch(@"regexp".b []byte) (? [][]byte)
func (? *@"regexp".Regexp) @"regexp".FindSubmatchIndex(@"regexp".b []byte) (? []int)
func (? *@"regexp".Regexp) @"regexp".LiteralPrefix() (@"regexp".prefix string, @"regexp".complete bool)
func (? *@"regexp".Regexp) @"regexp".Longest() ()
func (? *@"regexp".Regexp) @"regexp".Match(@"regexp".b []byte) (? bool)
func (? *@"regexp".Regexp) @"regexp".MatchReader(@"regexp".r @"io".RuneReader) (? bool)
func (? *@"regexp".Regexp) @"regexp".MatchString(@"regexp".s string) (? bool)
func (? *@"regexp".Regexp) @"regexp".NumSubexp() (? int)
func (? *@"regexp".Regexp) @"regexp".ReplaceAll(@"regexp".src []byte, @"regexp".repl []byte) (? []byte)
func (? *@"regexp".Regexp) @"regexp".ReplaceAllFunc(@"regexp".src []byte, @"regexp".repl func (? []byte) (? []byte)) (? []byte)
func (? *@"regexp".Regexp) @"regexp".ReplaceAllLiteral(@"regexp".src []byte, @"regexp".repl []byte) (? []byte)
func (? *@"regexp".Regexp) @"regexp".ReplaceAllLiteralString(@"regexp".src string, @"regexp".repl string) (? string)
func (? *@"regexp".Regexp) @"regexp".ReplaceAllString(@"regexp".src string, @"regexp".repl string) (? string)
func (? *@"regexp".Regexp) @"regexp".ReplaceAllStringFunc(@"regexp".src string, @"regexp".repl func (? string) (? string)) (? string)
func (? *@"regexp".Regexp) @"regexp".Split(@"regexp".s string, @"regexp".n int) (? []string)
func (? *@"regexp".Regexp) @"regexp".String() (? string)
func (? *@"regexp".Regexp) @"regexp".SubexpNames() (? []string)
func (? *@"regexp".Regexp) @"regexp".allMatches(@"regexp".s string, @"regexp".b []byte, @"regexp".n int, @"regexp".deliver func (? []int) ()) ()
func (? *@"regexp".Regexp) @"regexp".doExecute(@"regexp".r @"io".RuneReader, @"regexp".b []byte, @"regexp".s string, @"regexp".pos int, @"regexp".ncap int) (? []int)
func (? *@"regexp".Regexp) @"regexp".expand(@"regexp".dst []byte, @"regexp".template string, @"regexp".bsrc []byte, @"regexp".src string, @"regexp".match []int) (? []byte)
func (? *@"regexp".Regexp) @"regexp".get() (? *@"regexp".machine)
func (? *@"regexp".Regexp) @"regexp".pad(@"regexp".a []int) (? []int)
func (? *@"regexp".Regexp) @"regexp".put(@"regexp".z *@"regexp".machine) ()
func (? *@"regexp".Regexp) @"regexp".replaceAll(@"regexp".bsrc []byte, @"regexp".src string, @"regexp".nmatch int, @"regexp".repl func (@"regexp".dst []byte, @"regexp".m []int) (? []byte)) (? []byte)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"regexp/syntax".Prog struct { @"regexp/syntax".Inst []@"regexp/syntax".Inst; @"regexp/syntax".Start int; @"regexp/syntax".NumCap int }
func (? *@"regexp/syntax".Prog) @"regexp/syntax".Prefix() (@"regexp/syntax".prefix string, @"regexp/syntax".complete bool)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".StartCond() (? @"regexp/syntax".EmptyOp)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".Prog) @"regexp/syntax".skipNop(@"regexp/syntax".pc uint32) (? *@"regexp/syntax".Inst, ? uint32)
type @"regexp".onePassProg struct { @"regexp".Inst []@"regexp".onePassInst; @"regexp".Start int; @"regexp".NumCap int }
type @"regexp/syntax".EmptyOp uint8
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"regexp".machine struct { @"regexp".re *@"regexp".Regexp; @"regexp".p *@"regexp/syntax".Prog; @"regexp".op *@"regexp".onePassProg; @"regexp".q0 @"regexp".queue; @"regexp".q1 @"regexp".queue; @"regexp".pool []*@"regexp".thread; @"regexp".matched bool; @"regexp".matchcap []int; @"regexp".inputBytes @"regexp".inputBytes; @"regexp".inputString @"regexp".inputString; @"regexp".inputReader @"regexp".inputReader }
func (? *@"regexp".machine) @"regexp".add(@"regexp".q *@"regexp".queue, @"regexp".pc uint32, @"regexp".pos int, @"regexp".cap []int, @"regexp".cond @"regexp/syntax".EmptyOp, @"regexp".t *@"regexp".thread) (? *@"regexp".thread)
func (? *@"regexp".machine) @"regexp".alloc(@"regexp".i *@"regexp/syntax".Inst) (? *@"regexp".thread)
func (? *@"regexp".machine) @"regexp".clear(@"regexp".q *@"regexp".queue) ()
func (? *@"regexp".machine) @"regexp".free(@"regexp".t *@"regexp".thread) ()
func (? *@"regexp".machine) @"regexp".init(@"regexp".ncap int) ()
func (? *@"regexp".machine) @"regexp".match(@"regexp".i @"regexp".input, @"regexp".pos int) (? bool)
func (? *@"regexp".machine) @"regexp".newInputBytes(@"regexp".b []byte) (? @"regexp".input)
func (? *@"regexp".machine) @"regexp".newInputReader(@"regexp".r @"io".RuneReader) (? @"regexp".input)
func (? *@"regexp".machine) @"regexp".newInputString(@"regexp".s string) (? @"regexp".input)
func (? *@"regexp".machine) @"regexp".onepass(@"regexp".i @"regexp".input, @"regexp".pos int) (? bool)
func (? *@"regexp".machine) @"regexp".step(@"regexp".runq *@"regexp".queue, @"regexp".nextq *@"regexp".queue, @"regexp".pos int, @"regexp".nextPos int, @"regexp".c rune, @"regexp".nextCond @"regexp/syntax".EmptyOp) ()
type @"io".RuneReader interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error) }
type @"regexp/syntax".Inst struct { @"regexp/syntax".Op @"regexp/syntax".InstOp; @"regexp/syntax".Out uint32; @"regexp/syntax".Arg uint32; @"regexp/syntax".Rune []rune }
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchEmptyWidth(@"regexp/syntax".before rune, @"regexp/syntax".after rune) (? bool)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchRune(@"regexp/syntax".r rune) (? bool)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".MatchRunePos(@"regexp/syntax".r rune) (? int)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".Inst) @"regexp/syntax".op() (? @"regexp/syntax".InstOp)
type @"regexp".onePassInst struct { ? @"regexp/syntax".Inst; @"regexp".Next []uint32 }
type @"regexp".queue struct { @"regexp".sparse []uint32; @"regexp".dense []@"regexp".entry }
type @"regexp".thread struct { @"regexp".inst *@"regexp/syntax".Inst; @"regexp".cap []int }
type @"regexp".inputBytes struct { @"regexp".str []byte }
func (? *@"regexp".inputBytes) @"regexp".canCheckPrefix() (? bool)
func (? *@"regexp".inputBytes) @"regexp".context(@"regexp".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"regexp".inputBytes) @"regexp".hasPrefix(@"regexp".re *@"regexp".Regexp) (? bool)
func (? *@"regexp".inputBytes) @"regexp".index(@"regexp".re *@"regexp".Regexp, @"regexp".pos int) (? int)
func (? *@"regexp".inputBytes) @"regexp".step(@"regexp".pos int) (? rune, ? int)
type @"regexp".inputString struct { @"regexp".str string }
func (? *@"regexp".inputString) @"regexp".canCheckPrefix() (? bool)
func (? *@"regexp".inputString) @"regexp".context(@"regexp".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"regexp".inputString) @"regexp".hasPrefix(@"regexp".re *@"regexp".Regexp) (? bool)
func (? *@"regexp".inputString) @"regexp".index(@"regexp".re *@"regexp".Regexp, @"regexp".pos int) (? int)
func (? *@"regexp".inputString) @"regexp".step(@"regexp".pos int) (? rune, ? int)
type @"regexp".inputReader struct { @"regexp".r @"io".RuneReader; @"regexp".atEOT bool; @"regexp".pos int }
func (? *@"regexp".inputReader) @"regexp".canCheckPrefix() (? bool)
func (? *@"regexp".inputReader) @"regexp".context(@"regexp".pos int) (? @"regexp/syntax".EmptyOp)
func (? *@"regexp".inputReader) @"regexp".hasPrefix(@"regexp".re *@"regexp".Regexp) (? bool)
func (? *@"regexp".inputReader) @"regexp".index(@"regexp".re *@"regexp".Regexp, @"regexp".pos int) (? int)
func (? *@"regexp".inputReader) @"regexp".step(@"regexp".pos int) (? rune, ? int)
type @"regexp".input interface { @"regexp".canCheckPrefix() (? bool); @"regexp".context(@"regexp".pos int) (? @"regexp/syntax".EmptyOp); @"regexp".hasPrefix(@"regexp".re *@"regexp".Regexp) (? bool); @"regexp".index(@"regexp".re *@"regexp".Regexp, @"regexp".pos int) (? int); @"regexp".step(@"regexp".pos int) (@"regexp".r rune, @"regexp".width int) }
type @"regexp/syntax".InstOp uint8
func (? @"regexp/syntax".InstOp) @"regexp/syntax".String() (? string)
func (? *@"regexp/syntax".InstOp) @"regexp/syntax".String() (? string)
type @"regexp".entry struct { @"regexp".pc uint32; @"regexp".t *@"regexp".thread }
$$
0�github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathstrconvreflectencoding/binarysortstrings
bytesB0encoding/binaryC0ioD0regexpE0�D�0�Y 0I�SI=$pkg.suffixSortable=$newType(0,"Struct","suffixarray.suffixSortable","suffixSortable","index/suffixarray",function(sa_,inv_,h_,buf_){this.$val=this;this.sa=sa_!==undefined?sa_:($sliceType($Int)).nil;this.inv=inv_!==undefined?inv_:($sliceType($Int)).nil;this.h=h_!==undefined?h_:0;this.buf=buf_!==undefined?buf_:($sliceType($Int)).nil;});��($ptrType(I)).methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1],["updateGroups","updateGroups","index/suffixarray",$funcType([$Int],[],false),-1]];I.init([["sa","sa","index/suffixarray",($sliceType($Int)),""],["inv","inv","index/suffixarray",($sliceType($Int)),""],["h","h","index/suffixarray",$Int,""],["buf","buf","index/suffixarray",($sliceType($Int)),""]]);0suffixSortable0  0� 0J��J=$pkg.Index=$newType(0,"Struct","suffixarray.Index","Index","index/suffixarray",function(data_,sa_){this.$val=this;this.data=data_!==undefined?data_:($sliceType($Uint8)).nil;this.sa=sa_!==undefined?sa_:($sliceType($Int)).nil;});��($ptrType(J)).methods=[["Bytes","Bytes","",$funcType([],[($sliceType($Uint8))],false),-1],["FindAllIndex","FindAllIndex","",$funcType([($ptrType(E.Regexp)),$Int],[($sliceType(($sliceType($Int))))],false),-1],["Lookup","Lookup","",$funcType([($sliceType($Uint8)),$Int],[($sliceType($Int))],false),-1],["Read","Read","",$funcType([D.Reader],[$error],false),-1],["Write","Write","",$funcType([D.Writer],[$error],false),-1],["at","at","index/suffixarray",$funcType([$Int],[($sliceType($Uint8))],false),-1],["lookupAll","lookupAll","index/suffixarray",$funcType([($sliceType($Uint8))],[($sliceType($Int))],false),-1]];J.init([["data","data","index/suffixarray",($sliceType($Uint8)),""],["sa","sa","index/suffixarray",($sliceType($Int)),""]]);0Index0%	io:Reader	io:Writer
d.h=(k=d.h,l=2,(((k>>>16<<16)*l>>0)+(k<<16>>>16)*l)>>0);    }  
4m=b;n=0;while(n<m.$length){o=n;  
s(p=((o<0||o>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+o]),(p<0||p>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+p]=o);    n++;}  
�return b;    }; 0
qsufsort0��index/suffixarray:initGroups#index/suffixarray:sortedByFirstByte index/suffixarray:suffixSortableindex/suffixarray:updateGroups	sort:Sort 0��#index/suffixarray.sortedByFirstByte0G��G=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  
�  
�b=($arrayType($Int,256)).zero();$copy(b,($arrayType($Int,256)).zero(),($arrayType($Int,256)));  
�c=a;d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);    f=b;g=e;(g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g])+(1)>>0;    d++;}  [h=0;  ei=b;j=0;while(j<256){k=j;  ~l=h;m=((k<0||k>=b.length)?$throwRuntimeError("index out of range"):b[k])+h>>0;(k<0||k>=b.length)?$throwRuntimeError("index out of range"):b[k]=l;h=m;    j++;}  �n=($sliceType($Int)).make(a.$length);  o=a;p=0;while(p<o.$length){q=p;r=((p<0||p>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+p]);  "(s=((r<0||r>=b.length)?$throwRuntimeError("index out of range"):b[r]),(s<0||s>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+s]=q);  5  5t=b;u=r;(u<0||u>=t.length)?$throwRuntimeError("index out of range"):t[u]=((u<0||u>=t.length)?$throwRuntimeError("index out of range"):t[u])+(1)>>0;    p++;}  Dreturn n;    }; 0sortedByFirstByte0  0�	0index/suffixarray.initGroups0H��H=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  �c=($sliceType($Int)).make(b.$length);  �d=a.$length-1>>0;  �f=(e=((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]),((e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]));  
initGroups0  0��'(*index/suffixarray.suffixSortable).Len0 ��I.Ptr.prototype.Len=function(){var a;  Ea=this;  nreturn a.sa.$length;    };I.prototype.Len=function(){return this.$val.Len();}; 0suffixSortable0" index/suffixarray:suffixSortable 0��((*index/suffixarray.suffixSortable).Less0 �I.Ptr.prototype.Less=function(a,b){var c,d,e,f,g,h,i;  �c=this;  �return(d=c.inv,e=(f=c.sa,((a<0||a>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+a]))+c.h>>0,((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]))<(g=c.inv,h=(i=c.sa,((b<0||b>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+b]))+c.h>>0,((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]));    };I.prototype.Less=function(a,b){return this.$val.Less(a,b);}; 0suffixSortable0" index/suffixarray:suffixSortable 0�p((*index/suffixarray.suffixSortable).Swap0 �I.Ptr.prototype.Swap=function(a,b){var c,d,e,f,g,h,i;  �c=this;  d=(e=c.sa,((b<0||b>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+b]));f=(g=c.sa,((a<0||a>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+a]));(h=c.sa,(a<0||a>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+a]=d);(i=c.sa,(b<0||b>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+b]=f);    };I.prototype.Swap=function(a,b){return this.$val.Swap(a,b);}; 0suffixSortable0" index/suffixarray:suffixSortable 0��0(*index/suffixarray.suffixSortable).updateGroups0 �"I.Ptr.prototype.updateGroups=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  =b=this;  lc=$subslice(b.buf,0,0);  �g=(d=b.inv,e=(f=b.sa,((0<0||0>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+0]))+b.h>>0,((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]));  �  �h=1;while(h<b.sa.$length){  �  �l=(i=b.inv,j=(k=b.sa,((h<0||h>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+h]))+b.h>>0,((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]));    if(l>g){  �c=$append(c,h);  g=l;    }      �  �h=h+(1)>>0;}  c=$append(c,b.sa.$length);  Ab.buf=c;  �m=0;  �n=c;o=0;while(o<n.$length){p=((o<0||o>=n.$length)?$throwRuntimeError("index out of range"):n.$array[n.$offset+o]);  �  �q=m;while(q<p){  �(r=b.inv,s=(t=b.sa,((q<0||q>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+q])),(s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]=(a+p>>0)-1>>0);      �  �q=q+(1)>>0;}      if((p-m>>0)===1){  (u=b.sa,(m<0||m>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+m]=-1);    }  -m=p;    o++;}    };I.prototype.updateGroups=function(a){return this.$val.updateGroups(a);}; 0suffixSortableupdateGroups0" index/suffixarray:suffixSortable 0��index/suffixarray.New0K<K=$pkg.New=function(a){  �return new J.Ptr(a,F(a));    }; 0New05index/suffixarray:Indexindex/suffixarray:qsufsort 0��index/suffixarray.writeInt0L|L=function(a,b,c){var d,e;  ~C.PutVarint(b,new $Int64(0,c));  �d=a.Write($subslice(b,0,10));e=d[1];  �return e;    }; 0
writeInt0encoding/binary:PutVarint 0��index/suffixarray.readInt0M��M=function(a,b){var c,d,e,f;  ac=D.ReadFull(a,$subslice(b,0,10));d=c[1];  �e=C.Varint(b);f=e[0];  �return[((f.$low+((f.$high>>31)*4294967296))>>0),d];    }; 0	readInt0%encoding/binary:Varintio:ReadFull 0��index/suffixarray.writeSlice0N�pN=function(a,b,c){var d=0,e=$ifaceNil,f,g;  �f=10;  �while(d<c.$length&&(f+10>>0)<=b.$length){  f=f+(C.PutUvarint($subslice(b,f),new $Uint64(0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]))))>>0;      
writeSlice07encoding/binary:PutUvarintencoding/binary:PutVarint 0��index/suffixarray.readSlice0O�
O=function(a,b,c){var d=0,e=$ifaceNil,f,g,h,i,j,k,l;  o  sf=0;  }g=M(a,b);f=g[0];e=g[1];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[d,e];    }  �  �h=D.ReadFull(a,$subslice(b,10,f));e=h[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  !return[d,e];    }  [  _i=10;while(i<f){  �j=C.Uvarint($subslice(b,i));k=j[0];l=j[1];  �(d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]=(k.$low>>0);  �i=i+(l)>>0;      �  �d=d+(1)>>0;}  �return[d,e];    }; 0	readSlice0Aencoding/binary:Uvarintindex/suffixarray:readIntio:ReadFull 0��(*index/suffixarray.Index).Read0 �)J.Ptr.prototype.Read=function(a){var b,c,d,e,f,g,h,i,j,k,l;  Yb=this;  �c=($sliceType($Uint8)).make(16384);  �d=M(a,c);e=d[0];f=d[1];  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �return f;    }      if(((((2>>>16<<16)*e>>0)+(2<<16>>>16)*e)>>0)<b.data.$capacity||b.data.$capacity<e){  �b.data=($sliceType($Uint8)).make(e);  �b.sa=($sliceType($Int)).make(e);    }else{  �b.data=$subslice(b.data,0,e);  b.sa=$subslice(b.sa,0,e);    }  7  :g=D.ReadFull(a,b.data);h=g[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  kreturn h;    }  �  �i=b.sa;while(i.$length>0){  �j=O(a,c,i);k=j[0];l=j[1];  �    if(!($interfaceIsEqual(l,$ifaceNil))){  �return l;    }  �i=$subslice(i,k);    }   return $ifaceNil;    };J.prototype.Read=function(a){return this.$val.Read(a);}; 0Index0^index/suffixarray:Indexindex/suffixarray:readIntindex/suffixarray:readSliceio:ReadFull 0�� (*index/suffixarray.Index).Write0 �(J.Ptr.prototype.Write=function(a){var b,c,d,e,f,g,h,i,j;   7b=this;   wc=($sliceType($Uint8)).make(16384);   �   �d=L(a,c,b.data.$length);    if(!($interfaceIsEqual(d,$ifaceNil))){   �return d;    }   �  !e=a.Write(b.data);f=e[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  !+return f;    }  !K  !Og=b.sa;while(g.$length>0){  !lh=N(a,c,g);i=h[0];j=h[1];  !�    if(!($interfaceIsEqual(j,$ifaceNil))){  !�return j;    }  !�g=$subslice(g,i);    }  !�return $ifaceNil;    };J.prototype.Write=function(a){return this.$val.Write(a);}; 0Index0Sindex/suffixarray:Indexindex/suffixarray:writeIntindex/suffixarray:writeSlice 0�� (*index/suffixarray.Index).Bytes0 ��J.Ptr.prototype.Bytes=function(){var a;  "2a=this;  "Nreturn a.data;    };J.prototype.Bytes=function(){return this.$val.Bytes();}; 0Index0index/suffixarray:Index 0�;(*index/suffixarray.Index).at0 ��J.Ptr.prototype.at=function(a){var b,c;  "eb=this;  "�return $subslice(b.data,(c=b.sa,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a])));    };J.prototype.at=function(a){return this.$val.at(a);}; 0Indexat0index/suffixarray:Index 0�$(*index/suffixarray.Index).lookupAll0 �aJ.Ptr.prototype.lookupAll=function(a){var b,c,d;  #b=this;  #�c=A.Search(b.sa.$length,(function(c){  #�return B.Compare(b.at(c),a)>=0;    }));  $/d=c+A.Search(b.sa.$length-c>>0,(function(d){  $dreturn!B.HasPrefix(b.at(d+c>>0),a);    }))>>0;  $�return $subslice(b.sa,c,d);    };J.prototype.lookupAll=function(a){return this.$val.lookupAll(a);}; 0Index	lookupAll0\
�'(*index/suffixarray.Index).FindAllIndex0 �
rJ.Ptr.prototype.FindAllIndex=function(a,b){var c=($sliceType(($sliceType($Int)))).nil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae;  (od=this;  )e=a.LiteralPrefix();f=e[0];g=e[1];  );h=new($sliceType($Uint8))($stringToBytes(f));  )~    if(f===""){  )�    c=a.FindAllIndex(d.data,b);return c;    }  *    if(g){  +�  +�i=b;while(true){  +�j=d.Lookup(h,i);  +�    if(j.$length===0){  ,return c;    }  ,A.Ints(j);  ,4l=($sliceType($Int)).make((k=j.$length,(((2>>>16<<16)*k>>0)+(2<<16>>>16)*k)>>0));  ,\c=($sliceType(($sliceType($Int)))).make(j.$length);  ,�m=0;  ,�n=0;  ,�o=j;p=0;while(p<o.$length){q=((p<0||p>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+p]);  ,�    if(m===b){  ,�break;    }  -    if(n<=q){  --r=(((2>>>16<<16)*m>>0)+(2<<16>>>16)*m)>>0;  -A(s=r+0>>0,(s<0||s>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+s]=q);  -U(t=r+1>>0,(t<0||t>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+t]=q+h.$length>>0);  -t(m<0||m>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+m]=$subslice(l,r,(r+2>>0));  -�  -�m=m+(1)>>0;  -�n=q+h.$length>>0;    }    p++;}  -�c=$subslice(c,0,m);  -�    if(c.$length>=b||!((j.$length===i))){  .pbreak;    }      +�i=i+((u=(b-c.$length>>0),(((2>>>16<<16)*u>>0)+(2<<16>>>16)*u)>>0))>>0;}  .�    if(c.$length===0){  .�c=($sliceType(($sliceType($Int)))).nil;    }  .�return c;    }  /�a=E.MustCompile("^"+a.String());  0+  0/v=b;while(true){  0lw=d.Lookup(h,v);  0�    if(w.$length===0){  0�return c;    }  0�A.Ints(w);  0�c=$subslice(c,0,0);  0�x=0;  0�y=w;z=0;while(z<y.$length){aa=((z<0||z>=y.$length)?$throwRuntimeError("index out of range"):y.$array[y.$offset+z]);  1	    if(c.$length===b){  1#break;    }  11ab=a.FindIndex($subslice(d.data,aa));  1�    if(!(ab===($sliceType($Int)).nil)&&x<=aa){  1�(0<0||0>=ab.$length)?$throwRuntimeError("index out of range"):ab.$array[ab.$offset+0]=aa;  1�ac=ab;ad=1;(ad<0||ad>=ac.$length)?$throwRuntimeError("index out of range"):ac.$array[ac.$offset+ad]=((ad<0||ad>=ac.$length)?$throwRuntimeError("index out of range"):ac.$array[ac.$offset+ad])+(aa)>>0;  1�c=$append(c,ab);  2x=((1<0||1>=ab.$length)?$throwRuntimeError("index out of range"):ab.$array[ab.$offset+1]);    }    z++;}  2(    if(c.$length>=b||!((w.$length===v))){  2�break;    }      0:v=v+((ae=(b-c.$length>>0),(((2>>>16<<16)*ae>>0)+(2<<16>>>16)*ae)>>0))>>0;}  2�    if(c.$length===0){  2�c=($sliceType(($sliceType($Int)))).nil;    }  2�return c;    };J.prototype.FindAllIndex=function(a,b){return this.$val.FindAllIndex(a,b);}; 0Index08index/suffixarray:Indexregexp:MustCompile	sort:Ints 0 �	�{"Base":13043,"Files":[{"Name":"/usr/local/go/src/pkg/index/suffixarray/qsufsort.go","Base":1,"Size":4922,"Lines":[0,55,109,159,160,214,262,314,364,365,438,510,587,661,739,814,891,951,952,1023,1100,1175,1254,1329,1330,1350,1351,1365,1366,1401,1445,1476,1494,1506,1509,1547,1623,1652,1653,1684,1740,1741,1812,1867,1916,1967,1988,2044,2082,2122,2165,2182,2237,2249,2255,2319,2350,2377,2410,2436,2441,2445,2501,2557,2561,2562,2606,2609,2610,2672,2689,2692,2703,2705,2706,2750,2772,2792,2818,2831,2834,2905,2915,2939,2975,2978,3047,3077,3103,3122,3135,3138,3149,3151,3152,3199,3266,3297,3323,3357,3394,3433,3458,3475,3480,3497,3514,3518,3543,3565,3579,3583,3586,3647,3710,3754,3785,3794,3815,3833,3876,3886,3891,3918,3950,3969,4023,4033,4038,4042,4045,4057,4059,4060,4089,4100,4111,4120,4155,4157,4158,4224,4320,4405,4406,4458,4480,4509,4543,4585,4615,4628,4632,4635,4671,4687,4688,4756,4767,4795,4825,4860,4864,4883,4902,4906,4917,4920],"Infos":null},{"Name":"/usr/local/go/src/pkg/index/suffixarray/suffixarray.go","Base":4924,"Size":8118,"Lines":[0,55,109,159,160,237,267,270,286,289,322,356,359,385,470,561,564,584,585,594,603,622,628,638,646,648,649,711,731,744,803,805,806,843,900,931,968,970,971,1035,1089,1122,1171,1183,1185,1186,1263,1316,1401,1429,1449,1451,1452,1502,1538,1612,1656,1684,1751,1802,1805,1806,1829,1862,1863,1880,1908,1916,1918,1919,1969,2004,2077,2098,2112,2141,2158,2167,2170,2171,2200,2275,2284,2287,2288,2334,2383,2417,2436,2445,2448,2449,2457,2459,2460,2524,2525,2583,2625,2650,2680,2681,2697,2724,2741,2754,2757,2758,2777,2820,2874,2916,2943,2967,2977,3006,3029,3048,3051,3052,3066,3117,3130,3133,3134,3149,3181,3215,3233,3247,3251,3265,3268,3280,3282,3283,3317,3360,3386,3416,3417,3434,3489,3502,3505,3506,3521,3565,3578,3581,3582,3598,3630,3665,3683,3697,3701,3715,3718,3730,3732,3733,3793,3821,3824,3857,3872,3874,3875,3910,3935,3937,3938,4006,4042,4086,4129,4182,4271,4338,4433,4451,4453,4454,4534,4605,4668,4732,4761,4764,4821,4848,4876,4909,4929,4933,4961,4974,5001,5026,5030,5033,5041,5043,5044,5116,5187,5257,5327,5401,5418,5421,5494,5555,5591,5630,5653,5654,5697,5716,5751,5754,5755,5814,5842,5857,5925,5995,6060,6131,6200,6228,6293,6325,6351,6362,6367,6389,6429,6469,6483,6496,6527,6547,6558,6564,6617,6636,6656,6676,6707,6743,6756,6781,6787,6792,6820,6867,6926,6960,6970,6975,6979,7003,7019,7023,7032,7035,7036,7100,7168,7201,7268,7341,7342,7406,7470,7501,7526,7536,7540,7561,7584,7596,7626,7651,7661,7666,7736,7788,7818,7844,7858,7889,7905,7910,7914,7960,8018,8051,8060,8064,8067,8090,8105,8108,8116],"Infos":null}]}
 �