0�
import errors "errors"
import io "io"
import math "math"
import reflect "reflect"
var @"".BigEndian @"".bigEndian
type @"".ByteOrder interface { @"".PutUint16(? []byte, ? uint16) (); @"".PutUint32(? []byte, ? uint32) (); @"".PutUint64(? []byte, ? uint64) (); @"".String() (? string); @"".Uint16(? []byte) (? uint16); @"".Uint32(? []byte) (? uint32); @"".Uint64(? []byte) (? uint64) }
var @"".LittleEndian @"".littleEndian
const @"".MaxVarintLen16 = 0x3
const @"".MaxVarintLen32 = 0x5
const @"".MaxVarintLen64 = 0xa
func @"".PutUvarint(@"".buf []byte, @"".x uint64) (? int)
func @"".PutVarint(@"".buf []byte, @"".x int64) (? int)
func @"".Read(@"".r @"io".Reader, @"".order @"".ByteOrder, @"".data interface {  }) (? error)
func @"".ReadUvarint(@"".r @"io".ByteReader) (? uint64, ? error)
func @"".ReadVarint(@"".r @"io".ByteReader) (? int64, ? error)
func @"".Size(@"".v interface {  }) (? int)
func @"".Uvarint(@"".buf []byte) (? uint64, ? int)
func @"".Varint(@"".buf []byte) (? int64, ? int)
func @"".Write(@"".w @"io".Writer, @"".order @"".ByteOrder, @"".data interface {  }) (? error)
type @"".bigEndian struct {  }
func (? @"".bigEndian) @"".GoString() (? string)
func (? @"".bigEndian) @"".PutUint16(@"".b []byte, @"".v uint16) ()
func (? @"".bigEndian) @"".PutUint32(@"".b []byte, @"".v uint32) ()
func (? @"".bigEndian) @"".PutUint64(@"".b []byte, @"".v uint64) ()
func (? @"".bigEndian) @"".String() (? string)
func (? @"".bigEndian) @"".Uint16(@"".b []byte) (? uint16)
func (? @"".bigEndian) @"".Uint32(@"".b []byte) (? uint32)
func (? @"".bigEndian) @"".Uint64(@"".b []byte) (? uint64)
func (? *@"".bigEndian) @"".GoString() (? string)
func (? *@"".bigEndian) @"".PutUint16(@"".b []byte, @"".v uint16) ()
func (? *@"".bigEndian) @"".PutUint32(@"".b []byte, @"".v uint32) ()
func (? *@"".bigEndian) @"".PutUint64(@"".b []byte, @"".v uint64) ()
func (? *@"".bigEndian) @"".String() (? string)
func (? *@"".bigEndian) @"".Uint16(@"".b []byte) (? uint16)
func (? *@"".bigEndian) @"".Uint32(@"".b []byte) (? uint32)
func (? *@"".bigEndian) @"".Uint64(@"".b []byte) (? uint64)
type @"".coder struct { @"".order @"".ByteOrder; @"".buf []byte }
type @"".decoder struct { @"".order @"".ByteOrder; @"".buf []byte }
func (? *@"".decoder) @"".int16() (? int16)
func (? *@"".decoder) @"".int32() (? int32)
func (? *@"".decoder) @"".int64() (? int64)
func (? *@"".decoder) @"".int8() (? int8)
func (? *@"".decoder) @"".skip(@"".v @"reflect".Value) ()
func (? *@"".decoder) @"".uint16() (? uint16)
func (? *@"".decoder) @"".uint32() (? uint32)
func (? *@"".decoder) @"".uint64() (? uint64)
func (? *@"".decoder) @"".uint8() (? uint8)
func (? *@"".decoder) @"".value(@"".v @"reflect".Value) ()
type @"".encoder struct { @"".order @"".ByteOrder; @"".buf []byte }
func (? *@"".encoder) @"".int16(@"".x int16) ()
func (? *@"".encoder) @"".int32(@"".x int32) ()
func (? *@"".encoder) @"".int64(@"".x int64) ()
func (? *@"".encoder) @"".int8(@"".x int8) ()
func (? *@"".encoder) @"".skip(@"".v @"reflect".Value) ()
func (? *@"".encoder) @"".uint16(@"".x uint16) ()
func (? *@"".encoder) @"".uint32(@"".x uint32) ()
func (? *@"".encoder) @"".uint64(@"".x uint64) ()
func (? *@"".encoder) @"".uint8(@"".x uint8) ()
func (? *@"".encoder) @"".value(@"".v @"reflect".Value) ()
type @"".littleEndian struct {  }
func (? @"".littleEndian) @"".GoString() (? string)
func (? @"".littleEndian) @"".PutUint16(@"".b []byte, @"".v uint16) ()
func (? @"".littleEndian) @"".PutUint32(@"".b []byte, @"".v uint32) ()
func (? @"".littleEndian) @"".PutUint64(@"".b []byte, @"".v uint64) ()
func (? @"".littleEndian) @"".String() (? string)
func (? @"".littleEndian) @"".Uint16(@"".b []byte) (? uint16)
func (? @"".littleEndian) @"".Uint32(@"".b []byte) (? uint32)
func (? @"".littleEndian) @"".Uint64(@"".b []byte) (? uint64)
func (? *@"".littleEndian) @"".GoString() (? string)
func (? *@"".littleEndian) @"".PutUint16(@"".b []byte, @"".v uint16) ()
func (? *@"".littleEndian) @"".PutUint32(@"".b []byte, @"".v uint32) ()
func (? *@"".littleEndian) @"".PutUint64(@"".b []byte, @"".v uint64) ()
func (? *@"".littleEndian) @"".String() (? string)
func (? *@"".littleEndian) @"".Uint16(@"".b []byte) (? uint16)
func (? *@"".littleEndian) @"".Uint32(@"".b []byte) (? uint32)
func (? *@"".littleEndian) @"".Uint64(@"".b []byte) (? uint64)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ByteReader interface { @"io".ReadByte() (@"io".c byte, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; @"reflect".scalar uintptr; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *uintptr; @"reflect".gc @"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"reflect".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"reflect".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool); @"reflect".In(@"reflect".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"reflect".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"reflect".iword @"unsafe".Pointer
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
$$
0ogithub.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicode/utf8strconvreflect0/0errorsA0ioB0	mathC0reflectD0��j0�� 0E_E=$pkg.ByteOrder=$newType(8,"Interface","binary.ByteOrder","ByteOrder","encoding/binary",null);�
E.init([["PutUint16","PutUint16","",$funcType([($sliceType($Uint8)),$Uint16],[],false)],["PutUint32","PutUint32","",$funcType([($sliceType($Uint8)),$Uint32],[],false)],["PutUint64","PutUint64","",$funcType([($sliceType($Uint8)),$Uint64],[],false)],["String","String","",$funcType([],[$String],false)],["Uint16","Uint16","",$funcType([($sliceType($Uint8))],[$Uint16],false)],["Uint32","Uint32","",$funcType([($sliceType($Uint8))],[$Uint32],false)],["Uint64","Uint64","",$funcType([($sliceType($Uint8))],[$Uint64],false)]]);0	ByteOrder0  0�o 0F|F=$pkg.littleEndian=$newType(0,"Struct","binary.littleEndian","littleEndian","encoding/binary",function(){this.$val=this;});��F.methods=[["GoString","GoString","",$funcType([],[$String],false),-1],["PutUint16","PutUint16","",$funcType([($sliceType($Uint8)),$Uint16],[],false),-1],["PutUint32","PutUint32","",$funcType([($sliceType($Uint8)),$Uint32],[],false),-1],["PutUint64","PutUint64","",$funcType([($sliceType($Uint8)),$Uint64],[],false),-1],["String","String","",$funcType([],[$String],false),-1],["Uint16","Uint16","",$funcType([($sliceType($Uint8))],[$Uint16],false),-1],["Uint32","Uint32","",$funcType([($sliceType($Uint8))],[$Uint32],false),-1],["Uint64","Uint64","",$funcType([($sliceType($Uint8))],[$Uint64],false),-1]];($ptrType(F)).methods=[["GoString","GoString","",$funcType([],[$String],false),-1],["PutUint16","PutUint16","",$funcType([($sliceType($Uint8)),$Uint16],[],false),-1],["PutUint32","PutUint32","",$funcType([($sliceType($Uint8)),$Uint32],[],false),-1],["PutUint64","PutUint64","",$funcType([($sliceType($Uint8)),$Uint64],[],false),-1],["String","String","",$funcType([],[$String],false),-1],["Uint16","Uint16","",$funcType([($sliceType($Uint8))],[$Uint16],false),-1],["Uint32","Uint32","",$funcType([($sliceType($Uint8))],[$Uint32],false),-1],["Uint64","Uint64","",$funcType([($sliceType($Uint8))],[$Uint64],false),-1]];F.init([]);0littleEndian0  0�c 0GsG=$pkg.bigEndian=$newType(0,"Struct","binary.bigEndian","bigEndian","encoding/binary",function(){this.$val=this;});��G.methods=[["GoString","GoString","",$funcType([],[$String],false),-1],["PutUint16","PutUint16","",$funcType([($sliceType($Uint8)),$Uint16],[],false),-1],["PutUint32","PutUint32","",$funcType([($sliceType($Uint8)),$Uint32],[],false),-1],["PutUint64","PutUint64","",$funcType([($sliceType($Uint8)),$Uint64],[],false),-1],["String","String","",$funcType([],[$String],false),-1],["Uint16","Uint16","",$funcType([($sliceType($Uint8))],[$Uint16],false),-1],["Uint32","Uint32","",$funcType([($sliceType($Uint8))],[$Uint32],false),-1],["Uint64","Uint64","",$funcType([($sliceType($Uint8))],[$Uint64],false),-1]];($ptrType(G)).methods=[["GoString","GoString","",$funcType([],[$String],false),-1],["PutUint16","PutUint16","",$funcType([($sliceType($Uint8)),$Uint16],[],false),-1],["PutUint32","PutUint32","",$funcType([($sliceType($Uint8)),$Uint32],[],false),-1],["PutUint64","PutUint64","",$funcType([($sliceType($Uint8)),$Uint64],[],false),-1],["String","String","",$funcType([],[$String],false),-1],["Uint16","Uint16","",$funcType([($sliceType($Uint8))],[$Uint16],false),-1],["Uint32","Uint32","",$funcType([($sliceType($Uint8))],[$Uint32],false),-1],["Uint64","Uint64","",$funcType([($sliceType($Uint8))],[$Uint64],false),-1]];G.init([]);0	bigEndian0  0�y 0M��M=$pkg.coder=$newType(0,"Struct","binary.coder","coder","encoding/binary",function(order_,buf_){this.$val=this;this.order=order_!==undefined?order_:$ifaceNil;this.buf=buf_!==undefined?buf_:($sliceType($Uint8)).nil;});kM.init([["order","order","encoding/binary",E,""],["buf","buf","encoding/binary",($sliceType($Uint8)),""]]);0coder0encoding/binary:ByteOrder 0�X 0N��N=$pkg.decoder=$newType(0,"Struct","binary.decoder","decoder","encoding/binary",function(order_,buf_){this.$val=this;this.order=order_!==undefined?order_:$ifaceNil;this.buf=buf_!==undefined?buf_:($sliceType($Uint8)).nil;});�1($ptrType(N)).methods=[["int16","int16","encoding/binary",$funcType([],[$Int16],false),-1],["int32","int32","encoding/binary",$funcType([],[$Int32],false),-1],["int64","int64","encoding/binary",$funcType([],[$Int64],false),-1],["int8","int8","encoding/binary",$funcType([],[$Int8],false),-1],["skip","skip","encoding/binary",$funcType([D.Value],[],false),-1],["uint16","uint16","encoding/binary",$funcType([],[$Uint16],false),-1],["uint32","uint32","encoding/binary",$funcType([],[$Uint32],false),-1],["uint64","uint64","encoding/binary",$funcType([],[$Uint64],false),-1],["uint8","uint8","encoding/binary",$funcType([],[$Uint8],false),-1],["value","value","encoding/binary",$funcType([D.Value],[],false),-1]];N.init([["order","order","encoding/binary",E,""],["buf","buf","encoding/binary",($sliceType($Uint8)),""]]);0	decoder0*encoding/binary:ByteOrder
overflow0  0o 0  :    U=A.New("binary: varint overflows a 64-bit integer");0 0&encoding/binary:overflow
errors:New 0��%(encoding/binary.littleEndian).Uint160 �EF.Ptr.prototype.Uint16=function(a){  \return((((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])<<16>>>16)|((((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])<<16>>>16)<<8<<16>>>16))>>>0;    };F.prototype.Uint16=function(a){return this.$val.Uint16(a);}; 0littleEndian0encoding/binary:littleEndian 0��((encoding/binary.littleEndian).PutUint160 �NF.Ptr.prototype.PutUint16=function(a,b){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24);  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((b>>>8<<16>>>16)<<24>>>24);    };F.prototype.PutUint16=function(a,b){return this.$val.PutUint16(a,b);}; 0littleEndian0encoding/binary:littleEndian 0�r%(encoding/binary.littleEndian).Uint320 �F.Ptr.prototype.Uint32=function(a){  return((((((((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0)|((((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])>>>0)<<8>>>0))>>>0)|((((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])>>>0)<<16>>>0))>>>0)|((((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3])>>>0)<<24>>>0))>>>0;    };F.prototype.Uint32=function(a){return this.$val.Uint32(a);}; 0littleEndian0encoding/binary:littleEndian 0��((encoding/binary.littleEndian).PutUint320 �)F.Ptr.prototype.PutUint32=function(a,b){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24);  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((b>>>8>>>0)<<24>>>24);  �(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((b>>>16>>>0)<<24>>>24);  �(3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=((b>>>24>>>0)<<24>>>24);    };F.prototype.PutUint32=function(a,b){return this.$val.PutUint32(a,b);}; 0littleEndian0encoding/binary:littleEndian 0�
%(encoding/binary.littleEndian).Uint640 ��F.Ptr.prototype.Uint64=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;  return(b=(c=(d=(e=(f=(g=(h=new $Uint64(0,((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])),i=$shiftLeft64(new $Uint64(0,((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])),8),new $Uint64(h.$high|i.$high,(h.$low|i.$low)>>>0)),j=$shiftLeft64(new $Uint64(0,((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])),16),new $Uint64(g.$high|j.$high,(g.$low|j.$low)>>>0)),k=$shiftLeft64(new $Uint64(0,((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3])),24),new $Uint64(f.$high|k.$high,(f.$low|k.$low)>>>0)),l=$shiftLeft64(new $Uint64(0,((4<0||4>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+4])),32),new $Uint64(e.$high|l.$high,(e.$low|l.$low)>>>0)),m=$shiftLeft64(new $Uint64(0,((5<0||5>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+5])),40),new $Uint64(d.$high|m.$high,(d.$low|m.$low)>>>0)),n=$shiftLeft64(new $Uint64(0,((6<0||6>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+6])),48),new $Uint64(c.$high|n.$high,(c.$low|n.$low)>>>0)),o=$shiftLeft64(new $Uint64(0,((7<0||7>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+7])),56),new $Uint64(b.$high|o.$high,(b.$low|o.$low)>>>0));    };F.prototype.Uint64=function(a){return this.$val.Uint64(a);}; 0littleEndian0encoding/binary:littleEndian 0��((encoding/binary.littleEndian).PutUint640 �^F.Ptr.prototype.PutUint64=function(a,b){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b.$low<<24>>>24);  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=($shiftRightUint64(b,8).$low<<24>>>24);  	
^return((((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])<<16>>>16)|((((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])<<16>>>16)<<8<<16>>>16))>>>0;    };G.prototype.Uint16=function(a){return this.$val.Uint16(a);}; 0	bigEndian0encoding/binary:bigEndian 0��%(encoding/binary.bigEndian).PutUint160 �NG.Ptr.prototype.PutUint16=function(a,b){  
�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((b>>>8<<16>>>16)<<24>>>24);  
�(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(b<<24>>>24);    };G.prototype.PutUint16=function(a,b){return this.$val.PutUint16(a,b);}; 0	bigEndian0encoding/binary:bigEndian 0�i"(encoding/binary.bigEndian).Uint320 �G.Ptr.prototype.Uint32=function(a){  return((((((((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3])>>>0)|((((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])>>>0)<<8>>>0))>>>0)|((((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])>>>0)<<16>>>0))>>>0)|((((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0)<<24>>>0))>>>0;    };G.prototype.Uint32=function(a){return this.$val.Uint32(a);}; 0	bigEndian0encoding/binary:bigEndian 0��%(encoding/binary.bigEndian).PutUint320 �)G.Ptr.prototype.PutUint32=function(a,b){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((b>>>24>>>0)<<24>>>24);  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((b>>>16>>>0)<<24>>>24);  �(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((b>>>8>>>0)<<24>>>24);  �(3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=(b<<24>>>24);    };G.prototype.PutUint32=function(a,b){return this.$val.PutUint32(a,b);}; 0	bigEndian0encoding/binary:bigEndian 0�"(encoding/binary.bigEndian).Uint640 ��G.Ptr.prototype.Uint64=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;  return(b=(c=(d=(e=(f=(g=(h=new $Uint64(0,((7<0||7>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+7])),i=$shiftLeft64(new $Uint64(0,((6<0||6>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+6])),8),new $Uint64(h.$high|i.$high,(h.$low|i.$low)>>>0)),j=$shiftLeft64(new $Uint64(0,((5<0||5>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+5])),16),new $Uint64(g.$high|j.$high,(g.$low|j.$low)>>>0)),k=$shiftLeft64(new $Uint64(0,((4<0||4>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+4])),24),new $Uint64(f.$high|k.$high,(f.$low|k.$low)>>>0)),l=$shiftLeft64(new $Uint64(0,((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3])),32),new $Uint64(e.$high|l.$high,(e.$low|l.$low)>>>0)),m=$shiftLeft64(new $Uint64(0,((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])),40),new $Uint64(d.$high|m.$high,(d.$low|m.$low)>>>0)),n=$shiftLeft64(new $Uint64(0,((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])),48),new $Uint64(c.$high|n.$high,(c.$low|n.$low)>>>0)),o=$shiftLeft64(new $Uint64(0,((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])),56),new $Uint64(b.$high|o.$high,(b.$low|o.$low)>>>0));    };G.prototype.Uint64=function(a){return this.$val.Uint64(a);}; 0	bigEndian0encoding/binary:bigEndian 0��%(encoding/binary.bigEndian).PutUint640 �^G.Ptr.prototype.PutUint64=function(a,b){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=($shiftRightUint64(b,56).$low<<24>>>24);  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=($shiftRightUint64(b,48).$low<<24>>>24);  
errors:Newio:ReadFull
errors:Newreflect:Indirect
dataSize0encoding/binary:sizeof 0�encoding/binary.sizeof0L��L=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;  $Db=a.Kind();  $Wif(b===17){  $mc=L(a.Elem());d=c[0];e=c[1];  $�    if(!($interfaceIsEqual(e,$ifaceNil))){  $�return[0,e];    }  $�return[(f=a.Len(),(((f>>>16<<16)*d>>0)+(f<<16>>>16)*d)>>0),$ifaceNil];      $�}else if(b===25){  $�g=0;  $�  $�h=0;i=a.NumField();j=h;k=i;while(j<k){  %l=L(a.Field(j).Type);m=l[0];n=l[1];  %?    if(!($interfaceIsEqual(n,$ifaceNil))){  %Sreturn[0,n];    }  %ig=g+(m)>>0;      %  %j=j+(1)>>0;}  %xreturn[g,$ifaceNil];      %�}else if(b===8||b===9||b===10||b===11||b===3||b===4||b===5||b===6||b===13||b===14||b===15||b===16){  &Xreturn[(a.Size()>>0),$ifaceNil];    }  &vreturn[0,A.New("invalid type "+a.String())];    }; 0sizeof0
errors:New 0�b (*encoding/binary.decoder).uint80 �N.Ptr.prototype.uint8=function(){var a,b,c;  'a=this;  ',c=(b=a.buf,((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0]));  ';a.buf=$subslice(a.buf,1);  'Nreturn c;    };N.prototype.uint8=function(){return this.$val.uint8();}; 0decoderuint80encoding/binary:decoder 0�R (*encoding/binary.encoder).uint80 ��O.Ptr.prototype.uint8=function(a){var b,c;  '`b=this;  '~(c=b.buf,(0<0||0>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+0]=a);  '�b.buf=$subslice(b.buf,1);    };O.prototype.uint8=function(a){return this.$val.uint8(a);}; 0encoderuint80encoding/binary:encoder 0�*!(*encoding/binary.decoder).uint160 ��N.Ptr.prototype.uint16=function(){var a,b;  '�a=this;  '�b=a.order.Uint16($subslice(a.buf,0,2));  '�a.buf=$subslice(a.buf,2);  '�return b;    };N.prototype.uint16=function(){return this.$val.uint16();}; 0decoderuint160encoding/binary:decoder 0� !(*encoding/binary.encoder).uint160 ��O.Ptr.prototype.uint16=function(a){var b;  (b=this;  (,b.order.PutUint16($subslice(b.buf,0,2),a);  (Nb.buf=$subslice(b.buf,2);    };O.prototype.uint16=function(a){return this.$val.uint16(a);}; 0encoderuint160encoding/binary:encoder 0�*!(*encoding/binary.decoder).uint320 ��N.Ptr.prototype.uint32=function(){var a,b;  (ia=this;  (�b=a.order.Uint32($subslice(a.buf,0,4));  (�a.buf=$subslice(a.buf,4);  (�return b;    };N.prototype.uint32=function(){return this.$val.uint32();}; 0decoderuint320encoding/binary:decoder 0� !(*encoding/binary.encoder).uint320 ��O.Ptr.prototype.uint32=function(a){var b;  (�b=this;  (�b.order.PutUint32($subslice(b.buf,0,4),a);  )b.buf=$subslice(b.buf,4);    };O.prototype.uint32=function(a){return this.$val.uint32(a);}; 0encoderuint320encoding/binary:encoder 0�*!(*encoding/binary.decoder).uint640 ��N.Ptr.prototype.uint64=function(){var a,b;  )+a=this;  )Jb=a.order.Uint64($subslice(a.buf,0,8));  )ka.buf=$subslice(a.buf,8);  )~return b;    };N.prototype.uint64=function(){return this.$val.uint64();}; 0decoderuint640encoding/binary:decoder 0� !(*encoding/binary.encoder).uint640 ��O.Ptr.prototype.uint64=function(a){var b;  )�b=this;  )�b.order.PutUint64($subslice(b.buf,0,8),a);  )�b.buf=$subslice(b.buf,8);    };O.prototype.uint64=function(a){return this.$val.uint64(a);}; 0encoderuint640encoding/binary:encoder 0��(*encoding/binary.decoder).int80 ��N.Ptr.prototype.int8=function(){var a;  )�a=this;  *return(a.uint8()<<24>>24);    };N.prototype.int8=function(){return this.$val.int8();}; 0decoderint800encoding/binary:decoderencoding/binary:uint8 0��(*encoding/binary.encoder).int80 ��O.Ptr.prototype.int8=function(a){var b;  *'b=this;  *Bb.uint8((a<<24>>>24));    };O.prototype.int8=function(a){return this.$val.int8(a);}; 0encoderint800encoding/binary:encoderencoding/binary:uint8 0� (*encoding/binary.decoder).int160 ��N.Ptr.prototype.int16=function(){var a;  *]a=this;  *yreturn(a.uint16()<<16>>16);    };N.prototype.int16=function(){return this.$val.int16();}; 0decoderint1601encoding/binary:decoderencoding/binary:uint16 0� (*encoding/binary.encoder).int160 ��O.Ptr.prototype.int16=function(a){var b;  *�b=this;  *�b.uint16((a<<16>>>16));    };O.prototype.int16=function(a){return this.$val.int16(a);}; 0encoderint1601encoding/binary:encoderencoding/binary:uint16 0�� (*encoding/binary.decoder).int320 ��N.Ptr.prototype.int32=function(){var a;  *�a=this;  *�return(a.uint32()>>0);    };N.prototype.int32=function(){return this.$val.int32();}; 0decoderint3201encoding/binary:decoderencoding/binary:uint32 0�� (*encoding/binary.encoder).int320 ��O.Ptr.prototype.int32=function(a){var b;  +b=this;  +0b.uint32((a>>>0));    };O.prototype.int32=function(a){return this.$val.int32(a);}; 0encoderint3201encoding/binary:encoderencoding/binary:uint32 0� (*encoding/binary.decoder).int640 ��N.Ptr.prototype.int64=function(){var a,b;  +Ma=this;  +ireturn(b=a.uint64(),new $Int64(b.$high,b.$low));    };N.prototype.int64=function(){return this.$val.int64();}; 0decoderint6401encoding/binary:decoderencoding/binary:uint64 0� (*encoding/binary.encoder).int640 ��O.Ptr.prototype.int64=function(a){var b;  +�b=this;  +�b.uint64(new $Uint64(a.$high,a.$low));    };O.prototype.int64=function(a){return this.$val.int64(a);}; 0encoderint6401encoding/binary:encoderencoding/binary:uint64 0�� (*encoding/binary.decoder).value0 �|N.Ptr.prototype.value=function(a){var b,c,d,e,f,g,h,i,j,k;  +�b=this;  +�c=a.Kind();  +�if(c===17){  ,d=a.Len();  ,#  ,'e=0;while(e<d){  ,?b.value($clone(a.Index(e),D.Value));      ,6  ,6e=e+(1)>>0;}      ,Y}else if(c===25){  ,pf=a.Type();  ,�g=a.NumField();  ,�  ,�h=0;while(h<g){  -�  -�i=new D.Value.Ptr();$copy(i,a.Field(h),D.Value);    if(i.CanSet()||!(f.Field(h).Name==="_")){  .b.value($clone(i,D.Value));    }else{  .b.skip($clone(i,D.Value));    }      ,�  ,�h=h+(1)>>0;}      .3}else if(c===23){  .Ij=a.Len();  .X  .\k=0;while(k<j){  .tb.value($clone(a.Index(k),D.Value));      .k  .kk=k+(1)>>0;}      .�}else if(c===3){  .�a.SetInt(new $Int64(0,b.int8()));      .�}else if(c===4){  .�a.SetInt(new $Int64(0,b.int16()));      .�}else if(c===5){  /a.SetInt(new $Int64(0,b.int32()));      /"}else if(c===6){  /8a.SetInt(b.int64());      /N}else if(c===8){  /da.SetUint(new $Uint64(0,b.uint8()));      /�}else if(c===9){  /�a.SetUint(new $Uint64(0,b.uint16()));      /�}else if(c===10){  /�a.SetUint(new $Uint64(0,b.uint32()));      /�}else if(c===11){  0a.SetUint(b.uint64());      0}else if(c===13){  05a.SetFloat($coerceFloat32(C.Float32frombits(b.uint32())));      0l}else if(c===14){  0�a.SetFloat(C.Float64frombits(b.uint64()));      0�}else if(c===15){  0�a.SetComplex(new $Complex128($coerceFloat32(C.Float32frombits(b.uint32())),$coerceFloat32(C.Float32frombits(b.uint32()))));      1E}else if(c===16){  1`a.SetComplex(new $Complex128(C.Float64frombits(b.uint64()),C.Float64frombits(b.uint64())));    }    };N.prototype.value=function(a){return this.$val.value(a);}; 0decodervalue0�$encoding/binary:decoderencoding/binary:int16encoding/binary:int32encoding/binary:int64encoding/binary:int8encoding/binary:skipencoding/binary:uint16encoding/binary:uint32encoding/binary:uint64encoding/binary:uint8math:Float32frombitsmath:Float64frombits
if(c===17){  2 d=a.Len();  2/  23e=0;while(e<d){  2Kb.value($clone(a.Index(e),D.Value));      2B  2Be=e+(1)>>0;}      2e}else if(c===25){  2|f=a.Type();  2�g=a.NumField();  2�  2�h=0;while(h<g){  2�  2�i=new D.Value.Ptr();$copy(i,a.Field(h),D.Value);    if(i.CanSet()||!(f.Field(h).Name==="_")){  37b.value($clone(i,D.Value));    }else{  3Rb.skip($clone(i,D.Value));    }      2�  2�h=h+(1)>>0;}      3g}else if(c===23){  3}j=a.Len();  3�  3�k=0;while(k<j){  3�b.value($clone(a.Index(k),D.Value));      3�  3�k=k+(1)>>0;}      3�}else if(c===2||c===3||c===4||c===5||c===6){  4l=a.Type().Kind();  4,if(l===3){  4Bb.int8(((m=a.Int(),m.$low+((m.$high>>31)*4294967296))<<24>>24));      4Z}else if(l===4){  4qb.int16(((n=a.Int(),n.$low+((n.$high>>31)*4294967296))<<16>>16));      4�}else if(l===5){  4�b.int32(((o=a.Int(),o.$low+((o.$high>>31)*4294967296))>>0));      4�}else if(l===6){  4�b.int64(a.Int());    }      4�}else if(c===7||c===8||c===9||c===10||c===11||c===12){  5Op=a.Type().Kind();  5jif(p===8){  5�b.uint8((a.Uint().$low<<24>>>24));      5�}else if(p===9){  5�b.uint16((a.Uint().$low<<16>>>16));      5�}else if(p===10){  5�b.uint32((a.Uint().$low>>>0));      6}else if(p===11){  6b.uint64(a.Uint());    }      67}else if(c===13||c===14){  6`q=a.Type().Kind();  6{if(q===13){  6�b.uint32(C.Float32bits(a.Float()));      6�}else if(q===14){  6�b.uint64(C.Float64bits(a.Float()));    }      7
}else if(c===15||c===16){  78r=a.Type().Kind();  7Sif(r===15){  7ns=a.Complex();  7�b.uint32(C.Float32bits(s.$real));  7�b.uint32(C.Float32bits(s.$imag));      7�}else if(r===16){  7�t=a.Complex();  8b.uint64(C.Float64bits(t.$real));  88b.uint64(C.Float64bits(t.$imag));    }    }    };O.prototype.value=function(a){return this.$val.value(a);}; 0encodervalue0�encoding/binary:encoderencoding/binary:int16encoding/binary:int32encoding/binary:int64encoding/binary:int8encoding/binary:skipencoding/binary:uint16encoding/binary:uint32encoding/binary:uint64encoding/binary:uint8math:Float32bitsmath:Float64bits
PutUvarint0  0��encoding/binary.Uvarint0R�TR=$pkg.Uvarint=function(a){var b,c,d,e,f,g,h,i;  DU  DYb=new $Uint64(0,0);  Dc  Dgc=0;  Dod=a;e=0;while(e<d.$length){f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  D�    if(g<128){  D�    if(f>9||(f===9)&&g>1){  D�return[new $Uint64(0,0),-((f+1>>0))];    }  D�return[(h=$shiftLeft64(new $Uint64(0,g),c),new $Uint64(b.$high|h.$high,(b.$low|h.$low)>>>0)),f+1>>0];    }  Eb=(i=$shiftLeft64(new $Uint64(0,((g&127)>>>0)),c),new $Uint64(b.$high|i.$high,(b.$low|i.$low)>>>0));  E#c=c+(7)>>>0;    e++;}  E.return[new $Uint64(0,0),0];    }; 0	Uvarint0  0�'encoding/binary.PutVarint0S��S=$pkg.PutVarint=function(a,b){var c;  E�c=$shiftLeft64(new $Uint64(b.$high,b.$low),1);  F    if((b.$high<0||(b.$high===0&&b.$low<0))){  Fc=new $Uint64(~c.$high,~c.$low>>>0);    }  Freturn Q(a,c);    }; 0	PutVarint0encoding/binary:PutUvarint 0�gencoding/binary.Varint0T�T=$pkg.Varint=function(a){var b,c,d,e,f,g;  G�b=R(a);c=b[0];d=b[1];  G�f=(e=$shiftRightUint64(c,1),new $Int64(e.$high,e.$low));  H     if(!((g=new $Uint64(c.$high&0,(c.$low&1)>>>0),(g.$high===0&&g.$low===0)))){  Hf=new $Int64(~f.$high,~f.$low>>>0);    }  Hreturn[f,d];    }; 0Varint0encoding/binary:Uvarint 0��encoding/binary.ReadUvarint0V�;V=$pkg.ReadUvarint=function(a){var b,c,d,e,f,g,h,i;  H�  I b=new $Uint64(0,0);  I
  Ic=0;  I  Id=0;while(true){  I,e=a.ReadByte();f=e[0];g=e[1];  IE    if(!($interfaceIsEqual(g,$ifaceNil))){  IXreturn[b,g];    }  Il    if(f<128){  I}    if(d>9||(d===9)&&f>1){  I�return[b,U];    }  I�return[(h=$shiftLeft64(new $Uint64(0,f),c),new $Uint64(b.$high|h.$high,(b.$low|h.$low)>>>0)),$ifaceNil];    }  I�b=(i=$shiftLeft64(new $Uint64(0,((f&127)>>>0)),c),new $Uint64(b.$high|i.$high,(b.$low|i.$low)>>>0));  I�c=c+(7)>>>0;      I$  I$d=d+(1)>>0;}    }; 0
ReadVarint0encoding/binary:ReadUvarint 0 ��{"Base":19213,"Files":[{"Name":"/usr/local/go/src/pkg/encoding/binary/binary.go","Base":1,"Size":15376,"Lines":[0,56,110,160,161,234,285,288,356,412,466,526,529,599,670,762,765,837,910,977,1009,1024,1025,1034,1044,1050,1058,1069,1071,1072,1132,1174,1201,1224,1247,1270,1297,1324,1351,1368,1370,1371,1437,1467,1468,1528,1552,1553,1580,1581,1667,1668,1720,1736,1757,1759,1760,1806,1883,1885,1886,1938,1954,1975,1997,2019,2021,2022,2068,2147,2223,2225,2226,2278,2294,2315,2337,2359,2381,2403,2425,2447,2449,2450,2512,2513,2584,2585,2609,2610,2693,2694,2743,2764,2780,2782,2783,2826,2903,2905,2906,2955,2977,2999,3020,3036,3038,3039,3082,3161,3237,3239,3240,3289,3311,3333,3355,3377,3399,3421,3442,3458,3460,3461,3517,3518,3583,3584,3639,3698,3723,3787,3836,3897,3958,3986,4056,4122,4164,4201,4217,4233,4251,4275,4286,4300,4304,4352,4366,4370,4401,4415,4437,4452,4468,4483,4518,4534,4562,4577,4612,4628,4656,4671,4706,4722,4750,4765,4842,4864,4869,4885,4903,4919,4944,4988,4993,5010,5035,5072,5077,5093,5118,5162,5167,5184,5209,5246,5251,5267,5292,5336,5341,5358,5383,5420,5425,5429,5442,5445,5446,5486,5507,5554,5573,5588,5609,5617,5627,5697,5700,5726,5743,5794,5797,5851,5901,5914,5917,5929,5941,5943,5944,6002,6062,6100,6165,6213,6273,6304,6371,6413,6450,6466,6482,6500,6524,6535,6549,6553,6581,6595,6609,6628,6641,6655,6673,6688,6713,6733,6738,6753,6767,6780,6794,6808,6826,6842,6852,6867,6881,6916,6930,6944,6978,6994,7019,7060,7065,7081,7095,7122,7137,7151,7177,7194,7219,7252,7257,7272,7286,7321,7335,7349,7383,7399,7424,7465,7470,7486,7500,7527,7542,7556,7582,7599,7624,7657,7662,7677,7691,7726,7740,7754,7788,7804,7829,7870,7875,7891,7905,7932,7947,7961,7987,8004,8029,8062,8067,8071,8095,8108,8111,8112,8152,8198,8224,8241,8293,8296,8323,8362,8374,8397,8409,8411,8412,8493,8583,8614,8672,8689,8701,8704,8714,8716,8717,8810,8905,8996,9023,9069,9101,9140,9158,9175,9179,9208,9211,9236,9238,9239,9282,9301,9322,9351,9369,9386,9390,9416,9417,9439,9450,9494,9531,9550,9568,9573,9585,9589,9607,9608,9677,9738,9813,9841,9844,9896,9898,9899,9919,9936,9950,9952,9953,9972,9991,9992,10026,10041,10060,10070,10072,10073,10108,10122,10141,10143,10144,10180,10213,10232,10242,10244,10245,10282,10316,10335,10337,10338,10374,10407,10426,10436,10438,10439,10476,10510,10529,10531,10532,10568,10601,10620,10630,10632,10633,10670,10704,10723,10725,10726,10783,10784,10837,10838,10899,10900,10957,10958,11019,11020,11077,11078,11139,11140,11197,11198,11241,11260,11281,11296,11323,11346,11350,11351,11373,11389,11409,11436,11493,11547,11605,11663,11712,11774,11789,11801,11815,11820,11824,11825,11846,11861,11888,11911,11915,11916,11936,11964,11985,12014,12035,12064,12085,12107,12108,12129,12160,12182,12214,12236,12268,12290,12314,12315,12338,12394,12417,12464,12465,12490,12514,12560,12606,12611,12637,12661,12698,12735,12740,12743,12745,12746,12789,12808,12829,12844,12871,12894,12898,12899,12921,12937,12957,12984,13044,13106,13121,13133,13147,13152,13156,13157,13178,13193,13220,13243,13247,13248,13326,13353,13374,13399,13421,13448,13470,13497,13519,13539,13543,13544,13644,13671,13693,13721,13744,13774,13797,13827,13850,13872,13876,13877,13917,13944,13968,14018,14042,14083,14087,14088,14133,14160,14186,14206,14254,14302,14329,14349,14388,14427,14431,14434,14436,14437,14479,14500,14519,14521,14522,14564,14585,14614,14629,14632,14651,14653,14654,14743,14831,14872,14902,14929,14940,14954,14973,14988,15007,15037,15048,15063,15086,15102,15125,15155,15166,15181,15204,15220,15243,15273,15284,15299,15322,15338,15361,15364,15374],"Infos":null},{"Name":"/usr/local/go/src/pkg/encoding/binary/varint.go","Base":15378,"Size":3834,"Lines":[0,56,110,160,161,176,177,239,259,333,361,436,474,543,616,691,743,746,762,831,910,989,1065,1144,1222,1302,1303,1312,1322,1328,1330,1331,1405,1413,1433,1453,1474,1476,1477,1558,1612,1656,1664,1681,1707,1717,1723,1726,1744,1758,1760,1761,1829,1897,1943,1946,1971,2019,2070,2073,2114,2128,2140,2165,2181,2214,2249,2254,2288,2292,2319,2328,2331,2344,2346,2347,2427,2480,2522,2544,2556,2567,2570,2598,2600,2601,2668,2736,2801,2804,2829,2877,2928,2931,2970,3032,3053,3069,3078,3081,3094,3096,3097,3168,3169,3253,3305,3319,3331,3352,3377,3395,3412,3416,3432,3465,3488,3493,3525,3529,3556,3565,3568,3570,3571,3652,3702,3768,3789,3805,3814,3817,3832],"Infos":null}]}
 �