p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����
hash/crc64crc64hash��package crc64
import hash "hash"
func @"".Checksum(@"".data []byte, @"".tab *@"".Table) (? uint64)
const @"".ECMA = 0xc96c5795d7870f42
const @"".ISO = 0xd800000000000000
func @"".MakeTable(@"".poly uint64) (? *@"".Table)
func @"".New(@"".tab *@"".Table) (? @"hash".Hash64)
const @"".Size = 0x8
type @"".Table [256]uint64
func @"".Update(@"".crc uint64, @"".tab *@"".Table, @"".p []byte) (? uint64)
type @"".digest struct { @"".crc uint64; @"".tab *@"".Table }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Sum64() (? uint64)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".n int, @"".err error)
import io "io"
type @"hash".Hash64 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum64() (? uint64); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
$$
AA=$packages["hash"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BOB=$pkg.Table=$newType(2048,$kindArray,"crc64.Table","Table","hash/crc64",null);B.init($Uint64,256);Tablehash/crc64.Table D��D=$pkg.digest=$newType(0,$kindStruct,"crc64.digest","digest","hash/crc64",function(crc_,tab_){this.$val=this;this.crc=crc_!==undefined?crc_:new $Uint64(0,0);this.tab=tab_!==undefined?tab_:I.nil;});��K.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([J],[$Int,$error],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([J],[J],false)}];|D.init([{prop:"crc",name:"crc",pkg:"hash/crc64",typ:$Uint64,tag:""},{prop:"tab",name:"tab",pkg:"hash/crc64",typ:I,tag:""}]);digesthash/crc64.Ihash/crc64.Jhash/crc64.Khash/crc64.Tablehash/crc64.digest II=$ptrType(B);Ihash/crc64.Table JJ=$sliceType($Uint8);J KK=$ptrType(D);Khash/crc64.digest hash/crc64.MakeTableC�CC=$pkg.MakeTable=function(a){var $ptr={},a,b,c,d,e,f,g;  Bb=B.zero();  S  Wc=0;while(true){if(!(c<256)){break;}  pd=new $Uint64(0,c);  �  �e=0;while(true){if(!(e<8)){break;}  �    if((f=new $Uint64(d.$high&0,(d.$low&1)>>>0),(f.$high===0&&f.$low===1))){  �d=(g=$shiftRightUint64(d,1),new $Uint64(g.$high^a.$high,(g.$low^a.$low)>>>0));    }else{  �  �d=$shiftRightUint64(d,(1));        }      �  �e=e+(1)>>0;    }  �b.nilCheck,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d);      h  hc=c+(1)>>0;    }  �return b;    };	MakeTablehash/crc64.MakeTablehash/crc64.Table hash/crc64.NewEVE=$pkg.New=function(a){var $ptr={},a;  
return new D.ptr(new $Uint64(0,0),a);    };Newhash/crc64.Newhash/crc64.digest (*hash/crc64.digest).Size��D.ptr.prototype.Size=function(){var $ptr={},a;  *a=this;  Breturn 8;    };D.prototype.Size=function(){return this.$val.Size();};digesthash/crc64.digest (*hash/crc64.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var $ptr={},a;  Wa=this;  treturn 1;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc64.digest (*hash/crc64.digest).Reset��D.ptr.prototype.Reset=function(){var $ptr={},a;  �a=this;  �a.crc=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc64.digest hash/crc64.updateF��F=function(a,b,c){var $ptr={},a,b,c,d,e,f,g,h,i;  �a=new $Uint64(~a.$high,~a.$low>>>0);  �d=c;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  a=(g=(h=((a.$low<<24>>>24)^f)<<24>>>24,(b.nilCheck,((h<0||h>=b.length)?$throwRuntimeError("index out of range"):b[h]))),i=$shiftRightUint64(a,8),new $Uint64(g.$high^i.$high,(g.$low^i.$low)>>>0));    e++;}  ,return new $Uint64(~a.$high,~a.$low>>>0);    };updatehash/crc64.update hash/crc64.UpdateGLG=$pkg.Update=function(a,b,c){var $ptr={},a,b,c;  �return F(a,b,c);    };Updatehash/crc64.Updatehash/crc64.update (*hash/crc64.digest).Write��D.ptr.prototype.Write=function(a){var $ptr={},a,b,c,d,e,f;b=0;c=$ifaceNil;  �d=this;  
d.crc=F(d.crc,d.tab,a);  +    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc64.digesthash/crc64.update (*hash/crc64.digest).Sum64��D.ptr.prototype.Sum64=function(){var $ptr={},a;  Ga=this;  creturn a.crc;    };D.prototype.Sum64=function(){return this.$val.Sum64();};digesthash/crc64.digest (*hash/crc64.digest).Sum��D.ptr.prototype.Sum=function(a){var $ptr={},a,b,c;  yb=this;  �c=b.Sum64();  �return $append(a,($shiftRightUint64(c,56).$low<<24>>>24),($shiftRightUint64(c,48).$low<<24>>>24),($shiftRightUint64(c,40).$low<<24>>>24),($shiftRightUint64(c,32).$low<<24>>>24),($shiftRightUint64(c,24).$low<<24>>>24),($shiftRightUint64(c,16).$low<<24>>>24),($shiftRightUint64(c,8).$low<<24>>>24),(c.$low<<24>>>24));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc64.digest hash/crc64.ChecksumHYH=$pkg.Checksum=function(a,b){var $ptr={},a,b;  �return F(new $Uint64(0,0),b,a);    };Checksumhash/crc64.Checksumhash/crc64.update � {"Base":2262,"Files":[{"Name":"/usr/local/go/src/hash/crc64/crc64.go","Base":1,"Size":2260,"Lines":[0,55,109,159,160,235,309,325,339,340,354,355,398,413,414,441,449,511,537,538,584,611,613,614,697,720,721,795,832,849,877,896,923,942,970,982,996,1001,1005,1018,1021,1031,1033,1034,1093,1114,1126,1138,1140,1141,1204,1254,1314,1315,1359,1360,1406,1407,1446,1447,1502,1514,1537,1575,1578,1591,1593,1594,1660,1715,1743,1745,1746,1800,1833,1853,1855,1856,1905,1906,1947,1963,2081,2083,2084,2132,2182],"Infos":null}]}
 