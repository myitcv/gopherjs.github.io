0��Dgo/token�<Xpackage token
import testing "testing"
import fmt "fmt"
import sort "sort"
import sync "sync"
import strconv "strconv"
const @"".ADD @"".Token = 0xc
const @"".ADD_ASSIGN @"".Token = 0x17
const @"".AND @"".Token = 0x11
const @"".AND_ASSIGN @"".Token = 0x1c
const @"".AND_NOT @"".Token = 0x16
const @"".AND_NOT_ASSIGN @"".Token = 0x21
const @"".ARROW @"".Token = 0x24
const @"".ASSIGN @"".Token = 0x2a
const @"".BREAK @"".Token = 0x3d
const @"".CASE @"".Token = 0x3e
const @"".CHAN @"".Token = 0x3f
const @"".CHAR @"".Token = 0x8
const @"".COLON @"".Token = 0x3a
const @"".COMMA @"".Token = 0x34
const @"".COMMENT @"".Token = 0x2
const @"".CONST @"".Token = 0x40
const @"".CONTINUE @"".Token = 0x41
const @"".DEC @"".Token = 0x26
const @"".DEFAULT @"".Token = 0x42
const @"".DEFER @"".Token = 0x43
const @"".DEFINE @"".Token = 0x2f
const @"".ELLIPSIS @"".Token = 0x30
const @"".ELSE @"".Token = 0x44
const @"".EOF @"".Token = 0x1
const @"".EQL @"".Token = 0x27
const @"".FALLTHROUGH @"".Token = 0x45
const @"".FLOAT @"".Token = 0x6
const @"".FOR @"".Token = 0x46
const @"".FUNC @"".Token = 0x47
type @"".File struct { @"".set *@"".FileSet; @"".name string; @"".base int; @"".size int; @"".lines []int; @"".infos []@"".lineInfo }
func (? *@"".File) @"".AddLine(@"".offset int) ()
func (? *@"".File) @"".AddLineInfo(@"".offset int, @"".filename string, @"".line int) ()
func (? *@"".File) @"".Base() (? int)
func (? *@"".File) @"".Line(@"".p @"".Pos) (? int)
func (? *@"".File) @"".LineCount() (? int)
func (? *@"".File) @"".MergeLine(@"".line int) ()
func (? *@"".File) @"".Name() (? string)
func (? *@"".File) @"".Offset(@"".p @"".Pos) (? int)
func (? *@"".File) @"".Pos(@"".offset int) (? @"".Pos)
func (? *@"".File) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".File) @"".SetLines(@"".lines []int) (? bool)
func (? *@"".File) @"".SetLinesForContent(@"".content []byte) ()
func (? *@"".File) @"".Size() (? int)
func (? *@"".File) @"".info(@"".offset int) (@"".filename string, @"".line int, @"".column int)
func (? *@"".File) @"".position(@"".p @"".Pos) (@"".pos @"".Position)
type @"".FileSet struct { @"".mutex @"sync".RWMutex; @"".base int; @"".files []*@"".File; @"".last *@"".File }
func (? *@"".FileSet) @"".AddFile(@"".filename string, @"".base int, @"".size int) (? *@"".File)
func (? *@"".FileSet) @"".Base() (? int)
func (? *@"".FileSet) @"".File(@"".p @"".Pos) (@"".f *@"".File)
func (? *@"".FileSet) @"".Iterate(@"".f func (? *@"".File) (? bool)) ()
func (? *@"".FileSet) @"".Position(@"".p @"".Pos) (@"".pos @"".Position)
func (? *@"".FileSet) @"".Read(@"".decode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".Write(@"".encode func (? interface {  }) (? error)) (? error)
func (? *@"".FileSet) @"".file(@"".p @"".Pos) (? *@"".File)
const @"".GEQ @"".Token = 0x2e
const @"".GO @"".Token = 0x48
const @"".GOTO @"".Token = 0x49
const @"".GTR @"".Token = 0x29
const @"".HighestPrec = 0x7
const @"".IDENT @"".Token = 0x4
const @"".IF @"".Token = 0x4a
const @"".ILLEGAL @"".Token = 0x0
const @"".IMAG @"".Token = 0x7
const @"".IMPORT @"".Token = 0x4b
const @"".INC @"".Token = 0x25
const @"".INT @"".Token = 0x5
const @"".INTERFACE @"".Token = 0x4c
const @"".LAND @"".Token = 0x22
const @"".LBRACE @"".Token = 0x33
const @"".LBRACK @"".Token = 0x32
const @"".LEQ @"".Token = 0x2d
const @"".LOR @"".Token = 0x23
const @"".LPAREN @"".Token = 0x31
const @"".LSS @"".Token = 0x28
func @"".Lookup(@"".ident string) (? @"".Token)
const @"".LowestPrec = 0x0
const @"".MAP @"".Token = 0x4d
const @"".MUL @"".Token = 0xe
const @"".MUL_ASSIGN @"".Token = 0x19
const @"".NEQ @"".Token = 0x2c
const @"".NOT @"".Token = 0x2b
func @"".NewFileSet() (? *@"".FileSet)
const @"".NoPos @"".Pos = 0x0
const @"".OR @"".Token = 0x12
const @"".OR_ASSIGN @"".Token = 0x1d
const @"".PACKAGE @"".Token = 0x4e
const @"".PERIOD @"".Token = 0x35
type @"".Pos int
func (? @"".Pos) @"".IsValid() (? bool)
func (? *@"".Pos) @"".IsValid() (? bool)
type @"".Position struct { @"".Filename string; @"".Offset int; @"".Line int; @"".Column int }
func (? @"".Position) @"".String() (? string)
func (? *@"".Position) @"".IsValid() (? bool)
func (? *@"".Position) @"".String() (? string)
const @"".QUO @"".Token = 0xf
const @"".QUO_ASSIGN @"".Token = 0x1a
const @"".RANGE @"".Token = 0x4f
const @"".RBRACE @"".Token = 0x38
const @"".RBRACK @"".Token = 0x37
const @"".REM @"".Token = 0x10
const @"".REM_ASSIGN @"".Token = 0x1b
const @"".RETURN @"".Token = 0x50
const @"".RPAREN @"".Token = 0x36
const @"".SELECT @"".Token = 0x51
const @"".SEMICOLON @"".Token = 0x39
const @"".SHL @"".Token = 0x14
const @"".SHL_ASSIGN @"".Token = 0x1f
const @"".SHR @"".Token = 0x15
const @"".SHR_ASSIGN @"".Token = 0x20
const @"".STRING @"".Token = 0x9
const @"".STRUCT @"".Token = 0x52
const @"".SUB @"".Token = 0xd
const @"".SUB_ASSIGN @"".Token = 0x18
const @"".SWITCH @"".Token = 0x53
const @"".TYPE @"".Token = 0x54
func @"".TestFileSetRace(@"".t *@"testing".T) ()
type @"".Token int
func (? @"".Token) @"".IsKeyword() (? bool)
func (? @"".Token) @"".IsLiteral() (? bool)
func (? @"".Token) @"".IsOperator() (? bool)
func (? @"".Token) @"".Precedence() (? int)
func (? @"".Token) @"".String() (? string)
func (? *@"".Token) @"".IsKeyword() (? bool)
func (? *@"".Token) @"".IsLiteral() (? bool)
func (? *@"".Token) @"".IsOperator() (? bool)
func (? *@"".Token) @"".Precedence() (? int)
func (? *@"".Token) @"".String() (? string)
const @"".UnaryPrec = 0x6
const @"".VAR @"".Token = 0x55
const @"".XOR @"".Token = 0x13
const @"".XOR_ASSIGN @"".Token = 0x1e
type @"".lineInfo struct { @"".Offset int; @"".Filename string; @"".Line int }
type @"".serializedFile struct { @"".Name string; @"".Base int; @"".Size int; @"".Lines []int; @"".Infos []@"".lineInfo }
type @"".serializedFileSet struct { @"".Base int; @"".Files []@"".serializedFile }
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
import time "time"
type @"testing".common struct { @"testing".mu @"sync".RWMutex; @"testing".output []byte; @"testing".failed bool; @"testing".skipped bool; @"testing".finished bool; @"testing".start @"time".Time; @"testing".duration @"time".Duration; @"testing".self interface {  }; @"testing".signal chan interface {  } }
func (? *@"testing".common) @"testing".Error(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Errorf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fail() ()
func (? *@"testing".common) @"testing".FailNow() ()
func (? *@"testing".common) @"testing".Failed() (? bool)
func (? *@"testing".common) @"testing".Fatal(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fatalf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Log(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Logf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skip(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".SkipNow() ()
func (? *@"testing".common) @"testing".Skipf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skipped() (? bool)
func (? *@"testing".common) @"testing".log(@"testing".s string) ()
func (? *@"testing".common) @"testing".private() ()
func (? *@"testing".common) @"testing".skip() ()
type @"time".Time struct { @"time".sec int64; @"time".nsec uintptr; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicodeunicode/utf8bytessyscallstringstimeosstrconvreflectfmtsortflagbufiotext/tabwriter
Position0  0�� 0H?H=$pkg.Pos=$newType(4,"Int","token.Pos","Pos","go/token",null);��H.methods=[["IsValid","IsValid","",$funcType([],[$Bool],false),-1]];($ptrType(H)).methods=[["IsValid","IsValid","",$funcType([],[$Bool],false),-1]];0Pos0  0�� 0I��I=$pkg.File=$newType(0,"Struct","token.File","File","go/token",function(set_,name_,base_,size_,lines_,infos_){this.$val=this;this.set=set_!==undefined?set_:($ptrType(L)).nil;this.name=name_!==undefined?name_:"";this.base=base_!==undefined?base_:0;this.size=size_!==undefined?size_:0;this.lines=lines_!==undefined?lines_:($sliceType($Int)).nil;this.infos=infos_!==undefined?infos_:($sliceType(J)).nil;});��($ptrType(I)).methods=[["AddLine","AddLine","",$funcType([$Int],[],false),-1],["AddLineInfo","AddLineInfo","",$funcType([$Int,$String,$Int],[],false),-1],["Base","Base","",$funcType([],[$Int],false),-1],["Line","Line","",$funcType([H],[$Int],false),-1],["LineCount","LineCount","",$funcType([],[$Int],false),-1],["MergeLine","MergeLine","",$funcType([$Int],[],false),-1],["Name","Name","",$funcType([],[$String],false),-1],["Offset","Offset","",$funcType([H],[$Int],false),-1],["Pos","Pos","",$funcType([$Int],[H],false),-1],["Position","Position","",$funcType([H],[G],false),-1],["SetLines","SetLines","",$funcType([($sliceType($Int))],[$Bool],false),-1],["SetLinesForContent","SetLinesForContent","",$funcType([($sliceType($Uint8))],[],false),-1],["Size","Size","",$funcType([],[$Int],false),-1],["info","info","go/token",$funcType([$Int],[$String,$Int,$Int],false),-1],["position","position","go/token",$funcType([H],[G],false),-1]];I.init([["set","set","go/token",($ptrType(L)),""],["name","name","go/token",$String,""],["base","base","go/token",$Int,""],["size","size","go/token",$Int,""],["lines","lines","go/token",($sliceType($Int)),""],["infos","infos","go/token",($sliceType(J)),""]]);0File0Fgo/token:FileSetgo/token:Posgo/token:Positiongo/token:lineInfo 0�� 0J��J=$pkg.lineInfo=$newType(0,"Struct","token.lineInfo","lineInfo","go/token",function(Offset_,Filename_,Line_){this.$val=this;this.Offset=Offset_!==undefined?Offset_:0;this.Filename=Filename_!==undefined?Filename_:"";this.Line=Line_!==undefined?Line_:0;});jJ.init([["Offset","Offset","",$Int,""],["Filename","Filename","",$String,""],["Line","Line","",$Int,""]]);0
lineInfo0  0�� 0L�TL=$pkg.FileSet=$newType(0,"Struct","token.FileSet","FileSet","go/token",function(mutex_,base_,files_,last_){this.$val=this;this.mutex=mutex_!==undefined?mutex_:new D.RWMutex.Ptr();this.base=base_!==undefined?base_:0;this.files=files_!==undefined?files_:($sliceType(($ptrType(I)))).nil;this.last=last_!==undefined?last_:($ptrType(I)).nil;});�-($ptrType(L)).methods=[["AddFile","AddFile","",$funcType([$String,$Int,$Int],[($ptrType(I))],false),-1],["Base","Base","",$funcType([],[$Int],false),-1],["File","File","",$funcType([H],[($ptrType(I))],false),-1],["Iterate","Iterate","",$funcType([($funcType([($ptrType(I))],[$Bool],false))],[],false),-1],["Position","Position","",$funcType([H],[G],false),-1],["Read","Read","",$funcType([($funcType([$emptyInterface],[$error],false))],[$error],false),-1],["Write","Write","",$funcType([($funcType([$emptyInterface],[$error],false))],[$error],false),-1],["file","file","go/token",$funcType([H],[($ptrType(I))],false),-1]];L.init([["mutex","mutex","go/token",D.RWMutex,""],["base","base","go/token",$Int,""],["files","files","go/token",($sliceType(($ptrType(I)))),""],["last","last","go/token",($ptrType(I)),""]]);0	FileSet0>
keywords0go/token:keywords 0�G 0  �    S=$toNativeArray("String",["ILLEGAL","EOF","COMMENT","","IDENT","INT","FLOAT","IMAG","CHAR","STRING","","","+","-","*","/","%","&","|","^","<<",">>","&^","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=","&^=","&&","||","<-","++","--","==","<",">","=","!","!=","<=",">=",":=","...","(","[","{",",",".",")","]","}",";",":","","","break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"]);0tokens0go/token:tokens 0��go/token.TestFileSetRace0FcF=$pkg.TestFileSetRace=function(a){   [a.common.Skip(new($sliceType($emptyInterface))([]));    }; 0TestFileSetRace0  0��(*go/token.Position).IsValid0 ��G.Ptr.prototype.IsValid=function(){var a;  �a=this;  �return a.Line>0;    };G.prototype.IsValid=function(){return this.$val.IsValid();}; 0
Position0go/token:Position 0��(go/token.Position).String0 ��G.Ptr.prototype.String=function(){var a,b;  �a=new G.Ptr();$copy(a,this,G);  b=a.Filename;      if(a.IsValid()){  3    if(!(b==="")){  Cb=b+(":");    }  Rb=b+(B.Sprintf("%d:%d",new($sliceType($emptyInterface))([new $Int(a.Line),new $Int(a.Column)])));    }  �    if(b===""){  �b="-";    }  �return b;    };G.prototype.String=function(){return this.$val.String();}; 0
Position0 fmt:Sprintfgo/token:Position 0��(go/token.Pos).IsValid0 ��H.prototype.IsValid=function(){var a;  a=this.$val!==undefined?this.$val:this;  $return!((a===0));    };$ptrType(H).prototype.IsValid=function(){return new H(this.$get()).IsValid();}; 0Pos0go/token:Pos 0��(*go/token.File).Name0 ��I.Ptr.prototype.Name=function(){var a;  
NewFileSet0/
searchInts0  0�Y(*go/token.FileSet).Read0 ��L.Ptr.prototype.Read=function(a){var b,c,d,e,f,g,h;  6�b=this;  71  75c=new Q.Ptr();$copy(c,new Q.Ptr(),Q);  7K  7Nd=a(c);    if(!($interfaceIsEqual(d,$ifaceNil))){  7qreturn d;    }  7�b.mutex.Lock();  7�b.base=c.Base;  7�e=($sliceType(($ptrType(I)))).make(c.Files.$length);  7�  7�f=0;while(f<c.Files.$length){  7�h=(g=c.Files,((f<0||f>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+f]));  8(f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]=new I.Ptr(b,h.Name,h.Base,h.Size,h.Lines,h.Infos);      7�  7�f=f+(1)>>0;}  8Gb.files=e;  8Xb.last=($ptrType(I)).nil;  8fb.mutex.Unlock();  8yreturn $ifaceNil;    };L.prototype.Read=function(a){return this.$val.Read(a);}; 0	FileSet0=
}else if(b===34){  Kreturn 2;      K!}else if(b===39||b===44||b===40||b===45||b===41||b===46){  KFreturn 3;      KP}else if(b===12||b===13||b===18||b===19){  Kjreturn 4;      Kt}else if(b===14||b===15||b===16||b===20||b===21||b===17||b===22){  K�return 5;    }  K�return 0;    };$ptrType(R).prototype.Precedence=function(){return new R(this.$get()).Precedence();}; 0Token0go/token:Token 0�B
 �