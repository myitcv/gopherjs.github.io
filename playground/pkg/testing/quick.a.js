p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �����testing/quickquickflagfmtmath	math/randreflectstrings�Q�package quick
import flag "flag"
import fmt "fmt"
import math "math"
import rand "math/rand"
import reflect "reflect"
import strings "strings"
func @"".Check(@"".f interface {  }, @"".config *@"".Config) (@"".err error)
func @"".CheckEqual(@"".f interface {  }, @"".g interface {  }, @"".config *@"".Config) (@"".err error)
type @"".CheckEqualError struct { ? @"".CheckError; @"".Out1 []interface {  }; @"".Out2 []interface {  } }
func (? *@"".CheckEqualError) @"".Error() (? string)
type @"".CheckError struct { @"".Count int; @"".In []interface {  } }
func (? *@"".CheckError) @"".Error() (? string)
type @"".Config struct { @"".MaxCount int; @"".MaxCountScale float64; @"".Rand *@"math/rand".Rand; @"".Values func (? []@"reflect".Value, ? *@"math/rand".Rand) () }
func (? *@"".Config) @"".getMaxCount() (@"".maxCount int)
func (? *@"".Config) @"".getRand() (? *@"math/rand".Rand)
type @"".Generator interface { @"".Generate(@"".rand *@"math/rand".Rand, @"".size int) (? @"reflect".Value) }
type @"".SetupError string
func (? @"".SetupError) @"".Error() (? string)
func (? *@"".SetupError) @"".Error() (? string)
func @"".Value(@"".t @"reflect".Type, @"".rand *@"math/rand".Rand) (@"".value @"reflect".Value, @"".ok bool)
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"".x @"reflect".Value, @"".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"".key @"reflect".Value, @"".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"".i int, @"".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"".i int, @"".j int, @"".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"".x @"reflect".Value, @"".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"".context string, @"".dst *@"reflect".rtype, @"".target @"unsafe".Pointer) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"".op string, @"".in []@"reflect".Value) (? []@"reflect".Value)
import js "github.com/gopherjs/gopherjs/js"
func (? @"reflect".Value) @"reflect".object() (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"".nb bool) (@"".val @"reflect".Value, @"".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"".x @"reflect".Value, @"".nb bool) (@"".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"".x @"reflect".Value, @"".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"".key @"reflect".Value, @"".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"".i int, @"".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"".i int, @"".j int, @"".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"".x @"reflect".Value, @"".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"".context string, @"".dst *@"reflect".rtype, @"".target @"unsafe".Pointer) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"".op string, @"".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".object() (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"".nb bool) (@"".val @"reflect".Value, @"".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"".x @"reflect".Value, @"".nb bool) (@"".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"".x []rune) ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".Comparable() (? bool); @"reflect".ConvertibleTo(@"".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"".u @"reflect".Type) (? bool); @"reflect".In(@"".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *@"reflect".typeAlg; @"reflect".gc [2]@"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".Comparable() (? bool)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"".i int) (@"".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"".name string) (@"".m @"reflect".Method, @"".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"github.com/gopherjs/gopherjs/js".Object struct { @"github.com/gopherjs/gopherjs/js".object *@"github.com/gopherjs/gopherjs/js".Object }
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Bool() (? bool)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Call(@"".name string, @"".args ...interface {  }) (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Delete(@"".key string) ()
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Float() (? float64)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Get(@"".key string) (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Index(@"".i int) (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Int() (? int)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Int64() (? int64)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Interface() (? interface {  })
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Invoke(@"".args ...interface {  }) (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Length() (? int)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".New(@"".args ...interface {  }) (? *@"github.com/gopherjs/gopherjs/js".Object)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Set(@"".key string, @"".value interface {  }) ()
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".SetIndex(@"".i int, @"".value interface {  }) ()
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".String() (? string)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Uint64() (? uint64)
func (? *@"github.com/gopherjs/gopherjs/js".Object) @"github.com/gopherjs/gopherjs/js".Unsafe() (? uintptr)
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"".i int) (@"".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"".name string) (@"".m @"reflect".Method, @"".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".typeAlg struct { @"reflect".hash func (? @"unsafe".Pointer, ? uintptr, ? uintptr) (? uintptr); @"reflect".equal func (? @"unsafe".Pointer, ? @"unsafe".Pointer, ? uintptr) (? bool) }
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"".key string) (? string)
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
$$
'AA=$packages["flag"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["fmt"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["math"];<    $r=C.$init();$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["math/rand"];<    $r=D.$init();$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["reflect"];<    $r=E.$init();$s=5;case 5:if($r&&$r.$blocking){$r=$r();} FF=$packages["strings"];<    $r=F.$init();$s=6;case 6:if($r&&$r.$blocking){$r=$r();} H_H=$pkg.Generator=$newType(8,$kindInterface,"quick.Generator","Generator","testing/quick",null);[H.init([{prop:"Generate",name:"Generate",pkg:"",typ:$funcType([Z,$Int],[E.Value],false)}]);	Generatorreflect.Valuetesting/quick.Generatortesting/quick.Z M�eM=$pkg.Config=$newType(0,$kindStruct,"quick.Config","Config","testing/quick",function(MaxCount_,MaxCountScale_,Rand_,Values_){this.$val=this;this.MaxCount=MaxCount_!==undefined?MaxCount_:0;this.MaxCountScale=MaxCountScale_!==undefined?MaxCountScale_:0;this.Rand=Rand_!==undefined?Rand_:Z.nil;this.Values=Values_!==undefined?Values_:$throwNilPointerError;});��AB.methods=[{prop:"getRand",name:"getRand",pkg:"testing/quick",typ:$funcType([],[Z],false)},{prop:"getMaxCount",name:"getMaxCount",pkg:"testing/quick",typ:$funcType([],[$Int],false)}];��M.init([{prop:"MaxCount",name:"MaxCount",pkg:"",typ:$Int,tag:""},{prop:"MaxCountScale",name:"MaxCountScale",pkg:"",typ:$Float64,tag:""},{prop:"Rand",name:"Rand",pkg:"",typ:Z,tag:""},{prop:"Values",name:"Values",pkg:"",typ:AE,tag:""}]);Configtesting/quick.ABtesting/quick.ACtesting/quick.AEtesting/quick.Configtesting/quick.Z O_O=$pkg.SetupError=$newType(8,$kindString,"quick.SetupError","SetupError","testing/quick",null);QO.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];
SetupErrortesting/quick.SetupError P��P=$pkg.CheckError=$newType(0,$kindStruct,"quick.CheckError","CheckError","testing/quick",function(Count_,In_){this.$val=this;this.Count=Count_!==undefined?Count_:0;this.In=In_!==undefined?In_:AA.nil;});RAF.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];hP.init([{prop:"Count",name:"Count",pkg:"",typ:$Int,tag:""},{prop:"In",name:"In",pkg:"",typ:AA,tag:""}]);
CheckErrortesting/quick.AAtesting/quick.AFtesting/quick.CheckError Q�.Q=$pkg.CheckEqualError=$newType(0,$kindStruct,"quick.CheckEqualError","CheckEqualError","testing/quick",function(CheckError_,Out1_,Out2_){this.$val=this;this.CheckError=CheckError_!==undefined?CheckError_:new P.ptr();this.Out1=Out1_!==undefined?Out1_:AA.nil;this.Out2=Out2_!==undefined?Out2_:AA.nil;});RAG.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];��Q.init([{prop:"CheckError",name:"",pkg:"",typ:P,tag:""},{prop:"Out1",name:"Out1",pkg:"",typ:AA,tag:""},{prop:"Out2",name:"Out2",pkg:"",typ:AA,tag:""}]);CheckEqualErrortesting/quick.AAtesting/quick.AGtesting/quick.CheckEqualErrortesting/quick.CheckError XX=$ptrType(E.rtype);Xreflect.rtype YY=$sliceType($Int32);Y ZZ=$ptrType(D.Rand);Zmath/rand.Rand AAAA=$sliceType($emptyInterface);AA ABAB=$ptrType(M);ABtesting/quick.Config ACAC=$sliceType(E.Value);ACreflect.Value ADAD=$sliceType($String);AD AEAE=$funcType([AC,Z],[],false);AEtesting/quick.ACtesting/quick.Z AFAF=$ptrType(P);AFtesting/quick.CheckError AGAG=$ptrType(Q);AGtesting/quick.CheckEqualError GdefaultMaxCount NN=new M.ptr();defaultConfigtesting/quick.Configtesting/quick.defaultConfig a|    a=A.Int("quickchecks",100,"The default number of iterations for each check");$s=7;case 7:if(a&&a.$blocking){a=a();}G=a;flag.Inttesting/quick.defaultMaxCount testing/quick.randFloat32I��I=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d,e;var $f=function(){s:while(true){switch($s){case 0:  #c=b.Float64();$s=1;case 1:if(c&&c.$blocking){c=c();}d=c*3.4028234663852886e+38;  Je=b.Int();$s=4;case 4:if(e&&e.$blocking){e=e();}if((e&1)===1){$s=2;continue;}$s=3;continue;    case 2:  cd=-d;    case 3:  nreturn $fround(d);    case-1:}return;}};$f.$blocking=true;return $f;};randFloat32testing/quick.randFloat32 testing/quick.randFloat64J��J=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d,e;var $f=function(){s:while(true){switch($s){case 0:  �c=b.Float64();$s=1;case 1:if(c&&c.$blocking){c=c();}d=c*1.7976931348623157e+308;  #e=b.Int();$s=4;case 4:if(e&&e.$blocking){e=e();}if((e&1)===1){$s=2;continue;}$s=3;continue;    case 2:  <d=-d;    case 3:  Greturn d;    case-1:}return;}};$f.$blocking=true;return $f;};randFloat64testing/quick.randFloat64 testing/quick.randInt64K�K=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d;var $f=function(){s:while(true){switch($s){case 0:  �d=b.Int63();$s=1;case 1:if(d&&d.$blocking){d=d();}return(c=d,new $Int64(c.$high-1073741824,c.$low-0));    case-1:}return;}};$f.$blocking=true;return $f;};	randInt64testing/quick.randInt64 testing/quick.ValueL��L=$pkg.Value=function(b,c){var $ptr={},$r,$s=0,$this=this,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;d=new E.Value.ptr();e=false;var $f=function(){s:while(true){switch($s){case 0:  o  rg=E.Zero(b);$s=1;case 1:if(g&&g.$blocking){g=g();}h=g.Interface();$s=2;case 2:if(h&&h.$blocking){h=h();}f=$assertType(h,H,true);i=f[0];j=f[1];if(j){$s=3;continue;}$s=4;continue;    case 3:  �    l=i.Generate(c,50);$s=5;case 5:if(l&&l.$blocking){l=l();}k=l;m=true;d=k;e=m;return[d,e];    case 4:  �n=E.New(b);$s=6;case 6:if(n&&n.$blocking){n=n();}o=n.Elem();$s=7;case 7:if(o&&o.$blocking){o=o();}p=o;  �  �q=b;s=q.Kind();$s=8;case 8:if(s&&s.$blocking){s=s();}r=s;if(r===1){$s=9;continue;}if(r===13){$s=10;continue;}if(r===14){$s=11;continue;}if(r===15){$s=12;continue;}if(r===16){$s=13;continue;}if(r===4){$s=14;continue;}if(r===5){$s=15;continue;}if(r===6){$s=16;continue;}if(r===3){$s=17;continue;}if(r===2){$s=18;continue;}if(r===9){$s=19;continue;}if(r===10){$s=20;continue;}if(r===11){$s=21;continue;}if(r===8){$s=22;continue;}if(r===7){$s=23;continue;}if(r===12){$s=24;continue;}if(r===21){$s=25;continue;}if(r===22){$s=26;continue;}if(r===23){$s=27;continue;}if(r===24){$s=28;continue;}if(r===25){$s=29;continue;}$s=30;continue;   case 9:  5t=c.Int();$s=32;case 32:if(t&&t.$blocking){t=t();}$r=p.SetBool((t&1)===0);$s=33;case 33:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  Scase 10:  ku=I(c);$s=34;case 34:if(u&&u.$blocking){u=u();}$r=p.SetFloat(u);$s=35;case 35:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 11:  �v=J(c);$s=36;case 36:if(v&&v.$blocking){v=v();}$r=p.SetFloat(v);$s=37;case 37:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 12:  �w=I(c);$s=38;case 38:if(w&&w.$blocking){w=w();}x=I(c);$s=39;case 39:if(x&&x.$blocking){x=x();}$r=p.SetComplex(new $Complex128(w,x));$s=40;case 40:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  3case 13:  Ny=J(c);$s=41;case 41:if(y&&y.$blocking){y=y();}z=J(c);$s=42;case 42:if(z&&z.$blocking){z=z();}$r=p.SetComplex(new $Complex128(y,z));$s=43;case 43:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 14:  �aa=K(c);$s=44;case 44:if(aa&&aa.$blocking){aa=aa();}$r=p.SetInt(aa);$s=45;case 45:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 15:  �ab=K(c);$s=46;case 46:if(ab&&ab.$blocking){ab=ab();}$r=p.SetInt(ab);$s=47;case 47:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 16:  	ac=K(c);$s=48;case 48:if(ac&&ac.$blocking){ac=ac();}$r=p.SetInt(ac);$s=49;case 49:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  	case 17:  	3ad=K(c);$s=50;case 50:if(ad&&ad.$blocking){ad=ad();}$r=p.SetInt(ad);$s=51;case 51:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  	Ncase 18:  	bae=K(c);$s=52;case 52:if(ae&&ae.$blocking){ae=ae();}$r=p.SetInt(ae);$s=53;case 53:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  	}case 19:  	�ag=K(c);$s=54;case 54:if(ag&&ag.$blocking){ag=ag();}$r=p.SetUint((af=ag,new $Uint64(af.$high,af.$low)));$s=55;case 55:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  	�case 20:  	�ai=K(c);$s=56;case 56:if(ai&&ai.$blocking){ai=ai();}$r=p.SetUint((ah=ai,new $Uint64(ah.$high,ah.$low)));$s=57;case 57:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  	�case 21:  

ak=K(c);$s=58;case 58:if(ak&&ak.$blocking){ak=ak();}$r=p.SetUint((aj=ak,new $Uint64(aj.$high,aj.$low)));$s=59;case 59:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  
.case 22:  
Dam=K(c);$s=60;case 60:if(am&&am.$blocking){am=am();}$r=p.SetUint((al=am,new $Uint64(al.$high,al.$low)));$s=61;case 61:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  
hcase 23:  
}ao=K(c);$s=62;case 62:if(ao&&ao.$blocking){ao=ao();}$r=p.SetUint((an=ao,new $Uint64(an.$high,an.$low)));$s=63;case 63:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  
�case 24:  
�aq=K(c);$s=64;case 64:if(aq&&aq.$blocking){aq=aq();}$r=p.SetUint((ap=aq,new $Uint64(ap.$high,ap.$low)));$s=65;case 65:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  
�case 25:  
�ar=c.Intn(50);$s=66;case 66:if(ar&&ar.$blocking){ar=ar();}as=ar;  at=E.MakeMap(q);$s=67;case 67:if(at&&at.$blocking){at=at();}$r=p.Set(at);$s=68;case 68:if($r&&$r.$blocking){$r=$r();}  9  =au=0;case 69:if(!(au<as)){$s=70;continue;}  \aw=q.Key();$s=71;case 71:if(aw&&aw.$blocking){aw=aw();}ax=L(aw,c);$s=72;case 72:if(ax&&ax.$blocking){ax=ax();}av=ax;ay=av[0];az=av[1];  �bb=q.Elem();$s=73;case 73:if(bb&&bb.$blocking){bb=bb();}bc=L(bb,c);$s=74;case 74:if(bc&&bc.$blocking){bc=bc();}ba=bc;bd=ba[0];be=ba[1];  �    if(!az||!be){  �    bf=new E.Value.ptr(X.nil,0,0);bg=false;d=bf;e=bg;return[d,e];    }  �$r=p.SetMapIndex(ay,bd);$s=75;case 75:if($r&&$r.$blocking){$r=$r();}      S  Sau=au+(1)>>0;    $s=69;continue;case 70:    $s=31;continue;  case 26:  $bi=q.Elem();$s=76;case 76:if(bi&&bi.$blocking){bi=bi();}bj=L(bi,c);$s=77;case 77:if(bj&&bj.$blocking){bj=bj();}bh=bj;bk=bh[0];bl=bh[1];  O    if(!bl){  [    bm=new E.Value.ptr(X.nil,0,0);bn=false;d=bm;e=bn;return[d,e];    }  bo=q.Elem();$s=78;case 78:if(bo&&bo.$blocking){bo=bo();}bp=E.New(bo);$s=79;case 79:if(bp&&bp.$blocking){bp=bp();}$r=p.Set(bp);$s=80;case 80:if($r&&$r.$blocking){$r=$r();}  �bq=p.Elem();$s=81;case 81:if(bq&&bq.$blocking){bq=bq();}$r=bq.Set(bk);$s=82;case 82:if($r&&$r.$blocking){$r=$r();}    $s=31;continue;  �case 27:  �br=c.Intn(50);$s=83;case 83:if(br&&br.$blocking){br=br();}bs=br;  �bt=E.MakeSlice(q,bs,bs);$s=84;case 84:if(bt&&bt.$blocking){bt=bt();}$r=p.Set(bt);$s=85;case 85:if($r&&$r.$blocking){$r=$r();}  -  1bu=0;case 86:if(!(bu<bs)){$s=87;continue;}  Pbw=q.Elem();$s=88;case 88:if(bw&&bw.$blocking){bw=bw();}bx=L(bw,c);$s=89;case 89:if(bx&&bx.$blocking){bx=bx();}bv=bx;by=bv[0];bz=bv[1];  |    if(!bz){  �    ca=new E.Value.ptr(X.nil,0,0);cb=false;d=ca;e=cb;return[d,e];    }  �cc=p.Index(bu);$s=90;case 90:if(cc&&cc.$blocking){cc=cc();}$r=cc.Set(by);$s=91;case 91:if($r&&$r.$blocking){$r=$r();}      G  Gbu=bu+(1)>>0;    $s=86;continue;case 87:    $s=31;continue;  �case 28:  �cd=c.Intn(50);$s=92;case 92:if(cd&&cd.$blocking){cd=cd();}ce=cd;  cf=$makeSlice(Y,ce);  ,  0cg=0;case 93:if(!(cg<ce)){$s=94;continue;}  Och=c.Intn(1114111);$s=95;case 95:if(ch&&ch.$blocking){ch=ch();}((cg<0||cg>=cf.$length)?$throwRuntimeError("index out of range"):cf.$array[cf.$offset+cg]=(ch>>0));      F  Fcg=cg+(1)>>0;    $s=93;continue;case 94:  p.SetString($runesToString(cf));    $s=31;continue;  �case 29:  �  �ci=0;case 96:if(!(ci<p.NumField())){$s=97;continue;}  �ck=q.Field(ci);$s=98;case 98:if(ck&&ck.$blocking){ck=ck();}cl=L(ck.Type,c);$s=99;case 99:if(cl&&cl.$blocking){cl=cl();}cj=cl;cm=cj[0];cn=cj[1];      if(!cn){      co=new E.Value.ptr(X.nil,0,0);cp=false;d=co;e=cp;return[d,e];    }  Dcq=p.Field(ci);$s=100;case 100:if(cq&&cq.$blocking){cq=cq();}$r=cq.Set(cm);$s=101;case 101:if($r&&$r.$blocking){$r=$r();}      �  �ci=ci+(1)>>0;    $s=96;continue;case 97:    $s=31;continue;case 30:  i    cr=new E.Value.ptr(X.nil,0,0);cs=false;d=cr;e=cs;return[d,e];    case 31:  �    ct=p;cu=true;d=ct;e=cu;return[d,e];    case-1:}return;}};$f.$blocking=true;return $f;};Valuereflect.MakeMapreflect.MakeSlicereflect.Newreflect.Valuereflect.Zeroreflect.rtypetesting/quick.Generatortesting/quick.Valuetesting/quick.Xtesting/quick.Ytesting/quick.randFloat32testing/quick.randFloat64testing/quick.randInt64 (*testing/quick.Config).getRand��M.ptr.prototype.getRand=function(){var $ptr={},b;  �b=this;  �    if(b.Rand===Z.nil){  
return D.New(D.NewSource(new $Int64(0,0)));    }  1return b.Rand;    };M.prototype.getRand=function(){return this.$val.getRand();};ConfiggetRand~math/rand.Newmath/rand.NewSourcemath/rand.Randtesting/quick.Configtesting/quick.Z #(*testing/quick.Config).getMaxCount�9M.ptr.prototype.getMaxCount=function(){var $ptr={},b,c;b=0;  �c=this;  �b=c.MaxCount;  �    if(b===0){  �    if(!((c.MaxCountScale===0))){  b=(c.MaxCountScale*G.$get()>>0);    }else{  \b=G.$get();    }    }  �return b;    };M.prototype.getMaxCount=function(){return this.$val.getMaxCount();};ConfiggetMaxCount~testing/quick.Configtesting/quick.defaultMaxCount  (testing/quick.SetupError).Error��O.prototype.Error=function(){var $ptr={},b;  &b=this.$val;  Ereturn b;    };$ptrType(O).prototype.Error=function(){return new O(this.$get()).Error();};
SetupErrortesting/quick.SetupError !(*testing/quick.CheckError).Error��P.ptr.prototype.Error=function(){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f;var $f=function(){s:while(true){switch($s){case 0:  �b=$this;  �c=new $Int(b.Count);d=W(b.In);$s=1;case 1:if(d&&d.$blocking){d=d();}e=new $String(d);f=B.Sprintf("#%d: failed on input %s",new AA([c,e]));$s=2;case 2:if(f&&f.$blocking){f=f();}return f;    case-1:}return;}};$f.$blocking=true;return $f;};P.prototype.Error=function(){return this.$val.Error();};
CheckErrorfmt.Sprintftesting/quick.AAtesting/quick.CheckErrortesting/quick.toString &(*testing/quick.CheckEqualError).Error�xQ.ptr.prototype.Error=function(){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j;var $f=function(){s:while(true){switch($s){case 0:  �b=$this;   c=new $Int(b.CheckError.Count);d=W(b.CheckError.In);$s=1;case 1:if(d&&d.$blocking){d=d();}e=new $String(d);f=W(b.Out1);$s=2;case 2:if(f&&f.$blocking){f=f();}g=new $String(f);h=W(b.Out2);$s=3;case 3:if(h&&h.$blocking){h=h();}i=new $String(h);j=B.Sprintf("#%d: failed on input %s. Output 1: %s. Output 2: %s",new AA([c,e,g,i]));$s=4;case 4:if(j&&j.$blocking){j=j();}return j;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Error=function(){return this.$val.Error();};CheckEqualErrorfmt.Sprintftesting/quick.AAtesting/quick.CheckEqualErrortesting/quick.toString testing/quick.CheckR�R=$pkg.Check=function(b,c){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;d=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  �    if(c===AB.nil){  �c=N;    }  �f=U(b);$s=1;case 1:if(f&&f.$blocking){f=f();}e=f;g=e[0];h=e[1];i=e[2];      if(!i){  d=new O("argument is not a function");  Kreturn d;    }  Wj=h.NumOut();$s=4;case 4:if(j&&j.$blocking){j=j();}if(!((j===1))){$s=2;continue;}$s=3;continue;    case 2:  rd=new O("function returns more than one value.");  �return d;    case 3:  �k=h.Out(0);$s=7;case 7:if(k&&k.$blocking){k=k();}l=k.Kind();$s=8;case 8:if(l&&l.$blocking){l=l();}if(!((l===1))){$s=5;continue;}$s=6;continue;    case 5:  �d=new O("function does not return a bool");  return d;    case 6:  &m=h.NumIn();$s=9;case 9:if(m&&m.$blocking){m=m();}n=$makeSlice(AC,m);  Yo=c.getRand();  sp=c.getMaxCount();  �  �q=0;case 10:if(!(q<p)){$s=11;continue;}  �r=T(n,h,c,o);$s=12;case 12:if(r&&r.$blocking){r=r();}d=r;  �    if(!($interfaceIsEqual(d,$ifaceNil))){  return d;    }  t=g.Call(n);$s=15;case 15:if(t&&t.$blocking){t=t();}u=(s=t,(0>=s.$length?$throwRuntimeError("index out of range"):s.$array[s.$offset+0])).Bool();$s=16;case 16:if(u&&u.$blocking){u=u();}if(!u){$s=13;continue;}$s=14;continue;    case 13:  9v=V(n);$s=17;case 17:if(v&&v.$blocking){v=v();}d=new P.ptr(q+1>>0,v);  nreturn d;    case 14:      �  �q=q+(1)>>0;    $s=10;continue;case 11:  ~return d;    case-1:}return;}};$f.$blocking=true;return $f;};Checkreflect.Valuetesting/quick.ABtesting/quick.ACtesting/quick.Checktesting/quick.CheckErrortesting/quick.Configtesting/quick.SetupErrortesting/quick.arbitraryValuestesting/quick.defaultConfigtesting/quick.functionAndTypetesting/quick.getMaxCount~testing/quick.getRand~testing/quick.toInterfaces testing/quick.CheckEqualS��S=$pkg.CheckEqual=function(b,c,d){var $ptr={},$r,$s=0,$this=this,aa,ab,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  �    if(d===AB.nil){  �d=N;    }  g=U(b);$s=1;case 1:if(g&&g.$blocking){g=g();}f=g;h=f[0];i=f[1];j=f[2];  *    if(!j){  5e=new O("f is not a function");  _return e;    }  jl=U(c);$s=2;case 2:if(l&&l.$blocking){l=l();}k=l;m=k[0];n=k[1];j=k[2];  �    if(!j){  �e=new O("g is not a function");  �return e;    }  �    if(!($interfaceIsEqual(i,n))){  �e=new O("functions have different types");  return e;    }  &o=i.NumIn();$s=3;case 3:if(o&&o.$blocking){o=o();}p=$makeSlice(AC,o);  Yq=d.getRand();  sr=d.getMaxCount();  �  �s=0;case 4:if(!(s<r)){$s=5;continue;}  �t=T(p,i,d,q);$s=6;case 6:if(t&&t.$blocking){t=t();}e=t;  �    if(!($interfaceIsEqual(e,$ifaceNil))){   return e;    }   u=h.Call(p);$s=7;case 7:if(u&&u.$blocking){u=u();}v=V(u);$s=8;case 8:if(v&&v.$blocking){v=v();}w=v;   ;x=m.Call(p);$s=9;case 9:if(x&&x.$blocking){x=x();}y=V(x);$s=10;case 10:if(y&&y.$blocking){y=y();}z=y;   faa=E.DeepEqual(w,z);$s=13;case 13:if(aa&&aa.$blocking){aa=aa();}if(!aa){$s=11;continue;}$s=12;continue;    case 11:   �ab=V(p);$s=14;case 14:if(ab&&ab.$blocking){ab=ab();}e=new Q.ptr(new P.ptr(s+1>>0,ab),w,z);   �return e;    case 12:      �  �s=s+(1)>>0;    $s=4;continue;case 5:   �return e;    case-1:}return;}};$f.$blocking=true;return $f;};
CheckEqualreflect.DeepEqualtesting/quick.ABtesting/quick.ACtesting/quick.CheckEqualtesting/quick.CheckEqualErrortesting/quick.CheckErrortesting/quick.SetupErrortesting/quick.arbitraryValuestesting/quick.defaultConfigtesting/quick.functionAndTypetesting/quick.getMaxCount~testing/quick.getRand~testing/quick.toInterfaces testing/quick.arbitraryValuesT��T=function(b,c,d,e){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j,k,l,m,n,o;f=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  !�if(!(d.Values===$throwNilPointerError)){$s=1;continue;}$s=2;continue;    case 1:  !�$r=d.Values(b,e);$s=3;case 3:if($r&&$r.$blocking){$r=$r();}  !�return f;    case 2:  "  "g=0;case 4:if(!(g<b.$length)){$s=5;continue;}  ".  "2h=false;  "<j=c.In(g);$s=6;case 6:if(j&&j.$blocking){j=j();}k=L(j,e);$s=7;case 7:if(k&&k.$blocking){k=k();}i=k;((g<0||g>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+g]=i[0]);h=i[1];  "aif(!h){$s=8;continue;}$s=9;continue;    case 8:  "ml=c.In(g);$s=10;case 10:if(l&&l.$blocking){l=l();}m=l;n=new $Int(g);o=B.Sprintf("cannot create arbitrary value of type %s for argument %d",new AA([m,n]));$s=11;case 11:if(o&&o.$blocking){o=o();}f=new O(o);  "�return f;    case 9:      "&  "&g=g+(1)>>0;    $s=4;continue;case 5:  "�return f;    case-1:}return;}};$f.$blocking=true;return $f;};arbitraryValuesfmt.Sprintftesting/quick.AAtesting/quick.SetupErrortesting/quick.Valuetesting/quick.arbitraryValues testing/quick.functionAndTypeU�fU=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f;c=new E.Value.ptr();d=$ifaceNil;e=false;var $f=function(){s:while(true){switch($s){case 0:  #Bf=E.ValueOf(b);$s=1;case 1:if(f&&f.$blocking){f=f();}c=f;  #Ze=c.Kind()===19;  #y    if(!e){  #�return[c,d,e];    }  #�d=c.Type();  #�return[c,d,e];    case-1:}return;}};$f.$blocking=true;return $f;};functionAndTypereflect.Valuereflect.ValueOftesting/quick.functionAndType testing/quick.toInterfacesV�V=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f,g,h;var $f=function(){s:while(true){switch($s){case 0:  #�c=$makeSlice(AA,b.$length);  $d=b;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  $(h=g.Interface();$s=3;case 3:if(h&&h.$blocking){h=h();}((f<0||f>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+f]=h);    e++;$s=1;continue;case 2:  $Creturn c;    case-1:}return;}};$f.$blocking=true;return $f;};toInterfacestesting/quick.AAtesting/quick.toInterfaces testing/quick.toStringW�-W=function(b){var $ptr={},$r,$s=0,$this=this,b,c,d,e,f,g,h;var $f=function(){s:while(true){switch($s){case 0:  $�c=$makeSlice(AD,b.$length);  $�d=b;e=0;case 1:if(!(e<d.$length)){$s=2;continue;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  $�h=B.Sprintf("%#v",new AA([g]));$s=3;case 3:if(h&&h.$blocking){h=h();}((f<0||f>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+f]=h);    e++;$s=1;continue;case 2:  $�return F.Join(c,", ");    case-1:}return;}};$f.$blocking=true;return $f;};toStringfmt.Sprintfstrings.Jointesting/quick.AAtesting/quick.ADtesting/quick.toString �O{"Base":9483,"Files":[{"Name":"/usr/local/go/src/testing/quick/quick.go","Base":1,"Size":9481,"Lines":[0,55,109,159,160,238,252,253,262,270,277,285,298,309,320,322,323,430,431,490,517,585,627,678,680,681,757,801,840,864,873,876,895,897,898,974,1018,1057,1081,1090,1093,1103,1105,1106,1179,1249,1250,1326,1337,1360,1361,1416,1486,1568,1645,1704,1749,1752,1753,1781,1822,1842,1873,1896,1937,1960,1992,2017,2097,2123,2185,2206,2234,2255,2283,2304,2332,2352,2380,2399,2427,2449,2486,2508,2545,2567,2604,2625,2662,2682,2719,2742,2779,2798,2835,2870,2904,2947,2993,3014,3048,3053,3082,3086,3105,3148,3159,3192,3196,3234,3255,3276,3313,3370,3404,3448,3460,3494,3499,3523,3527,3549,3586,3625,3659,3704,3708,3742,3764,3802,3853,3865,3899,3904,3928,3932,3942,3974,3977,3978,3994,3996,3997,4056,4077,4138,4165,4179,4251,4299,4322,4394,4433,4450,4517,4590,4657,4679,4721,4723,4724,4749,4750,4811,4851,4871,4908,4911,4926,4928,4929,5004,5015,5063,5086,5106,5134,5197,5208,5239,5243,5246,5247,5255,5257,5258,5331,5383,5406,5407,5463,5464,5521,5546,5557,5578,5580,5581,5619,5691,5693,5694,5758,5788,5800,5820,5840,5842,5843,5886,6022,6024,6025,6091,6160,6227,6273,6289,6292,6340,6369,6402,6436,6443,6492,6511,6518,6524,6580,6600,6626,6629,6630,6669,6679,6728,6737,6740,6741,6767,6827,6836,6839,6881,6935,6944,6947,6948,6999,7025,7059,7060,7093,7149,7167,7177,7181,7182,7221,7274,7284,7288,7291,7292,7300,7302,7303,7379,7451,7529,7570,7634,7654,7680,7683,7684,7720,7730,7772,7781,7784,7820,7830,7872,7881,7884,7885,7906,7959,7968,7971,7972,8023,8049,8083,8084,8117,8173,8191,8201,8205,8206,8248,8290,8291,8329,8411,8421,8425,8428,8429,8437,8439,8440,8512,8539,8645,8672,8700,8709,8712,8713,8747,8761,8798,8809,8914,8924,8928,8931,8932,8940,8942,8943,9024,9048,9079,9089,9098,9101,9115,9123,9125,9126,9184,9225,9253,9278,9281,9293,9295,9296,9345,9383,9415,9446,9449,9479],"Infos":null}]}
 