p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ��!��syscallsyscallbyteserrorsgithub.com/gopherjs/gopherjs/jsruntimesync�'�package syscall
import bytes "bytes"
import js "github.com/gopherjs/gopherjs/js"
import sync "sync"
import runtime "runtime"
import errors "errors"
const @"".AF_APPLETALK = 0x10
const @"".AF_CCITT = 0xa
const @"".AF_CHAOS = 0x5
const @"".AF_CNT = 0x15
const @"".AF_COIP = 0x14
const @"".AF_DATAKIT = 0x9
const @"".AF_DECnet = 0xc
const @"".AF_DLI = 0xd
const @"".AF_E164 = 0x1c
const @"".AF_ECMA = 0x8
const @"".AF_HYLINK = 0xf
const @"".AF_IEEE80211 = 0x25
const @"".AF_IMPLINK = 0x3
const @"".AF_INET = 0x2
const @"".AF_INET6 = 0x1e
const @"".AF_IPX = 0x17
const @"".AF_ISDN = 0x1c
const @"".AF_ISO = 0x7
const @"".AF_LAT = 0xe
const @"".AF_LINK = 0x12
const @"".AF_LOCAL = 0x1
const @"".AF_MAX = 0x26
const @"".AF_NATM = 0x1f
const @"".AF_NDRV = 0x1b
const @"".AF_NETBIOS = 0x21
const @"".AF_NS = 0x6
const @"".AF_OSI = 0x7
const @"".AF_PPP = 0x22
const @"".AF_PUP = 0x4
const @"".AF_RESERVED_36 = 0x24
const @"".AF_ROUTE = 0x11
const @"".AF_SIP = 0x18
const @"".AF_SNA = 0xb
const @"".AF_SYSTEM = 0x20
const @"".AF_UNIX = 0x1
const @"".AF_UNSPEC = 0x0
func @"".Accept(@"".fd int) (@"".nfd int, @"".sa @"".Sockaddr, @"".err error)
func @"".Access(@"".path string, @"".mode uint32) (@"".err error)
func @"".Adjtime(@"".delta *@"".Timeval, @"".olddelta *@"".Timeval) (@"".err error)
const @"".B0 = 0x0
const @"".B110 = 0x6e
const @"".B115200 = 0x1c200
const @"".B1200 = 0x4b0
const @"".B134 = 0x86
const @"".B14400 = 0x3840
const @"".B150 = 0x96
const @"".B1800 = 0x708
const @"".B19200 = 0x4b00
const @"".B200 = 0xc8
const @"".B230400 = 0x38400
const @"".B2400 = 0x960
const @"".B28800 = 0x7080
const @"".B300 = 0x12c
const @"".B38400 = 0x9600
const @"".B4800 = 0x12c0
const @"".B50 = 0x32
const @"".B57600 = 0xe100
const @"".B600 = 0x258
const @"".B7200 = 0x1c20
const @"".B75 = 0x4b
const @"".B76800 = 0x12c00
const @"".B9600 = 0x2580
const @"".BIOCFLUSH = 0x20004268
const @"".BIOCGBLEN = 0x40044266
const @"".BIOCGDLT = 0x4004426a
const @"".BIOCGDLTLIST = 0xc00c4279
const @"".BIOCGETIF = 0x4020426b
const @"".BIOCGHDRCMPLT = 0x40044274
const @"".BIOCGRSIG = 0x40044272
const @"".BIOCGRTIMEOUT = 0x4010426e
const @"".BIOCGSEESENT = 0x40044276
const @"".BIOCGSTATS = 0x4008426f
const @"".BIOCIMMEDIATE = 0x80044270
const @"".BIOCPROMISC = 0x20004269
const @"".BIOCSBLEN = 0xc0044266
const @"".BIOCSDLT = 0x80044278
const @"".BIOCSETF = 0x80104267
const @"".BIOCSETIF = 0x8020426c
const @"".BIOCSHDRCMPLT = 0x80044275
const @"".BIOCSRSIG = 0x80044273
const @"".BIOCSRTIMEOUT = 0x8010426d
const @"".BIOCSSEESENT = 0x80044277
const @"".BIOCVERSION = 0x40044271
const @"".BPF_A = 0x10
const @"".BPF_ABS = 0x20
const @"".BPF_ADD = 0x0
const @"".BPF_ALIGNMENT = 0x4
const @"".BPF_ALU = 0x4
const @"".BPF_AND = 0x50
const @"".BPF_B = 0x10
const @"".BPF_DIV = 0x30
const @"".BPF_H = 0x8
const @"".BPF_IMM = 0x0
const @"".BPF_IND = 0x40
const @"".BPF_JA = 0x0
const @"".BPF_JEQ = 0x10
const @"".BPF_JGE = 0x30
const @"".BPF_JGT = 0x20
const @"".BPF_JMP = 0x5
const @"".BPF_JSET = 0x40
const @"".BPF_K = 0x0
const @"".BPF_LD = 0x0
const @"".BPF_LDX = 0x1
const @"".BPF_LEN = 0x80
const @"".BPF_LSH = 0x60
const @"".BPF_MAJOR_VERSION = 0x1
const @"".BPF_MAXBUFSIZE = 0x80000
const @"".BPF_MAXINSNS = 0x200
const @"".BPF_MEM = 0x60
const @"".BPF_MEMWORDS = 0x10
const @"".BPF_MINBUFSIZE = 0x20
const @"".BPF_MINOR_VERSION = 0x1
const @"".BPF_MISC = 0x7
const @"".BPF_MSH = 0xa0
const @"".BPF_MUL = 0x20
const @"".BPF_NEG = 0x80
const @"".BPF_OR = 0x40
const @"".BPF_RELEASE = 0x30bb6
const @"".BPF_RET = 0x6
const @"".BPF_RSH = 0x70
const @"".BPF_ST = 0x2
const @"".BPF_STX = 0x3
const @"".BPF_SUB = 0x10
const @"".BPF_TAX = 0x0
const @"".BPF_TXA = 0x80
const @"".BPF_W = 0x0
const @"".BPF_X = 0x8
const @"".BRKINT = 0x2
func @"".Bind(@"".fd int, @"".sa @"".Sockaddr) (@"".err error)
func @"".BpfBuflen(@"".fd int) (? int, ? error)
func @"".BpfDatalink(@"".fd int) (? int, ? error)
type @"".BpfHdr struct { @"".Tstamp @"".Timeval32; @"".Caplen uint32; @"".Datalen uint32; @"".Hdrlen uint16; @"".Pad_cgo_0 [2]byte }
func @"".BpfHeadercmpl(@"".fd int) (? int, ? error)
type @"".BpfInsn struct { @"".Code uint16; @"".Jt uint8; @"".Jf uint8; @"".K uint32 }
func @"".BpfInterface(@"".fd int, @"".name string) (? string, ? error)
func @"".BpfJump(@"".code int, @"".k int, @"".jt int, @"".jf int) (? *@"".BpfInsn)
type @"".BpfProgram struct { @"".Len uint32; @"".Pad_cgo_0 [4]byte; @"".Insns *@"".BpfInsn }
type @"".BpfStat struct { @"".Recv uint32; @"".Drop uint32 }
func @"".BpfStats(@"".fd int) (? *@"".BpfStat, ? error)
func @"".BpfStmt(@"".code int, @"".k int) (? *@"".BpfInsn)
func @"".BpfTimeout(@"".fd int) (? *@"".Timeval, ? error)
type @"".BpfVersion struct { @"".Major uint16; @"".Minor uint16 }
func @"".BytePtrFromString(@"".s string) (? *byte, ? error)
func @"".ByteSliceFromString(@"".s string) (? []byte, ? error)
const @"".CFLUSH = 0xf
const @"".CLOCAL = 0x8000
const @"".CREAD = 0x800
const @"".CS5 = 0x0
const @"".CS6 = 0x100
const @"".CS7 = 0x200
const @"".CS8 = 0x300
const @"".CSIZE = 0x300
const @"".CSTART = 0x11
const @"".CSTATUS = 0x14
const @"".CSTOP = 0x13
const @"".CSTOPB = 0x400
const @"".CSUSP = 0x1a
const @"".CTL_MAXNAME = 0xc
const @"".CTL_NET = 0x4
func @"".Chdir(@"".path string) (@"".err error)
func @"".CheckBpfVersion(@"".fd int) (? error)
func @"".Chflags(@"".path string, @"".flags int) (@"".err error)
func @"".Chmod(@"".path string, @"".mode uint32) (@"".err error)
func @"".Chown(@"".path string, @"".uid int, @"".gid int) (@"".err error)
func @"".Chroot(@"".path string) (@"".err error)
func @"".Clearenv() ()
func @"".Close(@"".fd int) (@"".err error)
func @"".CloseOnExec(@"".fd int) ()
func @"".CmsgLen(@"".datalen int) (? int)
func @"".CmsgSpace(@"".datalen int) (? int)
type @"".Cmsghdr struct { @"".Len uint32; @"".Level int32; @"".Type int32 }
func (? *@"".Cmsghdr) @"".SetLen(@"".length int) ()
func @"".Connect(@"".fd int, @"".sa @"".Sockaddr) (@"".err error)
type @"".Credential struct { @"".Uid uint32; @"".Gid uint32; @"".Groups []uint32 }
const @"".DLT_APPLE_IP_OVER_IEEE1394 = 0x8a
const @"".DLT_ARCNET = 0x7
const @"".DLT_ATM_CLIP = 0x13
const @"".DLT_ATM_RFC1483 = 0xb
const @"".DLT_AX25 = 0x3
const @"".DLT_CHAOS = 0x5
const @"".DLT_CHDLC = 0x68
const @"".DLT_C_HDLC = 0x68
const @"".DLT_EN10MB = 0x1
const @"".DLT_EN3MB = 0x2
const @"".DLT_FDDI = 0xa
const @"".DLT_IEEE802 = 0x6
const @"".DLT_IEEE802_11 = 0x69
const @"".DLT_IEEE802_11_RADIO = 0x7f
const @"".DLT_IEEE802_11_RADIO_AVS = 0xa3
const @"".DLT_LINUX_SLL = 0x71
const @"".DLT_LOOP = 0x6c
const @"".DLT_NULL = 0x0
const @"".DLT_PFLOG = 0x75
const @"".DLT_PFSYNC = 0x12
const @"".DLT_PPP = 0x9
const @"".DLT_PPP_BSDOS = 0x10
const @"".DLT_PPP_SERIAL = 0x32
const @"".DLT_PRONET = 0x4
const @"".DLT_RAW = 0xc
const @"".DLT_SLIP = 0x8
const @"".DLT_SLIP_BSDOS = 0xf
const @"".DT_BLK = 0x6
const @"".DT_CHR = 0x2
const @"".DT_DIR = 0x4
const @"".DT_FIFO = 0x1
const @"".DT_LNK = 0xa
const @"".DT_REG = 0x8
const @"".DT_SOCK = 0xc
const @"".DT_UNKNOWN = 0x0
const @"".DT_WHT = 0xe
type @"".Dirent struct { @"".Ino uint64; @"".Seekoff uint64; @"".Reclen uint16; @"".Namlen uint16; @"".Type uint8; @"".Name [1024]int8; @"".Pad_cgo_0 [3]byte }
func @"".Dup(@"".fd int) (@"".nfd int, @"".err error)
func @"".Dup2(@"".from int, @"".to int) (@"".err error)
const @"".E2BIG @"".Errno = 0x7
const @"".EACCES @"".Errno = 0xd
const @"".EADDRINUSE @"".Errno = 0x30
const @"".EADDRNOTAVAIL @"".Errno = 0x31
const @"".EAFNOSUPPORT @"".Errno = 0x2f
const @"".EAGAIN @"".Errno = 0x23
const @"".EALREADY @"".Errno = 0x25
const @"".EAUTH @"".Errno = 0x50
const @"".EBADARCH @"".Errno = 0x56
const @"".EBADEXEC @"".Errno = 0x55
const @"".EBADF @"".Errno = 0x9
const @"".EBADMACHO @"".Errno = 0x58
const @"".EBADMSG @"".Errno = 0x5e
const @"".EBADRPC @"".Errno = 0x48
const @"".EBUSY @"".Errno = 0x10
const @"".ECANCELED @"".Errno = 0x59
const @"".ECHILD @"".Errno = 0xa
const @"".ECHO = 0x8
const @"".ECHOCTL = 0x40
const @"".ECHOE = 0x2
const @"".ECHOK = 0x4
const @"".ECHOKE = 0x1
const @"".ECHONL = 0x10
const @"".ECHOPRT = 0x20
const @"".ECONNABORTED @"".Errno = 0x35
const @"".ECONNREFUSED @"".Errno = 0x3d
const @"".ECONNRESET @"".Errno = 0x36
const @"".EDEADLK @"".Errno = 0xb
const @"".EDESTADDRREQ @"".Errno = 0x27
const @"".EDEVERR @"".Errno = 0x53
const @"".EDOM @"".Errno = 0x21
const @"".EDQUOT @"".Errno = 0x45
const @"".EEXIST @"".Errno = 0x11
const @"".EFAULT @"".Errno = 0xe
const @"".EFBIG @"".Errno = 0x1b
const @"".EFTYPE @"".Errno = 0x4f
const @"".EHOSTDOWN @"".Errno = 0x40
const @"".EHOSTUNREACH @"".Errno = 0x41
const @"".EIDRM @"".Errno = 0x5a
const @"".EILSEQ @"".Errno = 0x5c
const @"".EINPROGRESS @"".Errno = 0x24
const @"".EINTR @"".Errno = 0x4
const @"".EINVAL @"".Errno = 0x16
const @"".EIO @"".Errno = 0x5
const @"".EISCONN @"".Errno = 0x38
const @"".EISDIR @"".Errno = 0x15
const @"".ELAST @"".Errno = 0x69
const @"".ELOOP @"".Errno = 0x3e
const @"".EMFILE @"".Errno = 0x18
const @"".EMLINK @"".Errno = 0x1f
const @"".EMSGSIZE @"".Errno = 0x28
const @"".EMULTIHOP @"".Errno = 0x5f
const @"".ENAMETOOLONG @"".Errno = 0x3f
const @"".ENEEDAUTH @"".Errno = 0x51
const @"".ENETDOWN @"".Errno = 0x32
const @"".ENETRESET @"".Errno = 0x34
const @"".ENETUNREACH @"".Errno = 0x33
const @"".ENFILE @"".Errno = 0x17
const @"".ENOATTR @"".Errno = 0x5d
const @"".ENOBUFS @"".Errno = 0x37
const @"".ENODATA @"".Errno = 0x60
const @"".ENODEV @"".Errno = 0x13
const @"".ENOENT @"".Errno = 0x2
const @"".ENOEXEC @"".Errno = 0x8
const @"".ENOLCK @"".Errno = 0x4d
const @"".ENOLINK @"".Errno = 0x61
const @"".ENOMEM @"".Errno = 0xc
const @"".ENOMSG @"".Errno = 0x5b
const @"".ENOPOLICY @"".Errno = 0x67
const @"".ENOPROTOOPT @"".Errno = 0x2a
const @"".ENOSPC @"".Errno = 0x1c
const @"".ENOSR @"".Errno = 0x62
const @"".ENOSTR @"".Errno = 0x63
const @"".ENOSYS @"".Errno = 0x4e
const @"".ENOTBLK @"".Errno = 0xf
const @"".ENOTCONN @"".Errno = 0x39
const @"".ENOTDIR @"".Errno = 0x14
const @"".ENOTEMPTY @"".Errno = 0x42
const @"".ENOTRECOVERABLE @"".Errno = 0x68
const @"".ENOTSOCK @"".Errno = 0x26
const @"".ENOTSUP @"".Errno = 0x2d
const @"".ENOTTY @"".Errno = 0x19
const @"".ENXIO @"".Errno = 0x6
const @"".EOPNOTSUPP @"".Errno = 0x66
const @"".EOVERFLOW @"".Errno = 0x54
const @"".EOWNERDEAD @"".Errno = 0x69
const @"".EPERM @"".Errno = 0x1
const @"".EPFNOSUPPORT @"".Errno = 0x2e
const @"".EPIPE @"".Errno = 0x20
const @"".EPROCLIM @"".Errno = 0x43
const @"".EPROCUNAVAIL @"".Errno = 0x4c
const @"".EPROGMISMATCH @"".Errno = 0x4b
const @"".EPROGUNAVAIL @"".Errno = 0x4a
const @"".EPROTO @"".Errno = 0x64
const @"".EPROTONOSUPPORT @"".Errno = 0x2b
const @"".EPROTOTYPE @"".Errno = 0x29
const @"".EPWROFF @"".Errno = 0x52
const @"".ERANGE @"".Errno = 0x22
const @"".EREMOTE @"".Errno = 0x47
const @"".EROFS @"".Errno = 0x1e
const @"".ERPCMISMATCH @"".Errno = 0x49
const @"".ESHLIBVERS @"".Errno = 0x57
const @"".ESHUTDOWN @"".Errno = 0x3a
const @"".ESOCKTNOSUPPORT @"".Errno = 0x2c
const @"".ESPIPE @"".Errno = 0x1d
const @"".ESRCH @"".Errno = 0x3
const @"".ESTALE @"".Errno = 0x46
const @"".ETIME @"".Errno = 0x65
const @"".ETIMEDOUT @"".Errno = 0x3c
const @"".ETOOMANYREFS @"".Errno = 0x3b
const @"".ETXTBSY @"".Errno = 0x1a
const @"".EUSERS @"".Errno = 0x44
const @"".EVFILT_AIO = -0x3
const @"".EVFILT_FS = -0x9
const @"".EVFILT_MACHPORT = -0x8
const @"".EVFILT_PROC = -0x5
const @"".EVFILT_READ = -0x1
const @"".EVFILT_SIGNAL = -0x6
const @"".EVFILT_SYSCOUNT = 0xc
const @"".EVFILT_THREADMARKER = 0xc
const @"".EVFILT_TIMER = -0x7
const @"".EVFILT_USER = -0xa
const @"".EVFILT_VM = -0xc
const @"".EVFILT_VNODE = -0x4
const @"".EVFILT_WRITE = -0x2
const @"".EV_ADD = 0x1
const @"".EV_CLEAR = 0x20
const @"".EV_DELETE = 0x2
const @"".EV_DISABLE = 0x8
const @"".EV_DISPATCH = 0x80
const @"".EV_ENABLE = 0x4
const @"".EV_EOF = 0x8000
const @"".EV_ERROR = 0x4000
const @"".EV_FLAG0 = 0x1000
const @"".EV_FLAG1 = 0x2000
const @"".EV_ONESHOT = 0x10
const @"".EV_OOBAND = 0x2000
const @"".EV_POLL = 0x1000
const @"".EV_RECEIPT = 0x40
const @"".EV_SYSFLAGS = 0xf000
const @"".EWOULDBLOCK @"".Errno = 0x23
const @"".EXDEV @"".Errno = 0x12
const @"".EXTA = 0x4b00
const @"".EXTB = 0x9600
const @"".EXTPROC = 0x800
func @"".Environ() (? []string)
type @"".Errno uintptr
func (? @"".Errno) @"".Error() (? string)
func (? @"".Errno) @"".Temporary() (? bool)
func (? @"".Errno) @"".Timeout() (? bool)
func (? *@"".Errno) @"".Error() (? string)
func (? *@"".Errno) @"".Temporary() (? bool)
func (? *@"".Errno) @"".Timeout() (? bool)
func @"".Exchangedata(@"".path1 string, @"".path2 string, @"".options int) (@"".err error)
func @"".Exec(@"".argv0 string, @"".argv []string, @"".envv []string) (@"".err error)
func @"".Exit(@"".code int) ()
const @"".FD_CLOEXEC = 0x1
const @"".FD_SETSIZE = 0x400
const @"".FLUSHO = 0x800000
const @"".F_ADDFILESIGS = 0x3d
const @"".F_ADDSIGS = 0x3b
const @"".F_ALLOCATEALL = 0x4
const @"".F_ALLOCATECONTIG = 0x2
const @"".F_CHKCLEAN = 0x29
const @"".F_DUPFD = 0x0
const @"".F_DUPFD_CLOEXEC = 0x43
const @"".F_FLUSH_DATA = 0x28
const @"".F_FREEZE_FS = 0x35
const @"".F_FULLFSYNC = 0x33
const @"".F_GETFD = 0x1
const @"".F_GETFL = 0x3
const @"".F_GETLK = 0x7
const @"".F_GETLKPID = 0x42
const @"".F_GETNOSIGPIPE = 0x4a
const @"".F_GETOWN = 0x5
const @"".F_GETPATH = 0x32
const @"".F_GETPATH_MTMINFO = 0x47
const @"".F_GETPROTECTIONCLASS = 0x3f
const @"".F_GLOBAL_NOCACHE = 0x37
const @"".F_LOG2PHYS = 0x31
const @"".F_LOG2PHYS_EXT = 0x41
const @"".F_MARKDEPENDENCY = 0x3c
const @"".F_NOCACHE = 0x30
const @"".F_NODIRECT = 0x3e
const @"".F_OK = 0x0
const @"".F_PATHPKG_CHECK = 0x34
const @"".F_PEOFPOSMODE = 0x3
const @"".F_PREALLOCATE = 0x2a
const @"".F_RDADVISE = 0x2c
const @"".F_RDAHEAD = 0x2d
const @"".F_RDLCK = 0x1
const @"".F_READBOOTSTRAP = 0x2e
const @"".F_SETBACKINGSTORE = 0x46
const @"".F_SETFD = 0x2
const @"".F_SETFL = 0x4
const @"".F_SETLK = 0x8
const @"".F_SETLKW = 0x9
const @"".F_SETNOSIGPIPE = 0x49
const @"".F_SETOWN = 0x6
const @"".F_SETPROTECTIONCLASS = 0x40
const @"".F_SETSIZE = 0x2b
const @"".F_THAW_FS = 0x36
const @"".F_UNLCK = 0x2
const @"".F_VOLPOSMODE = 0x4
const @"".F_WRITEBOOTSTRAP = 0x2f
const @"".F_WRLCK = 0x3
type @"".Fbootstraptransfer_t struct { @"".Offset int64; @"".Length uint64; @"".Buffer *byte }
func @"".Fchdir(@"".fd int) (@"".err error)
func @"".Fchflags(@"".fd int, @"".flags int) (@"".err error)
func @"".Fchmod(@"".fd int, @"".mode uint32) (@"".err error)
func @"".Fchown(@"".fd int, @"".uid int, @"".gid int) (@"".err error)
func @"".FcntlFlock(@"".fd uintptr, @"".cmd int, @"".lk *@"".Flock_t) (? error)
type @"".FdSet struct { @"".Bits [32]int32 }
func @"".Flock(@"".fd int, @"".how int) (@"".err error)
type @"".Flock_t struct { @"".Start int64; @"".Len int64; @"".Pid int32; @"".Type int16; @"".Whence int16 }
func @"".FlushBpf(@"".fd int) (? error)
func @"".ForkExec(@"".argv0 string, @"".argv []string, @"".attr *@"".ProcAttr) (@"".pid int, @"".err error)
var @"".ForkLock @"sync".RWMutex
func @"".Fpathconf(@"".fd int, @"".name int) (@"".val int, @"".err error)
type @"".Fsid struct { @"".Val [2]int32 }
func @"".Fstat(@"".fd int, @"".stat *@"".Stat_t) (@"".err error)
func @"".Fstatfs(@"".fd int, @"".stat *@"".Statfs_t) (@"".err error)
type @"".Fstore_t struct { @"".Flags uint32; @"".Posmode int32; @"".Offset int64; @"".Length int64; @"".Bytesalloc int64 }
func @"".Fsync(@"".fd int) (@"".err error)
func @"".Ftruncate(@"".fd int, @"".length int64) (@"".err error)
func @"".Futimes(@"".fd int, @"".tv []@"".Timeval) (@"".err error)
func @"".Getdirentries(@"".fd int, @"".buf []byte, @"".basep *uintptr) (@"".n int, @"".err error)
func @"".Getdtablesize() (@"".size int)
func @"".Getegid() (@"".egid int)
func @"".Getenv(@"".key string) (@"".value string, @"".found bool)
func @"".Geteuid() (@"".uid int)
func @"".Getfsstat(@"".buf []@"".Statfs_t, @"".flags int) (@"".n int, @"".err error)
func @"".Getgid() (@"".gid int)
func @"".Getgroups() (@"".gids []int, @"".err error)
func @"".Getpagesize() (? int)
func @"".Getpeername(@"".fd int) (@"".sa @"".Sockaddr, @"".err error)
func @"".Getpgid(@"".pid int) (@"".pgid int, @"".err error)
func @"".Getpgrp() (@"".pgrp int)
func @"".Getpid() (@"".pid int)
func @"".Getppid() (@"".ppid int)
func @"".Getpriority(@"".which int, @"".who int) (@"".prio int, @"".err error)
func @"".Getrlimit(@"".which int, @"".lim *@"".Rlimit) (@"".err error)
func @"".Getrusage(@"".who int, @"".rusage *@"".Rusage) (@"".err error)
func @"".Getsid(@"".pid int) (@"".sid int, @"".err error)
func @"".Getsockname(@"".fd int) (@"".sa @"".Sockaddr, @"".err error)
func @"".GetsockoptByte(@"".fd int, @"".level int, @"".opt int) (@"".value byte, @"".err error)
func @"".GetsockoptICMPv6Filter(@"".fd int, @"".level int, @"".opt int) (? *@"".ICMPv6Filter, ? error)
func @"".GetsockoptIPMreq(@"".fd int, @"".level int, @"".opt int) (? *@"".IPMreq, ? error)
func @"".GetsockoptIPv6MTUInfo(@"".fd int, @"".level int, @"".opt int) (? *@"".IPv6MTUInfo, ? error)
func @"".GetsockoptIPv6Mreq(@"".fd int, @"".level int, @"".opt int) (? *@"".IPv6Mreq, ? error)
func @"".GetsockoptInet4Addr(@"".fd int, @"".level int, @"".opt int) (@"".value [4]byte, @"".err error)
func @"".GetsockoptInt(@"".fd int, @"".level int, @"".opt int) (@"".value int, @"".err error)
func @"".Gettimeofday(@"".tv *@"".Timeval) (@"".err error)
func @"".Getuid() (@"".uid int)
func @"".Getwd() (? string, ? error)
const @"".HUPCL = 0x4000
const @"".ICANON = 0x100
const @"".ICMP6_FILTER = 0x12
type @"".ICMPv6Filter struct { @"".Filt [8]uint32 }
const @"".ICRNL = 0x100
const @"".IEXTEN = 0x400
const @"".IFF_ALLMULTI = 0x200
const @"".IFF_ALTPHYS = 0x4000
const @"".IFF_BROADCAST = 0x2
const @"".IFF_DEBUG = 0x4
const @"".IFF_LINK0 = 0x1000
const @"".IFF_LINK1 = 0x2000
const @"".IFF_LINK2 = 0x4000
const @"".IFF_LOOPBACK = 0x8
const @"".IFF_MULTICAST = 0x8000
const @"".IFF_NOARP = 0x80
const @"".IFF_NOTRAILERS = 0x20
const @"".IFF_OACTIVE = 0x400
const @"".IFF_POINTOPOINT = 0x10
const @"".IFF_PROMISC = 0x100
const @"".IFF_RUNNING = 0x40
const @"".IFF_SIMPLEX = 0x800
const @"".IFF_UP = 0x1
const @"".IFNAMSIZ = 0x10
const @"".IFT_1822 = 0x2
const @"".IFT_AAL5 = 0x31
const @"".IFT_ARCNET = 0x23
const @"".IFT_ARCNETPLUS = 0x24
const @"".IFT_ATM = 0x25
const @"".IFT_BRIDGE = 0xd1
const @"".IFT_CARP = 0xf8
const @"".IFT_CELLULAR = 0xff
const @"".IFT_CEPT = 0x13
const @"".IFT_DS3 = 0x1e
const @"".IFT_ENC = 0xf4
const @"".IFT_EON = 0x19
const @"".IFT_ETHER = 0x6
const @"".IFT_FAITH = 0x38
const @"".IFT_FDDI = 0xf
const @"".IFT_FRELAY = 0x20
const @"".IFT_FRELAYDCE = 0x2c
const @"".IFT_GIF = 0x37
const @"".IFT_HDH1822 = 0x3
const @"".IFT_HIPPI = 0x2f
const @"".IFT_HSSI = 0x2e
const @"".IFT_HY = 0xe
const @"".IFT_IEEE1394 = 0x90
const @"".IFT_IEEE8023ADLAG = 0x88
const @"".IFT_ISDNBASIC = 0x14
const @"".IFT_ISDNPRIMARY = 0x15
const @"".IFT_ISO88022LLC = 0x29
const @"".IFT_ISO88023 = 0x7
const @"".IFT_ISO88024 = 0x8
const @"".IFT_ISO88025 = 0x9
const @"".IFT_ISO88026 = 0xa
const @"".IFT_L2VLAN = 0x87
const @"".IFT_LAPB = 0x10
const @"".IFT_LOCALTALK = 0x2a
const @"".IFT_LOOP = 0x18
const @"".IFT_MIOX25 = 0x26
const @"".IFT_MODEM = 0x30
const @"".IFT_NSIP = 0x1b
const @"".IFT_OTHER = 0x1
const @"".IFT_P10 = 0xc
const @"".IFT_P80 = 0xd
const @"".IFT_PARA = 0x22
const @"".IFT_PDP = 0xff
const @"".IFT_PFLOG = 0xf5
const @"".IFT_PFSYNC = 0xf6
const @"".IFT_PPP = 0x17
const @"".IFT_PROPMUX = 0x36
const @"".IFT_PROPVIRTUAL = 0x35
const @"".IFT_PTPSERIAL = 0x16
const @"".IFT_RS232 = 0x21
const @"".IFT_SDLC = 0x11
const @"".IFT_SIP = 0x1f
const @"".IFT_SLIP = 0x1c
const @"".IFT_SMDSDXI = 0x2b
const @"".IFT_SMDSICIP = 0x34
const @"".IFT_SONET = 0x27
const @"".IFT_SONETPATH = 0x32
const @"".IFT_SONETVT = 0x33
const @"".IFT_STARLAN = 0xb
const @"".IFT_STF = 0x39
const @"".IFT_T1 = 0x12
const @"".IFT_ULTRA = 0x1d
const @"".IFT_V35 = 0x2d
const @"".IFT_X25 = 0x5
const @"".IFT_X25DDN = 0x4
const @"".IFT_X25PLE = 0x28
const @"".IFT_XETHER = 0x1a
const @"".IGNBRK = 0x1
const @"".IGNCR = 0x80
const @"".IGNPAR = 0x4
const @"".IMAXBEL = 0x2000
const @"".INLCR = 0x40
const @"".INPCK = 0x10
const @"".IN_CLASSA_HOST = 0xffffff
const @"".IN_CLASSA_MAX = 0x80
const @"".IN_CLASSA_NET = 0xff000000
const @"".IN_CLASSA_NSHIFT = 0x18
const @"".IN_CLASSB_HOST = 0xffff
const @"".IN_CLASSB_MAX = 0x10000
const @"".IN_CLASSB_NET = 0xffff0000
const @"".IN_CLASSB_NSHIFT = 0x10
const @"".IN_CLASSC_HOST = 0xff
const @"".IN_CLASSC_NET = 0xffffff00
const @"".IN_CLASSC_NSHIFT = 0x8
const @"".IN_CLASSD_HOST = 0xfffffff
const @"".IN_CLASSD_NET = 0xf0000000
const @"".IN_CLASSD_NSHIFT = 0x1c
const @"".IN_LINKLOCALNETNUM = 0xa9fe0000
const @"".IN_LOOPBACKNET = 0x7f
type @"".IPMreq struct { @"".Multiaddr [4]byte; @"".Interface [4]byte }
const @"".IPPROTO_3PC = 0x22
const @"".IPPROTO_ADFS = 0x44
const @"".IPPROTO_AH = 0x33
const @"".IPPROTO_AHIP = 0x3d
const @"".IPPROTO_APES = 0x63
const @"".IPPROTO_ARGUS = 0xd
const @"".IPPROTO_AX25 = 0x5d
const @"".IPPROTO_BHA = 0x31
const @"".IPPROTO_BLT = 0x1e
const @"".IPPROTO_BRSATMON = 0x4c
const @"".IPPROTO_CFTP = 0x3e
const @"".IPPROTO_CHAOS = 0x10
const @"".IPPROTO_CMTP = 0x26
const @"".IPPROTO_CPHB = 0x49
const @"".IPPROTO_CPNX = 0x48
const @"".IPPROTO_DDP = 0x25
const @"".IPPROTO_DGP = 0x56
const @"".IPPROTO_DIVERT = 0xfe
const @"".IPPROTO_DONE = 0x101
const @"".IPPROTO_DSTOPTS = 0x3c
const @"".IPPROTO_EGP = 0x8
const @"".IPPROTO_EMCON = 0xe
const @"".IPPROTO_ENCAP = 0x62
const @"".IPPROTO_EON = 0x50
const @"".IPPROTO_ESP = 0x32
const @"".IPPROTO_ETHERIP = 0x61
const @"".IPPROTO_FRAGMENT = 0x2c
const @"".IPPROTO_GGP = 0x3
const @"".IPPROTO_GMTP = 0x64
const @"".IPPROTO_GRE = 0x2f
const @"".IPPROTO_HELLO = 0x3f
const @"".IPPROTO_HMP = 0x14
const @"".IPPROTO_HOPOPTS = 0x0
const @"".IPPROTO_ICMP = 0x1
const @"".IPPROTO_ICMPV6 = 0x3a
const @"".IPPROTO_IDP = 0x16
const @"".IPPROTO_IDPR = 0x23
const @"".IPPROTO_IDRP = 0x2d
const @"".IPPROTO_IGMP = 0x2
const @"".IPPROTO_IGP = 0x55
const @"".IPPROTO_IGRP = 0x58
const @"".IPPROTO_IL = 0x28
const @"".IPPROTO_INLSP = 0x34
const @"".IPPROTO_INP = 0x20
const @"".IPPROTO_IP = 0x0
const @"".IPPROTO_IPCOMP = 0x6c
const @"".IPPROTO_IPCV = 0x47
const @"".IPPROTO_IPEIP = 0x5e
const @"".IPPROTO_IPIP = 0x4
const @"".IPPROTO_IPPC = 0x43
const @"".IPPROTO_IPV4 = 0x4
const @"".IPPROTO_IPV6 = 0x29
const @"".IPPROTO_IRTP = 0x1c
const @"".IPPROTO_KRYPTOLAN = 0x41
const @"".IPPROTO_LARP = 0x5b
const @"".IPPROTO_LEAF1 = 0x19
const @"".IPPROTO_LEAF2 = 0x1a
const @"".IPPROTO_MAX = 0x100
const @"".IPPROTO_MAXID = 0x34
const @"".IPPROTO_MEAS = 0x13
const @"".IPPROTO_MHRP = 0x30
const @"".IPPROTO_MICP = 0x5f
const @"".IPPROTO_MTP = 0x5c
const @"".IPPROTO_MUX = 0x12
const @"".IPPROTO_ND = 0x4d
const @"".IPPROTO_NHRP = 0x36
const @"".IPPROTO_NONE = 0x3b
const @"".IPPROTO_NSP = 0x1f
const @"".IPPROTO_NVPII = 0xb
const @"".IPPROTO_OSPFIGP = 0x59
const @"".IPPROTO_PGM = 0x71
const @"".IPPROTO_PIGP = 0x9
const @"".IPPROTO_PIM = 0x67
const @"".IPPROTO_PRM = 0x15
const @"".IPPROTO_PUP = 0xc
const @"".IPPROTO_PVP = 0x4b
const @"".IPPROTO_RAW = 0xff
const @"".IPPROTO_RCCMON = 0xa
const @"".IPPROTO_RDP = 0x1b
const @"".IPPROTO_ROUTING = 0x2b
const @"".IPPROTO_RSVP = 0x2e
const @"".IPPROTO_RVD = 0x42
const @"".IPPROTO_SATEXPAK = 0x40
const @"".IPPROTO_SATMON = 0x45
const @"".IPPROTO_SCCSP = 0x60
const @"".IPPROTO_SCTP = 0x84
const @"".IPPROTO_SDRP = 0x2a
const @"".IPPROTO_SEP = 0x21
const @"".IPPROTO_SRPC = 0x5a
const @"".IPPROTO_ST = 0x7
const @"".IPPROTO_SVMTP = 0x52
const @"".IPPROTO_SWIPE = 0x35
const @"".IPPROTO_TCF = 0x57
const @"".IPPROTO_TCP = 0x6
const @"".IPPROTO_TP = 0x1d
const @"".IPPROTO_TPXX = 0x27
const @"".IPPROTO_TRUNK1 = 0x17
const @"".IPPROTO_TRUNK2 = 0x18
const @"".IPPROTO_TTP = 0x54
const @"".IPPROTO_UDP = 0x11
const @"".IPPROTO_VINES = 0x53
const @"".IPPROTO_VISA = 0x46
const @"".IPPROTO_VMTP = 0x51
const @"".IPPROTO_WBEXPAK = 0x4f
const @"".IPPROTO_WBMON = 0x4e
const @"".IPPROTO_WSN = 0x4a
const @"".IPPROTO_XNET = 0xf
const @"".IPPROTO_XTP = 0x24
const @"".IPV6_2292DSTOPTS = 0x17
const @"".IPV6_2292HOPLIMIT = 0x14
const @"".IPV6_2292HOPOPTS = 0x16
const @"".IPV6_2292NEXTHOP = 0x15
const @"".IPV6_2292PKTINFO = 0x13
const @"".IPV6_2292PKTOPTIONS = 0x19
const @"".IPV6_2292RTHDR = 0x18
const @"".IPV6_BINDV6ONLY = 0x1b
const @"".IPV6_BOUND_IF = 0x7d
const @"".IPV6_CHECKSUM = 0x1a
const @"".IPV6_DEFAULT_MULTICAST_HOPS = 0x1
const @"".IPV6_DEFAULT_MULTICAST_LOOP = 0x1
const @"".IPV6_DEFHLIM = 0x40
const @"".IPV6_FAITH = 0x1d
const @"".IPV6_FLOWINFO_MASK = 0xffffff0f
const @"".IPV6_FLOWLABEL_MASK = 0xffff0f00
const @"".IPV6_FRAGTTL = 0x78
const @"".IPV6_FW_ADD = 0x1e
const @"".IPV6_FW_DEL = 0x1f
const @"".IPV6_FW_FLUSH = 0x20
const @"".IPV6_FW_GET = 0x22
const @"".IPV6_FW_ZERO = 0x21
const @"".IPV6_HLIMDEC = 0x1
const @"".IPV6_IPSEC_POLICY = 0x1c
const @"".IPV6_JOIN_GROUP = 0xc
const @"".IPV6_LEAVE_GROUP = 0xd
const @"".IPV6_MAXHLIM = 0xff
const @"".IPV6_MAXOPTHDR = 0x800
const @"".IPV6_MAXPACKET = 0xffff
const @"".IPV6_MAX_GROUP_SRC_FILTER = 0x200
const @"".IPV6_MAX_MEMBERSHIPS = 0xfff
const @"".IPV6_MAX_SOCK_SRC_FILTER = 0x80
const @"".IPV6_MIN_MEMBERSHIPS = 0x1f
const @"".IPV6_MMTU = 0x500
const @"".IPV6_MULTICAST_HOPS = 0xa
const @"".IPV6_MULTICAST_IF = 0x9
const @"".IPV6_MULTICAST_LOOP = 0xb
const @"".IPV6_PORTRANGE = 0xe
const @"".IPV6_PORTRANGE_DEFAULT = 0x0
const @"".IPV6_PORTRANGE_HIGH = 0x1
const @"".IPV6_PORTRANGE_LOW = 0x2
const @"".IPV6_RECVTCLASS = 0x23
const @"".IPV6_RTHDR_LOOSE = 0x0
const @"".IPV6_RTHDR_STRICT = 0x1
const @"".IPV6_RTHDR_TYPE_0 = 0x0
const @"".IPV6_SOCKOPT_RESERVED1 = 0x3
const @"".IPV6_TCLASS = 0x24
const @"".IPV6_UNICAST_HOPS = 0x4
const @"".IPV6_V6ONLY = 0x1b
const @"".IPV6_VERSION = 0x60
const @"".IPV6_VERSION_MASK = 0xf0
const @"".IP_ADD_MEMBERSHIP = 0xc
const @"".IP_ADD_SOURCE_MEMBERSHIP = 0x46
const @"".IP_BLOCK_SOURCE = 0x48
const @"".IP_BOUND_IF = 0x19
const @"".IP_DEFAULT_MULTICAST_LOOP = 0x1
const @"".IP_DEFAULT_MULTICAST_TTL = 0x1
const @"".IP_DF = 0x4000
const @"".IP_DROP_MEMBERSHIP = 0xd
const @"".IP_DROP_SOURCE_MEMBERSHIP = 0x47
const @"".IP_DUMMYNET_CONFIGURE = 0x3c
const @"".IP_DUMMYNET_DEL = 0x3d
const @"".IP_DUMMYNET_FLUSH = 0x3e
const @"".IP_DUMMYNET_GET = 0x40
const @"".IP_FAITH = 0x16
const @"".IP_FW_ADD = 0x28
const @"".IP_FW_DEL = 0x29
const @"".IP_FW_FLUSH = 0x2a
const @"".IP_FW_GET = 0x2c
const @"".IP_FW_RESETLOG = 0x2d
const @"".IP_FW_ZERO = 0x2b
const @"".IP_HDRINCL = 0x2
const @"".IP_IPSEC_POLICY = 0x15
const @"".IP_MAXPACKET = 0xffff
const @"".IP_MAX_GROUP_SRC_FILTER = 0x200
const @"".IP_MAX_MEMBERSHIPS = 0xfff
const @"".IP_MAX_SOCK_MUTE_FILTER = 0x80
const @"".IP_MAX_SOCK_SRC_FILTER = 0x80
const @"".IP_MF = 0x2000
const @"".IP_MIN_MEMBERSHIPS = 0x1f
const @"".IP_MSFILTER = 0x4a
const @"".IP_MSS = 0x240
const @"".IP_MULTICAST_IF = 0x9
const @"".IP_MULTICAST_IFINDEX = 0x42
const @"".IP_MULTICAST_LOOP = 0xb
const @"".IP_MULTICAST_TTL = 0xa
const @"".IP_MULTICAST_VIF = 0xe
const @"".IP_NAT__XXX = 0x37
const @"".IP_OFFMASK = 0x1fff
const @"".IP_OLD_FW_ADD = 0x32
const @"".IP_OLD_FW_DEL = 0x33
const @"".IP_OLD_FW_FLUSH = 0x34
const @"".IP_OLD_FW_GET = 0x36
const @"".IP_OLD_FW_RESETLOG = 0x38
const @"".IP_OLD_FW_ZERO = 0x35
const @"".IP_OPTIONS = 0x1
const @"".IP_PKTINFO = 0x1a
const @"".IP_PORTRANGE = 0x13
const @"".IP_PORTRANGE_DEFAULT = 0x0
const @"".IP_PORTRANGE_HIGH = 0x1
const @"".IP_PORTRANGE_LOW = 0x2
const @"".IP_RECVDSTADDR = 0x7
const @"".IP_RECVIF = 0x14
const @"".IP_RECVOPTS = 0x5
const @"".IP_RECVPKTINFO = 0x1a
const @"".IP_RECVRETOPTS = 0x6
const @"".IP_RECVTTL = 0x18
const @"".IP_RETOPTS = 0x8
const @"".IP_RF = 0x8000
const @"".IP_RSVP_OFF = 0x10
const @"".IP_RSVP_ON = 0xf
const @"".IP_RSVP_VIF_OFF = 0x12
const @"".IP_RSVP_VIF_ON = 0x11
const @"".IP_STRIPHDR = 0x17
const @"".IP_TOS = 0x3
const @"".IP_TRAFFIC_MGT_BACKGROUND = 0x41
const @"".IP_TTL = 0x4
const @"".IP_UNBLOCK_SOURCE = 0x49
type @"".IPv6MTUInfo struct { @"".Addr @"".RawSockaddrInet6; @"".Mtu uint32 }
type @"".IPv6Mreq struct { @"".Multiaddr [16]byte; @"".Interface uint32 }
const @"".ISIG = 0x80
const @"".ISTRIP = 0x20
const @"".IUTF8 = 0x4000
const @"".IXANY = 0x800
const @"".IXOFF = 0x400
const @"".IXON = 0x200
type @"".IfData struct { @"".Type uint8; @"".Typelen uint8; @"".Physical uint8; @"".Addrlen uint8; @"".Hdrlen uint8; @"".Recvquota uint8; @"".Xmitquota uint8; @"".Unused1 uint8; @"".Mtu uint32; @"".Metric uint32; @"".Baudrate uint32; @"".Ipackets uint32; @"".Ierrors uint32; @"".Opackets uint32; @"".Oerrors uint32; @"".Collisions uint32; @"".Ibytes uint32; @"".Obytes uint32; @"".Imcasts uint32; @"".Omcasts uint32; @"".Iqdrops uint32; @"".Noproto uint32; @"".Recvtiming uint32; @"".Xmittiming uint32; @"".Lastchange @"".Timeval32; @"".Unused2 uint32; @"".Hwassist uint32; @"".Reserved1 uint32; @"".Reserved2 uint32 }
type @"".IfMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Data @"".IfData }
type @"".IfaMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Metric int32 }
type @"".IfmaMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte }
type @"".IfmaMsghdr2 struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Addrs int32; @"".Flags int32; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Refcount int32 }
const @"".ImplementsGetwd = true
type @"".Inet4Pktinfo struct { @"".Ifindex uint32; @"".Spec_dst [4]byte; @"".Addr [4]byte }
type @"".Inet6Pktinfo struct { @"".Addr [16]byte; @"".Ifindex uint32 }
type @"".InterfaceAddrMessage struct { @"".Header @"".IfaMsghdr; @"".Data []byte }
func (? *@"".InterfaceAddrMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".InterfaceMessage struct { @"".Header @"".IfMsghdr; @"".Data []byte }
func (? *@"".InterfaceMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".InterfaceMulticastAddrMessage struct { @"".Header @"".IfmaMsghdr2; @"".Data []byte }
func (? *@"".InterfaceMulticastAddrMessage) @"".sockaddr() (@"".sas []@"".Sockaddr)
type @"".Iovec struct { @"".Base *byte; @"".Len uint64 }
func (? *@"".Iovec) @"".SetLen(@"".length int) ()
func @"".Issetugid() (@"".tainted bool)
func @"".Kevent(@"".kq int, @"".changes []@"".Kevent_t, @"".events []@"".Kevent_t, @"".timeout *@"".Timespec) (@"".n int, @"".err error)
type @"".Kevent_t struct { @"".Ident uint64; @"".Filter int16; @"".Flags uint16; @"".Fflags uint32; @"".Data int64; @"".Udata *byte }
func @"".Kill(@"".pid int, @"".signum @"".Signal) (@"".err error)
func @"".Kqueue() (@"".fd int, @"".err error)
const @"".LOCK_EX = 0x2
const @"".LOCK_NB = 0x4
const @"".LOCK_SH = 0x1
const @"".LOCK_UN = 0x8
func @"".Lchown(@"".path string, @"".uid int, @"".gid int) (@"".err error)
type @"".Linger struct { @"".Onoff int32; @"".Linger int32 }
func @"".Link(@"".path string, @"".link string) (@"".err error)
func @"".Listen(@"".s int, @"".backlog int) (@"".err error)
type @"".Log2phys_t struct { @"".Flags uint32; @"".Contigbytes int64; @"".Devoffset int64 }
func @"".Lstat(@"".path string, @"".stat *@"".Stat_t) (@"".err error)
const @"".MADV_CAN_REUSE = 0x9
const @"".MADV_DONTNEED = 0x4
const @"".MADV_FREE = 0x5
const @"".MADV_FREE_REUSABLE = 0x7
const @"".MADV_FREE_REUSE = 0x8
const @"".MADV_NORMAL = 0x0
const @"".MADV_RANDOM = 0x1
const @"".MADV_SEQUENTIAL = 0x2
const @"".MADV_WILLNEED = 0x3
const @"".MADV_ZERO_WIRED_PAGES = 0x6
const @"".MAP_ANON = 0x1000
const @"".MAP_COPY = 0x2
const @"".MAP_FILE = 0x0
const @"".MAP_FIXED = 0x10
const @"".MAP_HASSEMAPHORE = 0x200
const @"".MAP_JIT = 0x800
const @"".MAP_NOCACHE = 0x400
const @"".MAP_NOEXTEND = 0x100
const @"".MAP_NORESERVE = 0x40
const @"".MAP_PRIVATE = 0x2
const @"".MAP_RENAME = 0x20
const @"".MAP_RESERVED0080 = 0x80
const @"".MAP_SHARED = 0x1
const @"".MCL_CURRENT = 0x1
const @"".MCL_FUTURE = 0x2
const @"".MSG_CTRUNC = 0x20
const @"".MSG_DONTROUTE = 0x4
const @"".MSG_DONTWAIT = 0x80
const @"".MSG_EOF = 0x100
const @"".MSG_EOR = 0x8
const @"".MSG_FLUSH = 0x400
const @"".MSG_HAVEMORE = 0x2000
const @"".MSG_HOLD = 0x800
const @"".MSG_NEEDSA = 0x10000
const @"".MSG_OOB = 0x1
const @"".MSG_PEEK = 0x2
const @"".MSG_RCVMORE = 0x4000
const @"".MSG_SEND = 0x1000
const @"".MSG_TRUNC = 0x10
const @"".MSG_WAITALL = 0x40
const @"".MSG_WAITSTREAM = 0x200
const @"".MS_ASYNC = 0x1
const @"".MS_DEACTIVATE = 0x8
const @"".MS_INVALIDATE = 0x2
const @"".MS_KILLPAGES = 0x4
const @"".MS_SYNC = 0x10
func @"".Mkdir(@"".path string, @"".mode uint32) (@"".err error)
func @"".Mkfifo(@"".path string, @"".mode uint32) (@"".err error)
func @"".Mknod(@"".path string, @"".mode uint32, @"".dev int) (@"".err error)
func @"".Mlock(@"".b []byte) (@"".err error)
func @"".Mlockall(@"".flags int) (@"".err error)
func @"".Mmap(@"".fd int, @"".offset int64, @"".length int, @"".prot int, @"".flags int) (@"".data []byte, @"".err error)
func @"".Mprotect(@"".b []byte, @"".prot int) (@"".err error)
type @"".Msghdr struct { @"".Name *byte; @"".Namelen uint32; @"".Pad_cgo_0 [4]byte; @"".Iov *@"".Iovec; @"".Iovlen int32; @"".Pad_cgo_1 [4]byte; @"".Control *byte; @"".Controllen uint32; @"".Flags int32 }
func (? *@"".Msghdr) @"".SetControllen(@"".length int) ()
func @"".Munlock(@"".b []byte) (@"".err error)
func @"".Munlockall() (@"".err error)
func @"".Munmap(@"".b []byte) (@"".err error)
const @"".NAME_MAX = 0xff
const @"".NET_RT_DUMP = 0x1
const @"".NET_RT_DUMP2 = 0x7
const @"".NET_RT_FLAGS = 0x2
const @"".NET_RT_IFLIST = 0x3
const @"".NET_RT_IFLIST2 = 0x6
const @"".NET_RT_MAXID = 0xa
const @"".NET_RT_STAT = 0x4
const @"".NET_RT_TRASH = 0x5
const @"".NOFLSH = 0x80000000
const @"".NOTE_ABSOLUTE = 0x8
const @"".NOTE_ATTRIB = 0x8
const @"".NOTE_CHILD = 0x4
const @"".NOTE_DELETE = 0x1
const @"".NOTE_EXEC = 0x20000000
const @"".NOTE_EXIT = 0x80000000
const @"".NOTE_EXITSTATUS = 0x4000000
const @"".NOTE_EXTEND = 0x4
const @"".NOTE_FFAND = 0x40000000
const @"".NOTE_FFCOPY = 0xc0000000
const @"".NOTE_FFCTRLMASK = 0xc0000000
const @"".NOTE_FFLAGSMASK = 0xffffff
const @"".NOTE_FFNOP = 0x0
const @"".NOTE_FFOR = 0x80000000
const @"".NOTE_FORK = 0x40000000
const @"".NOTE_LINK = 0x10
const @"".NOTE_LOWAT = 0x1
const @"".NOTE_NONE = 0x80
const @"".NOTE_NSECONDS = 0x4
const @"".NOTE_PCTRLMASK = -0x100000
const @"".NOTE_PDATAMASK = 0xfffff
const @"".NOTE_REAP = 0x10000000
const @"".NOTE_RENAME = 0x20
const @"".NOTE_RESOURCEEND = 0x2000000
const @"".NOTE_REVOKE = 0x40
const @"".NOTE_SECONDS = 0x1
const @"".NOTE_SIGNAL = 0x8000000
const @"".NOTE_TRACK = 0x1
const @"".NOTE_TRACKERR = 0x2
const @"".NOTE_TRIGGER = 0x1000000
const @"".NOTE_USECONDS = 0x2
const @"".NOTE_VM_ERROR = 0x10000000
const @"".NOTE_VM_PRESSURE = 0x80000000
const @"".NOTE_VM_PRESSURE_SUDDEN_TERMINATE = 0x20000000
const @"".NOTE_VM_PRESSURE_TERMINATE = 0x40000000
const @"".NOTE_WRITE = 0x2
func @"".NsecToTimespec(@"".nsec int64) (@"".ts @"".Timespec)
func @"".NsecToTimeval(@"".nsec int64) (@"".tv @"".Timeval)
const @"".OCRNL = 0x10
const @"".OFDEL = 0x20000
const @"".OFILL = 0x80
const @"".ONLCR = 0x2
const @"".ONLRET = 0x40
const @"".ONOCR = 0x20
const @"".ONOEOT = 0x8
const @"".OPOST = 0x1
const @"".O_ACCMODE = 0x3
const @"".O_ALERT = 0x20000000
const @"".O_APPEND = 0x8
const @"".O_ASYNC = 0x40
const @"".O_CLOEXEC = 0x1000000
const @"".O_CREAT = 0x200
const @"".O_DIRECTORY = 0x100000
const @"".O_DSYNC = 0x400000
const @"".O_EVTONLY = 0x8000
const @"".O_EXCL = 0x800
const @"".O_EXLOCK = 0x20
const @"".O_FSYNC = 0x80
const @"".O_NDELAY = 0x4
const @"".O_NOCTTY = 0x20000
const @"".O_NOFOLLOW = 0x100
const @"".O_NONBLOCK = 0x4
const @"".O_POPUP = 0x80000000
const @"".O_RDONLY = 0x0
const @"".O_RDWR = 0x2
const @"".O_SHLOCK = 0x10
const @"".O_SYMLINK = 0x200000
const @"".O_SYNC = 0x80
const @"".O_TRUNC = 0x400
const @"".O_WRONLY = 0x1
func @"".Open(@"".path string, @"".mode int, @"".perm uint32) (@"".fd int, @"".err error)
const @"".PARENB = 0x1000
const @"".PARMRK = 0x8
const @"".PARODD = 0x2000
const @"".PENDIN = 0x20000000
const @"".PRIO_PGRP = 0x1
const @"".PRIO_PROCESS = 0x0
const @"".PRIO_USER = 0x2
const @"".PROT_EXEC = 0x4
const @"".PROT_NONE = 0x0
const @"".PROT_READ = 0x1
const @"".PROT_WRITE = 0x2
const @"".PTRACE_CONT = 0x7
const @"".PTRACE_KILL = 0x8
const @"".PTRACE_TRACEME = 0x0
const @"".PT_ATTACH = 0xa
const @"".PT_ATTACHEXC = 0xe
const @"".PT_CONTINUE = 0x7
const @"".PT_DENY_ATTACH = 0x1f
const @"".PT_DETACH = 0xb
const @"".PT_FIRSTMACH = 0x20
const @"".PT_FORCEQUOTA = 0x1e
const @"".PT_KILL = 0x8
const @"".PT_READ_D = 0x2
const @"".PT_READ_I = 0x1
const @"".PT_READ_U = 0x3
const @"".PT_SIGEXC = 0xc
const @"".PT_STEP = 0x9
const @"".PT_THUPDATE = 0xd
const @"".PT_TRACE_ME = 0x0
const @"".PT_WRITE_D = 0x5
const @"".PT_WRITE_I = 0x4
const @"".PT_WRITE_U = 0x6
func @"".ParseDirent(@"".buf []byte, @"".max int, @"".names []string) (@"".consumed int, @"".count int, @"".newnames []string)
func @"".ParseRoutingMessage(@"".b []byte) (@"".msgs []@"".RoutingMessage, @"".err error)
func @"".ParseRoutingSockaddr(@"".msg @"".RoutingMessage) (@"".sas []@"".Sockaddr, @"".err error)
func @"".ParseSocketControlMessage(@"".b []byte) (? []@"".SocketControlMessage, ? error)
func @"".ParseUnixRights(@"".m *@"".SocketControlMessage) (? []int, ? error)
func @"".Pathconf(@"".path string, @"".name int) (@"".val int, @"".err error)
func @"".Pipe(@"".p []int) (@"".err error)
func @"".Pread(@"".fd int, @"".p []byte, @"".offset int64) (@"".n int, @"".err error)
type @"".ProcAttr struct { @"".Dir string; @"".Env []string; @"".Files []uintptr; @"".Sys *@"".SysProcAttr }
func @"".PtraceAttach(@"".pid int) (@"".err error)
func @"".PtraceDetach(@"".pid int) (@"".err error)
func @"".Pwrite(@"".fd int, @"".p []byte, @"".offset int64) (@"".n int, @"".err error)
const @"".RLIMIT_AS = 0x5
const @"".RLIMIT_CORE = 0x4
const @"".RLIMIT_CPU = 0x0
const @"".RLIMIT_DATA = 0x2
const @"".RLIMIT_FSIZE = 0x1
const @"".RLIMIT_NOFILE = 0x8
const @"".RLIMIT_STACK = 0x3
const @"".RLIM_INFINITY = 0x7fffffffffffffff
const @"".RTAX_AUTHOR = 0x6
const @"".RTAX_BRD = 0x7
const @"".RTAX_DST = 0x0
const @"".RTAX_GATEWAY = 0x1
const @"".RTAX_GENMASK = 0x3
const @"".RTAX_IFA = 0x5
const @"".RTAX_IFP = 0x4
const @"".RTAX_MAX = 0x8
const @"".RTAX_NETMASK = 0x2
const @"".RTA_AUTHOR = 0x40
const @"".RTA_BRD = 0x80
const @"".RTA_DST = 0x1
const @"".RTA_GATEWAY = 0x2
const @"".RTA_GENMASK = 0x8
const @"".RTA_IFA = 0x20
const @"".RTA_IFP = 0x10
const @"".RTA_NETMASK = 0x4
const @"".RTF_BLACKHOLE = 0x1000
const @"".RTF_BROADCAST = 0x400000
const @"".RTF_CLONING = 0x100
const @"".RTF_CONDEMNED = 0x2000000
const @"".RTF_DELCLONE = 0x80
const @"".RTF_DONE = 0x40
const @"".RTF_DYNAMIC = 0x10
const @"".RTF_GATEWAY = 0x2
const @"".RTF_HOST = 0x4
const @"".RTF_IFREF = 0x4000000
const @"".RTF_IFSCOPE = 0x1000000
const @"".RTF_LLINFO = 0x400
const @"".RTF_LOCAL = 0x200000
const @"".RTF_MODIFIED = 0x20
const @"".RTF_MULTICAST = 0x800000
const @"".RTF_PINNED = 0x100000
const @"".RTF_PRCLONING = 0x10000
const @"".RTF_PROTO1 = 0x8000
const @"".RTF_PROTO2 = 0x4000
const @"".RTF_PROTO3 = 0x40000
const @"".RTF_REJECT = 0x8
const @"".RTF_STATIC = 0x800
const @"".RTF_UP = 0x1
const @"".RTF_WASCLONED = 0x20000
const @"".RTF_XRESOLVE = 0x200
const @"".RTM_ADD = 0x1
const @"".RTM_CHANGE = 0x3
const @"".RTM_DELADDR = 0xd
const @"".RTM_DELETE = 0x2
const @"".RTM_DELMADDR = 0x10
const @"".RTM_GET = 0x4
const @"".RTM_GET2 = 0x14
const @"".RTM_IFINFO = 0xe
const @"".RTM_IFINFO2 = 0x12
const @"".RTM_LOCK = 0x8
const @"".RTM_LOSING = 0x5
const @"".RTM_MISS = 0x7
const @"".RTM_NEWADDR = 0xc
const @"".RTM_NEWMADDR = 0xf
const @"".RTM_NEWMADDR2 = 0x13
const @"".RTM_OLDADD = 0x9
const @"".RTM_OLDDEL = 0xa
const @"".RTM_REDIRECT = 0x6
const @"".RTM_RESOLVE = 0xb
const @"".RTM_RTTUNIT = 0xf4240
const @"".RTM_VERSION = 0x5
const @"".RTV_EXPIRE = 0x4
const @"".RTV_HOPCOUNT = 0x2
const @"".RTV_MTU = 0x1
const @"".RTV_RPIPE = 0x8
const @"".RTV_RTT = 0x40
const @"".RTV_RTTVAR = 0x80
const @"".RTV_SPIPE = 0x10
const @"".RTV_SSTHRESH = 0x20
const @"".RUSAGE_CHILDREN = -0x1
const @"".RUSAGE_SELF = 0x0
type @"".Radvisory_t struct { @"".Offset int64; @"".Count int32; @"".Pad_cgo_0 [4]byte }
type @"".RawSockaddr struct { @"".Len uint8; @"".Family uint8; @"".Data [14]int8 }
type @"".RawSockaddrAny struct { @"".Addr @"".RawSockaddr; @"".Pad [92]int8 }
type @"".RawSockaddrDatalink struct { @"".Len uint8; @"".Family uint8; @"".Index uint16; @"".Type uint8; @"".Nlen uint8; @"".Alen uint8; @"".Slen uint8; @"".Data [12]int8 }
type @"".RawSockaddrInet4 struct { @"".Len uint8; @"".Family uint8; @"".Port uint16; @"".Addr [4]byte; @"".Zero [8]int8 }
type @"".RawSockaddrInet6 struct { @"".Len uint8; @"".Family uint8; @"".Port uint16; @"".Flowinfo uint32; @"".Addr [16]byte; @"".Scope_id uint32 }
type @"".RawSockaddrUnix struct { @"".Len uint8; @"".Family uint8; @"".Path [104]int8 }
func @"".RawSyscall(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".RawSyscall6(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Read(@"".fd int, @"".p []byte) (@"".n int, @"".err error)
func @"".ReadDirent(@"".fd int, @"".buf []byte) (@"".n int, @"".err error)
func @"".Readlink(@"".path string, @"".buf []byte) (@"".n int, @"".err error)
func @"".Recvfrom(@"".fd int, @"".p []byte, @"".flags int) (@"".n int, @"".from @"".Sockaddr, @"".err error)
func @"".Recvmsg(@"".fd int, @"".p []byte, @"".oob []byte, @"".flags int) (@"".n int, @"".oobn int, @"".recvflags int, @"".from @"".Sockaddr, @"".err error)
func @"".Rename(@"".from string, @"".to string) (@"".err error)
func @"".Revoke(@"".path string) (@"".err error)
type @"".Rlimit struct { @"".Cur uint64; @"".Max uint64 }
func @"".Rmdir(@"".path string) (@"".err error)
type @"".RouteMessage struct { @"".Header @"".RtMsghdr; @"".Data []byte }
func (? *@"".RouteMessage) @"".sockaddr() (? []@"".Sockaddr)
func @"".RouteRIB(@"".facility int, @"".param int) (? []byte, ? error)
type @"".RoutingMessage interface { @"".sockaddr() (? []@"".Sockaddr) }
type @"".RtMetrics struct { @"".Locks uint32; @"".Mtu uint32; @"".Hopcount uint32; @"".Expire int32; @"".Recvpipe uint32; @"".Sendpipe uint32; @"".Ssthresh uint32; @"".Rtt uint32; @"".Rttvar uint32; @"".Pksent uint32; @"".Filler [4]uint32 }
type @"".RtMsghdr struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8; @"".Index uint16; @"".Pad_cgo_0 [2]byte; @"".Flags int32; @"".Addrs int32; @"".Pid int32; @"".Seq int32; @"".Errno int32; @"".Use int32; @"".Inits uint32; @"".Rmx @"".RtMetrics }
type @"".Rusage struct { @"".Utime @"".Timeval; @"".Stime @"".Timeval; @"".Maxrss int64; @"".Ixrss int64; @"".Idrss int64; @"".Isrss int64; @"".Minflt int64; @"".Majflt int64; @"".Nswap int64; @"".Inblock int64; @"".Oublock int64; @"".Msgsnd int64; @"".Msgrcv int64; @"".Nsignals int64; @"".Nvcsw int64; @"".Nivcsw int64 }
const @"".SCM_CREDS = 0x3
const @"".SCM_RIGHTS = 0x1
const @"".SCM_TIMESTAMP = 0x2
const @"".SCM_TIMESTAMP_MONOTONIC = 0x4
const @"".SHUT_RD = 0x0
const @"".SHUT_RDWR = 0x2
const @"".SHUT_WR = 0x1
const @"".SIGABRT @"".Signal = 0x6
const @"".SIGALRM @"".Signal = 0xe
const @"".SIGBUS @"".Signal = 0xa
const @"".SIGCHLD @"".Signal = 0x14
const @"".SIGCONT @"".Signal = 0x13
const @"".SIGEMT @"".Signal = 0x7
const @"".SIGFPE @"".Signal = 0x8
const @"".SIGHUP @"".Signal = 0x1
const @"".SIGILL @"".Signal = 0x4
const @"".SIGINFO @"".Signal = 0x1d
const @"".SIGINT @"".Signal = 0x2
const @"".SIGIO @"".Signal = 0x17
const @"".SIGIOT @"".Signal = 0x6
const @"".SIGKILL @"".Signal = 0x9
const @"".SIGPIPE @"".Signal = 0xd
const @"".SIGPROF @"".Signal = 0x1b
const @"".SIGQUIT @"".Signal = 0x3
const @"".SIGSEGV @"".Signal = 0xb
const @"".SIGSTOP @"".Signal = 0x11
const @"".SIGSYS @"".Signal = 0xc
const @"".SIGTERM @"".Signal = 0xf
const @"".SIGTRAP @"".Signal = 0x5
const @"".SIGTSTP @"".Signal = 0x12
const @"".SIGTTIN @"".Signal = 0x15
const @"".SIGTTOU @"".Signal = 0x16
const @"".SIGURG @"".Signal = 0x10
const @"".SIGUSR1 @"".Signal = 0x1e
const @"".SIGUSR2 @"".Signal = 0x1f
const @"".SIGVTALRM @"".Signal = 0x1a
const @"".SIGWINCH @"".Signal = 0x1c
const @"".SIGXCPU @"".Signal = 0x18
const @"".SIGXFSZ @"".Signal = 0x19
const @"".SIOCADDMULTI = 0x80206931
const @"".SIOCAIFADDR = 0x8040691a
const @"".SIOCALIFADDR = 0x8118691d
const @"".SIOCARPIPLL = 0xc0206928
const @"".SIOCATMARK = 0x40047307
const @"".SIOCAUTOADDR = 0xc0206926
const @"".SIOCAUTONETMASK = 0x80206927
const @"".SIOCDELMULTI = 0x80206932
const @"".SIOCDIFADDR = 0x80206919
const @"".SIOCDIFPHYADDR = 0x80206941
const @"".SIOCDLIFADDR = 0x8118691f
const @"".SIOCGDRVSPEC = 0xc028697b
const @"".SIOCGETSGCNT = 0xc014721c
const @"".SIOCGETVIFCNT = 0xc014721b
const @"".SIOCGETVLAN = 0xc020697f
const @"".SIOCGHIWAT = 0x40047301
const @"".SIOCGIFADDR = 0xc0206921
const @"".SIOCGIFALTMTU = 0xc0206948
const @"".SIOCGIFASYNCMAP = 0xc020697c
const @"".SIOCGIFBOND = 0xc0206947
const @"".SIOCGIFBRDADDR = 0xc0206923
const @"".SIOCGIFCAP = 0xc020695b
const @"".SIOCGIFCONF = 0xc00c6924
const @"".SIOCGIFDEVMTU = 0xc0206944
const @"".SIOCGIFDSTADDR = 0xc0206922
const @"".SIOCGIFFLAGS = 0xc0206911
const @"".SIOCGIFGENERIC = 0xc020693a
const @"".SIOCGIFKPI = 0xc0206987
const @"".SIOCGIFMAC = 0xc0206982
const @"".SIOCGIFMEDIA = 0xc02c6938
const @"".SIOCGIFMETRIC = 0xc0206917
const @"".SIOCGIFMTU = 0xc0206933
const @"".SIOCGIFNETMASK = 0xc0206925
const @"".SIOCGIFPDSTADDR = 0xc0206940
const @"".SIOCGIFPHYS = 0xc0206935
const @"".SIOCGIFPSRCADDR = 0xc020693f
const @"".SIOCGIFSTATUS = 0xc331693d
const @"".SIOCGIFVLAN = 0xc020697f
const @"".SIOCGIFWAKEFLAGS = 0xc0206988
const @"".SIOCGLIFADDR = 0xc118691e
const @"".SIOCGLIFPHYADDR = 0xc1186943
const @"".SIOCGLOWAT = 0x40047303
const @"".SIOCGPGRP = 0x40047309
const @"".SIOCIFCREATE = 0xc0206978
const @"".SIOCIFCREATE2 = 0xc020697a
const @"".SIOCIFDESTROY = 0x80206979
const @"".SIOCRSLVMULTI = 0xc010693b
const @"".SIOCSDRVSPEC = 0x8028697b
const @"".SIOCSETVLAN = 0x8020697e
const @"".SIOCSHIWAT = 0x80047300
const @"".SIOCSIFADDR = 0x8020690c
const @"".SIOCSIFALTMTU = 0x80206945
const @"".SIOCSIFASYNCMAP = 0x8020697d
const @"".SIOCSIFBOND = 0x80206946
const @"".SIOCSIFBRDADDR = 0x80206913
const @"".SIOCSIFCAP = 0x8020695a
const @"".SIOCSIFDSTADDR = 0x8020690e
const @"".SIOCSIFFLAGS = 0x80206910
const @"".SIOCSIFGENERIC = 0x80206939
const @"".SIOCSIFKPI = 0x80206986
const @"".SIOCSIFLLADDR = 0x8020693c
const @"".SIOCSIFMAC = 0x80206983
const @"".SIOCSIFMEDIA = 0xc0206937
const @"".SIOCSIFMETRIC = 0x80206918
const @"".SIOCSIFMTU = 0x80206934
const @"".SIOCSIFNETMASK = 0x80206916
const @"".SIOCSIFPHYADDR = 0x8040693e
const @"".SIOCSIFPHYS = 0x80206936
const @"".SIOCSIFVLAN = 0x8020697e
const @"".SIOCSLIFPHYADDR = 0x81186942
const @"".SIOCSLOWAT = 0x80047302
const @"".SIOCSPGRP = 0x80047308
const @"".SOCK_DGRAM = 0x2
const @"".SOCK_MAXADDRLEN = 0xff
const @"".SOCK_RAW = 0x3
const @"".SOCK_RDM = 0x4
const @"".SOCK_SEQPACKET = 0x5
const @"".SOCK_STREAM = 0x1
const @"".SOL_SOCKET = 0xffff
const @"".SOMAXCONN = 0x80
const @"".SO_ACCEPTCONN = 0x2
const @"".SO_BROADCAST = 0x20
const @"".SO_DEBUG = 0x1
const @"".SO_DONTROUTE = 0x10
const @"".SO_DONTTRUNC = 0x2000
const @"".SO_ERROR = 0x1007
const @"".SO_KEEPALIVE = 0x8
const @"".SO_LABEL = 0x1010
const @"".SO_LINGER = 0x80
const @"".SO_LINGER_SEC = 0x1080
const @"".SO_NKE = 0x1021
const @"".SO_NOADDRERR = 0x1023
const @"".SO_NOSIGPIPE = 0x1022
const @"".SO_NOTIFYCONFLICT = 0x1026
const @"".SO_NP_EXTENSIONS = 0x1083
const @"".SO_NREAD = 0x1020
const @"".SO_NWRITE = 0x1024
const @"".SO_OOBINLINE = 0x100
const @"".SO_PEERLABEL = 0x1011
const @"".SO_RANDOMPORT = 0x1082
const @"".SO_RCVBUF = 0x1002
const @"".SO_RCVLOWAT = 0x1004
const @"".SO_RCVTIMEO = 0x1006
const @"".SO_RESTRICTIONS = 0x1081
const @"".SO_RESTRICT_DENYIN = 0x1
const @"".SO_RESTRICT_DENYOUT = 0x2
const @"".SO_RESTRICT_DENYSET = 0x80000000
const @"".SO_REUSEADDR = 0x4
const @"".SO_REUSEPORT = 0x200
const @"".SO_REUSESHAREUID = 0x1025
const @"".SO_SNDBUF = 0x1001
const @"".SO_SNDLOWAT = 0x1003
const @"".SO_SNDTIMEO = 0x1005
const @"".SO_TIMESTAMP = 0x400
const @"".SO_TIMESTAMP_MONOTONIC = 0x800
const @"".SO_TYPE = 0x1008
const @"".SO_UPCALLCLOSEWAIT = 0x1027
const @"".SO_USELOOPBACK = 0x40
const @"".SO_WANTMORE = 0x4000
const @"".SO_WANTOOBFLAG = 0x8000
const @"".SYS_ACCEPT = 0x1e
const @"".SYS_ACCEPT_NOCANCEL = 0x194
const @"".SYS_ACCESS = 0x21
const @"".SYS_ACCESS_EXTENDED = 0x11c
const @"".SYS_ACCT = 0x33
const @"".SYS_ADD_PROFIL = 0xb0
const @"".SYS_ADJTIME = 0x8c
const @"".SYS_AIO_CANCEL = 0x13c
const @"".SYS_AIO_ERROR = 0x13d
const @"".SYS_AIO_FSYNC = 0x139
const @"".SYS_AIO_READ = 0x13e
const @"".SYS_AIO_RETURN = 0x13a
const @"".SYS_AIO_SUSPEND = 0x13b
const @"".SYS_AIO_SUSPEND_NOCANCEL = 0x1a5
const @"".SYS_AIO_WRITE = 0x13f
const @"".SYS_ATGETMSG = 0xcf
const @"".SYS_ATPGETREQ = 0xd3
const @"".SYS_ATPGETRSP = 0xd4
const @"".SYS_ATPSNDREQ = 0xd1
const @"".SYS_ATPSNDRSP = 0xd2
const @"".SYS_ATPUTMSG = 0xd0
const @"".SYS_ATSOCKET = 0xce
const @"".SYS_AUDIT = 0x15e
const @"".SYS_AUDITCTL = 0x167
const @"".SYS_AUDITON = 0x15f
const @"".SYS_AUDIT_SESSION_JOIN = 0x1ad
const @"".SYS_AUDIT_SESSION_PORT = 0x1b0
const @"".SYS_AUDIT_SESSION_SELF = 0x1ac
const @"".SYS_BIND = 0x68
const @"".SYS_BSDTHREAD_CREATE = 0x168
const @"".SYS_BSDTHREAD_REGISTER = 0x16e
const @"".SYS_BSDTHREAD_TERMINATE = 0x169
const @"".SYS_CHDIR = 0xc
const @"".SYS_CHFLAGS = 0x22
const @"".SYS_CHMOD = 0xf
const @"".SYS_CHMOD_EXTENDED = 0x11a
const @"".SYS_CHOWN = 0x10
const @"".SYS_CHROOT = 0x3d
const @"".SYS_CHUD = 0xb9
const @"".SYS_CLOSE = 0x6
const @"".SYS_CLOSE_NOCANCEL = 0x18f
const @"".SYS_CONNECT = 0x62
const @"".SYS_CONNECT_NOCANCEL = 0x199
const @"".SYS_COPYFILE = 0xe3
const @"".SYS_CSOPS = 0xa9
const @"".SYS_DELETE = 0xe2
const @"".SYS_DUP = 0x29
const @"".SYS_DUP2 = 0x5a
const @"".SYS_EXCHANGEDATA = 0xdf
const @"".SYS_EXECVE = 0x3b
const @"".SYS_EXIT = 0x1
const @"".SYS_FCHDIR = 0xd
const @"".SYS_FCHFLAGS = 0x23
const @"".SYS_FCHMOD = 0x7c
const @"".SYS_FCHMOD_EXTENDED = 0x11b
const @"".SYS_FCHOWN = 0x7b
const @"".SYS_FCNTL = 0x5c
const @"".SYS_FCNTL_NOCANCEL = 0x196
const @"".SYS_FDATASYNC = 0xbb
const @"".SYS_FFSCTL = 0xf5
const @"".SYS_FGETATTRLIST = 0xe4
const @"".SYS_FGETXATTR = 0xeb
const @"".SYS_FHOPEN = 0xf8
const @"".SYS_FILEPORT_MAKEFD = 0x1af
const @"".SYS_FILEPORT_MAKEPORT = 0x1ae
const @"".SYS_FLISTXATTR = 0xf1
const @"".SYS_FLOCK = 0x83
const @"".SYS_FORK = 0x2
const @"".SYS_FPATHCONF = 0xc0
const @"".SYS_FREMOVEXATTR = 0xef
const @"".SYS_FSCTL = 0xf2
const @"".SYS_FSETATTRLIST = 0xe5
const @"".SYS_FSETXATTR = 0xed
const @"".SYS_FSGETPATH = 0x1ab
const @"".SYS_FSTAT = 0xbd
const @"".SYS_FSTAT64 = 0x153
const @"".SYS_FSTAT64_EXTENDED = 0x157
const @"".SYS_FSTATFS = 0x9e
const @"".SYS_FSTATFS64 = 0x15a
const @"".SYS_FSTATV = 0xdb
const @"".SYS_FSTAT_EXTENDED = 0x119
const @"".SYS_FSYNC = 0x5f
const @"".SYS_FSYNC_NOCANCEL = 0x198
const @"".SYS_FTRUNCATE = 0xc9
const @"".SYS_FUTIMES = 0x8b
const @"".SYS_GETATTRLIST = 0xdc
const @"".SYS_GETAUDIT = 0x163
const @"".SYS_GETAUDIT_ADDR = 0x165
const @"".SYS_GETAUID = 0x161
const @"".SYS_GETDIRENTRIES = 0xc4
const @"".SYS_GETDIRENTRIES64 = 0x158
const @"".SYS_GETDIRENTRIESATTR = 0xde
const @"".SYS_GETDTABLESIZE = 0x59
const @"".SYS_GETEGID = 0x2b
const @"".SYS_GETEUID = 0x19
const @"".SYS_GETFH = 0xa1
const @"".SYS_GETFSSTAT = 0x12
const @"".SYS_GETFSSTAT64 = 0x15b
const @"".SYS_GETGID = 0x2f
const @"".SYS_GETGROUPS = 0x4f
const @"".SYS_GETHOSTUUID = 0x8e
const @"".SYS_GETITIMER = 0x56
const @"".SYS_GETLCID = 0x18b
const @"".SYS_GETLOGIN = 0x31
const @"".SYS_GETPEERNAME = 0x1f
const @"".SYS_GETPGID = 0x97
const @"".SYS_GETPGRP = 0x51
const @"".SYS_GETPID = 0x14
const @"".SYS_GETPPID = 0x27
const @"".SYS_GETPRIORITY = 0x64
const @"".SYS_GETRLIMIT = 0xc2
const @"".SYS_GETRUSAGE = 0x75
const @"".SYS_GETSGROUPS = 0x120
const @"".SYS_GETSID = 0x136
const @"".SYS_GETSOCKNAME = 0x20
const @"".SYS_GETSOCKOPT = 0x76
const @"".SYS_GETTID = 0x11e
const @"".SYS_GETTIMEOFDAY = 0x74
const @"".SYS_GETUID = 0x18
const @"".SYS_GETWGROUPS = 0x122
const @"".SYS_GETXATTR = 0xea
const @"".SYS_IDENTITYSVC = 0x125
const @"".SYS_INITGROUPS = 0xf3
const @"".SYS_IOCTL = 0x36
const @"".SYS_IOPOLICYSYS = 0x142
const @"".SYS_ISSETUGID = 0x147
const @"".SYS_KDEBUG_TRACE = 0xb4
const @"".SYS_KEVENT = 0x16b
const @"".SYS_KEVENT64 = 0x171
const @"".SYS_KILL = 0x25
const @"".SYS_KQUEUE = 0x16a
const @"".SYS_LCHOWN = 0x16c
const @"".SYS_LINK = 0x9
const @"".SYS_LIO_LISTIO = 0x140
const @"".SYS_LISTEN = 0x6a
const @"".SYS_LISTXATTR = 0xf0
const @"".SYS_LSEEK = 0xc7
const @"".SYS_LSTAT = 0xbe
const @"".SYS_LSTAT64 = 0x154
const @"".SYS_LSTAT64_EXTENDED = 0x156
const @"".SYS_LSTATV = 0xda
const @"".SYS_LSTAT_EXTENDED = 0x118
const @"".SYS_MADVISE = 0x4b
const @"".SYS_MAXSYSCALL = 0x1b7
const @"".SYS_MINCORE = 0x4e
const @"".SYS_MINHERIT = 0xfa
const @"".SYS_MKCOMPLEX = 0xd8
const @"".SYS_MKDIR = 0x88
const @"".SYS_MKDIR_EXTENDED = 0x124
const @"".SYS_MKFIFO = 0x84
const @"".SYS_MKFIFO_EXTENDED = 0x123
const @"".SYS_MKNOD = 0xe
const @"".SYS_MLOCK = 0xcb
const @"".SYS_MLOCKALL = 0x144
const @"".SYS_MMAP = 0xc5
const @"".SYS_MODWATCH = 0xe9
const @"".SYS_MOUNT = 0xa7
const @"".SYS_MPROTECT = 0x4a
const @"".SYS_MSGCTL = 0x102
const @"".SYS_MSGGET = 0x103
const @"".SYS_MSGRCV = 0x105
const @"".SYS_MSGRCV_NOCANCEL = 0x1a3
const @"".SYS_MSGSND = 0x104
const @"".SYS_MSGSND_NOCANCEL = 0x1a2
const @"".SYS_MSGSYS = 0xfc
const @"".SYS_MSYNC = 0x41
const @"".SYS_MSYNC_NOCANCEL = 0x195
const @"".SYS_MUNLOCK = 0xcc
const @"".SYS_MUNLOCKALL = 0x145
const @"".SYS_MUNMAP = 0x49
const @"".SYS_NFSCLNT = 0xf7
const @"".SYS_NFSSVC = 0x9b
const @"".SYS_OPEN = 0x5
const @"".SYS_OPEN_EXTENDED = 0x115
const @"".SYS_OPEN_NOCANCEL = 0x18e
const @"".SYS_PATHCONF = 0xbf
const @"".SYS_PID_HIBERNATE = 0x1b3
const @"".SYS_PID_RESUME = 0x1b2
const @"".SYS_PID_SHUTDOWN_SOCKETS = 0x1b4
const @"".SYS_PID_SUSPEND = 0x1b1
const @"".SYS_PIPE = 0x2a
const @"".SYS_POLL = 0xe6
const @"".SYS_POLL_NOCANCEL = 0x1a1
const @"".SYS_POSIX_SPAWN = 0xf4
const @"".SYS_PREAD = 0x99
const @"".SYS_PREAD_NOCANCEL = 0x19e
const @"".SYS_PROCESS_POLICY = 0x143
const @"".SYS_PROC_INFO = 0x150
const @"".SYS_PROFIL = 0x2c
const @"".SYS_PSYNCH_CVBROAD = 0x12f
const @"".SYS_PSYNCH_CVCLRPREPOST = 0x138
const @"".SYS_PSYNCH_CVSIGNAL = 0x130
const @"".SYS_PSYNCH_CVWAIT = 0x131
const @"".SYS_PSYNCH_MUTEXDROP = 0x12e
const @"".SYS_PSYNCH_MUTEXWAIT = 0x12d
const @"".SYS_PSYNCH_RW_DOWNGRADE = 0x12b
const @"".SYS_PSYNCH_RW_LONGRDLOCK = 0x129
const @"".SYS_PSYNCH_RW_RDLOCK = 0x132
const @"".SYS_PSYNCH_RW_UNLOCK = 0x134
const @"".SYS_PSYNCH_RW_UNLOCK2 = 0x135
const @"".SYS_PSYNCH_RW_UPGRADE = 0x12c
const @"".SYS_PSYNCH_RW_WRLOCK = 0x133
const @"".SYS_PSYNCH_RW_YIELDWRLOCK = 0x12a
const @"".SYS_PTRACE = 0x1a
const @"".SYS_PWRITE = 0x9a
const @"".SYS_PWRITE_NOCANCEL = 0x19f
const @"".SYS_QUOTACTL = 0xa5
const @"".SYS_READ = 0x3
const @"".SYS_READLINK = 0x3a
const @"".SYS_READV = 0x78
const @"".SYS_READV_NOCANCEL = 0x19b
const @"".SYS_READ_NOCANCEL = 0x18c
const @"".SYS_REBOOT = 0x37
const @"".SYS_RECVFROM = 0x1d
const @"".SYS_RECVFROM_NOCANCEL = 0x193
const @"".SYS_RECVMSG = 0x1b
const @"".SYS_RECVMSG_NOCANCEL = 0x191
const @"".SYS_REMOVEXATTR = 0xee
const @"".SYS_RENAME = 0x80
const @"".SYS_REVOKE = 0x38
const @"".SYS_RMDIR = 0x89
const @"".SYS_SEARCHFS = 0xe1
const @"".SYS_SELECT = 0x5d
const @"".SYS_SELECT_NOCANCEL = 0x197
const @"".SYS_SEMCTL = 0xfe
const @"".SYS_SEMGET = 0xff
const @"".SYS_SEMOP = 0x100
const @"".SYS_SEMSYS = 0xfb
const @"".SYS_SEM_CLOSE = 0x10d
const @"".SYS_SEM_DESTROY = 0x114
const @"".SYS_SEM_GETVALUE = 0x112
const @"".SYS_SEM_INIT = 0x113
const @"".SYS_SEM_OPEN = 0x10c
const @"".SYS_SEM_POST = 0x111
const @"".SYS_SEM_TRYWAIT = 0x110
const @"".SYS_SEM_UNLINK = 0x10e
const @"".SYS_SEM_WAIT = 0x10f
const @"".SYS_SEM_WAIT_NOCANCEL = 0x1a4
const @"".SYS_SENDFILE = 0x151
const @"".SYS_SENDMSG = 0x1c
const @"".SYS_SENDMSG_NOCANCEL = 0x192
const @"".SYS_SENDTO = 0x85
const @"".SYS_SENDTO_NOCANCEL = 0x19d
const @"".SYS_SETATTRLIST = 0xdd
const @"".SYS_SETAUDIT = 0x164
const @"".SYS_SETAUDIT_ADDR = 0x166
const @"".SYS_SETAUID = 0x162
const @"".SYS_SETEGID = 0xb6
const @"".SYS_SETEUID = 0xb7
const @"".SYS_SETGID = 0xb5
const @"".SYS_SETGROUPS = 0x50
const @"".SYS_SETITIMER = 0x53
const @"".SYS_SETLCID = 0x18a
const @"".SYS_SETLOGIN = 0x32
const @"".SYS_SETPGID = 0x52
const @"".SYS_SETPRIORITY = 0x60
const @"".SYS_SETPRIVEXEC = 0x98
const @"".SYS_SETREGID = 0x7f
const @"".SYS_SETREUID = 0x7e
const @"".SYS_SETRLIMIT = 0xc3
const @"".SYS_SETSGROUPS = 0x11f
const @"".SYS_SETSID = 0x93
const @"".SYS_SETSOCKOPT = 0x69
const @"".SYS_SETTID = 0x11d
const @"".SYS_SETTID_WITH_PID = 0x137
const @"".SYS_SETTIMEOFDAY = 0x7a
const @"".SYS_SETUID = 0x17
const @"".SYS_SETWGROUPS = 0x121
const @"".SYS_SETXATTR = 0xec
const @"".SYS_SHARED_REGION_CHECK_NP = 0x126
const @"".SYS_SHARED_REGION_MAP_AND_SLIDE_NP = 0x1b6
const @"".SYS_SHMAT = 0x106
const @"".SYS_SHMCTL = 0x107
const @"".SYS_SHMDT = 0x108
const @"".SYS_SHMGET = 0x109
const @"".SYS_SHMSYS = 0xfd
const @"".SYS_SHM_OPEN = 0x10a
const @"".SYS_SHM_UNLINK = 0x10b
const @"".SYS_SHUTDOWN = 0x86
const @"".SYS_SIGACTION = 0x2e
const @"".SYS_SIGALTSTACK = 0x35
const @"".SYS_SIGPENDING = 0x34
const @"".SYS_SIGPROCMASK = 0x30
const @"".SYS_SIGRETURN = 0xb8
const @"".SYS_SIGSUSPEND = 0x6f
const @"".SYS_SIGSUSPEND_NOCANCEL = 0x19a
const @"".SYS_SOCKET = 0x61
const @"".SYS_SOCKETPAIR = 0x87
const @"".SYS_STACK_SNAPSHOT = 0x16d
const @"".SYS_STAT = 0xbc
const @"".SYS_STAT64 = 0x152
const @"".SYS_STAT64_EXTENDED = 0x155
const @"".SYS_STATFS = 0x9d
const @"".SYS_STATFS64 = 0x159
const @"".SYS_STATV = 0xd9
const @"".SYS_STAT_EXTENDED = 0x117
const @"".SYS_SWAPON = 0x55
const @"".SYS_SYMLINK = 0x39
const @"".SYS_SYNC = 0x24
const @"".SYS_SYSCALL = 0x0
const @"".SYS_THREAD_SELFID = 0x174
const @"".SYS_TRUNCATE = 0xc8
const @"".SYS_UMASK = 0x3c
const @"".SYS_UMASK_EXTENDED = 0x116
const @"".SYS_UNDELETE = 0xcd
const @"".SYS_UNLINK = 0xa
const @"".SYS_UNMOUNT = 0x9f
const @"".SYS_UTIMES = 0x8a
const @"".SYS_VFORK = 0x42
const @"".SYS_VM_PRESSURE_MONITOR = 0x128
const @"".SYS_WAIT4 = 0x7
const @"".SYS_WAIT4_NOCANCEL = 0x190
const @"".SYS_WAITEVENT = 0xe8
const @"".SYS_WAITID = 0xad
const @"".SYS_WAITID_NOCANCEL = 0x1a0
const @"".SYS_WATCHEVENT = 0xe7
const @"".SYS_WORKQ_KERNRETURN = 0x170
const @"".SYS_WORKQ_OPEN = 0x16f
const @"".SYS_WRITE = 0x4
const @"".SYS_WRITEV = 0x79
const @"".SYS_WRITEV_NOCANCEL = 0x19c
const @"".SYS_WRITE_NOCANCEL = 0x18d
const @"".SYS___DISABLE_THREADSIGNAL = 0x14b
const @"".SYS___MAC_EXECVE = 0x17c
const @"".SYS___MAC_GETFSSTAT = 0x1aa
const @"".SYS___MAC_GET_FD = 0x184
const @"".SYS___MAC_GET_FILE = 0x17e
const @"".SYS___MAC_GET_LCID = 0x187
const @"".SYS___MAC_GET_LCTX = 0x188
const @"".SYS___MAC_GET_LINK = 0x180
const @"".SYS___MAC_GET_MOUNT = 0x1a9
const @"".SYS___MAC_GET_PID = 0x186
const @"".SYS___MAC_GET_PROC = 0x182
const @"".SYS___MAC_MOUNT = 0x1a8
const @"".SYS___MAC_SET_FD = 0x185
const @"".SYS___MAC_SET_FILE = 0x17f
const @"".SYS___MAC_SET_LCTX = 0x189
const @"".SYS___MAC_SET_LINK = 0x181
const @"".SYS___MAC_SET_PROC = 0x183
const @"".SYS___MAC_SYSCALL = 0x17d
const @"".SYS___OLD_SEMWAIT_SIGNAL = 0x172
const @"".SYS___OLD_SEMWAIT_SIGNAL_NOCANCEL = 0x173
const @"".SYS___PTHREAD_CANCELED = 0x14d
const @"".SYS___PTHREAD_CHDIR = 0x15c
const @"".SYS___PTHREAD_FCHDIR = 0x15d
const @"".SYS___PTHREAD_KILL = 0x148
const @"".SYS___PTHREAD_MARKCANCEL = 0x14c
const @"".SYS___PTHREAD_SIGMASK = 0x149
const @"".SYS___SEMWAIT_SIGNAL = 0x14e
const @"".SYS___SEMWAIT_SIGNAL_NOCANCEL = 0x1a7
const @"".SYS___SIGWAIT = 0x14a
const @"".SYS___SIGWAIT_NOCANCEL = 0x1a6
const @"".SYS___SYSCTL = 0xca
const @"".S_IEXEC = 0x40
const @"".S_IFBLK = 0x6000
const @"".S_IFCHR = 0x2000
const @"".S_IFDIR = 0x4000
const @"".S_IFIFO = 0x1000
const @"".S_IFLNK = 0xa000
const @"".S_IFMT = 0xf000
const @"".S_IFREG = 0x8000
const @"".S_IFSOCK = 0xc000
const @"".S_IFWHT = 0xe000
const @"".S_IREAD = 0x100
const @"".S_IRGRP = 0x20
const @"".S_IROTH = 0x4
const @"".S_IRUSR = 0x100
const @"".S_IRWXG = 0x38
const @"".S_IRWXO = 0x7
const @"".S_IRWXU = 0x1c0
const @"".S_ISGID = 0x400
const @"".S_ISTXT = 0x200
const @"".S_ISUID = 0x800
const @"".S_ISVTX = 0x200
const @"".S_IWGRP = 0x10
const @"".S_IWOTH = 0x2
const @"".S_IWRITE = 0x80
const @"".S_IWUSR = 0x80
const @"".S_IXGRP = 0x8
const @"".S_IXOTH = 0x1
const @"".S_IXUSR = 0x40
func @"".Seek(@"".fd int, @"".offset int64, @"".whence int) (@"".newoffset int64, @"".err error)
func @"".Select(@"".n int, @"".r *@"".FdSet, @"".w *@"".FdSet, @"".e *@"".FdSet, @"".timeout *@"".Timeval) (@"".err error)
func @"".Sendfile(@"".outfd int, @"".infd int, @"".offset *int64, @"".count int) (@"".written int, @"".err error)
func @"".Sendmsg(@"".fd int, @"".p []byte, @"".oob []byte, @"".to @"".Sockaddr, @"".flags int) (@"".err error)
func @"".SendmsgN(@"".fd int, @"".p []byte, @"".oob []byte, @"".to @"".Sockaddr, @"".flags int) (@"".n int, @"".err error)
func @"".Sendto(@"".fd int, @"".p []byte, @"".flags int, @"".to @"".Sockaddr) (@"".err error)
func @"".SetBpf(@"".fd int, @"".i []@"".BpfInsn) (? error)
func @"".SetBpfBuflen(@"".fd int, @"".l int) (? int, ? error)
func @"".SetBpfDatalink(@"".fd int, @"".t int) (? int, ? error)
func @"".SetBpfHeadercmpl(@"".fd int, @"".f int) (? error)
func @"".SetBpfImmediate(@"".fd int, @"".m int) (? error)
func @"".SetBpfInterface(@"".fd int, @"".name string) (? error)
func @"".SetBpfPromisc(@"".fd int, @"".m int) (? error)
func @"".SetBpfTimeout(@"".fd int, @"".tv *@"".Timeval) (? error)
func @"".SetKevent(@"".k *@"".Kevent_t, @"".fd int, @"".mode int, @"".flags int) ()
func @"".SetNonblock(@"".fd int, @"".nonblocking bool) (@"".err error)
func @"".Setegid(@"".egid int) (@"".err error)
func @"".Setenv(@"".key string, @"".value string) (? error)
func @"".Seteuid(@"".euid int) (@"".err error)
func @"".Setgid(@"".gid int) (@"".err error)
func @"".Setgroups(@"".gids []int) (@"".err error)
func @"".Setlogin(@"".name string) (@"".err error)
func @"".Setpgid(@"".pid int, @"".pgid int) (@"".err error)
func @"".Setpriority(@"".which int, @"".who int, @"".prio int) (@"".err error)
func @"".Setprivexec(@"".flag int) (@"".err error)
func @"".Setregid(@"".rgid int, @"".egid int) (@"".err error)
func @"".Setreuid(@"".ruid int, @"".euid int) (@"".err error)
func @"".Setrlimit(@"".which int, @"".lim *@"".Rlimit) (@"".err error)
func @"".Setsid() (@"".pid int, @"".err error)
func @"".SetsockoptByte(@"".fd int, @"".level int, @"".opt int, @"".value byte) (@"".err error)
func @"".SetsockoptICMPv6Filter(@"".fd int, @"".level int, @"".opt int, @"".filter *@"".ICMPv6Filter) (? error)
func @"".SetsockoptIPMreq(@"".fd int, @"".level int, @"".opt int, @"".mreq *@"".IPMreq) (@"".err error)
func @"".SetsockoptIPv6Mreq(@"".fd int, @"".level int, @"".opt int, @"".mreq *@"".IPv6Mreq) (@"".err error)
func @"".SetsockoptInet4Addr(@"".fd int, @"".level int, @"".opt int, @"".value [4]byte) (@"".err error)
func @"".SetsockoptInt(@"".fd int, @"".level int, @"".opt int, @"".value int) (@"".err error)
func @"".SetsockoptLinger(@"".fd int, @"".level int, @"".opt int, @"".l *@"".Linger) (@"".err error)
func @"".SetsockoptString(@"".fd int, @"".level int, @"".opt int, @"".s string) (@"".err error)
func @"".SetsockoptTimeval(@"".fd int, @"".level int, @"".opt int, @"".tv *@"".Timeval) (@"".err error)
func @"".Settimeofday(@"".tp *@"".Timeval) (@"".err error)
func @"".Setuid(@"".uid int) (@"".err error)
func @"".Shutdown(@"".s int, @"".how int) (@"".err error)
type @"".Signal int
func (? @"".Signal) @"".Signal() ()
func (? @"".Signal) @"".String() (? string)
func (? *@"".Signal) @"".Signal() ()
func (? *@"".Signal) @"".String() (? string)
const @"".SizeofBpfHdr = 0x14
const @"".SizeofBpfInsn = 0x8
const @"".SizeofBpfProgram = 0x10
const @"".SizeofBpfStat = 0x8
const @"".SizeofBpfVersion = 0x4
const @"".SizeofCmsghdr = 0xc
const @"".SizeofICMPv6Filter = 0x20
const @"".SizeofIPMreq = 0x8
const @"".SizeofIPv6MTUInfo = 0x20
const @"".SizeofIPv6Mreq = 0x14
const @"".SizeofIfData = 0x60
const @"".SizeofIfMsghdr = 0x70
const @"".SizeofIfaMsghdr = 0x14
const @"".SizeofIfmaMsghdr = 0x10
const @"".SizeofIfmaMsghdr2 = 0x14
const @"".SizeofInet4Pktinfo = 0xc
const @"".SizeofInet6Pktinfo = 0x14
const @"".SizeofLinger = 0x8
const @"".SizeofMsghdr = 0x30
const @"".SizeofRtMetrics = 0x38
const @"".SizeofRtMsghdr = 0x5c
const @"".SizeofSockaddrAny = 0x6c
const @"".SizeofSockaddrDatalink = 0x14
const @"".SizeofSockaddrInet4 = 0x10
const @"".SizeofSockaddrInet6 = 0x1c
const @"".SizeofSockaddrUnix = 0x6a
func @"".SlicePtrFromStrings(@"".ss []string) (? []*byte, ? error)
type @"".Sockaddr interface { @"".sockaddr() (@"".ptr @"unsafe".Pointer, @"".len @""._Socklen, @"".err error) }
type @"".SockaddrDatalink struct { @"".Len uint8; @"".Family uint8; @"".Index uint16; @"".Type uint8; @"".Nlen uint8; @"".Alen uint8; @"".Slen uint8; @"".Data [12]int8; @"".raw @"".RawSockaddrDatalink }
func (? *@"".SockaddrDatalink) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrInet4 struct { @"".Port int; @"".Addr [4]byte; @"".raw @"".RawSockaddrInet4 }
func (? *@"".SockaddrInet4) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrInet6 struct { @"".Port int; @"".ZoneId uint32; @"".Addr [16]byte; @"".raw @"".RawSockaddrInet6 }
func (? *@"".SockaddrInet6) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
type @"".SockaddrUnix struct { @"".Name string; @"".raw @"".RawSockaddrUnix }
func (? *@"".SockaddrUnix) @"".sockaddr() (? @"unsafe".Pointer, ? @""._Socklen, ? error)
func @"".Socket(@"".domain int, @"".typ int, @"".proto int) (@"".fd int, @"".err error)
type @"".SocketControlMessage struct { @"".Header @"".Cmsghdr; @"".Data []byte }
var @"".SocketDisableIPv6 bool
func @"".Socketpair(@"".domain int, @"".typ int, @"".proto int) (@"".fd [2]int, @"".err error)
func @"".StartProcess(@"".argv0 string, @"".argv []string, @"".attr *@"".ProcAttr) (@"".pid int, @"".handle uintptr, @"".err error)
func @"".Stat(@"".path string, @"".stat *@"".Stat_t) (@"".err error)
type @"".Stat_t struct { @"".Dev int32; @"".Mode uint16; @"".Nlink uint16; @"".Ino uint64; @"".Uid uint32; @"".Gid uint32; @"".Rdev int32; @"".Pad_cgo_0 [4]byte; @"".Atimespec @"".Timespec; @"".Mtimespec @"".Timespec; @"".Ctimespec @"".Timespec; @"".Birthtimespec @"".Timespec; @"".Size int64; @"".Blocks int64; @"".Blksize int32; @"".Flags uint32; @"".Gen uint32; @"".Lspare int32; @"".Qspare [2]int64 }
func @"".Statfs(@"".path string, @"".stat *@"".Statfs_t) (@"".err error)
type @"".Statfs_t struct { @"".Bsize uint32; @"".Iosize int32; @"".Blocks uint64; @"".Bfree uint64; @"".Bavail uint64; @"".Files uint64; @"".Ffree uint64; @"".Fsid @"".Fsid; @"".Owner uint32; @"".Type uint32; @"".Flags uint32; @"".Fssubtype uint32; @"".Fstypename [16]int8; @"".Mntonname [1024]int8; @"".Mntfromname [1024]int8; @"".Reserved [8]uint32 }
var @"".Stderr int
var @"".Stdin int
var @"".Stdout int
func @"".StringBytePtr(@"".s string) (? *byte)
func @"".StringByteSlice(@"".s string) (? []byte)
func @"".StringSlicePtr(@"".ss []string) (? []*byte)
func @"".Symlink(@"".path string, @"".link string) (@"".err error)
func @"".Sync() (@"".err error)
type @"".SysProcAttr struct { @"".Chroot string; @"".Credential *@"".Credential; @"".Ptrace bool; @"".Setsid bool; @"".Setpgid bool; @"".Setctty bool; @"".Noctty bool }
func @"".Syscall(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Syscall6(@"".trap uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Syscall9(@"".num uintptr, @"".a1 uintptr, @"".a2 uintptr, @"".a3 uintptr, @"".a4 uintptr, @"".a5 uintptr, @"".a6 uintptr, @"".a7 uintptr, @"".a8 uintptr, @"".a9 uintptr) (@"".r1 uintptr, @"".r2 uintptr, @"".err @"".Errno)
func @"".Sysctl(@"".name string) (@"".value string, @"".err error)
func @"".SysctlUint32(@"".name string) (@"".value uint32, @"".err error)
const @"".TCIFLUSH = 0x1
const @"".TCIOFLUSH = 0x3
const @"".TCOFLUSH = 0x2
const @"".TCP_CONNECTIONTIMEOUT = 0x20
const @"".TCP_KEEPALIVE = 0x10
const @"".TCP_MAXHLEN = 0x3c
const @"".TCP_MAXOLEN = 0x28
const @"".TCP_MAXSEG = 0x2
const @"".TCP_MAXWIN = 0xffff
const @"".TCP_MAX_SACK = 0x3
const @"".TCP_MAX_WINSHIFT = 0xe
const @"".TCP_MINMSS = 0xd8
const @"".TCP_MINMSSOVERLOAD = 0x3e8
const @"".TCP_MSS = 0x200
const @"".TCP_NODELAY = 0x1
const @"".TCP_NOOPT = 0x8
const @"".TCP_NOPUSH = 0x4
const @"".TCP_RXT_CONNDROPTIME = 0x80
const @"".TCP_RXT_FINDROP = 0x100
const @"".TCSAFLUSH = 0x2
const @"".TIOCCBRK = 0x2000747a
const @"".TIOCCDTR = 0x20007478
const @"".TIOCCONS = 0x80047462
const @"".TIOCDCDTIMESTAMP = 0x40107458
const @"".TIOCDRAIN = 0x2000745e
const @"".TIOCDSIMICROCODE = 0x20007455
const @"".TIOCEXCL = 0x2000740d
const @"".TIOCEXT = 0x80047460
const @"".TIOCFLUSH = 0x80047410
const @"".TIOCGDRAINWAIT = 0x40047456
const @"".TIOCGETA = 0x40487413
const @"".TIOCGETD = 0x4004741a
const @"".TIOCGPGRP = 0x40047477
const @"".TIOCGWINSZ = 0x40087468
const @"".TIOCIXOFF = 0x20007480
const @"".TIOCIXON = 0x20007481
const @"".TIOCMBIC = 0x8004746b
const @"".TIOCMBIS = 0x8004746c
const @"".TIOCMGDTRWAIT = 0x4004745a
const @"".TIOCMGET = 0x4004746a
const @"".TIOCMODG = 0x40047403
const @"".TIOCMODS = 0x80047404
const @"".TIOCMSDTRWAIT = 0x8004745b
const @"".TIOCMSET = 0x8004746d
const @"".TIOCM_CAR = 0x40
const @"".TIOCM_CD = 0x40
const @"".TIOCM_CTS = 0x20
const @"".TIOCM_DSR = 0x100
const @"".TIOCM_DTR = 0x2
const @"".TIOCM_LE = 0x1
const @"".TIOCM_RI = 0x80
const @"".TIOCM_RNG = 0x80
const @"".TIOCM_RTS = 0x4
const @"".TIOCM_SR = 0x10
const @"".TIOCM_ST = 0x8
const @"".TIOCNOTTY = 0x20007471
const @"".TIOCNXCL = 0x2000740e
const @"".TIOCOUTQ = 0x40047473
const @"".TIOCPKT = 0x80047470
const @"".TIOCPKT_DATA = 0x0
const @"".TIOCPKT_DOSTOP = 0x20
const @"".TIOCPKT_FLUSHREAD = 0x1
const @"".TIOCPKT_FLUSHWRITE = 0x2
const @"".TIOCPKT_IOCTL = 0x40
const @"".TIOCPKT_NOSTOP = 0x10
const @"".TIOCPKT_START = 0x8
const @"".TIOCPKT_STOP = 0x4
const @"".TIOCPTYGNAME = 0x40807453
const @"".TIOCPTYGRANT = 0x20007454
const @"".TIOCPTYUNLK = 0x20007452
const @"".TIOCREMOTE = 0x80047469
const @"".TIOCSBRK = 0x2000747b
const @"".TIOCSCONS = 0x20007463
const @"".TIOCSCTTY = 0x20007461
const @"".TIOCSDRAINWAIT = 0x80047457
const @"".TIOCSDTR = 0x20007479
const @"".TIOCSETA = 0x80487414
const @"".TIOCSETAF = 0x80487416
const @"".TIOCSETAW = 0x80487415
const @"".TIOCSETD = 0x8004741b
const @"".TIOCSIG = 0x2000745f
const @"".TIOCSPGRP = 0x80047476
const @"".TIOCSTART = 0x2000746e
const @"".TIOCSTAT = 0x20007465
const @"".TIOCSTI = 0x80017472
const @"".TIOCSTOP = 0x2000746f
const @"".TIOCSWINSZ = 0x80087467
const @"".TIOCTIMESTAMP = 0x40107459
const @"".TIOCUCNTL = 0x80047466
const @"".TOSTOP = 0x400000
type @"".Termios struct { @"".Iflag uint64; @"".Oflag uint64; @"".Cflag uint64; @"".Lflag uint64; @"".Cc [20]uint8; @"".Pad_cgo_0 [4]byte; @"".Ispeed uint64; @"".Ospeed uint64 }
type @"".Timespec struct { @"".Sec int64; @"".Nsec int64 }
func (? *@"".Timespec) @"".Nano() (? int64)
func (? *@"".Timespec) @"".Unix() (@"".sec int64, @"".nsec int64)
func @"".TimespecToNsec(@"".ts @"".Timespec) (? int64)
type @"".Timeval struct { @"".Sec int64; @"".Usec int32; @"".Pad_cgo_0 [4]byte }
func (? *@"".Timeval) @"".Nano() (? int64)
func (? *@"".Timeval) @"".Unix() (@"".sec int64, @"".nsec int64)
type @"".Timeval32 struct { @"".Sec int32; @"".Usec int32 }
func @"".TimevalToNsec(@"".tv @"".Timeval) (? int64)
func @"".Truncate(@"".path string, @"".length int64) (@"".err error)
func @"".Umask(@"".newmask int) (@"".oldmask int)
func @"".Undelete(@"".path string) (@"".err error)
func @"".UnixRights(@"".fds ...int) (? []byte)
func @"".Unlink(@"".path string) (@"".err error)
func @"".Unmount(@"".path string, @"".flags int) (@"".err error)
func @"".Unsetenv(@"".key string) (? error)
func @"".Utimes(@"".path string, @"".tv []@"".Timeval) (@"".err error)
func @"".UtimesNano(@"".path string, @"".ts []@"".Timespec) (? error)
const @"".VDISCARD = 0xf
const @"".VDSUSP = 0xb
const @"".VEOF = 0x0
const @"".VEOL = 0x1
const @"".VEOL2 = 0x2
const @"".VERASE = 0x3
const @"".VINTR = 0x8
const @"".VKILL = 0x5
const @"".VLNEXT = 0xe
const @"".VMIN = 0x10
const @"".VQUIT = 0x9
const @"".VREPRINT = 0x6
const @"".VSTART = 0xc
const @"".VSTATUS = 0x12
const @"".VSTOP = 0xd
const @"".VSUSP = 0xa
const @"".VT0 = 0x0
const @"".VT1 = 0x10000
const @"".VTDLY = 0x10000
const @"".VTIME = 0x11
const @"".VWERASE = 0x4
const @"".WCONTINUED = 0x10
const @"".WCOREFLAG = 0x80
const @"".WEXITED = 0x4
const @"".WNOHANG = 0x1
const @"".WNOWAIT = 0x20
const @"".WORDSIZE = 0x40
const @"".WSTOPPED = 0x8
const @"".WUNTRACED = 0x2
func @"".Wait4(@"".pid int, @"".wstatus *@"".WaitStatus, @"".options int, @"".rusage *@"".Rusage) (@"".wpid int, @"".err error)
type @"".WaitStatus uint32
func (? @"".WaitStatus) @"".Continued() (? bool)
func (? @"".WaitStatus) @"".CoreDump() (? bool)
func (? @"".WaitStatus) @"".ExitStatus() (? int)
func (? @"".WaitStatus) @"".Exited() (? bool)
func (? @"".WaitStatus) @"".Signal() (? @"".Signal)
func (? @"".WaitStatus) @"".Signaled() (? bool)
func (? @"".WaitStatus) @"".StopSignal() (? @"".Signal)
func (? @"".WaitStatus) @"".Stopped() (? bool)
func (? @"".WaitStatus) @"".TrapCause() (? int)
func (? *@"".WaitStatus) @"".Continued() (? bool)
func (? *@"".WaitStatus) @"".CoreDump() (? bool)
func (? *@"".WaitStatus) @"".ExitStatus() (? int)
func (? *@"".WaitStatus) @"".Exited() (? bool)
func (? *@"".WaitStatus) @"".Signal() (? @"".Signal)
func (? *@"".WaitStatus) @"".Signaled() (? bool)
func (? *@"".WaitStatus) @"".StopSignal() (? @"".Signal)
func (? *@"".WaitStatus) @"".Stopped() (? bool)
func (? *@"".WaitStatus) @"".TrapCause() (? int)
func @"".Write(@"".fd int, @"".p []byte) (@"".n int, @"".err error)
type @""._C_int int32
type @""._C_long int64
type @""._C_long_long int64
type @""._C_short int16
type @""._Gid_t uint32
type @""._Socklen uint32
type @"".anyMessage struct { @"".Msglen uint16; @"".Version uint8; @"".Type uint8 }
func (? *@"".anyMessage) @"".toRoutingMessage(@"".b []byte) (? @"".RoutingMessage)
type @"".attrList struct { @"".bitmapCount uint16; _ uint16; @"".CommonAttr uint32; @"".VolAttr uint32; @"".DirAttr uint32; @"".FileAttr uint32; @"".Forkattr uint32 }
type @"".ivalue struct { @"".name [16]byte; @"".value int16 }
type @"".mmapper struct { ? @"sync".Mutex; @"".active map[*byte][]byte; @"".mmap func (@"".addr uintptr, @"".length uintptr, @"".prot int, @"".flags int, @"".fd int, @"".offset int64) (? uintptr, ? error); @"".munmap func (@"".addr uintptr, @"".length uintptr) (? error) }
func (? *@"".mmapper) @"".Mmap(@"".fd int, @"".offset int64, @"".length int, @"".prot int, @"".flags int) (@"".data []byte, @"".err error)
func (? *@"".mmapper) @"".Munmap(@"".data []byte) (@"".err error)
type @"sync".RWMutex struct { @"sync".w @"sync".Mutex; @"sync".writerSem uint32; @"sync".readerSem uint32; @"sync".readerCount int32; @"sync".readerWait int32 }
func (? *@"sync".RWMutex) @"sync".Lock() ()
func (? *@"sync".RWMutex) @"sync".RLock() ()
func (? *@"sync".RWMutex) @"sync".RLocker() (? @"sync".Locker)
func (? *@"sync".RWMutex) @"sync".RUnlock() ()
func (? *@"sync".RWMutex) @"sync".Unlock() ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
$$
��AA=$packages["bytes"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} EE=$packages["errors"];<    $r=E.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} B/B=$packages["github.com/gopherjs/gopherjs/js"];<    $r=B.$init();$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["runtime"];<    $r=D.$init();$s=4;case 4:if($r&&$r.$blocking){$r=$r();} CC=$packages["sync"];<    $r=C.$init();$s=5;case 5:if($r&&$r.$blocking){$r=$r();} AE��AE=$pkg.ivalue=$newType(0,$kindStruct,"syscall.ivalue","ivalue","syscall",function(name_,value_){this.$val=this;this.name=name_!==undefined?name_:NM.zero();this.value=value_!==undefined?value_:0;});}AE.init([{prop:"name",name:"name",pkg:"syscall",typ:NM,tag:""},{prop:"value",name:"value",pkg:"syscall",typ:$Int16,tag:""}]);ivalue
syscall.NMsyscall.ivalue BA�BA=$pkg.SysProcAttr=$newType(0,$kindStruct,"syscall.SysProcAttr","SysProcAttr","syscall",function(Chroot_,Credential_,Ptrace_,Setsid_,Setpgid_,Setctty_,Noctty_){this.$val=this;this.Chroot=Chroot_!==undefined?Chroot_:"";this.Credential=Credential_!==undefined?Credential_:MK.nil;this.Ptrace=Ptrace_!==undefined?Ptrace_:false;this.Setsid=Setsid_!==undefined?Setsid_:false;this.Setpgid=Setpgid_!==undefined?Setpgid_:false;this.Setctty=Setctty_!==undefined?Setctty_:false;this.Noctty=Noctty_!==undefined?Noctty_:false;});��BA.init([{prop:"Chroot",name:"Chroot",pkg:"",typ:$String,tag:""},{prop:"Credential",name:"Credential",pkg:"",typ:MK,tag:""},{prop:"Ptrace",name:"Ptrace",pkg:"",typ:$Bool,tag:""},{prop:"Setsid",name:"Setsid",pkg:"",typ:$Bool,tag:""},{prop:"Setpgid",name:"Setpgid",pkg:"",typ:$Bool,tag:""},{prop:"Setctty",name:"Setctty",pkg:"",typ:$Bool,tag:""},{prop:"Noctty",name:"Noctty",pkg:"",typ:$Bool,tag:""}]);SysProcAttr
syscall.MKsyscall.SysProcAttr BJ��BJ=$pkg.Credential=$newType(0,$kindStruct,"syscall.Credential","Credential","syscall",function(Uid_,Gid_,Groups_){this.$val=this;this.Uid=Uid_!==undefined?Uid_:0;this.Gid=Gid_!==undefined?Gid_:0;this.Groups=Groups_!==undefined?Groups_:NN.nil;});��BJ.init([{prop:"Uid",name:"Uid",pkg:"",typ:$Uint32,tag:""},{prop:"Gid",name:"Gid",pkg:"",typ:$Uint32,tag:""},{prop:"Groups",name:"Groups",pkg:"",typ:NN,tag:""}]);
Credentialsyscall.Credential
syscall.NN BK�BK=$pkg.ProcAttr=$newType(0,$kindStruct,"syscall.ProcAttr","ProcAttr","syscall",function(Dir_,Env_,Files_,Sys_){this.$val=this;this.Dir=Dir_!==undefined?Dir_:"";this.Env=Env_!==undefined?Env_:ME.nil;this.Files=Files_!==undefined?Files_:NO.nil;this.Sys=Sys_!==undefined?Sys_:MP.nil;});��BK.init([{prop:"Dir",name:"Dir",pkg:"",typ:$String,tag:""},{prop:"Env",name:"Env",pkg:"",typ:ME,tag:""},{prop:"Files",name:"Files",pkg:"",typ:NO,tag:""},{prop:"Sys",name:"Sys",pkg:"",typ:MP,tag:""}]);ProcAttr
syscall.ME
syscall.MP
syscall.NOsyscall.ProcAttr BZkBZ=$pkg.RoutingMessage=$newType(8,$kindInterface,"syscall.RoutingMessage","RoutingMessage","syscall",null);XBZ.init([{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[MV],false)}]);RoutingMessage
syscall.MVsyscall.RoutingMessage CA�CA=$pkg.anyMessage=$newType(0,$kindStruct,"syscall.anyMessage","anyMessage","syscall",function(Msglen_,Version_,Type_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;});lNP.methods=[{prop:"toRoutingMessage",name:"toRoutingMessage",pkg:"syscall",typ:$funcType([MD],[BZ],false)}];��CA.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""}]);
anyMessage
syscall.MD
syscall.NPsyscall.RoutingMessagesyscall.anyMessage CB��CB=$pkg.RouteMessage=$newType(0,$kindStruct,"syscall.RouteMessage","RouteMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LV.ptr();this.Data=Data_!==undefined?Data_:MD.nil;});ZNQ.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[MV],false)}];mCB.init([{prop:"Header",name:"Header",pkg:"",typ:LV,tag:""},{prop:"Data",name:"Data",pkg:"",typ:MD,tag:""}]);RouteMessage
syscall.MD
syscall.MV
syscall.NQsyscall.RouteMessagesyscall.RtMsghdr CC��CC=$pkg.InterfaceMessage=$newType(0,$kindStruct,"syscall.InterfaceMessage","InterfaceMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LQ.ptr();this.Data=Data_!==undefined?Data_:MD.nil;});ZNR.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[MV],false)}];mCC.init([{prop:"Header",name:"Header",pkg:"",typ:LQ,tag:""},{prop:"Data",name:"Data",pkg:"",typ:MD,tag:""}]);InterfaceMessagesyscall.IfMsghdrsyscall.InterfaceMessage
syscall.MD
syscall.MV
syscall.NR CD��CD=$pkg.InterfaceAddrMessage=$newType(0,$kindStruct,"syscall.InterfaceAddrMessage","InterfaceAddrMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LS.ptr();this.Data=Data_!==undefined?Data_:MD.nil;});ZNS.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[MV],false)}];mCD.init([{prop:"Header",name:"Header",pkg:"",typ:LS,tag:""},{prop:"Data",name:"Data",pkg:"",typ:MD,tag:""}]);InterfaceAddrMessagesyscall.IfaMsghdrsyscall.InterfaceAddrMessage
syscall.MD
syscall.MV
syscall.NS CG�CG=$pkg.InterfaceMulticastAddrMessage=$newType(0,$kindStruct,"syscall.InterfaceMulticastAddrMessage","InterfaceMulticastAddrMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LU.ptr();this.Data=Data_!==undefined?Data_:MD.nil;});ZNT.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[MV],false)}];mCG.init([{prop:"Header",name:"Header",pkg:"",typ:LU,tag:""},{prop:"Data",name:"Data",pkg:"",typ:MD,tag:""}]);InterfaceMulticastAddrMessagesyscall.IfmaMsghdr2%syscall.InterfaceMulticastAddrMessage
syscall.MD
syscall.MV
syscall.NT CL��CL=$pkg.SocketControlMessage=$newType(0,$kindStruct,"syscall.SocketControlMessage","SocketControlMessage","syscall",function(Header_,Data_){this.$val=this;this.Header=Header_!==undefined?Header_:new LJ.ptr();this.Data=Data_!==undefined?Data_:MD.nil;});mCL.init([{prop:"Header",name:"Header",pkg:"",typ:LJ,tag:""},{prop:"Data",name:"Data",pkg:"",typ:MD,tag:""}]);SocketControlMessagesyscall.Cmsghdr
syscall.MDsyscall.SocketControlMessage CZ\CZ=$pkg.WaitStatus=$newType(4,$kindUint32,"syscall.WaitStatus","WaitStatus","syscall",null);��CZ.methods=[{prop:"Exited",name:"Exited",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"ExitStatus",name:"ExitStatus",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Signaled",name:"Signaled",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"Signal",name:"Signal",pkg:"",typ:$funcType([],[ES],false)},{prop:"CoreDump",name:"CoreDump",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"Stopped",name:"Stopped",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"Continued",name:"Continued",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"StopSignal",name:"StopSignal",pkg:"",typ:$funcType([],[ES],false)},{prop:"TrapCause",name:"TrapCause",pkg:"",typ:$funcType([],[$Int],false)}];
WaitStatussyscall.Signalsyscall.WaitStatus DX�DX=$pkg.SockaddrDatalink=$newType(0,$kindStruct,"syscall.SockaddrDatalink","SockaddrDatalink","syscall",function(Len_,Family_,Index_,Type_,Nlen_,Alen_,Slen_,Data_,raw_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Index=Index_!==undefined?Index_:0;this.Type=Type_!==undefined?Type_:0;this.Nlen=Nlen_!==undefined?Nlen_:0;this.Alen=Alen_!==undefined?Alen_:0;this.Slen=Slen_!==undefined?Slen_:0;this.Data=Data_!==undefined?Data_:NU.zero();this.raw=raw_!==undefined?raw_:new LA.ptr();});pNV.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[$UnsafePointer,LD,$error],false)}];��DX.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Nlen",name:"Nlen",pkg:"",typ:$Uint8,tag:""},{prop:"Alen",name:"Alen",pkg:"",typ:$Uint8,tag:""},{prop:"Slen",name:"Slen",pkg:"",typ:$Uint8,tag:""},{prop:"Data",name:"Data",pkg:"",typ:NU,tag:""},{prop:"raw",name:"raw",pkg:"syscall",typ:LA,tag:""}]);SockaddrDatalink
syscall.NU
syscall.NVsyscall.RawSockaddrDatalinksyscall.SockaddrDatalinksyscall._Socklen EC��EC=$pkg.attrList=$newType(0,$kindStruct,"syscall.attrList","attrList","syscall",function(bitmapCount_,_$1_,CommonAttr_,VolAttr_,DirAttr_,FileAttr_,Forkattr_){this.$val=this;this.bitmapCount=bitmapCount_!==undefined?bitmapCount_:0;this._$1=_$1_!==undefined?_$1_:0;this.CommonAttr=CommonAttr_!==undefined?CommonAttr_:0;this.VolAttr=VolAttr_!==undefined?VolAttr_:0;this.DirAttr=DirAttr_!==undefined?DirAttr_:0;this.FileAttr=FileAttr_!==undefined?FileAttr_:0;this.Forkattr=Forkattr_!==undefined?Forkattr_:0;});��EC.init([{prop:"bitmapCount",name:"bitmapCount",pkg:"syscall",typ:$Uint16,tag:""},{prop:"_$1",name:"_",pkg:"syscall",typ:$Uint16,tag:""},{prop:"CommonAttr",name:"CommonAttr",pkg:"",typ:$Uint32,tag:""},{prop:"VolAttr",name:"VolAttr",pkg:"",typ:$Uint32,tag:""},{prop:"DirAttr",name:"DirAttr",pkg:"",typ:$Uint32,tag:""},{prop:"FileAttr",name:"FileAttr",pkg:"",typ:$Uint32,tag:""},{prop:"Forkattr",name:"Forkattr",pkg:"",typ:$Uint32,tag:""}]);attrListsyscall.attrList EQ�aEQ=$pkg.mmapper=$newType(0,$kindStruct,"syscall.mmapper","mmapper","syscall",function(Mutex_,active_,mmap_,munmap_){this.$val=this;this.Mutex=Mutex_!==undefined?Mutex_:new C.Mutex.ptr();this.active=active_!==undefined?active_:false;this.mmap=mmap_!==undefined?mmap_:$throwNilPointerError;this.munmap=munmap_!==undefined?munmap_:$throwNilPointerError;});��NW.methods=[{prop:"Mmap",name:"Mmap",pkg:"",typ:$funcType([$Int,$Int64,$Int,$Int,$Int],[MD,$error],false)},{prop:"Munmap",name:"Munmap",pkg:"",typ:$funcType([MD],[$error],false)}];��EQ.init([{prop:"Mutex",name:"",pkg:"",typ:C.Mutex,tag:""},{prop:"active",name:"active",pkg:"syscall",typ:NX,tag:""},{prop:"mmap",name:"mmap",pkg:"syscall",typ:NY,tag:""},{prop:"munmap",name:"munmap",pkg:"syscall",typ:NZ,tag:""}]);mmapper
sync.Mutex
syscall.MD
syscall.MF
syscall.NW
syscall.NX
syscall.NY
syscall.NZsyscall.mmapper ERNER=$pkg.Errno=$newType(4,$kindUintptr,"syscall.Errno","Errno","syscall",null);��ER.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)},{prop:"Temporary",name:"Temporary",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"Timeout",name:"Timeout",pkg:"",typ:$funcType([],[$Bool],false)}];Errnosyscall.Errno ESMES=$pkg.Signal=$newType(4,$kindInt,"syscall.Signal","Signal","syscall",null);��ES.methods=[{prop:"Signal",name:"Signal",pkg:"",typ:$funcType([],[],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];Signalsyscall.Signal EVYEV=$pkg.Sockaddr=$newType(8,$kindInterface,"syscall.Sockaddr","Sockaddr","syscall",null);nEV.init([{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[$UnsafePointer,LD,$error],false)}]);Sockaddrsyscall.Sockaddrsyscall._Socklen EW�EW=$pkg.SockaddrInet4=$newType(0,$kindStruct,"syscall.SockaddrInet4","SockaddrInet4","syscall",function(Port_,Addr_,raw_){this.$val=this;this.Port=Port_!==undefined?Port_:0;this.Addr=Addr_!==undefined?Addr_:NF.zero();this.raw=raw_!==undefined?raw_:new KX.ptr();});pOA.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[$UnsafePointer,LD,$error],false)}];��EW.init([{prop:"Port",name:"Port",pkg:"",typ:$Int,tag:""},{prop:"Addr",name:"Addr",pkg:"",typ:NF,tag:""},{prop:"raw",name:"raw",pkg:"syscall",typ:KX,tag:""}]);SockaddrInet4
syscall.NF
syscall.OAsyscall.RawSockaddrInet4syscall.SockaddrInet4syscall._Socklen EX�:EX=$pkg.SockaddrInet6=$newType(0,$kindStruct,"syscall.SockaddrInet6","SockaddrInet6","syscall",function(Port_,ZoneId_,Addr_,raw_){this.$val=this;this.Port=Port_!==undefined?Port_:0;this.ZoneId=ZoneId_!==undefined?ZoneId_:0;this.Addr=Addr_!==undefined?Addr_:NM.zero();this.raw=raw_!==undefined?raw_:new KY.ptr();});pOB.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[$UnsafePointer,LD,$error],false)}];��EX.init([{prop:"Port",name:"Port",pkg:"",typ:$Int,tag:""},{prop:"ZoneId",name:"ZoneId",pkg:"",typ:$Uint32,tag:""},{prop:"Addr",name:"Addr",pkg:"",typ:NM,tag:""},{prop:"raw",name:"raw",pkg:"syscall",typ:KY,tag:""}]);SockaddrInet6
syscall.NM
syscall.OBsyscall.RawSockaddrInet6syscall.SockaddrInet6syscall._Socklen EY��EY=$pkg.SockaddrUnix=$newType(0,$kindStruct,"syscall.SockaddrUnix","SockaddrUnix","syscall",function(Name_,raw_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.raw=raw_!==undefined?raw_:new KZ.ptr();});pOC.methods=[{prop:"sockaddr",name:"sockaddr",pkg:"syscall",typ:$funcType([],[$UnsafePointer,LD,$error],false)}];sEY.init([{prop:"Name",name:"Name",pkg:"",typ:$String,tag:""},{prop:"raw",name:"raw",pkg:"syscall",typ:KZ,tag:""}]);SockaddrUnix
syscall.OCsyscall.RawSockaddrUnixsyscall.SockaddrUnixsyscall._Socklen KEUKE=$pkg._C_short=$newType(2,$kindInt16,"syscall._C_short","_C_short","syscall",null);_C_shortsyscall._C_short KFOKF=$pkg._C_int=$newType(4,$kindInt32,"syscall._C_int","_C_int","syscall",null);_C_intsyscall._C_int KGRKG=$pkg._C_long=$newType(8,$kindInt64,"syscall._C_long","_C_long","syscall",null);_C_longsyscall._C_long KHaKH=$pkg._C_long_long=$newType(8,$kindInt64,"syscall._C_long_long","_C_long_long","syscall",null);_C_long_longsyscall._C_long_long KI��KI=$pkg.Timespec=$newType(0,$kindStruct,"syscall.Timespec","Timespec","syscall",function(Sec_,Nsec_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:new $Int64(0,0);this.Nsec=Nsec_!==undefined?Nsec_:new $Int64(0,0);});��OD.methods=[{prop:"Unix",name:"Unix",pkg:"",typ:$funcType([],[$Int64,$Int64],false)},{prop:"Nano",name:"Nano",pkg:"",typ:$funcType([],[$Int64],false)}];oKI.init([{prop:"Sec",name:"Sec",pkg:"",typ:$Int64,tag:""},{prop:"Nsec",name:"Nsec",pkg:"",typ:$Int64,tag:""}]);Timespec
syscall.ODsyscall.Timespec KJ�KJ=$pkg.Timeval=$newType(0,$kindStruct,"syscall.Timeval","Timeval","syscall",function(Sec_,Usec_,Pad_cgo_0_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:new $Int64(0,0);this.Usec=Usec_!==undefined?Usec_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();});��MH.methods=[{prop:"Unix",name:"Unix",pkg:"",typ:$funcType([],[$Int64,$Int64],false)},{prop:"Nano",name:"Nano",pkg:"",typ:$funcType([],[$Int64],false)}];��KJ.init([{prop:"Sec",name:"Sec",pkg:"",typ:$Int64,tag:""},{prop:"Usec",name:"Usec",pkg:"",typ:$Int32,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""}]);Timeval
syscall.MH
syscall.NFsyscall.Timeval KK��KK=$pkg.Timeval32=$newType(0,$kindStruct,"syscall.Timeval32","Timeval32","syscall",function(Sec_,Usec_){this.$val=this;this.Sec=Sec_!==undefined?Sec_:0;this.Usec=Usec_!==undefined?Usec_:0;});oKK.init([{prop:"Sec",name:"Sec",pkg:"",typ:$Int32,tag:""},{prop:"Usec",name:"Usec",pkg:"",typ:$Int32,tag:""}]);	Timeval32syscall.Timeval32 KL�TKL=$pkg.Rusage=$newType(0,$kindStruct,"syscall.Rusage","Rusage","syscall",function(Utime_,Stime_,Maxrss_,Ixrss_,Idrss_,Isrss_,Minflt_,Majflt_,Nswap_,Inblock_,Oublock_,Msgsnd_,Msgrcv_,Nsignals_,Nvcsw_,Nivcsw_){this.$val=this;this.Utime=Utime_!==undefined?Utime_:new KJ.ptr();this.Stime=Stime_!==undefined?Stime_:new KJ.ptr();this.Maxrss=Maxrss_!==undefined?Maxrss_:new $Int64(0,0);this.Ixrss=Ixrss_!==undefined?Ixrss_:new $Int64(0,0);this.Idrss=Idrss_!==undefined?Idrss_:new $Int64(0,0);this.Isrss=Isrss_!==undefined?Isrss_:new $Int64(0,0);this.Minflt=Minflt_!==undefined?Minflt_:new $Int64(0,0);this.Majflt=Majflt_!==undefined?Majflt_:new $Int64(0,0);this.Nswap=Nswap_!==undefined?Nswap_:new $Int64(0,0);this.Inblock=Inblock_!==undefined?Inblock_:new $Int64(0,0);this.Oublock=Oublock_!==undefined?Oublock_:new $Int64(0,0);this.Msgsnd=Msgsnd_!==undefined?Msgsnd_:new $Int64(0,0);this.Msgrcv=Msgrcv_!==undefined?Msgrcv_:new $Int64(0,0);this.Nsignals=Nsignals_!==undefined?Nsignals_:new $Int64(0,0);this.Nvcsw=Nvcsw_!==undefined?Nvcsw_:new $Int64(0,0);this.Nivcsw=Nivcsw_!==undefined?Nivcsw_:new $Int64(0,0);});�mKL.init([{prop:"Utime",name:"Utime",pkg:"",typ:KJ,tag:""},{prop:"Stime",name:"Stime",pkg:"",typ:KJ,tag:""},{prop:"Maxrss",name:"Maxrss",pkg:"",typ:$Int64,tag:""},{prop:"Ixrss",name:"Ixrss",pkg:"",typ:$Int64,tag:""},{prop:"Idrss",name:"Idrss",pkg:"",typ:$Int64,tag:""},{prop:"Isrss",name:"Isrss",pkg:"",typ:$Int64,tag:""},{prop:"Minflt",name:"Minflt",pkg:"",typ:$Int64,tag:""},{prop:"Majflt",name:"Majflt",pkg:"",typ:$Int64,tag:""},{prop:"Nswap",name:"Nswap",pkg:"",typ:$Int64,tag:""},{prop:"Inblock",name:"Inblock",pkg:"",typ:$Int64,tag:""},{prop:"Oublock",name:"Oublock",pkg:"",typ:$Int64,tag:""},{prop:"Msgsnd",name:"Msgsnd",pkg:"",typ:$Int64,tag:""},{prop:"Msgrcv",name:"Msgrcv",pkg:"",typ:$Int64,tag:""},{prop:"Nsignals",name:"Nsignals",pkg:"",typ:$Int64,tag:""},{prop:"Nvcsw",name:"Nvcsw",pkg:"",typ:$Int64,tag:""},{prop:"Nivcsw",name:"Nivcsw",pkg:"",typ:$Int64,tag:""}]);Rusagesyscall.Rusagesyscall.Timeval KM��KM=$pkg.Rlimit=$newType(0,$kindStruct,"syscall.Rlimit","Rlimit","syscall",function(Cur_,Max_){this.$val=this;this.Cur=Cur_!==undefined?Cur_:new $Uint64(0,0);this.Max=Max_!==undefined?Max_:new $Uint64(0,0);});oKM.init([{prop:"Cur",name:"Cur",pkg:"",typ:$Uint64,tag:""},{prop:"Max",name:"Max",pkg:"",typ:$Uint64,tag:""}]);Rlimitsyscall.Rlimit KNPKN=$pkg._Gid_t=$newType(4,$kindUint32,"syscall._Gid_t","_Gid_t","syscall",null);_Gid_tsyscall._Gid_t KO�wKO=$pkg.Stat_t=$newType(0,$kindStruct,"syscall.Stat_t","Stat_t","syscall",function(Dev_,Mode_,Nlink_,Ino_,Uid_,Gid_,Rdev_,Pad_cgo_0_,Atimespec_,Mtimespec_,Ctimespec_,Birthtimespec_,Size_,Blocks_,Blksize_,Flags_,Gen_,Lspare_,Qspare_){this.$val=this;this.Dev=Dev_!==undefined?Dev_:0;this.Mode=Mode_!==undefined?Mode_:0;this.Nlink=Nlink_!==undefined?Nlink_:0;this.Ino=Ino_!==undefined?Ino_:new $Uint64(0,0);this.Uid=Uid_!==undefined?Uid_:0;this.Gid=Gid_!==undefined?Gid_:0;this.Rdev=Rdev_!==undefined?Rdev_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();this.Atimespec=Atimespec_!==undefined?Atimespec_:new KI.ptr();this.Mtimespec=Mtimespec_!==undefined?Mtimespec_:new KI.ptr();this.Ctimespec=Ctimespec_!==undefined?Ctimespec_:new KI.ptr();this.Birthtimespec=Birthtimespec_!==undefined?Birthtimespec_:new KI.ptr();this.Size=Size_!==undefined?Size_:new $Int64(0,0);this.Blocks=Blocks_!==undefined?Blocks_:new $Int64(0,0);this.Blksize=Blksize_!==undefined?Blksize_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Gen=Gen_!==undefined?Gen_:0;this.Lspare=Lspare_!==undefined?Lspare_:0;this.Qspare=Qspare_!==undefined?Qspare_:OE.zero();});�	KO.init([{prop:"Dev",name:"Dev",pkg:"",typ:$Int32,tag:""},{prop:"Mode",name:"Mode",pkg:"",typ:$Uint16,tag:""},{prop:"Nlink",name:"Nlink",pkg:"",typ:$Uint16,tag:""},{prop:"Ino",name:"Ino",pkg:"",typ:$Uint64,tag:""},{prop:"Uid",name:"Uid",pkg:"",typ:$Uint32,tag:""},{prop:"Gid",name:"Gid",pkg:"",typ:$Uint32,tag:""},{prop:"Rdev",name:"Rdev",pkg:"",typ:$Int32,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""},{prop:"Atimespec",name:"Atimespec",pkg:"",typ:KI,tag:""},{prop:"Mtimespec",name:"Mtimespec",pkg:"",typ:KI,tag:""},{prop:"Ctimespec",name:"Ctimespec",pkg:"",typ:KI,tag:""},{prop:"Birthtimespec",name:"Birthtimespec",pkg:"",typ:KI,tag:""},{prop:"Size",name:"Size",pkg:"",typ:$Int64,tag:""},{prop:"Blocks",name:"Blocks",pkg:"",typ:$Int64,tag:""},{prop:"Blksize",name:"Blksize",pkg:"",typ:$Int32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Uint32,tag:""},{prop:"Gen",name:"Gen",pkg:"",typ:$Uint32,tag:""},{prop:"Lspare",name:"Lspare",pkg:"",typ:$Int32,tag:""},{prop:"Qspare",name:"Qspare",pkg:"",typ:OE,tag:""}]);Stat_t
syscall.NF
syscall.OEsyscall.Stat_tsyscall.Timespec KP�KP=$pkg.Statfs_t=$newType(0,$kindStruct,"syscall.Statfs_t","Statfs_t","syscall",function(Bsize_,Iosize_,Blocks_,Bfree_,Bavail_,Files_,Ffree_,Fsid_,Owner_,Type_,Flags_,Fssubtype_,Fstypename_,Mntonname_,Mntfromname_,Reserved_){this.$val=this;this.Bsize=Bsize_!==undefined?Bsize_:0;this.Iosize=Iosize_!==undefined?Iosize_:0;this.Blocks=Blocks_!==undefined?Blocks_:new $Uint64(0,0);this.Bfree=Bfree_!==undefined?Bfree_:new $Uint64(0,0);this.Bavail=Bavail_!==undefined?Bavail_:new $Uint64(0,0);this.Files=Files_!==undefined?Files_:new $Uint64(0,0);this.Ffree=Ffree_!==undefined?Ffree_:new $Uint64(0,0);this.Fsid=Fsid_!==undefined?Fsid_:new KV.ptr();this.Owner=Owner_!==undefined?Owner_:0;this.Type=Type_!==undefined?Type_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Fssubtype=Fssubtype_!==undefined?Fssubtype_:0;this.Fstypename=Fstypename_!==undefined?Fstypename_:OF.zero();this.Mntonname=Mntonname_!==undefined?Mntonname_:OG.zero();this.Mntfromname=Mntfromname_!==undefined?Mntfromname_:OG.zero();this.Reserved=Reserved_!==undefined?Reserved_:OH.zero();});�KP.init([{prop:"Bsize",name:"Bsize",pkg:"",typ:$Uint32,tag:""},{prop:"Iosize",name:"Iosize",pkg:"",typ:$Int32,tag:""},{prop:"Blocks",name:"Blocks",pkg:"",typ:$Uint64,tag:""},{prop:"Bfree",name:"Bfree",pkg:"",typ:$Uint64,tag:""},{prop:"Bavail",name:"Bavail",pkg:"",typ:$Uint64,tag:""},{prop:"Files",name:"Files",pkg:"",typ:$Uint64,tag:""},{prop:"Ffree",name:"Ffree",pkg:"",typ:$Uint64,tag:""},{prop:"Fsid",name:"Fsid",pkg:"",typ:KV,tag:""},{prop:"Owner",name:"Owner",pkg:"",typ:$Uint32,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Uint32,tag:""},{prop:"Fssubtype",name:"Fssubtype",pkg:"",typ:$Uint32,tag:""},{prop:"Fstypename",name:"Fstypename",pkg:"",typ:OF,tag:""},{prop:"Mntonname",name:"Mntonname",pkg:"",typ:OG,tag:""},{prop:"Mntfromname",name:"Mntfromname",pkg:"",typ:OG,tag:""},{prop:"Reserved",name:"Reserved",pkg:"",typ:OH,tag:""}]);Statfs_tsyscall.Fsid
syscall.OF
syscall.OG
syscall.OHsyscall.Statfs_t KQ�[KQ=$pkg.Flock_t=$newType(0,$kindStruct,"syscall.Flock_t","Flock_t","syscall",function(Start_,Len_,Pid_,Type_,Whence_){this.$val=this;this.Start=Start_!==undefined?Start_:new $Int64(0,0);this.Len=Len_!==undefined?Len_:new $Int64(0,0);this.Pid=Pid_!==undefined?Pid_:0;this.Type=Type_!==undefined?Type_:0;this.Whence=Whence_!==undefined?Whence_:0;});�KQ.init([{prop:"Start",name:"Start",pkg:"",typ:$Int64,tag:""},{prop:"Len",name:"Len",pkg:"",typ:$Int64,tag:""},{prop:"Pid",name:"Pid",pkg:"",typ:$Int32,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Int16,tag:""},{prop:"Whence",name:"Whence",pkg:"",typ:$Int16,tag:""}]);Flock_tsyscall.Flock_t KR��KR=$pkg.Fstore_t=$newType(0,$kindStruct,"syscall.Fstore_t","Fstore_t","syscall",function(Flags_,Posmode_,Offset_,Length_,Bytesalloc_){this.$val=this;this.Flags=Flags_!==undefined?Flags_:0;this.Posmode=Posmode_!==undefined?Posmode_:0;this.Offset=Offset_!==undefined?Offset_:new $Int64(0,0);this.Length=Length_!==undefined?Length_:new $Int64(0,0);this.Bytesalloc=Bytesalloc_!==undefined?Bytesalloc_:new $Int64(0,0);});�'KR.init([{prop:"Flags",name:"Flags",pkg:"",typ:$Uint32,tag:""},{prop:"Posmode",name:"Posmode",pkg:"",typ:$Int32,tag:""},{prop:"Offset",name:"Offset",pkg:"",typ:$Int64,tag:""},{prop:"Length",name:"Length",pkg:"",typ:$Int64,tag:""},{prop:"Bytesalloc",name:"Bytesalloc",pkg:"",typ:$Int64,tag:""}]);Fstore_tsyscall.Fstore_t KS�)KS=$pkg.Radvisory_t=$newType(0,$kindStruct,"syscall.Radvisory_t","Radvisory_t","syscall",function(Offset_,Count_,Pad_cgo_0_){this.$val=this;this.Offset=Offset_!==undefined?Offset_:new $Int64(0,0);this.Count=Count_!==undefined?Count_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();});��KS.init([{prop:"Offset",name:"Offset",pkg:"",typ:$Int64,tag:""},{prop:"Count",name:"Count",pkg:"",typ:$Int32,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""}]);Radvisory_t
syscall.NFsyscall.Radvisory_t KT�HKT=$pkg.Fbootstraptransfer_t=$newType(0,$kindStruct,"syscall.Fbootstraptransfer_t","Fbootstraptransfer_t","syscall",function(Offset_,Length_,Buffer_){this.$val=this;this.Offset=Offset_!==undefined?Offset_:new $Int64(0,0);this.Length=Length_!==undefined?Length_:new $Uint64(0,0);this.Buffer=Buffer_!==undefined?Buffer_:MF.nil;});��KT.init([{prop:"Offset",name:"Offset",pkg:"",typ:$Int64,tag:""},{prop:"Length",name:"Length",pkg:"",typ:$Uint64,tag:""},{prop:"Buffer",name:"Buffer",pkg:"",typ:MF,tag:""}]);Fbootstraptransfer_tsyscall.Fbootstraptransfer_t
syscall.MF KU�@KU=$pkg.Log2phys_t=$newType(0,$kindStruct,"syscall.Log2phys_t","Log2phys_t","syscall",function(Flags_,Contigbytes_,Devoffset_){this.$val=this;this.Flags=Flags_!==undefined?Flags_:0;this.Contigbytes=Contigbytes_!==undefined?Contigbytes_:new $Int64(0,0);this.Devoffset=Devoffset_!==undefined?Devoffset_:new $Int64(0,0);});��KU.init([{prop:"Flags",name:"Flags",pkg:"",typ:$Uint32,tag:""},{prop:"Contigbytes",name:"Contigbytes",pkg:"",typ:$Int64,tag:""},{prop:"Devoffset",name:"Devoffset",pkg:"",typ:$Int64,tag:""}]);
Log2phys_tsyscall.Log2phys_t KV��KV=$pkg.Fsid=$newType(0,$kindStruct,"syscall.Fsid","Fsid","syscall",function(Val_){this.$val=this;this.Val=Val_!==undefined?Val_:NL.zero();});8KV.init([{prop:"Val",name:"Val",pkg:"",typ:NL,tag:""}]);Fsidsyscall.Fsid
syscall.NL KW��KW=$pkg.Dirent=$newType(0,$kindStruct,"syscall.Dirent","Dirent","syscall",function(Ino_,Seekoff_,Reclen_,Namlen_,Type_,Name_,Pad_cgo_0_){this.$val=this;this.Ino=Ino_!==undefined?Ino_:new $Uint64(0,0);this.Seekoff=Seekoff_!==undefined?Seekoff_:new $Uint64(0,0);this.Reclen=Reclen_!==undefined?Reclen_:0;this.Namlen=Namlen_!==undefined?Namlen_:0;this.Type=Type_!==undefined?Type_:0;this.Name=Name_!==undefined?Name_:OG.zero();this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OI.zero();});��KW.init([{prop:"Ino",name:"Ino",pkg:"",typ:$Uint64,tag:""},{prop:"Seekoff",name:"Seekoff",pkg:"",typ:$Uint64,tag:""},{prop:"Reclen",name:"Reclen",pkg:"",typ:$Uint16,tag:""},{prop:"Namlen",name:"Namlen",pkg:"",typ:$Uint16,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Name",name:"Name",pkg:"",typ:OG,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OI,tag:""}]);Direntsyscall.Dirent
syscall.OG
syscall.OI KX�jKX=$pkg.RawSockaddrInet4=$newType(0,$kindStruct,"syscall.RawSockaddrInet4","RawSockaddrInet4","syscall",function(Len_,Family_,Port_,Addr_,Zero_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Port=Port_!==undefined?Port_:0;this.Addr=Addr_!==undefined?Addr_:NF.zero();this.Zero=Zero_!==undefined?Zero_:OJ.zero();});�KX.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Port",name:"Port",pkg:"",typ:$Uint16,tag:""},{prop:"Addr",name:"Addr",pkg:"",typ:NF,tag:""},{prop:"Zero",name:"Zero",pkg:"",typ:OJ,tag:""}]);RawSockaddrInet4
syscall.NF
syscall.OJsyscall.RawSockaddrInet4 KY��KY=$pkg.RawSockaddrInet6=$newType(0,$kindStruct,"syscall.RawSockaddrInet6","RawSockaddrInet6","syscall",function(Len_,Family_,Port_,Flowinfo_,Addr_,Scope_id_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Port=Port_!==undefined?Port_:0;this.Flowinfo=Flowinfo_!==undefined?Flowinfo_:0;this.Addr=Addr_!==undefined?Addr_:NM.zero();this.Scope_id=Scope_id_!==undefined?Scope_id_:0;});�NKY.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Port",name:"Port",pkg:"",typ:$Uint16,tag:""},{prop:"Flowinfo",name:"Flowinfo",pkg:"",typ:$Uint32,tag:""},{prop:"Addr",name:"Addr",pkg:"",typ:NM,tag:""},{prop:"Scope_id",name:"Scope_id",pkg:"",typ:$Uint32,tag:""}]);RawSockaddrInet6
syscall.NMsyscall.RawSockaddrInet6 KZ�KZ=$pkg.RawSockaddrUnix=$newType(0,$kindStruct,"syscall.RawSockaddrUnix","RawSockaddrUnix","syscall",function(Len_,Family_,Path_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Path=Path_!==undefined?Path_:OK.zero();});��KZ.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Path",name:"Path",pkg:"",typ:OK,tag:""}]);RawSockaddrUnix
syscall.OKsyscall.RawSockaddrUnix LA��LA=$pkg.RawSockaddrDatalink=$newType(0,$kindStruct,"syscall.RawSockaddrDatalink","RawSockaddrDatalink","syscall",function(Len_,Family_,Index_,Type_,Nlen_,Alen_,Slen_,Data_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Index=Index_!==undefined?Index_:0;this.Type=Type_!==undefined?Type_:0;this.Nlen=Nlen_!==undefined?Nlen_:0;this.Alen=Alen_!==undefined?Alen_:0;this.Slen=Slen_!==undefined?Slen_:0;this.Data=Data_!==undefined?Data_:NU.zero();});��LA.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Nlen",name:"Nlen",pkg:"",typ:$Uint8,tag:""},{prop:"Alen",name:"Alen",pkg:"",typ:$Uint8,tag:""},{prop:"Slen",name:"Slen",pkg:"",typ:$Uint8,tag:""},{prop:"Data",name:"Data",pkg:"",typ:NU,tag:""}]);RawSockaddrDatalink
syscall.NUsyscall.RawSockaddrDatalink LB��LB=$pkg.RawSockaddr=$newType(0,$kindStruct,"syscall.RawSockaddr","RawSockaddr","syscall",function(Len_,Family_,Data_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Family=Family_!==undefined?Family_:0;this.Data=Data_!==undefined?Data_:OL.zero();});��LB.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint8,tag:""},{prop:"Family",name:"Family",pkg:"",typ:$Uint8,tag:""},{prop:"Data",name:"Data",pkg:"",typ:OL,tag:""}]);RawSockaddr
syscall.OLsyscall.RawSockaddr LC��LC=$pkg.RawSockaddrAny=$newType(0,$kindStruct,"syscall.RawSockaddrAny","RawSockaddrAny","syscall",function(Addr_,Pad_){this.$val=this;this.Addr=Addr_!==undefined?Addr_:new LB.ptr();this.Pad=Pad_!==undefined?Pad_:OM.zero();});gLC.init([{prop:"Addr",name:"Addr",pkg:"",typ:LB,tag:""},{prop:"Pad",name:"Pad",pkg:"",typ:OM,tag:""}]);RawSockaddrAny
syscall.OMsyscall.RawSockaddrsyscall.RawSockaddrAny LDVLD=$pkg._Socklen=$newType(4,$kindUint32,"syscall._Socklen","_Socklen","syscall",null);_Socklensyscall._Socklen LE��LE=$pkg.Linger=$newType(0,$kindStruct,"syscall.Linger","Linger","syscall",function(Onoff_,Linger_){this.$val=this;this.Onoff=Onoff_!==undefined?Onoff_:0;this.Linger=Linger_!==undefined?Linger_:0;});wLE.init([{prop:"Onoff",name:"Onoff",pkg:"",typ:$Int32,tag:""},{prop:"Linger",name:"Linger",pkg:"",typ:$Int32,tag:""}]);Lingersyscall.Linger LF��LF=$pkg.Iovec=$newType(0,$kindStruct,"syscall.Iovec","Iovec","syscall",function(Base_,Len_){this.$val=this;this.Base=Base_!==undefined?Base_:MF.nil;this.Len=Len_!==undefined?Len_:new $Uint64(0,0);});QON.methods=[{prop:"SetLen",name:"SetLen",pkg:"",typ:$funcType([$Int],[],false)}];lLF.init([{prop:"Base",name:"Base",pkg:"",typ:MF,tag:""},{prop:"Len",name:"Len",pkg:"",typ:$Uint64,tag:""}]);Iovecsyscall.Iovec
syscall.MF
syscall.ON LG��LG=$pkg.IPMreq=$newType(0,$kindStruct,"syscall.IPMreq","IPMreq","syscall",function(Multiaddr_,Interface_){this.$val=this;this.Multiaddr=Multiaddr_!==undefined?Multiaddr_:NF.zero();this.Interface=Interface_!==undefined?Interface_:NF.zero();});}LG.init([{prop:"Multiaddr",name:"Multiaddr",pkg:"",typ:NF,tag:""},{prop:"Interface",name:"Interface",pkg:"",typ:NF,tag:""}]);IPMreqsyscall.IPMreq
syscall.NF LH��LH=$pkg.IPv6Mreq=$newType(0,$kindStruct,"syscall.IPv6Mreq","IPv6Mreq","syscall",function(Multiaddr_,Interface_){this.$val=this;this.Multiaddr=Multiaddr_!==undefined?Multiaddr_:NM.zero();this.Interface=Interface_!==undefined?Interface_:0;});��LH.init([{prop:"Multiaddr",name:"Multiaddr",pkg:"",typ:NM,tag:""},{prop:"Interface",name:"Interface",pkg:"",typ:$Uint32,tag:""}]);IPv6Mreqsyscall.IPv6Mreq
syscall.NM LI�_LI=$pkg.Msghdr=$newType(0,$kindStruct,"syscall.Msghdr","Msghdr","syscall",function(Name_,Namelen_,Pad_cgo_0_,Iov_,Iovlen_,Pad_cgo_1_,Control_,Controllen_,Flags_){this.$val=this;this.Name=Name_!==undefined?Name_:MF.nil;this.Namelen=Namelen_!==undefined?Namelen_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();this.Iov=Iov_!==undefined?Iov_:ON.nil;this.Iovlen=Iovlen_!==undefined?Iovlen_:0;this.Pad_cgo_1=Pad_cgo_1_!==undefined?Pad_cgo_1_:NF.zero();this.Control=Control_!==undefined?Control_:MF.nil;this.Controllen=Controllen_!==undefined?Controllen_:0;this.Flags=Flags_!==undefined?Flags_:0;});_OO.methods=[{prop:"SetControllen",name:"SetControllen",pkg:"",typ:$funcType([$Int],[],false)}];��LI.init([{prop:"Name",name:"Name",pkg:"",typ:MF,tag:""},{prop:"Namelen",name:"Namelen",pkg:"",typ:$Uint32,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""},{prop:"Iov",name:"Iov",pkg:"",typ:ON,tag:""},{prop:"Iovlen",name:"Iovlen",pkg:"",typ:$Int32,tag:""},{prop:"Pad_cgo_1",name:"Pad_cgo_1",pkg:"",typ:NF,tag:""},{prop:"Control",name:"Control",pkg:"",typ:MF,tag:""},{prop:"Controllen",name:"Controllen",pkg:"",typ:$Uint32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""}]);Msghdr
syscall.MFsyscall.Msghdr
syscall.NF
syscall.ON
syscall.OO LJ��LJ=$pkg.Cmsghdr=$newType(0,$kindStruct,"syscall.Cmsghdr","Cmsghdr","syscall",function(Len_,Level_,Type_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Level=Level_!==undefined?Level_:0;this.Type=Type_!==undefined?Type_:0;});QMY.methods=[{prop:"SetLen",name:"SetLen",pkg:"",typ:$funcType([$Int],[],false)}];��LJ.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint32,tag:""},{prop:"Level",name:"Level",pkg:"",typ:$Int32,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Int32,tag:""}]);Cmsghdrsyscall.Cmsghdr
syscall.MY LK�"LK=$pkg.Inet4Pktinfo=$newType(0,$kindStruct,"syscall.Inet4Pktinfo","Inet4Pktinfo","syscall",function(Ifindex_,Spec_dst_,Addr_){this.$val=this;this.Ifindex=Ifindex_!==undefined?Ifindex_:0;this.Spec_dst=Spec_dst_!==undefined?Spec_dst_:NF.zero();this.Addr=Addr_!==undefined?Addr_:NF.zero();});��LK.init([{prop:"Ifindex",name:"Ifindex",pkg:"",typ:$Uint32,tag:""},{prop:"Spec_dst",name:"Spec_dst",pkg:"",typ:NF,tag:""},{prop:"Addr",name:"Addr",pkg:"",typ:NF,tag:""}]);Inet4Pktinfosyscall.Inet4Pktinfo
syscall.NF LL��LL=$pkg.Inet6Pktinfo=$newType(0,$kindStruct,"syscall.Inet6Pktinfo","Inet6Pktinfo","syscall",function(Addr_,Ifindex_){this.$val=this;this.Addr=Addr_!==undefined?Addr_:NM.zero();this.Ifindex=Ifindex_!==undefined?Ifindex_:0;});tLL.init([{prop:"Addr",name:"Addr",pkg:"",typ:NM,tag:""},{prop:"Ifindex",name:"Ifindex",pkg:"",typ:$Uint32,tag:""}]);Inet6Pktinfosyscall.Inet6Pktinfo
syscall.NM LM��LM=$pkg.IPv6MTUInfo=$newType(0,$kindStruct,"syscall.IPv6MTUInfo","IPv6MTUInfo","syscall",function(Addr_,Mtu_){this.$val=this;this.Addr=Addr_!==undefined?Addr_:new KY.ptr();this.Mtu=Mtu_!==undefined?Mtu_:0;});lLM.init([{prop:"Addr",name:"Addr",pkg:"",typ:KY,tag:""},{prop:"Mtu",name:"Mtu",pkg:"",typ:$Uint32,tag:""}]);IPv6MTUInfosyscall.IPv6MTUInfosyscall.RawSockaddrInet6 LN��LN=$pkg.ICMPv6Filter=$newType(0,$kindStruct,"syscall.ICMPv6Filter","ICMPv6Filter","syscall",function(Filt_){this.$val=this;this.Filt=Filt_!==undefined?Filt_:OH.zero();});:LN.init([{prop:"Filt",name:"Filt",pkg:"",typ:OH,tag:""}]);ICMPv6Filtersyscall.ICMPv6Filter
syscall.OH LO��LO=$pkg.Kevent_t=$newType(0,$kindStruct,"syscall.Kevent_t","Kevent_t","syscall",function(Ident_,Filter_,Flags_,Fflags_,Data_,Udata_){this.$val=this;this.Ident=Ident_!==undefined?Ident_:new $Uint64(0,0);this.Filter=Filter_!==undefined?Filter_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Fflags=Fflags_!==undefined?Fflags_:0;this.Data=Data_!==undefined?Data_:new $Int64(0,0);this.Udata=Udata_!==undefined?Udata_:MF.nil;});�JLO.init([{prop:"Ident",name:"Ident",pkg:"",typ:$Uint64,tag:""},{prop:"Filter",name:"Filter",pkg:"",typ:$Int16,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Uint16,tag:""},{prop:"Fflags",name:"Fflags",pkg:"",typ:$Uint32,tag:""},{prop:"Data",name:"Data",pkg:"",typ:$Int64,tag:""},{prop:"Udata",name:"Udata",pkg:"",typ:MF,tag:""}]);Kevent_tsyscall.Kevent_t
syscall.MF LP��LP=$pkg.FdSet=$newType(0,$kindStruct,"syscall.FdSet","FdSet","syscall",function(Bits_){this.$val=this;this.Bits=Bits_!==undefined?Bits_:OP.zero();});:LP.init([{prop:"Bits",name:"Bits",pkg:"",typ:OP,tag:""}]);FdSetsyscall.FdSet
syscall.OP LQ�LQ=$pkg.IfMsghdr=$newType(0,$kindStruct,"syscall.IfMsghdr","IfMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Data_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();this.Data=Data_!==undefined?Data_:new LR.ptr();});��LQ.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Addrs",name:"Addrs",pkg:"",typ:$Int32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""},{prop:"Data",name:"Data",pkg:"",typ:LR,tag:""}]);IfMsghdrsyscall.IfDatasyscall.IfMsghdr
syscall.OQ LR��LR=$pkg.IfData=$newType(0,$kindStruct,"syscall.IfData","IfData","syscall",function(Type_,Typelen_,Physical_,Addrlen_,Hdrlen_,Recvquota_,Xmitquota_,Unused1_,Mtu_,Metric_,Baudrate_,Ipackets_,Ierrors_,Opackets_,Oerrors_,Collisions_,Ibytes_,Obytes_,Imcasts_,Omcasts_,Iqdrops_,Noproto_,Recvtiming_,Xmittiming_,Lastchange_,Unused2_,Hwassist_,Reserved1_,Reserved2_){this.$val=this;this.Type=Type_!==undefined?Type_:0;this.Typelen=Typelen_!==undefined?Typelen_:0;this.Physical=Physical_!==undefined?Physical_:0;this.Addrlen=Addrlen_!==undefined?Addrlen_:0;this.Hdrlen=Hdrlen_!==undefined?Hdrlen_:0;this.Recvquota=Recvquota_!==undefined?Recvquota_:0;this.Xmitquota=Xmitquota_!==undefined?Xmitquota_:0;this.Unused1=Unused1_!==undefined?Unused1_:0;this.Mtu=Mtu_!==undefined?Mtu_:0;this.Metric=Metric_!==undefined?Metric_:0;this.Baudrate=Baudrate_!==undefined?Baudrate_:0;this.Ipackets=Ipackets_!==undefined?Ipackets_:0;this.Ierrors=Ierrors_!==undefined?Ierrors_:0;this.Opackets=Opackets_!==undefined?Opackets_:0;this.Oerrors=Oerrors_!==undefined?Oerrors_:0;this.Collisions=Collisions_!==undefined?Collisions_:0;this.Ibytes=Ibytes_!==undefined?Ibytes_:0;this.Obytes=Obytes_!==undefined?Obytes_:0;this.Imcasts=Imcasts_!==undefined?Imcasts_:0;this.Omcasts=Omcasts_!==undefined?Omcasts_:0;this.Iqdrops=Iqdrops_!==undefined?Iqdrops_:0;this.Noproto=Noproto_!==undefined?Noproto_:0;this.Recvtiming=Recvtiming_!==undefined?Recvtiming_:0;this.Xmittiming=Xmittiming_!==undefined?Xmittiming_:0;this.Lastchange=Lastchange_!==undefined?Lastchange_:new KK.ptr();this.Unused2=Unused2_!==undefined?Unused2_:0;this.Hwassist=Hwassist_!==undefined?Hwassist_:0;this.Reserved1=Reserved1_!==undefined?Reserved1_:0;this.Reserved2=Reserved2_!==undefined?Reserved2_:0;});��LR.init([{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Typelen",name:"Typelen",pkg:"",typ:$Uint8,tag:""},{prop:"Physical",name:"Physical",pkg:"",typ:$Uint8,tag:""},{prop:"Addrlen",name:"Addrlen",pkg:"",typ:$Uint8,tag:""},{prop:"Hdrlen",name:"Hdrlen",pkg:"",typ:$Uint8,tag:""},{prop:"Recvquota",name:"Recvquota",pkg:"",typ:$Uint8,tag:""},{prop:"Xmitquota",name:"Xmitquota",pkg:"",typ:$Uint8,tag:""},{prop:"Unused1",name:"Unused1",pkg:"",typ:$Uint8,tag:""},{prop:"Mtu",name:"Mtu",pkg:"",typ:$Uint32,tag:""},{prop:"Metric",name:"Metric",pkg:"",typ:$Uint32,tag:""},{prop:"Baudrate",name:"Baudrate",pkg:"",typ:$Uint32,tag:""},{prop:"Ipackets",name:"Ipackets",pkg:"",typ:$Uint32,tag:""},{prop:"Ierrors",name:"Ierrors",pkg:"",typ:$Uint32,tag:""},{prop:"Opackets",name:"Opackets",pkg:"",typ:$Uint32,tag:""},{prop:"Oerrors",name:"Oerrors",pkg:"",typ:$Uint32,tag:""},{prop:"Collisions",name:"Collisions",pkg:"",typ:$Uint32,tag:""},{prop:"Ibytes",name:"Ibytes",pkg:"",typ:$Uint32,tag:""},{prop:"Obytes",name:"Obytes",pkg:"",typ:$Uint32,tag:""},{prop:"Imcasts",name:"Imcasts",pkg:"",typ:$Uint32,tag:""},{prop:"Omcasts",name:"Omcasts",pkg:"",typ:$Uint32,tag:""},{prop:"Iqdrops",name:"Iqdrops",pkg:"",typ:$Uint32,tag:""},{prop:"Noproto",name:"Noproto",pkg:"",typ:$Uint32,tag:""},{prop:"Recvtiming",name:"Recvtiming",pkg:"",typ:$Uint32,tag:""},{prop:"Xmittiming",name:"Xmittiming",pkg:"",typ:$Uint32,tag:""},{prop:"Lastchange",name:"Lastchange",pkg:"",typ:KK,tag:""},{prop:"Unused2",name:"Unused2",pkg:"",typ:$Uint32,tag:""},{prop:"Hwassist",name:"Hwassist",pkg:"",typ:$Uint32,tag:""},{prop:"Reserved1",name:"Reserved1",pkg:"",typ:$Uint32,tag:""},{prop:"Reserved2",name:"Reserved2",pkg:"",typ:$Uint32,tag:""}]);IfDatasyscall.IfDatasyscall.Timeval32 LS�LS=$pkg.IfaMsghdr=$newType(0,$kindStruct,"syscall.IfaMsghdr","IfaMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Metric_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();this.Metric=Metric_!==undefined?Metric_:0;});��LS.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Addrs",name:"Addrs",pkg:"",typ:$Int32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""},{prop:"Metric",name:"Metric",pkg:"",typ:$Int32,tag:""}]);	IfaMsghdrsyscall.IfaMsghdr
syscall.OQ LT��LT=$pkg.IfmaMsghdr=$newType(0,$kindStruct,"syscall.IfmaMsghdr","IfmaMsghdr","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();});��LT.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Addrs",name:"Addrs",pkg:"",typ:$Int32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""}]);
IfmaMsghdrsyscall.IfmaMsghdr
syscall.OQ LU�LU=$pkg.IfmaMsghdr2=$newType(0,$kindStruct,"syscall.IfmaMsghdr2","IfmaMsghdr2","syscall",function(Msglen_,Version_,Type_,Addrs_,Flags_,Index_,Pad_cgo_0_,Refcount_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Flags=Flags_!==undefined?Flags_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();this.Refcount=Refcount_!==undefined?Refcount_:0;});��LU.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Addrs",name:"Addrs",pkg:"",typ:$Int32,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""},{prop:"Refcount",name:"Refcount",pkg:"",typ:$Int32,tag:""}]);IfmaMsghdr2syscall.IfmaMsghdr2
syscall.OQ LV��LV=$pkg.RtMsghdr=$newType(0,$kindStruct,"syscall.RtMsghdr","RtMsghdr","syscall",function(Msglen_,Version_,Type_,Index_,Pad_cgo_0_,Flags_,Addrs_,Pid_,Seq_,Errno_,Use_,Inits_,Rmx_){this.$val=this;this.Msglen=Msglen_!==undefined?Msglen_:0;this.Version=Version_!==undefined?Version_:0;this.Type=Type_!==undefined?Type_:0;this.Index=Index_!==undefined?Index_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();this.Flags=Flags_!==undefined?Flags_:0;this.Addrs=Addrs_!==undefined?Addrs_:0;this.Pid=Pid_!==undefined?Pid_:0;this.Seq=Seq_!==undefined?Seq_:0;this.Errno=Errno_!==undefined?Errno_:0;this.Use=Use_!==undefined?Use_:0;this.Inits=Inits_!==undefined?Inits_:0;this.Rmx=Rmx_!==undefined?Rmx_:new LW.ptr();});��LV.init([{prop:"Msglen",name:"Msglen",pkg:"",typ:$Uint16,tag:""},{prop:"Version",name:"Version",pkg:"",typ:$Uint8,tag:""},{prop:"Type",name:"Type",pkg:"",typ:$Uint8,tag:""},{prop:"Index",name:"Index",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""},{prop:"Flags",name:"Flags",pkg:"",typ:$Int32,tag:""},{prop:"Addrs",name:"Addrs",pkg:"",typ:$Int32,tag:""},{prop:"Pid",name:"Pid",pkg:"",typ:$Int32,tag:""},{prop:"Seq",name:"Seq",pkg:"",typ:$Int32,tag:""},{prop:"Errno",name:"Errno",pkg:"",typ:$Int32,tag:""},{prop:"Use",name:"Use",pkg:"",typ:$Int32,tag:""},{prop:"Inits",name:"Inits",pkg:"",typ:$Uint32,tag:""},{prop:"Rmx",name:"Rmx",pkg:"",typ:LW,tag:""}]);RtMsghdr
syscall.OQsyscall.RtMetricssyscall.RtMsghdr LW��LW=$pkg.RtMetrics=$newType(0,$kindStruct,"syscall.RtMetrics","RtMetrics","syscall",function(Locks_,Mtu_,Hopcount_,Expire_,Recvpipe_,Sendpipe_,Ssthresh_,Rtt_,Rttvar_,Pksent_,Filler_){this.$val=this;this.Locks=Locks_!==undefined?Locks_:0;this.Mtu=Mtu_!==undefined?Mtu_:0;this.Hopcount=Hopcount_!==undefined?Hopcount_:0;this.Expire=Expire_!==undefined?Expire_:0;this.Recvpipe=Recvpipe_!==undefined?Recvpipe_:0;this.Sendpipe=Sendpipe_!==undefined?Sendpipe_:0;this.Ssthresh=Ssthresh_!==undefined?Ssthresh_:0;this.Rtt=Rtt_!==undefined?Rtt_:0;this.Rttvar=Rttvar_!==undefined?Rttvar_:0;this.Pksent=Pksent_!==undefined?Pksent_:0;this.Filler=Filler_!==undefined?Filler_:OR.zero();});�oLW.init([{prop:"Locks",name:"Locks",pkg:"",typ:$Uint32,tag:""},{prop:"Mtu",name:"Mtu",pkg:"",typ:$Uint32,tag:""},{prop:"Hopcount",name:"Hopcount",pkg:"",typ:$Uint32,tag:""},{prop:"Expire",name:"Expire",pkg:"",typ:$Int32,tag:""},{prop:"Recvpipe",name:"Recvpipe",pkg:"",typ:$Uint32,tag:""},{prop:"Sendpipe",name:"Sendpipe",pkg:"",typ:$Uint32,tag:""},{prop:"Ssthresh",name:"Ssthresh",pkg:"",typ:$Uint32,tag:""},{prop:"Rtt",name:"Rtt",pkg:"",typ:$Uint32,tag:""},{prop:"Rttvar",name:"Rttvar",pkg:"",typ:$Uint32,tag:""},{prop:"Pksent",name:"Pksent",pkg:"",typ:$Uint32,tag:""},{prop:"Filler",name:"Filler",pkg:"",typ:OR,tag:""}]);	RtMetrics
syscall.ORsyscall.RtMetrics LX��LX=$pkg.BpfVersion=$newType(0,$kindStruct,"syscall.BpfVersion","BpfVersion","syscall",function(Major_,Minor_){this.$val=this;this.Major=Major_!==undefined?Major_:0;this.Minor=Minor_!==undefined?Minor_:0;});wLX.init([{prop:"Major",name:"Major",pkg:"",typ:$Uint16,tag:""},{prop:"Minor",name:"Minor",pkg:"",typ:$Uint16,tag:""}]);
BpfVersionsyscall.BpfVersion LY��LY=$pkg.BpfStat=$newType(0,$kindStruct,"syscall.BpfStat","BpfStat","syscall",function(Recv_,Drop_){this.$val=this;this.Recv=Recv_!==undefined?Recv_:0;this.Drop=Drop_!==undefined?Drop_:0;});sLY.init([{prop:"Recv",name:"Recv",pkg:"",typ:$Uint32,tag:""},{prop:"Drop",name:"Drop",pkg:"",typ:$Uint32,tag:""}]);BpfStatsyscall.BpfStat LZ�LZ=$pkg.BpfProgram=$newType(0,$kindStruct,"syscall.BpfProgram","BpfProgram","syscall",function(Len_,Pad_cgo_0_,Insns_){this.$val=this;this.Len=Len_!==undefined?Len_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();this.Insns=Insns_!==undefined?Insns_:OS.nil;});��LZ.init([{prop:"Len",name:"Len",pkg:"",typ:$Uint32,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""},{prop:"Insns",name:"Insns",pkg:"",typ:OS,tag:""}]);
BpfProgramsyscall.BpfInsnsyscall.BpfProgram
syscall.NF
syscall.OS MA��MA=$pkg.BpfInsn=$newType(0,$kindStruct,"syscall.BpfInsn","BpfInsn","syscall",function(Code_,Jt_,Jf_,K_){this.$val=this;this.Code=Code_!==undefined?Code_:0;this.Jt=Jt_!==undefined?Jt_:0;this.Jf=Jf_!==undefined?Jf_:0;this.K=K_!==undefined?K_:0;});��MA.init([{prop:"Code",name:"Code",pkg:"",typ:$Uint16,tag:""},{prop:"Jt",name:"Jt",pkg:"",typ:$Uint8,tag:""},{prop:"Jf",name:"Jf",pkg:"",typ:$Uint8,tag:""},{prop:"K",name:"K",pkg:"",typ:$Uint32,tag:""}]);BpfInsnsyscall.BpfInsn MB��MB=$pkg.BpfHdr=$newType(0,$kindStruct,"syscall.BpfHdr","BpfHdr","syscall",function(Tstamp_,Caplen_,Datalen_,Hdrlen_,Pad_cgo_0_){this.$val=this;this.Tstamp=Tstamp_!==undefined?Tstamp_:new KK.ptr();this.Caplen=Caplen_!==undefined?Caplen_:0;this.Datalen=Datalen_!==undefined?Datalen_:0;this.Hdrlen=Hdrlen_!==undefined?Hdrlen_:0;this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:OQ.zero();});�!MB.init([{prop:"Tstamp",name:"Tstamp",pkg:"",typ:KK,tag:""},{prop:"Caplen",name:"Caplen",pkg:"",typ:$Uint32,tag:""},{prop:"Datalen",name:"Datalen",pkg:"",typ:$Uint32,tag:""},{prop:"Hdrlen",name:"Hdrlen",pkg:"",typ:$Uint16,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:OQ,tag:""}]);BpfHdrsyscall.BpfHdr
syscall.OQsyscall.Timeval32 MC�OMC=$pkg.Termios=$newType(0,$kindStruct,"syscall.Termios","Termios","syscall",function(Iflag_,Oflag_,Cflag_,Lflag_,Cc_,Pad_cgo_0_,Ispeed_,Ospeed_){this.$val=this;this.Iflag=Iflag_!==undefined?Iflag_:new $Uint64(0,0);this.Oflag=Oflag_!==undefined?Oflag_:new $Uint64(0,0);this.Cflag=Cflag_!==undefined?Cflag_:new $Uint64(0,0);this.Lflag=Lflag_!==undefined?Lflag_:new $Uint64(0,0);this.Cc=Cc_!==undefined?Cc_:OT.zero();this.Pad_cgo_0=Pad_cgo_0_!==undefined?Pad_cgo_0_:NF.zero();this.Ispeed=Ispeed_!==undefined?Ispeed_:new $Uint64(0,0);this.Ospeed=Ospeed_!==undefined?Ospeed_:new $Uint64(0,0);});��MC.init([{prop:"Iflag",name:"Iflag",pkg:"",typ:$Uint64,tag:""},{prop:"Oflag",name:"Oflag",pkg:"",typ:$Uint64,tag:""},{prop:"Cflag",name:"Cflag",pkg:"",typ:$Uint64,tag:""},{prop:"Lflag",name:"Lflag",pkg:"",typ:$Uint64,tag:""},{prop:"Cc",name:"Cc",pkg:"",typ:OT,tag:""},{prop:"Pad_cgo_0",name:"Pad_cgo_0",pkg:"",typ:NF,tag:""},{prop:"Ispeed",name:"Ispeed",pkg:"",typ:$Uint64,tag:""},{prop:"Ospeed",name:"Ospeed",pkg:"",typ:$Uint64,tag:""}]);Termios
syscall.NF
syscall.OTsyscall.Termios MDMD=$sliceType($Uint8);MD MEME=$sliceType($String);ME MFMF=$ptrType($Uint8);MF MGMG=$ptrType($Int);MG MHMH=$ptrType(KJ);MHsyscall.Timeval MIMI=$ptrType(LY);MIsyscall.BpfStat MJMJ=$sliceType($Int);MJ MKMK=$ptrType(BJ);MKsyscall.Credential MLML=$ptrType(ER);MLsyscall.Errno MMMM=$sliceType(MF);MM
syscall.MF MNMN=$arrayType($Int,2);MN MOMO=$ptrType(BK);MOsyscall.ProcAttr MPMP=$ptrType(BA);MPsyscall.SysProcAttr MQMQ=$ptrType(CZ);MQsyscall.WaitStatus MRMR=$ptrType(KL);MRsyscall.Rusage MSMS=$sliceType(KF);MSsyscall._C_int MTMT=$ptrType($Uintptr);MT MUMU=$arrayType(EV,4);MUsyscall.Sockaddr MVMV=$sliceType(EV);MVsyscall.Sockaddr MWMW=$sliceType(BZ);MWsyscall.RoutingMessage MXMX=$sliceType(CL);MXsyscall.SocketControlMessage MYMY=$ptrType(LJ);MYsyscall.Cmsghdr MZMZ=$arrayType($Uint8,32);MZ NANA=$ptrType(KN);NAsyscall._Gid_t NBNB=$sliceType(KN);NBsyscall._Gid_t NCNC=$ptrType(KF);NCsyscall._C_int NDND=$ptrType($Uint16);ND NENE=$ptrType(LD);NEsyscall._Socklen NFNF=$arrayType($Uint8,4);NF NGNG=$arrayType(KF,14);NGsyscall._C_int NHNH=$sliceType(MD);NH
syscall.MD NINI=$ptrType($Uint64);NI NJ��NJ=$structType([{prop:"addr",name:"addr",pkg:"syscall",typ:$Uintptr,tag:""},{prop:"len",name:"len",pkg:"syscall",typ:$Int,tag:""},{prop:"cap",name:"cap",pkg:"syscall",typ:$Int,tag:""}]);NJ NKNK=$ptrType($Int32);NK NLNL=$arrayType($Int32,2);NL NMNM=$arrayType($Uint8,16);NM NNNN=$sliceType($Uint32);NN NONO=$sliceType($Uintptr);NO NPNP=$ptrType(CA);NPsyscall.anyMessage NQNQ=$ptrType(CB);NQsyscall.RouteMessage NRNR=$ptrType(CC);NRsyscall.InterfaceMessage NSNS=$ptrType(CD);NSsyscall.InterfaceAddrMessage NTNT=$ptrType(CG);NT%syscall.InterfaceMulticastAddrMessage NUNU=$arrayType($Int8,12);NU NVNV=$ptrType(DX);NVsyscall.SockaddrDatalink NWNW=$ptrType(EQ);NWsyscall.mmapper NXNX=$mapType(MF,MD);NX
syscall.MD
syscall.MF NYPNY=$funcType([$Uintptr,$Uintptr,$Int,$Int,$Int,$Int64],[$Uintptr,$error],false);NY NZ1NZ=$funcType([$Uintptr,$Uintptr],[$error],false);NZ OAOA=$ptrType(EW);OAsyscall.SockaddrInet4 OBOB=$ptrType(EX);OBsyscall.SockaddrInet6 OCOC=$ptrType(EY);OCsyscall.SockaddrUnix ODOD=$ptrType(KI);ODsyscall.Timespec OEOE=$arrayType($Int64,2);OE OFOF=$arrayType($Int8,16);OF OGOG=$arrayType($Int8,1024);OG OHOH=$arrayType($Uint32,8);OH OIOI=$arrayType($Uint8,3);OI OJOJ=$arrayType($Int8,8);OJ OKOK=$arrayType($Int8,104);OK OLOL=$arrayType($Int8,14);OL OMOM=$arrayType($Int8,92);OM ONON=$ptrType(LF);ONsyscall.Iovec OOOO=$ptrType(LI);OOsyscall.Msghdr OPOP=$arrayType($Int32,32);OP OQOQ=$arrayType($Uint8,2);OQ OROR=$arrayType($Uint32,4);OR OSOS=$ptrType(MA);OSsyscall.BpfInsn OTOT=$arrayType($Uint8,20);OT FwarningPrinted G	G=MD.nil;
lineBuffer
syscall.MDsyscall.lineBuffer NN=null;syscallModulesyscall.syscallModule OalreadyTriedToLoad PminusOne APAP=new C.Once.ptr();envOnce	sync.Oncesyscall.envOnce AQAQ=new C.RWMutex.ptr();envLocksync.RWMutexsyscall.envLock AR	AR=false;envsyscall.env ASenvs "$pkg.ForkLock=new C.RWMutex.ptr();ForkLocksync.RWMutexsyscall.ForkLock BLBL=new BK.ptr();zeroProcAttrsyscall.ProcAttrsyscall.zeroProcAttr BMBM=new BA.ptr();zeroSysProcAttrsyscall.SysProcAttrsyscall.zeroSysProcAttr BRfcntl64Syscall CVCV=0;_zerosyscall._zero DTmapper Stdin Stdout Stderr $pkg.SocketDisableIPv6=false;SocketDisableIPv6syscall.SocketDisableIPv6 FRFR=new $Int64(0,0);ioSyncsyscall.ioSync FSerrors FTsignals     F=false;warningPrintedsyscall.warningPrinted     O=false;alreadyTriedToLoadsyscall.alreadyTriedToLoad 
    P=-1;minusOnesyscall.minusOne     AS=L();syscall.envssyscall.runtime_envs     $pkg.Stdin=0;Stdinsyscall.Stdin     $pkg.Stdout=1;Stdoutsyscall.Stdout     $pkg.Stderr=2;Stderrsyscall.Stderr �
`    FS=$toNativeArray($kindString,["","operation not permitted","no such file or directory","no such process","interrupted system call","input/output error","device not configured","argument list too long","exec format error","bad file descriptor","no child processes","resource deadlock avoided","cannot allocate memory","permission denied","bad address","block device required","resource busy","file exists","cross-device link","operation not supported by device","not a directory","is a directory","invalid argument","too many open files in system","too many open files","inappropriate ioctl for device","text file busy","file too large","no space left on device","illegal seek","read-only file system","too many links","broken pipe","numerical argument out of domain","result too large","resource temporarily unavailable","operation now in progress","operation already in progress","socket operation on non-socket","destination address required","message too long","protocol wrong type for socket","protocol not available","protocol not supported","socket type not supported","operation not supported","protocol family not supported","address family not supported by protocol family","address already in use","can't assign requested address","network is down","network is unreachable","network dropped connection on reset","software caused connection abort","connection reset by peer","no buffer space available","socket is already connected","socket is not connected","can't send after socket shutdown","too many references: can't splice","operation timed out","connection refused","too many levels of symbolic links","file name too long","host is down","no route to host","directory not empty","too many processes","too many users","disc quota exceeded","stale NFS file handle","too many levels of remote in path","RPC struct is bad","RPC version wrong","RPC prog. not avail","program version wrong","bad procedure for program","no locks available","function not implemented","inappropriate file type or format","authentication error","need authenticator","device power is off","device error","value too large to be stored in data type","bad executable (or shared library)","bad CPU type in executable","shared library version mismatch","malformed Mach-o file","operation canceled","identifier removed","no message of desired type","illegal byte sequence","attribute not found","bad message","EMULTIHOP (Reserved)","no message available on STREAM","ENOLINK (Reserved)","no STREAM resources","not a STREAM","protocol error","STREAM ioctl timeout","operation not supported on socket","policy not found","state not recoverable","previous owner died"]);errorssyscall.errors �T    FT=$toNativeArray($kindString,["","hangup","interrupt","quit","illegal instruction","trace/BPT trap","abort trap","EMT trap","floating point exception","killed","bus error","segmentation fault","bad system call","broken pipe","alarm clock","terminated","urgent I/O condition","suspended (signal)","suspended","continued","child exited","stopped (tty input)","stopped (tty output)","I/O possible","cputime limit exceeded","filesize limit exceeded","virtual timer expired","profiling timer expired","window size changes","information request","user defined signal 1","user defined signal 2"]);signalssyscall.signals     BR=92;fcntl64Syscallsyscall.fcntl64Syscall 7    DT=new EQ.ptr(new C.Mutex.ptr(),new $Map(),JZ,KA);
sync.Mutexsyscall.mappersyscall.mmapsyscall.mmappersyscall.munmap syscall.initH��H=function(){var $ptr={};   �$flushConsole=(function(){var $ptr={};   �    if(!((G.$length===0))){   �$global.console.log($externalize($bytesToString(G),$String));  9G=MD.nil;    }    });    };	    H();
syscall.MDsyscall.initsyscall.lineBuffer syscall.printWarningI��I=function(){var $ptr={};  m    if(!F){  �console.log("warning: system calls not available, see https://github.com/gopherjs/gopherjs/blob/master/doc/syscalls.md");    }  �F=true;    };printWarningsyscall.printWarningsyscall.warningPrinted syscall.printToConsoleJ�_J=function(i){var $ptr={},i,j,k;  7j=$global.goPrintToConsole;  n    if(!(j===undefined)){  �j(i);  �return;    }  �G=$appendSlice(G,i);  �while(true){  k=A.IndexByte(G,10);  *    if(k===-1){  :break;    }  F$global.console.log($externalize($bytesToString($subslice(G,0,k)),$String));  �G=$subslice(G,(k+1>>0));    }    };printToConsolebytes.IndexBytesyscall.lineBuffersyscall.printToConsole syscall.useK#K=function(i){var $ptr={},i;    };usesyscall.use syscall.runtime_envsL��L=function(){var $ptr={},i,j,k,l,m,n;  �i=$global.process;  �    if(i===undefined){  �return ME.nil;    }  �j=i.env;  k=$global.Object.keys(j);  Fl=$makeSlice(ME,$parseInt(k.length));  p  tm=0;while(true){if(!(m<$parseInt(k.length))){break;}  �n=$internalize(k[m],$String);  �((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]=n+"="+$internalize(j[$externalize(n,$String)],$String));      �  �m=m+(1)>>0;    }  �return l;    };runtime_envs
syscall.MEsyscall.runtime_envs syscall.setenv_cM��M=function(i,j){var $ptr={},i,j,k;  k=$global.process;  A    if(!(k===undefined)){  `k.env[$externalize(i,$String)]=$externalize(j,$String);    }    };setenv_csyscall.setenv_c syscall.syscallQ��Q=function(i){var $deferred=[],$err=null,$ptr={},i,j;try{$deferFrames.push($deferred);  �$deferred.push([(function(){var $ptr={};  $recover();    }),[]]);  8    if(N===null){  T    if(O){  oreturn null;    }  �O=true;  �j=$global.require;  �    if(j===undefined){  �$panic(new $String(""));    }  �N=j($externalize("syscall",$String));    }   return N[$externalize(i,$String)];    }catch(err){$err=err;return null;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};syscallsyscall.alreadyTriedToLoadsyscall.syscallsyscall.syscallModule syscall.SyscallR�4R=$pkg.Syscall=function(i,j,k,l){var $ptr={},aa,ab,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;m=0;n=0;o=0;  �  �p=Q("Syscall");    if(!(p===null)){  �q=p(i,j,k,l);  �    r=(($parseInt(q[0])>>0)>>>0);s=(($parseInt(q[1])>>0)>>>0);t=(($parseInt(q[2])>>0)>>>0);m=r;n=s;o=t;return[m,n,o];    }  	,    if((i===4)&&((j===1)||(j===2))){  	]u=k;  	~v=$makeSlice(MD,$parseInt(u.length));  	�v.$array=u;  	�J(v);  	�    w=($parseInt(u.length)>>>0);x=0;y=0;m=w;n=x;o=y;return[m,n,o];    }  
I();  
'    z=(P>>>0);aa=0;ab=13;m=z;n=aa;o=ab;return[m,n,o];    };Syscall
syscall.MDsyscall.Syscallsyscall.minusOnesyscall.printToConsolesyscall.printWarningsyscall.syscall syscall.Syscall6S��S=$pkg.Syscall6=function(i,j,k,l,m,n,o){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;p=0;q=0;r=0;  
�  
�s=Q("Syscall6");    if(!(s===null)){  
�t=s(i,j,k,l,m,n,o);  
�    u=(($parseInt(t[0])>>0)>>>0);v=(($parseInt(t[1])>>0)>>>0);w=(($parseInt(t[2])>>0)>>>0);p=u;q=v;r=w;return[p,q,r];    }  R    if(!((i===202))){  �I();    }  �    x=(P>>>0);y=0;z=13;p=x;q=y;r=z;return[p,q,r];    };Syscall6syscall.Syscall6syscall.minusOnesyscall.printWarningsyscall.syscall syscall.RawSyscallT�bT=$pkg.RawSyscall=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;m=0;n=0;o=0;  #  &p=Q("Syscall");    if(!(p===null)){  Lq=p(i,j,k,l);  n    r=(($parseInt(q[0])>>0)>>>0);s=(($parseInt(q[1])>>0)>>>0);t=(($parseInt(q[2])>>0)>>>0);m=r;n=s;o=t;return[m,n,o];    }  �I();  �    u=(P>>>0);v=0;w=13;m=u;n=v;o=w;return[m,n,o];    };
RawSyscallsyscall.RawSyscallsyscall.minusOnesyscall.printWarningsyscall.syscall syscall.RawSyscall6U�vU=$pkg.RawSyscall6=function(i,j,k,l,m,n,o){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;p=0;q=0;r=0;  T  Ws=Q("Syscall6");    if(!(s===null)){  ~t=s(i,j,k,l,m,n,o);  �    u=(($parseInt(t[0])>>0)>>>0);v=(($parseInt(t[1])>>0)>>>0);w=(($parseInt(t[2])>>0)>>>0);p=u;q=v;r=w;return[p,q,r];    }  I();      x=(P>>>0);y=0;z=13;p=x;q=y;r=z;return[p,q,r];    };RawSyscall6syscall.RawSyscall6syscall.minusOnesyscall.printWarningsyscall.syscall syscall.BytePtrFromStringV��V=$pkg.BytePtrFromString=function(i){var $ptr={},i,j,k,l,m,n;  oj=new($global.Uint8Array)(i.length+1>>0);  �k=new MD($stringToBytes(i));l=0;while(true){if(!(l<k.$length)){break;}m=l;n=((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]);  �    if(n===0){  �return[MF.nil,new ER(22)];    }  �j[m]=n;    l++;}  j[i.length]=0;  !return[j,$ifaceNil];    };BytePtrFromStringsyscall.BytePtrFromStringsyscall.Errno
syscall.MD
syscall.MF syscall.BpfStmtWeW=$pkg.BpfStmt=function(i,j){var $ptr={},i,j;  �return new MA.ptr((i<<16>>>16),0,0,(j>>>0));    };BpfStmtsyscall.BpfInsnsyscall.BpfStmt syscall.BpfJumpX��X=$pkg.BpfJump=function(i,j,k,l){var $ptr={},i,j,k,l;  return new MA.ptr((i<<16>>>16),(k<<24>>>24),(l<<24>>>24),(j>>>0));    };BpfJumpsyscall.BpfInsnsyscall.BpfJump syscall.BpfBuflenY�Y=$pkg.BpfBuflen=function(i){var $ptr={},i,j,k,l;  �  �j=0;  �k=R(54,(i>>>0),1074020966,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  �    if(!((l===0))){  �return[0,new ER(l)];    }  return[j,$ifaceNil];    };	BpfBuflensyscall.BpfBuflensyscall.Errno
syscall.MGsyscall.Syscall syscall.SetBpfBuflenZ��Z=$pkg.SetBpfBuflen=function(i,j){var $ptr={},i,j,k,l;  Jk=R(54,(i>>>0),3221504614,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  �    if(!((l===0))){  �return[0,new ER(l)];    }  �return[j,$ifaceNil];    };SetBpfBuflensyscall.Errno
syscall.MGsyscall.SetBpfBuflensyscall.Syscall syscall.BpfDatalinkAA�AA=$pkg.BpfDatalink=function(i){var $ptr={},i,j,k,l;    j=0;  k=R(54,(i>>>0),1074020970,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  c    if(!((l===0))){  sreturn[0,new ER(l)];    }  �return[j,$ifaceNil];    };BpfDatalinksyscall.BpfDatalinksyscall.Errno
syscall.MGsyscall.Syscall syscall.SetBpfDatalinkAB��AB=$pkg.SetBpfDatalink=function(i,j){var $ptr={},i,j,k,l;  �k=R(54,(i>>>0),2147762808,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  !    if(!((l===0))){  1return[0,new ER(l)];    }  Jreturn[j,$ifaceNil];    };SetBpfDatalinksyscall.Errno
syscall.MGsyscall.SetBpfDatalinksyscall.Syscall syscall.SetBpfPromiscAC��AC=$pkg.SetBpfPromisc=function(i,j){var $ptr={},i,j,k,l;  �k=R(54,(i>>>0),536887913,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  �    if(!((l===0))){  �return new ER(l);    }   return $ifaceNil;    };SetBpfPromiscsyscall.Errno
syscall.MGsyscall.SetBpfPromiscsyscall.Syscall syscall.FlushBpfAD��AD=$pkg.FlushBpf=function(i){var $ptr={},i,j,k;  -j=R(54,(i>>>0),536887912,0);k=j[2];  i    if(!((k===0))){  yreturn new ER(k);    }  �return $ifaceNil;    };FlushBpfsyscall.Errnosyscall.FlushBpfsyscall.Syscall syscall.BpfInterfaceAF��AF=$pkg.BpfInterface=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;    k=$clone(new AE.ptr(),AE);  !m=new Uint8Array(18);l=R(54,(i>>>0),1075855979,m);p=l[2];n=k,o=new DataView(m.buffer,m.byteOffset),n.name=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+0,m.buffer.byteLength)),n.value=o.getInt16(16,true);  x    if(!((p===0))){  �return["",new ER(p)];    }  �return[j,$ifaceNil];    };BpfInterfacesyscall.BpfInterfacesyscall.Errnosyscall.Syscallsyscall.ivalue syscall.SetBpfInterfaceAG��AG=$pkg.SetBpfInterface=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;  �  �k=$clone(new AE.ptr(),AE);  �$copySlice(new MD(k.name),new MD($stringToBytes(j)));  m=new Uint8Array(18);l=R(54,(i>>>0),2149597804,m);p=l[2];n=k,o=new DataView(m.buffer,m.byteOffset),n.name=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+0,m.buffer.byteLength)),n.value=o.getInt16(16,true);  o    if(!((p===0))){  return new ER(p);    }  �return $ifaceNil;    };SetBpfInterfacesyscall.Errno
syscall.MDsyscall.SetBpfInterfacesyscall.Syscallsyscall.ivalue syscall.BpfTimeoutAH��AH=$pkg.BpfTimeout=function(i){var $ptr={},i,j,k,l,m,n,o;  �  �j=$clone(new KJ.ptr(),KJ);  �l=new Uint8Array(16);k=R(54,(i>>>0),1074807406,l);o=k[2];m=j,n=new DataView(l.buffer,l.byteOffset),m.Sec=new $Int64(n.getUint32(4,true),n.getUint32(0,true)),m.Usec=n.getInt32(8,true),m.Pad_cgo_0=new($nativeArray($kindUint8))(l.buffer,$min(l.byteOffset+12,l.buffer.byteLength));  ;    if(!((o===0))){  Kreturn[MH.nil,new ER(o)];    }  freturn[j,$ifaceNil];    };
BpfTimeoutsyscall.BpfTimeoutsyscall.Errno
syscall.MHsyscall.Syscallsyscall.Timeval syscall.SetBpfTimeoutAI��AI=$pkg.SetBpfTimeout=function(i,j){var $ptr={},i,j,k,l,m,n,o;  �l=new Uint8Array(16);k=R(54,(i>>>0),2148549229,l);o=k[2];m=j,n=new DataView(l.buffer,l.byteOffset),m.Sec=new $Int64(n.getUint32(4,true),n.getUint32(0,true)),m.Usec=n.getInt32(8,true),m.Pad_cgo_0=new($nativeArray($kindUint8))(l.buffer,$min(l.byteOffset+12,l.buffer.byteLength));      if(!((o===0))){  return new ER(o);    }  *return $ifaceNil;    };SetBpfTimeoutsyscall.Errnosyscall.SetBpfTimeoutsyscall.Syscall syscall.BpfStatsAJ�UAJ=$pkg.BpfStats=function(i){var $ptr={},i,j,k,l,m,n,o;  c  gj=$clone(new LY.ptr(),LY);  rl=new Uint8Array(8);k=R(54,(i>>>0),1074283119,l);o=k[2];m=j,n=new DataView(l.buffer,l.byteOffset),m.Recv=n.getUint32(0,true),m.Drop=n.getUint32(4,true);  �    if(!((o===0))){  �return[MI.nil,new ER(o)];    }  �return[j,$ifaceNil];    };BpfStatssyscall.BpfStatsyscall.BpfStatssyscall.Errno
syscall.MIsyscall.Syscall syscall.SetBpfImmediateAK��AK=$pkg.SetBpfImmediate=function(i,j){var $ptr={},i,j,k,l;  /k=R(54,(i>>>0),2147762800,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  �    if(!((l===0))){  �return new ER(l);    }  �return $ifaceNil;    };SetBpfImmediatesyscall.Errno
syscall.MGsyscall.SetBpfImmediatesyscall.Syscall syscall.SetBpfAL�kAL=$pkg.SetBpf=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;  �  �k=$clone(new LZ.ptr(),LZ);  �k.Len=(j.$length>>>0);  k.Insns=(l=$sliceToArray(j),m=new MA.ptr(),n=new DataView(l.buffer,l.byteOffset),m.Code=n.getUint16(0,true),m.Jt=n.getUint8(2,true),m.Jf=n.getUint8(3,true),m.K=n.getUint32(4,true),m);  >p=new Uint8Array(12);o=R(54,(i>>>0),2148549223,p);s=o[2];q=k,r=new DataView(p.buffer,p.byteOffset),q.Len=r.getUint32(0,true),q.Pad_cgo_0=new($nativeArray($kindUint8))(p.buffer,$min(p.byteOffset+4,p.buffer.byteLength));  �    if(!((s===0))){  �return new ER(s);    }  �return $ifaceNil;    };SetBpfsyscall.BpfInsnsyscall.BpfProgramsyscall.Errnosyscall.SetBpfsyscall.Syscall syscall.CheckBpfVersionAM��AM=$pkg.CheckBpfVersion=function(i){var $ptr={},i,j,k,l,m,n,o;  �  �j=$clone(new LX.ptr(),LX);  �l=new Uint8Array(4);k=R(54,(i>>>0),1074020977,l);o=k[2];m=j,n=new DataView(l.buffer,l.byteOffset),m.Major=n.getUint16(0,true),m.Minor=n.getUint16(2,true);  W    if(!((o===0))){  greturn new ER(o);    }  }    if(!((j.Major===1))||!((j.Minor===1))){  �return new ER(22);    }  �return $ifaceNil;    };CheckBpfVersionsyscall.BpfVersionsyscall.CheckBpfVersionsyscall.Errnosyscall.Syscall syscall.BpfHeadercmplAN�AN=$pkg.BpfHeadercmpl=function(i){var $ptr={},i,j,k,l;    j=0;  k=R(54,(i>>>0),1074020980,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  q    if(!((l===0))){  �return[0,new ER(l)];    }  �return[j,$ifaceNil];    };BpfHeadercmplsyscall.BpfHeadercmplsyscall.Errno
syscall.MGsyscall.Syscall syscall.SetBpfHeadercmplAO��AO=$pkg.SetBpfHeadercmpl=function(i,j){var $ptr={},i,j,k,l;  �k=R(54,(i>>>0),2147762805,($ptr.j||($ptr.j=new MG(function(){return j;},function($v){j=$v;}))));l=k[2];  /    if(!((l===0))){  ?return new ER(l);    }  Ureturn $ifaceNil;    };SetBpfHeadercmplsyscall.Errno
syscall.MGsyscall.SetBpfHeadercmplsyscall.Syscall syscall.unsetenv_cATNAT=function(){$panic("Native function not implemented: syscall.unsetenv_c");};
unsetenv_csyscall.unsetenv_c syscall.copyenvAU��AU=function(){var $ptr={},i,j,k,l,m,n,o,p,q,r;  "AR=new $Map();  "8i=AS;j=0;while(true){if(!(j<i.$length)){break;}k=j;l=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  "S  "Wm=0;while(true){if(!(m<l.length)){break;}  "t    if(l.charCodeAt(m)===61){  "�n=l.substring(0,m);  "�  "�o=(p=AR[n],p!==undefined?[p.v,true]:[0,false]);q=o[1];    if(!q){  "�r=n;(AR||$throwRuntimeError("assignment to entry in nil map"))[r]={k:r,v:k};    }else{  #�((k<0||k>=AS.$length)?$throwRuntimeError("index out of range"):AS.$array[AS.$offset+k]="");    }  #�break;    }      "k  "km=m+(1)>>0;    }    j++;}    };copyenvsyscall.copyenvsyscall.envsyscall.envs syscall.UnsetenvAV�AV=$pkg.Unsetenv=function(i){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l,m;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  $$r=AP.Do(AU);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  $$r=AQ.Lock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  $+$deferred.push([$methodVal(AQ,"Unlock"),[]]);  $D  $Gj=(k=AR[i],k!==undefined?[k.v,true]:[0,false]);l=j[0];m=j[1];    if(m){  $a((l<0||l>=AS.$length)?$throwRuntimeError("index out of range"):AS.$array[AS.$offset+l]="");  $pdelete AR[i];    }  $�AT(i);  $�return $ifaceNil;    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Unsetenvsyscall.Unsetenvsyscall.copyenvsyscall.envsyscall.envLocksyscall.envOncesyscall.envssyscall.unsetenv_c syscall.GetenvAW�]AW=$pkg.Getenv=function(i){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;j="";k=false;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  $�$r=AP.Do(AU);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  $�    if(i.length===0){  %    l="";m=false;j=l;k=m;return[j,k];    }  %$r=AQ.RLock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  %+$deferred.push([$methodVal(AQ,"RUnlock"),[]]);  %En=(o=AR[i],o!==undefined?[o.v,true]:[0,false]);p=n[0];q=n[1];  %X    if(!q){  %c    r="";s=false;j=r;k=s;return[j,k];    }  %xt=((p<0||p>=AS.$length)?$throwRuntimeError("index out of range"):AS.$array[AS.$offset+p]);  %�  %�u=0;while(true){if(!(u<t.length)){break;}  %�    if(t.charCodeAt(u)===61){  %�    v=t.substring((u+1>>0));w=true;j=v;k=w;return[j,k];    }      %�  %�u=u+(1)>>0;    }  %�    x="";y=false;j=x;k=y;return[j,k];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[j,k];}};$f.$blocking=true;return $f;};Getenvsyscall.Getenvsyscall.copyenvsyscall.envsyscall.envLocksyscall.envOncesyscall.envs syscall.SetenvAX�AX=$pkg.Setenv=function(i,j){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p,q,r;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  &$r=AP.Do(AU);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  &(    if(i.length===0){  &=return new ER(22);    }  &O  &Sk=0;while(true){if(!(k<i.length)){break;}  &q    if((i.charCodeAt(k)===61)||(i.charCodeAt(k)===0)){  &�return new ER(22);    }      &i  &ik=k+(1)>>0;    }  &�  &�l=0;while(true){if(!(l<j.length)){break;}  &�    if(j.charCodeAt(l)===0){  &�return new ER(22);    }      &�  &�l=l+(1)>>0;    }  &�$r=AQ.Lock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  '$deferred.push([$methodVal(AQ,"Unlock"),[]]);  '&m=(n=AR[i],n!==undefined?[n.v,true]:[0,false]);o=m[0];p=m[1];  '9q=i+"="+j;  'R    if(p){  '\((o<0||o>=AS.$length)?$throwRuntimeError("index out of range"):AS.$array[AS.$offset+o]=q);    }else{  'uo=AS.$length;  '�AS=$append(AS,q);    }  '�r=i;(AR||$throwRuntimeError("assignment to entry in nil map"))[r]={k:r,v:o};  '�M(i,j);  '�return $ifaceNil;    case-1:}return;}}catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Setenvsyscall.Errnosyscall.Setenvsyscall.copyenvsyscall.envsyscall.envLocksyscall.envOncesyscall.envssyscall.setenv_c syscall.ClearenvAY��AY=$pkg.Clearenv=function(){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l,m;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  '�$r=AP.Do(AU);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  ( $r=AQ.Lock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  (0$deferred.push([$methodVal(AQ,"Unlock"),[]]);  (Ii=AR;j=0;k=$keys(i);while(true){if(!(j<k.length)){break;}l=i[k[j]];        if(l===undefined){    j++;continue;    }m=l.k;  (`AT(m);    j++;}  (rAR=new $Map();  (�AS=new ME([]);    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Clearenvsyscall.Clearenv
syscall.MEsyscall.copyenvsyscall.envsyscall.envLocksyscall.envOncesyscall.envssyscall.unsetenv_c syscall.EnvironAZ�AZ=$pkg.Environ=function(){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  (�$r=AP.Do(AU);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  (�$r=AQ.RLock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();}  (�$deferred.push([$methodVal(AQ,"RUnlock"),[]]);  (�i=$makeSlice(ME,0,AS.$length);  ) j=AS;k=0;while(true){if(!(k<j.$length)){break;}l=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  )=    if(!(l==="")){  )Oi=$append(i,l);    }    k++;}  )jreturn i;    case-1:}return;}}catch(err){$err=err;return ME.nil;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};Environsyscall.Environ
syscall.MEsyscall.copyenvsyscall.envLocksyscall.envOncesyscall.envs syscall.runtime_BeforeForkBBVBB=function(){$panic("Native function not implemented: syscall.runtime_BeforeFork");};runtime_BeforeForksyscall.runtime_BeforeFork syscall.runtime_AfterForkBCUBC=function(){$panic("Native function not implemented: syscall.runtime_AfterFork");};runtime_AfterForksyscall.runtime_AfterFork syscall.forkAndExecInChildBD��BD=function(i,j,k,l,m,n,o,p){var $ptr={},$s=0,$this=this,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;q=0;r=0;s:while(true){switch($s){case 0:  /z  /�s=0;t=0;u=s;v=t;  /�w=0;  /�x=0;  /�y=0;  0qz=$makeSlice(MJ,n.Files.$length);  0�x=n.Files.$length;  0�aa=n.Files;ab=0;while(true){if(!(ab<aa.$length)){break;}ac=ab;ad=((ab<0||ab>=aa.$length)?$throwRuntimeError("index out of range"):aa.$array[aa.$offset+ab]);  0�    if(x<(ad>>0)){  0�x=(ad>>0);    }  1((ac<0||ac>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+ac]=(ad>>0));    ab++;}  1  1x=x+(1)>>0;      1$ae=true;  1�BB();  1�af=T(2,0,0,0);u=af[0];v=af[1];w=af[2];  1�    if(!((w===0))){  1�BC();  2    ag=0;ah=w;q=ag;r=ah;return[q,r];    }  2�    if(ae&&(v===1)){  2�u=0;    }  2�    if(!((u===0))){  2�BC();  3    ai=(u>>0);aj=0;q=ai;r=aj;return[q,r];    }  3bif(o.Ptrace){$s=1;continue;}$s=2;continue;    case 1:  3tak=T(26,0,0,0);w=ak[2];  3�if(!((w===0))){$s=3;continue;}$s=4;continue;    case 3:  3�$s=5;continue;    case 4:    case 2:  3�if(o.Setsid){$s=6;continue;}$s=7;continue;    case 6:  4al=T(147,0,0,0);w=al[2];  44if(!((w===0))){$s=8;continue;}$s=9;continue;    case 8:  4F$s=5;continue;    case 9:    case 7:  4uif(o.Setpgid){$s=10;continue;}$s=11;continue;    case 10:  4�am=T(82,0,0,0);w=am[2];  4�if(!((w===0))){$s=12;continue;}$s=13;continue;    case 12:  4�$s=5;continue;    case 13:    case 11:  4�if(!(l===MF.nil)){$s=14;continue;}$s=15;continue;    case 14:  5an=T(61,l,0,0);w=an[2];  5Pif(!((w===0))){$s=16;continue;}$s=17;continue;    case 16:  5b$s=5;continue;    case 17:    case 15:  5�  5�ao=o.Credential;if(!(ao===MK.nil)){$s=18;continue;}$s=19;continue;    case 18:  5�ap=(ao.Groups.$length>>>0);  5�aq=0;  5�    if(ap>0){  6aq=$sliceToArray(ao.Groups);    }  6Dar=T(80,ap,aq,0);w=ar[2];  6�if(!((w===0))){$s=20;continue;}$s=21;continue;    case 20:  6�$s=5;continue;    case 21:  6�as=T(181,(ao.Gid>>>0),0,0);w=as[2];  6�if(!((w===0))){$s=22;continue;}$s=23;continue;    case 22:  6�$s=5;continue;    case 23:  7at=T(23,(ao.Uid>>>0),0,0);w=at[2];  7Oif(!((w===0))){$s=24;continue;}$s=25;continue;    case 24:  7a$s=5;continue;    case 25:    case 19:  7�if(!(m===MF.nil)){$s=26;continue;}$s=27;continue;    case 26:  7�au=T(12,m,0,0);w=au[2];  7�if(!((w===0))){$s=28;continue;}$s=29;continue;    case 28:  7�$s=5;continue;    case 29:    case 27:  8�if(p<x){$s=30;continue;}$s=31;continue;    case 30:  8�av=T(90,(p>>>0),(x>>>0),0);w=av[2];  8�if(!((w===0))){$s=32;continue;}$s=33;continue;    case 32:  8�$s=5;continue;    case 33:  9T(92,(x>>>0),2,1);  9Cp=x;  9S  9Sx=x+(1)>>0;        case 31:  9`  9dy=0;case 34:if(!(y<z.$length)){$s=35;continue;}  9�if(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])>=0&&((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])<y){$s=36;continue;}$s=37;continue;    case 36:  9�aw=T(90,(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])>>>0),(x>>>0),0);w=aw[2];  9�if(!((w===0))){$s=38;continue;}$s=39;continue;    case 38:  :$s=5;continue;    case 39:  :T(92,(x>>>0),2,1);  :X((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y]=x);  :j  :jx=x+(1)>>0;      :v    if(x===p){  :�  :�x=x+(1)>>0;        }    case 37:      9x  9xy=y+(1)>>0;    $s=34;continue;case 35:  :�  :�y=0;case 40:if(!(y<z.$length)){$s=41;continue;}  :�if(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])===-1){$s=42;continue;}$s=43;continue;    case 42:  ;T(6,(y>>>0),0,0);  ;>  :�  :�y=y+(1)>>0;    $s=40;continue;    case 43:  ;Mif(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])===y){$s=44;continue;}$s=45;continue;    case 44:  ;�ax=T(92,(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])>>>0),2,0);w=ax[2];  <if(!((w===0))){$s=46;continue;}$s=47;continue;    case 46:  <$s=5;continue;    case 47:  <1  :�  :�y=y+(1)>>0;    $s=40;continue;    case 45:  <�ay=T(90,(((y<0||y>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+y])>>>0),(y>>>0),0);w=ay[2];  <�if(!((w===0))){$s=48;continue;}$s=49;continue;    case 48:  <�$s=5;continue;    case 49:      :�  :�y=y+(1)>>0;    $s=40;continue;case 41:  =�  =�y=z.$length;while(true){if(!(y<3)){break;}  =�T(6,(y>>>0),0,0);      =�  =�y=y+(1)>>0;    }  >3if(o.Noctty){$s=50;continue;}$s=51;continue;    case 50:  >Eaz=T(54,0,536900721,0);w=az[2];  >�if(!((w===0))){$s=52;continue;}$s=53;continue;    case 52:  >�$s=5;continue;    case 53:    case 51:  >�if(o.Setctty){$s=54;continue;}$s=55;continue;    case 54:  >�ba=T(54,0,536900705,0);w=ba[2];  ?if(!((w===0))){$s=56;continue;}$s=57;continue;    case 56:  ?)$s=5;continue;    case 57:    case 55:  ?Tbb=T(59,i,$sliceToArray(j),$sliceToArray(k));w=bb[2];  ?�case 5:  @T(4,(p>>>0),($ptr.w||($ptr.w=new ML(function(){return w;},function($v){w=$v;}))),4);  @iwhile(true){  @qT(1,253,0,0);    }    case-1:}return;}};forkAndExecInChild
syscall.Credentialsyscall.Errno
syscall.MF
syscall.MJ
syscall.MK
syscall.MLsyscall.RawSyscallsyscall.forkAndExecInChildsyscall.runtime_AfterForksyscall.runtime_BeforeFork syscall.forkExecPipeBE��BE=function(i){var $ptr={},i,j,k,l;  @�j=EE(i);  A    if(!($interfaceIsEqual(j,$ifaceNil))){  A return j;    }  A/k=GP((0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0]),2,1);j=k[1];  AZ    if(!($interfaceIsEqual(j,$ifaceNil))){  Alreturn j;    }  A{l=GP((1>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+1]),2,1);j=l[1];  A�return j;    };forkExecPipesyscall.Pipesyscall.fcntlsyscall.forkExecPipe syscall.StringSlicePtrBF��BF=$pkg.StringSlicePtr=function(i){var $ptr={},i,j,k,l;  Mj=$makeSlice(MM,(i.$length+1>>0));  M=  MAk=0;while(true){if(!(k<i.$length)){break;}  M^((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]=CU(((k<0||k>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+k])));      MV  MVk=k+(1)>>0;    }  M(l=i.$length,((l<0||l>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+l]=MF.nil));  M�return j;    };StringSlicePtr
syscall.MF
syscall.MMsyscall.StringBytePtrsyscall.StringSlicePtr syscall.SlicePtrFromStringsBG�lBG=$pkg.SlicePtrFromStrings=function(i){var $ptr={},i,j,k,l,m,n;  N�  N�j=$ifaceNil;  N�k=$makeSlice(MM,(i.$length+1>>0));  N�  N�l=0;while(true){if(!(l<i.$length)){break;}  N�m=V(((l<0||l>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+l]));((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]=m[0]);j=m[1];  N�    if(!($interfaceIsEqual(j,$ifaceNil))){  Oreturn[MM.nil,j];    }      N�  N�l=l+(1)>>0;    }  O((n=i.$length,((n<0||n>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+n]=MF.nil));  O;return[k,$ifaceNil];    };SlicePtrFromStringssyscall.BytePtrFromString
syscall.MF
syscall.MMsyscall.SlicePtrFromStrings syscall.CloseOnExecBHDBH=$pkg.CloseOnExec=function(i){var $ptr={},i;  OhGP(i,2,1);    };CloseOnExecsyscall.CloseOnExecsyscall.fcntl syscall.SetNonblockBI�8BI=$pkg.SetNonblock=function(i,j){var $ptr={},i,j,k,l,m,n;k=$ifaceNil;  O�l=GP(i,3,0);m=l[0];k=l[1];  O�    if(!($interfaceIsEqual(k,$ifaceNil))){  O�    k=k;return k;    }  P	    if(j){  P  Pm=m|(4);        }else{  P;  P;m=m&(-5);        }  PSn=GP(i,4,m);k=n[1];  Pv    k=k;return k;    };SetNonblocksyscall.SetNonblocksyscall.fcntl syscall.forkExecBN�	�BN=function(i,j,k){var $ptr={},$r,$s=0,$this=this,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;l=0;m=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  S  Sn=$clone(MN.zero(),MN);  S  So=0;  S  S!p=0;  S-  S1q=0;  SF    if(k===MO.nil){  SYk=BL;    }  Srr=k.Sys;  S�    if(r===MP.nil){  S�r=BM;    }  S�n[0]=-1;  S�n[1]=-1;  S�s=V(i);t=s[0];m=s[1];  T    if(!($interfaceIsEqual(m,$ifaceNil))){  T    u=0;v=m;l=u;m=v;return[l,m];    }  T1w=BG(j);x=w[0];m=w[1];  TZ    if(!($interfaceIsEqual(m,$ifaceNil))){  Tl    y=0;z=m;l=y;m=z;return[l,m];    }  T~aa=BG(k.Env);ab=aa[0];m=aa[1];  T�    if(!($interfaceIsEqual(m,$ifaceNil))){  T�    ac=0;ad=m;l=ac;m=ad;return[l,m];    }  T�  UF  UJae=MF.nil;  UX    if(!(r.Chroot==="")){  Upaf=V(r.Chroot);ae=af[0];m=af[1];  U�    if(!($interfaceIsEqual(m,$ifaceNil))){  U�    ag=0;ah=m;l=ag;m=ah;return[l,m];    }    }  U�  U�ai=MF.nil;  U�    if(!(k.Dir==="")){  U�aj=V(k.Dir);ai=aj[0];m=aj[1];  V    if(!($interfaceIsEqual(m,$ifaceNil))){  V(    ak=0;al=m;l=ak;m=al;return[l,m];    }    }  V�$r=$pkg.ForkLock.Lock();$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  V�  V�m=BE(new MJ(n));if(!($interfaceIsEqual(m,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  W$$s=4;continue;    case 3:  WHam=BD(t,x,ab,ae,ai,k,r,n[1]);l=am[0];p=am[1];  W�if(!((p===0))){$s=5;continue;}$s=6;continue;    case 5:  W�m=new ER(p);  W�$s=4;continue;    case 6:  W�$r=$pkg.ForkLock.Unlock();$s=7;case 7:if($r&&$r.$blocking){$r=$r();}  XHA(n[1]);  Xan=KB(n[0],($ptr.p||($ptr.p=new ML(function(){return p;},function($v){p=$v;}))),4);o=an[0];m=an[1];  XjHA(n[0]);  Xw    if(!($interfaceIsEqual(m,$ifaceNil))||!((o===0))){  X�    if(o===4){  X�m=new ER(p);    }  X�    if($interfaceIsEqual(m,$ifaceNil)){  X�m=new ER(32);    }  YOao=DA(l,($ptr.q||($ptr.q=new MQ(function(){return q;},function($v){q=$v;}))),0,MR.nil);ap=ao[1];  Yywhile(true){if(!($interfaceIsEqual(ap,new ER(4)))){break;}  Y�aq=DA(l,($ptr.q||($ptr.q=new MQ(function(){return q;},function($v){q=$v;}))),0,MR.nil);ap=aq[1];    }  Y�    ar=0;as=m;l=ar;m=as;return[l,m];    }  Z    at=l;au=$ifaceNil;l=at;m=au;return[l,m];  Zcase 4:  Z&    if(n[0]>=0){  Z7HA(n[0]);  ZEHA(n[1]);    }  ZU$r=$pkg.ForkLock.Unlock();$s=8;case 8:if($r&&$r.$blocking){$r=$r();}  Zh    av=0;aw=m;l=av;m=aw;return[l,m];    case-1:}return;}};$f.$blocking=true;return $f;};forkExecsyscall.BytePtrFromStringsyscall.Closesyscall.Errnosyscall.ForkLock
syscall.MF
syscall.MJ
syscall.ML
syscall.MN
syscall.MO
syscall.MP
syscall.MQ
syscall.MRsyscall.ProcAttrsyscall.Rusagesyscall.SlicePtrFromStringssyscall.SysProcAttrsyscall.Wait4syscall.WaitStatussyscall.forkAndExecInChildsyscall.forkExecsyscall.forkExecPipesyscall.readlensyscall.zeroProcAttrsyscall.zeroSysProcAttr syscall.ForkExecBO�BO=$pkg.ForkExec=function(i,j,k){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o;l=0;m=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  [    o=BN(i,j,k);$s=1;case 1:if(o&&o.$blocking){o=o();}n=o;l=n[0];m=n[1];return[l,m];    case-1:}return;}};$f.$blocking=true;return $f;};ForkExecsyscall.ForkExecsyscall.forkExec syscall.StartProcessBP�NBP=$pkg.StartProcess=function(i,j,k){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p,q,r,s;l=0;m=0;n=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  [�p=BN(i,j,k);$s=1;case 1:if(p&&p.$blocking){p=p();}o=p;l=o[0];n=o[1];  [�    q=l;r=0;s=n;l=q;m=r;n=s;return[l,m,n];    case-1:}return;}};$f.$blocking=true;return $f;};StartProcesssyscall.StartProcesssyscall.forkExec syscall.ExecBQ��BQ=$pkg.Exec=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t;l=$ifaceNil;  \Ym=V(i);n=m[0];l=m[1];  \�    if(!($interfaceIsEqual(l,$ifaceNil))){  \�    l=l;return l;    }  \�o=BG(j);p=o[0];l=o[1];  \�    if(!($interfaceIsEqual(l,$ifaceNil))){  \�    l=l;return l;    }  \�q=BG(k);r=q[0];l=q[1];  ]    if(!($interfaceIsEqual(l,$ifaceNil))){  ](    l=l;return l;    }  ]7s=T(59,n,$sliceToArray(p),$sliceToArray(r));t=s[2];  ]�    l=new ER(t);return l;    };Execsyscall.BytePtrFromStringsyscall.Errnosyscall.Execsyscall.RawSyscallsyscall.SlicePtrFromStrings syscall.FcntlFlockBS��BS=$pkg.FcntlFlock=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;  `m=new Uint8Array(24);l=R(BR,i,(j>>>0),m);p=l[2];n=k,o=new DataView(m.buffer,m.byteOffset),n.Start=new $Int64(o.getUint32(4,true),o.getUint32(0,true)),n.Len=new $Int64(o.getUint32(12,true),o.getUint32(8,true)),n.Pid=o.getInt32(16,true),n.Type=o.getInt16(20,true),n.Whence=o.getInt16(22,true);  `l    if(p===0){  `~return $ifaceNil;    }  `�return new ER(p);    };
FcntlFlocksyscall.Errnosyscall.FcntlFlocksyscall.Syscallsyscall.fcntl64Syscall syscall.raceAcquireBT$BT=function(i){var $ptr={},i;    };raceAcquiresyscall.raceAcquire syscall.raceReleaseMergeBU$BU=function(i){var $ptr={},i;    };raceReleaseMergesyscall.raceReleaseMerge syscall.raceReadRangeBV(BV=function(i,j){var $ptr={},i,j;    };raceReadRangesyscall.raceReadRange syscall.raceWriteRangeBW(BW=function(i,j){var $ptr={},i,j;    };raceWriteRangesyscall.raceWriteRange syscall.rsaAlignOfBX��BX=function(i){var $ptr={},i,j;  c�j=8;  d�  d�j=4;      d�    if(i===0){  ereturn j;    }  ereturn(((i+j>>0)-1>>0))&(~((j-1>>0))>>0);    };
rsaAlignOfsyscall.rsaAlignOf syscall.RouteRIBBY�aBY=$pkg.RouteRIB=function(i,j){var $ptr={},i,j,k,l,m,n,o;  fk=new MS([4,17,0,0,(i>>0),(j>>0)]);  fbl=0;  fs  fvm=GM(k,MF.nil,($ptr.l||($ptr.l=new MT(function(){return l;},function($v){l=$v;}))),MF.nil,0);    if(!($interfaceIsEqual(m,$ifaceNil))){  f�return[MD.nil,m];    }  f�    if(l===0){  f�return[MD.nil,$ifaceNil];    }  f�n=$makeSlice(MD,l);  f�  f�o=GM(k,$indexPtr(n.$array,n.$offset+0,MF),($ptr.l||($ptr.l=new MT(function(){return l;},function($v){l=$v;}))),MF.nil,0);    if(!($interfaceIsEqual(o,$ifaceNil))){  g3return[MD.nil,o];    }  gGreturn[$subslice(n,0,l),$ifaceNil];    };RouteRIB
syscall.MD
syscall.MF
syscall.MS
syscall.MTsyscall.RouteRIBsyscall._C_intsyscall.sysctl  (*syscall.RouteMessage).sockaddr��CB.ptr.prototype.sockaddr=function(){var $ptr={},aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  ii=this;  iI  iQj=0;  i[k=$clone(MU.zero(),MU);  iol=i.Data;  i  i�m=0;while(true){if(!(m<8)){break;}  i�    if(((i.Header.Addrs&15)&(((n=m,n<32?(1<<n):0)>>0)))===0){  i�  i�  i�m=m+(1)>>>0;    continue;    }  i�r=(o=$sliceToArray(l),p=new LB.ptr(),q=new DataView(o.buffer,o.byteOffset),p.Len=q.getUint8(0,true),p.Family=q.getUint8(1,true),p.Data=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+2,o.buffer.byteLength)),p);  js=m;  jif(s===0||s===1){  j?x=new Uint8Array(16);t=DB((u=x,v=new LC.ptr(),w=new DataView(u.buffer,u.byteOffset),v.Addr.Len=w.getUint8(0,true),v.Addr.Family=w.getUint8(1,true),v.Addr.Data=new($nativeArray($kindInt8))(u.buffer,$min(u.byteOffset+2,u.buffer.byteLength)),v.Pad=new($nativeArray($kindInt8))(u.buffer,$min(u.byteOffset+16,u.buffer.byteLength)),v));aa=t[0];ab=t[1];y=r,z=new DataView(x.buffer,x.byteOffset),y.Len=z.getUint8(0,true),y.Family=z.getUint8(1,true),y.Data=new($nativeArray($kindInt8))(x.buffer,$min(x.byteOffset+2,x.buffer.byteLength));  j�    if(!($interfaceIsEqual(ab,$ifaceNil))){  j�return MV.nil;    }  j�    if(m===0){  j�j=(r.Family>>0);    }  j�((m<0||m>=k.length)?$throwRuntimeError("index out of range"):k[m]=aa);      j�}else if(s===2||s===3){  kac=j;  kif(ac===2){  k1ag=(ad=$sliceToArray(l),ae=new KX.ptr(),af=new DataView(ad.buffer,ad.byteOffset),ae.Len=af.getUint8(0,true),ae.Family=af.getUint8(1,true),ae.Port=af.getUint16(2,true),ae.Addr=new($nativeArray($kindUint8))(ad.buffer,$min(ad.byteOffset+4,ad.buffer.byteLength)),ae.Zero=new($nativeArray($kindInt8))(ad.buffer,$min(ad.byteOffset+8,ad.buffer.byteLength)),ae);  khah=new EW.ptr();  k�  k�ai=0;while(true){if(!(ag.Len>0&&ai<((ag.Len>>0)-4>>0))){break;}  k�(ak=ah.Addr,((ai<0||ai>=ak.length)?$throwRuntimeError("index out of range"):ak[ai]=(aj=ag.Addr,((ai<0||ai>=aj.length)?$throwRuntimeError("index out of range"):aj[ai]))));      k�  k�ai=ai+(1)>>0;    }  l((m<0||m>=k.length)?$throwRuntimeError("index out of range"):k[m]=ah);      l}else if(ac===30){  l%ao=(al=$sliceToArray(l),am=new KY.ptr(),an=new DataView(al.buffer,al.byteOffset),am.Len=an.getUint8(0,true),am.Family=an.getUint8(1,true),am.Port=an.getUint16(2,true),am.Flowinfo=an.getUint32(4,true),am.Addr=new($nativeArray($kindUint8))(al.buffer,$min(al.byteOffset+8,al.buffer.byteLength)),am.Scope_id=an.getUint32(24,true),am);  l\ap=new EX.ptr();  ly  l}aq=0;while(true){if(!(ao.Len>0&&aq<((ao.Len>>0)-8>>0))){break;}  l�(as=ap.Addr,((aq<0||aq>=as.length)?$throwRuntimeError("index out of range"):as[aq]=(ar=ao.Addr,((aq<0||aq>=ar.length)?$throwRuntimeError("index out of range"):ar[aq]))));      l�  l�aq=aq+(1)>>0;    }  l�((m<0||m>=k.length)?$throwRuntimeError("index out of range"):k[m]=ap);    }    }  ml=$subslice(l,BX((r.Len>>0)));      i�  i�m=m+(1)>>>0;    }  m3return new MV(k);    };CB.prototype.sockaddr=function(){return this.$val.sockaddr();};RouteMessage	sockaddr~
syscall.MU
syscall.MVsyscall.RawSockaddrsyscall.RawSockaddrAnysyscall.RawSockaddrInet4syscall.RawSockaddrInet6syscall.RouteMessagesyscall.Sockaddrsyscall.SockaddrInet4syscall.SockaddrInet6syscall.anyToSockaddrsyscall.rsaAlignOf $(*syscall.InterfaceMessage).sockaddr��CC.ptr.prototype.sockaddr=function(){var $ptr={},i,j,k,l,m,n,o,p;i=MV.nil;  m�j=this;  n    if((j.Header.Addrs&16)===0){  n=    i=MV.nil;return i;    }  nLk=DB((l=$sliceToArray(j.Data),m=new LC.ptr(),n=new DataView(l.buffer,l.byteOffset),m.Addr.Len=n.getUint8(0,true),m.Addr.Family=n.getUint8(1,true),m.Addr.Data=new($nativeArray($kindInt8))(l.buffer,$min(l.byteOffset+2,l.buffer.byteLength)),m.Pad=new($nativeArray($kindInt8))(l.buffer,$min(l.byteOffset+16,l.buffer.byteLength)),m));o=k[0];p=k[1];  n�    if(!($interfaceIsEqual(p,$ifaceNil))){  n�    i=MV.nil;return i;    }  n�    i=$append(i,o);return i;    };CC.prototype.sockaddr=function(){return this.$val.sockaddr();};InterfaceMessage	sockaddr~syscall.InterfaceMessage
syscall.MVsyscall.RawSockaddrAnysyscall.anyToSockaddr ((*syscall.InterfaceAddrMessage).sockaddr�	�CD.ptr.prototype.sockaddr=function(){var $ptr={},aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;i=MV.nil;  o�j=this;  o�    if((j.Header.Addrs&164)===0){  p    i=MV.nil;return i;    }  p$k=j.Data;  qZl=0;  q  q�m=0;while(true){if(!(m<8)){break;}  q�    if((j.Header.Addrs&(((n=m,n<32?(1<<n):0)>>0)))===0){  q�  q�  q�m=m+(1)>>>0;    continue;    }  q�r=(o=$sliceToArray(k),p=new LB.ptr(),q=new DataView(o.buffer,o.byteOffset),p.Len=q.getUint8(0,true),p.Family=q.getUint8(1,true),p.Data=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+2,o.buffer.byteLength)),p);  rs=m;  rif(s===5){  r'    if(r.Family===0){  rHr.Family=l;    }  rmx=new Uint8Array(16);t=DB((u=x,v=new LC.ptr(),w=new DataView(u.buffer,u.byteOffset),v.Addr.Len=w.getUint8(0,true),v.Addr.Family=w.getUint8(1,true),v.Addr.Data=new($nativeArray($kindInt8))(u.buffer,$min(u.byteOffset+2,u.buffer.byteLength)),v.Pad=new($nativeArray($kindInt8))(u.buffer,$min(u.byteOffset+16,u.buffer.byteLength)),v));aa=t[0];ab=t[1];y=r,z=new DataView(x.buffer,x.byteOffset),y.Len=z.getUint8(0,true),y.Family=z.getUint8(1,true),y.Data=new($nativeArray($kindInt8))(x.buffer,$min(x.byteOffset+2,x.buffer.byteLength));  r�    if(!($interfaceIsEqual(ab,$ifaceNil))){  r�    i=MV.nil;return i;    }  r�i=$append(i,aa);      r�}else if(s===2){  sac=r.Family;  sif(ac===0){  s1ad=r.Len;  sFif(ad===16){  ser.Family=2;      s~}else if(ad===28){  s�r.Family=30;    }else{  s�r.Family=2;    }      t}else if(ac===2||ac===30){  t*l=r.Family;    }else{  tW    i=MV.nil;return i;    }  tjai=new Uint8Array(16);ae=DB((af=ai,ag=new LC.ptr(),ah=new DataView(af.buffer,af.byteOffset),ag.Addr.Len=ah.getUint8(0,true),ag.Addr.Family=ah.getUint8(1,true),ag.Addr.Data=new($nativeArray($kindInt8))(af.buffer,$min(af.byteOffset+2,af.buffer.byteLength)),ag.Pad=new($nativeArray($kindInt8))(af.buffer,$min(af.byteOffset+16,af.buffer.byteLength)),ag));al=ae[0];am=ae[1];aj=r,ak=new DataView(ai.buffer,ai.byteOffset),aj.Len=ak.getUint8(0,true),aj.Family=ak.getUint8(1,true),aj.Data=new($nativeArray($kindInt8))(ai.buffer,$min(ai.byteOffset+2,ai.buffer.byteLength));  t�    if(!($interfaceIsEqual(am,$ifaceNil))){  t�    i=MV.nil;return i;    }  t�i=$append(i,al);    }  uk=$subslice(k,BX((r.Len>>0)));      q�  q�m=m+(1)>>>0;    }  u;    i=i;return i;    };CD.prototype.sockaddr=function(){return this.$val.sockaddr();};InterfaceAddrMessage	sockaddr~syscall.InterfaceAddrMessage
syscall.MVsyscall.RawSockaddrsyscall.RawSockaddrAnysyscall.anyToSockaddrsyscall.rsaAlignOf syscall.ParseRoutingMessageCE��CE=$pkg.ParseRoutingMessage=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t;j=MW.nil;k=$ifaceNil;  v	l=0;  vwhile(true){if(!(i.$length>=4)){break;}  v8  v8l=l+(1)>>0;      vEp=(m=$sliceToArray(i),n=new CA.ptr(),o=new DataView(m.buffer,m.byteOffset),n.Msglen=o.getUint16(0,true),n.Version=o.getUint8(2,true),n.Type=o.getUint8(3,true),n);  vs    if(!((p.Version===5))){  v�i=$subslice(i,p.Msglen);  v�continue;    }  v�j=$append(j,p.toRoutingMessage(i));  v�i=$subslice(i,p.Msglen);    }  w@    if(l>0&&(j.$length===0)){  wf    q=MW.nil;r=new ER(22);j=q;k=r;return[j,k];    }  w}    s=j;t=$ifaceNil;j=s;k=t;return[j,k];    };ParseRoutingMessagesyscall.Errno
syscall.MWsyscall.ParseRoutingMessagesyscall.RoutingMessagesyscall.anyMessagesyscall.toRoutingMessage~ syscall.ParseRoutingSockaddrCF�CCF=$pkg.ParseRoutingSockaddr=function(i){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n;j=MV.nil;k=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  xX    m=i.sockaddr();$s=1;case 1:if(m&&m.$blocking){m=m();}l=$appendSlice(j,m);n=$ifaceNil;j=l;k=n;return[j,k];    case-1:}return;}};$f.$blocking=true;return $f;};ParseRoutingSockaddr
syscall.MVsyscall.ParseRoutingSockaddrsyscall.sockaddr~ &(*syscall.anyMessage).toRoutingMessage�XCA.ptr.prototype.toRoutingMessage=function(i){var $ptr={},aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  y{j=this;  y�k=j.Type;  y�if(k===1||k===2||k===3||k===4||k===5||k===6||k===7||k===8||k===11){  z8o=new Uint8Array(4);r=(l=o,m=new CB.ptr(),n=new DataView(l.buffer,l.byteOffset),m.Header.Msglen=n.getUint16(0,true),m.Header.Version=n.getUint8(2,true),m.Header.Type=n.getUint8(3,true),m.Header.Index=n.getUint16(4,true),m.Header.Pad_cgo_0=new($nativeArray($kindUint8))(l.buffer,$min(l.byteOffset+6,l.buffer.byteLength)),m.Header.Flags=n.getInt32(8,true),m.Header.Addrs=n.getInt32(12,true),m.Header.Pid=n.getInt32(16,true),m.Header.Seq=n.getInt32(20,true),m.Header.Errno=n.getInt32(24,true),m.Header.Use=n.getInt32(28,true),m.Header.Inits=n.getUint32(32,true),m.Header.Rmx.Locks=n.getUint32(36,true),m.Header.Rmx.Mtu=n.getUint32(40,true),m.Header.Rmx.Hopcount=n.getUint32(44,true),m.Header.Rmx.Expire=n.getInt32(48,true),m.Header.Rmx.Recvpipe=n.getUint32(52,true),m.Header.Rmx.Sendpipe=n.getUint32(56,true),m.Header.Rmx.Ssthresh=n.getUint32(60,true),m.Header.Rmx.Rtt=n.getUint32(64,true),m.Header.Rmx.Rttvar=n.getUint32(68,true),m.Header.Rmx.Pksent=n.getUint32(72,true),m.Header.Rmx.Filler=new($nativeArray($kindUint32))(l.buffer,$min(l.byteOffset+76,l.buffer.byteLength)),m);p=j,q=new DataView(o.buffer,o.byteOffset),p.Msglen=q.getUint16(0,true),p.Version=q.getUint8(2,true),p.Type=q.getUint8(3,true);  zdreturn new CB.ptr($clone(r.Header,LV),$subslice(i,92,j.Msglen));      z�}else if(k===14){  z�v=new Uint8Array(4);y=(s=v,t=new CC.ptr(),u=new DataView(s.buffer,s.byteOffset),t.Header.Msglen=u.getUint16(0,true),t.Header.Version=u.getUint8(2,true),t.Header.Type=u.getUint8(3,true),t.Header.Addrs=u.getInt32(4,true),t.Header.Flags=u.getInt32(8,true),t.Header.Index=u.getUint16(12,true),t.Header.Pad_cgo_0=new($nativeArray($kindUint8))(s.buffer,$min(s.byteOffset+14,s.buffer.byteLength)),t.Header.Data.Type=u.getUint8(16,true),t.Header.Data.Typelen=u.getUint8(17,true),t.Header.Data.Physical=u.getUint8(18,true),t.Header.Data.Addrlen=u.getUint8(19,true),t.Header.Data.Hdrlen=u.getUint8(20,true),t.Header.Data.Recvquota=u.getUint8(21,true),t.Header.Data.Xmitquota=u.getUint8(22,true),t.Header.Data.Unused1=u.getUint8(23,true),t.Header.Data.Mtu=u.getUint32(24,true),t.Header.Data.Metric=u.getUint32(28,true),t.Header.Data.Baudrate=u.getUint32(32,true),t.Header.Data.Ipackets=u.getUint32(36,true),t.Header.Data.Ierrors=u.getUint32(40,true),t.Header.Data.Opackets=u.getUint32(44,true),t.Header.Data.Oerrors=u.getUint32(48,true),t.Header.Data.Collisions=u.getUint32(52,true),t.Header.Data.Ibytes=u.getUint32(56,true),t.Header.Data.Obytes=u.getUint32(60,true),t.Header.Data.Imcasts=u.getUint32(64,true),t.Header.Data.Omcasts=u.getUint32(68,true),t.Header.Data.Iqdrops=u.getUint32(72,true),t.Header.Data.Noproto=u.getUint32(76,true),t.Header.Data.Recvtiming=u.getUint32(80,true),t.Header.Data.Xmittiming=u.getUint32(84,true),t.Header.Data.Lastchange.Sec=u.getInt32(88,true),t.Header.Data.Lastchange.Usec=u.getInt32(92,true),t.Header.Data.Unused2=u.getUint32(96,true),t.Header.Data.Hwassist=u.getUint32(100,true),t.Header.Data.Reserved1=u.getUint32(104,true),t.Header.Data.Reserved2=u.getUint32(108,true),t);w=j,x=new DataView(v.buffer,v.byteOffset),w.Msglen=x.getUint16(0,true),w.Version=x.getUint8(2,true),w.Type=x.getUint8(3,true);  z�return new CC.ptr($clone(y.Header,LQ),$subslice(i,112,j.Msglen));      {C}else if(k===12||k===13){  {dac=new Uint8Array(4);af=(z=ac,aa=new CD.ptr(),ab=new DataView(z.buffer,z.byteOffset),aa.Header.Msglen=ab.getUint16(0,true),aa.Header.Version=ab.getUint8(2,true),aa.Header.Type=ab.getUint8(3,true),aa.Header.Addrs=ab.getInt32(4,true),aa.Header.Flags=ab.getInt32(8,true),aa.Header.Index=ab.getUint16(12,true),aa.Header.Pad_cgo_0=new($nativeArray($kindUint8))(z.buffer,$min(z.byteOffset+14,z.buffer.byteLength)),aa.Header.Metric=ab.getInt32(16,true),aa);ad=j,ae=new DataView(ac.buffer,ac.byteOffset),ad.Msglen=ae.getUint16(0,true),ad.Version=ae.getUint8(2,true),ad.Type=ae.getUint8(3,true);  {�return new CD.ptr($clone(af.Header,LS),$subslice(i,20,j.Msglen));      {�}else if(k===19||k===16){  |aj=new Uint8Array(4);am=(ag=aj,ah=new CG.ptr(),ai=new DataView(ag.buffer,ag.byteOffset),ah.Header.Msglen=ai.getUint16(0,true),ah.Header.Version=ai.getUint8(2,true),ah.Header.Type=ai.getUint8(3,true),ah.Header.Addrs=ai.getInt32(4,true),ah.Header.Flags=ai.getInt32(8,true),ah.Header.Index=ai.getUint16(12,true),ah.Header.Pad_cgo_0=new($nativeArray($kindUint8))(ag.buffer,$min(ag.byteOffset+14,ag.buffer.byteLength)),ah.Header.Refcount=ai.getInt32(16,true),ah);ak=j,al=new DataView(aj.buffer,aj.byteOffset),ak.Msglen=al.getUint16(0,true),ak.Version=al.getUint8(2,true),ak.Type=al.getUint8(3,true);  |Nreturn new CG.ptr($clone(am.Header,LU),$subslice(i,20,j.Msglen));    }  |�return $ifaceNil;    };CA.prototype.toRoutingMessage=function(i){return this.$val.toRoutingMessage(i);};
anyMessagetoRoutingMessage~
syscall.IfMsghdrsyscall.IfaMsghdrsyscall.IfmaMsghdr2syscall.InterfaceAddrMessagesyscall.InterfaceMessage%syscall.InterfaceMulticastAddrMessage
syscall.MDsyscall.RouteMessagesyscall.RtMsghdrsyscall.anyMessage 1(*syscall.InterfaceMulticastAddrMessage).sockaddr�zCG.ptr.prototype.sockaddr=function(){var $ptr={},aa,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;i=MV.nil;  }�j=this;  }�    if((j.Header.Addrs&50)===0){  ~#    i=MV.nil;return i;    }  ~2k=j.Data;  ~B  ~Fl=0;while(true){if(!(l<8)){break;}  ~j    if(((j.Header.Addrs&50)&(((m=l,m<32?(1<<m):0)>>0)))===0){  ~�  ~b  ~bl=l+(1)>>>0;    continue;    }  ~�q=(n=$sliceToArray(k),o=new LB.ptr(),p=new DataView(n.buffer,n.byteOffset),o.Len=p.getUint8(0,true),o.Family=p.getUint8(1,true),o.Data=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+2,n.buffer.byteLength)),o);  ~�r=l;  ~�if(r===5){  ~�w=new Uint8Array(16);s=DB((t=w,u=new LC.ptr(),v=new DataView(t.buffer,t.byteOffset),u.Addr.Len=v.getUint8(0,true),u.Addr.Family=v.getUint8(1,true),u.Addr.Data=new($nativeArray($kindInt8))(t.buffer,$min(t.byteOffset+2,t.buffer.byteLength)),u.Pad=new($nativeArray($kindInt8))(t.buffer,$min(t.byteOffset+16,t.buffer.byteLength)),u));z=s[0];aa=s[1];x=q,y=new DataView(w.buffer,w.byteOffset),x.Len=y.getUint8(0,true),x.Family=y.getUint8(1,true),x.Data=new($nativeArray($kindInt8))(w.buffer,$min(w.byteOffset+2,w.buffer.byteLength));  8    if(!($interfaceIsEqual(aa,$ifaceNil))){  J    i=MV.nil;return i;    }  ]i=$append(i,z);    }  �k=$subslice(k,BX((q.Len>>0)));      ~b  ~bl=l+(1)>>>0;    }  �    i=i;return i;    };CG.prototype.sockaddr=function(){return this.$val.sockaddr();};InterfaceMulticastAddrMessage	sockaddr~%syscall.InterfaceMulticastAddrMessage
syscall.MVsyscall.RawSockaddrsyscall.RawSockaddrAnysyscall.anyToSockaddrsyscall.rsaAlignOf syscall.cmsgAlignOfCHpCH=function(i){var $ptr={},i,j;  �aj=8;  ��  �j=4;      �(return(((i+j>>0)-1>>0))&(~((j-1>>0))>>0);    };cmsgAlignOfsyscall.cmsgAlignOf syscall.CmsgLenCIICI=$pkg.CmsgLen=function(i){var $ptr={},i;  ��return CH(12)+i>>0;    };CmsgLensyscall.CmsgLensyscall.cmsgAlignOf syscall.CmsgSpaceCJOCJ=$pkg.CmsgSpace=function(i){var $ptr={},i;  ��return CH(12)+CH(i)>>0;    };	CmsgSpacesyscall.CmsgSpacesyscall.cmsgAlignOf syscall.cmsgDataCK_CK=function(i){var $ptr={},i,j,k,l;  �%j=new Uint8Array(12);return(j+(CH(12)>>>0)>>>0);    };cmsgDatasyscall.cmsgAlignOfsyscall.cmsgData !syscall.ParseSocketControlMessageCM��CM=$pkg.ParseSocketControlMessage=function(i){var $ptr={},i,j,k,l,m,n,o,p;  ��  ��j=MX.nil;  ��k=0;  ��while(true){if(!((k+CI(0)>>0)<=i.$length)){break;}  ��l=CN($subslice(i,k));m=l[0];n=l[1];o=l[2];  �"    if(!($interfaceIsEqual(o,$ifaceNil))){  �5return[MX.nil,o];    }  �Kp=new CL.ptr($clone(m,LJ),n);  �j=$append(j,p);  ��  ��k=k+(CH((m.Len>>0)))>>0;        }  ��return[j,$ifaceNil];    };ParseSocketControlMessagesyscall.CmsgLensyscall.Cmsghdr
syscall.MD
syscall.MX!syscall.ParseSocketControlMessagesyscall.SocketControlMessagesyscall.cmsgAlignOf)syscall.socketControlMessageHeaderAndData )syscall.socketControlMessageHeaderAndDataCN�ZCN=function(i){var $ptr={},i,j,k,l,m;  �m=(j=$sliceToArray(i),k=new LJ.ptr(),l=new DataView(j.buffer,j.byteOffset),k.Len=l.getUint32(0,true),k.Level=l.getInt32(4,true),k.Type=l.getInt32(8,true),k);  �C    if(m.Len<12||(m.Len>>0)>i.$length){  �wreturn[MY.nil,MD.nil,new ER(22)];    }  ��return[m,$subslice(i,CH(12),m.Len),$ifaceNil];    };!socketControlMessageHeaderAndDatasyscall.Cmsghdrsyscall.Errno
syscall.MD
syscall.MYsyscall.cmsgAlignOf)syscall.socketControlMessageHeaderAndData syscall.UnixRightsCO�0CO=$pkg.UnixRights=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;  �ej=i.$length*4>>0;  �~k=$makeSlice(MD,CJ(j));  ��o=(l=$sliceToArray(k),m=new LJ.ptr(),n=new DataView(l.buffer,l.byteOffset),m.Len=n.getUint32(0,true),m.Level=n.getInt32(4,true),m.Type=n.getInt32(8,true),m);  ��o.Level=65535;  ��o.Type=1;  ��o.SetLen(CI(j));  �p=CK(o);  �2q=i;r=0;while(true){if(!(r<q.$length)){break;}s=((r<0||r>=q.$length)?$throwRuntimeError("index out of range"):q.$array[q.$offset+r]);  �Mp.$set((s>>0));  �{  �{p=p+(4)>>>0;        r++;}  ��return k;    };
UnixRightssyscall.CmsgLensyscall.CmsgSpacesyscall.Cmsghdr
syscall.MDsyscall.UnixRightssyscall.cmsgData syscall.ParseUnixRightsCP�bCP=$pkg.ParseUnixRights=function(i){var $ptr={},i,j,k,l,m,n,o;  �Z    if(!((i.Header.Level===65535))){  �~return[MJ.nil,new ER(22)];    }  ��    if(!((i.Header.Type===1))){  ��return[MJ.nil,new ER(22)];    }  ��j=$makeSlice(MJ,(i.Data.$length>>2>>0));  ��  ��k=0;l=0;m=k;n=l;while(true){if(!(m<i.Data.$length)){break;}  �!((n<0||n>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+n]=((o=i.Data,((m<0||m>=o.$length)?$throwRuntimeError("index out of range"):o.$array[o.$offset+m]))>>0));  �W  �Wn=n+(1)>>0;          �  �m=m+(4)>>0;    }  �_return[j,$ifaceNil];    };ParseUnixRightssyscall.Errno
syscall.MJsyscall.ParseUnixRights syscall.itoaCQpCQ=function(i){var $ptr={},i;  �w    if(i<0){  ��return"-"+CR((-i>>>0));    }  ��return CR((i>>>0));    };itoasyscall.itoasyscall.uitoa syscall.uitoaCR�1CR=function(i){var $ptr={},i,j,k,l,m;  ��  ��j=$clone(MZ.zero(),MZ);  �k=31;  � while(true){if(!(i>=10)){break;}  �2((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k]=(((l=i%10,l===l?l:$throwRuntimeError("integer divide by zero"))+48>>>0)<<24>>>24));  �P  �Pk=k-(1)>>0;      �V  �Vi=(m=i/(10),(m===m&&m!==1/0&&m!==-1/0)?m>>>0:$throwRuntimeError("integer divide by zero"));        }  �d((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k]=((i+48>>>0)<<24>>>24));  �~return $bytesToString($subslice(new MD(j),k));    };uitoa
syscall.MD
syscall.MZsyscall.uitoa syscall.StringByteSliceCS��CS=$pkg.StringByteSlice=function(i){var $ptr={},i,j,k,l;  �2j=CT(i);k=j[0];l=j[1];  �T    if(!($interfaceIsEqual(l,$ifaceNil))){  �f$panic(new $String("syscall: string with NUL passed to StringByteSlice"));    }  ��return k;    };StringByteSlicesyscall.ByteSliceFromStringsyscall.StringByteSlice syscall.ByteSliceFromStringCT�0CT=$pkg.ByteSliceFromString=function(i){var $ptr={},i,j,k;  ��  ��j=0;while(true){if(!(j<i.length)){break;}  ��    if(i.charCodeAt(j)===0){  ��return[MD.nil,new ER(22)];    }      ��  ��j=j+(1)>>0;    }  ��k=$makeSlice(MD,(i.length+1>>0));  ��$copyString(k,i);  �return[k,$ifaceNil];    };ByteSliceFromStringsyscall.ByteSliceFromStringsyscall.Errno
syscall.MD syscall.StringBytePtrCUqCU=$pkg.StringBytePtr=function(i){var $ptr={},i,j;  ��return(j=CS(i),$indexPtr(j.$array,j.$offset+0,MF));    };StringBytePtr
syscall.MFsyscall.StringBytePtrsyscall.StringByteSlice (*syscall.Timespec).Unix��KI.ptr.prototype.Unix=function(){var $ptr={},i,j,k,l,m;i=new $Int64(0,0);j=new $Int64(0,0);  ��k=this;  ��    l=k.Sec;m=k.Nsec;i=l;j=m;return[i,j];    };KI.prototype.Unix=function(){return this.$val.Unix();};Timespecsyscall.Timespec (*syscall.Timeval).Unix��KJ.ptr.prototype.Unix=function(){var $ptr={},i,j,k,l,m;i=new $Int64(0,0);j=new $Int64(0,0);  ��k=this;  �(    l=k.Sec;m=$mul64(new $Int64(0,k.Usec),new $Int64(0,1000));i=l;j=m;return[i,j];    };KJ.prototype.Unix=function(){return this.$val.Unix();};Timevalsyscall.Timeval (*syscall.Timespec).Nano��KI.ptr.prototype.Nano=function(){var $ptr={},i,j,k;  �]i=this;  �{return(j=$mul64(i.Sec,new $Int64(0,1000000000)),k=i.Nsec,new $Int64(j.$high+k.$high,j.$low+k.$low));    };KI.prototype.Nano=function(){return this.$val.Nano();};Timespecsyscall.Timespec (*syscall.Timeval).Nano�KJ.ptr.prototype.Nano=function(){var $ptr={},i,j,k;  ��i=this;  ��return(j=$mul64(i.Sec,new $Int64(0,1000000000)),k=$mul64(new $Int64(0,i.Usec),new $Int64(0,1000)),new $Int64(j.$high+k.$high,j.$low+k.$low));    };KJ.prototype.Nano=function(){return this.$val.Nano();};Timevalsyscall.Timeval syscall.GetgroupsCW�uCW=$pkg.Getgroups=function(){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;i=MJ.nil;j=$ifaceNil;  �bk=FU(0,NA.nil);l=k[0];j=k[1];  �    if(!($interfaceIsEqual(j,$ifaceNil))){  ��    m=MJ.nil;n=j;i=m;j=n;return[i,j];    }  ��    if(l===0){  ��    o=MJ.nil;p=$ifaceNil;i=o;j=p;return[i,j];    }  ��    if(l<0||l>1000){  �    q=MJ.nil;r=new ER(22);i=q;j=r;return[i,j];    }  �*s=$makeSlice(NB,l);  �Bt=FU(l,$indexPtr(s.$array,s.$offset+0,NA));l=t[0];j=t[1];  �`    if(!($interfaceIsEqual(j,$ifaceNil))){  �r    u=MJ.nil;v=j;i=u;j=v;return[i,j];    }  ��i=$makeSlice(MJ,l);  ��w=$subslice(s,0,l);x=0;while(true){if(!(x<w.$length)){break;}y=x;z=((x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x]);  ��((y<0||y>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+y]=(z>>0));    x++;}  ��return[i,j];    };	Getgroupssyscall.Errnosyscall.Getgroups
syscall.MJ
syscall.NA
syscall.NBsyscall._Gid_tsyscall.getgroups syscall.SetgroupsCX��CX=$pkg.Setgroups=function(i){var $ptr={},i,j,k,l,m,n,o;j=$ifaceNil;  �    if(i.$length===0){  �    j=FV(0,NA.nil);return j;    }  �7k=$makeSlice(NB,i.$length);  �Wl=i;m=0;while(true){if(!(m<l.$length)){break;}n=m;o=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  �r((n<0||n>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+n]=(o>>>0));    m++;}  ��    j=FV(k.$length,$indexPtr(k.$array,k.$offset+0,NA));return j;    };	Setgroups
syscall.NA
syscall.NBsyscall.Setgroupssyscall.setgroups syscall.ReadDirentCY�CY=$pkg.ReadDirent=function(i,j){var $ptr={},i,j,k,l,m,n;k=0;l=$ifaceNil;  ��  ��m=new Uint8Array(8);  �$n=HP(i,j,m);k=n[0];l=n[1];  �N    if(true&&($interfaceIsEqual(l,new ER(22))||$interfaceIsEqual(l,new ER(2)))){  ��l=$ifaceNil;    }  ��return[k,l];    };
ReadDirentsyscall.Errnosyscall.Getdirentriessyscall.ReadDirent (syscall.WaitStatus).Exited��CZ.prototype.Exited=function(){var $ptr={},i;  �i=this.$val;  �*return((i&127)>>>0)===0;    };$ptrType(CZ).prototype.Exited=function(){return new CZ(this.$get()).Exited();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).ExitStatus��CZ.prototype.ExitStatus=function(){var $ptr={},i;  �Ki=this.$val;  �m    if(!((((i&127)>>>0)===0))){  ��return-1;    }  ��return((i>>>8>>>0)>>0);    };$ptrType(CZ).prototype.ExitStatus=function(){return new CZ(this.$get()).ExitStatus();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).Signaled��CZ.prototype.Signaled=function(){var $ptr={},i;  ��i=this.$val;  ��return!((((i&127)>>>0)===127))&&!((((i&127)>>>0)===0));    };$ptrType(CZ).prototype.Signaled=function(){return new CZ(this.$get()).Signaled();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).Signal��CZ.prototype.Signal=function(){var $ptr={},i,j;  �i=this.$val;  �%j=(((i&127)>>>0)>>0);  �>    if((j===127)||(j===0)){  �`return-1;    }  �nreturn j;    };$ptrType(CZ).prototype.Signal=function(){return new CZ(this.$get()).Signal();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).CoreDump��CZ.prototype.CoreDump=function(){var $ptr={},i;  ��i=this.$val;  ��return new CZ(i).Signaled()&&!((((i&128)>>>0)===0));    };$ptrType(CZ).prototype.CoreDump=function(){return new CZ(this.$get()).CoreDump();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).Stopped��CZ.prototype.Stopped=function(){var $ptr={},i;  ��i=this.$val;  ��return(((i&127)>>>0)===127)&&!((((i>>>8>>>0)>>0)===17));    };$ptrType(CZ).prototype.Stopped=function(){return new CZ(this.$get()).Stopped();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).Continued��CZ.prototype.Continued=function(){var $ptr={},i;  �.i=this.$val;  �Oreturn(((i&127)>>>0)===127)&&(((i>>>8>>>0)>>0)===17);    };$ptrType(CZ).prototype.Continued=function(){return new CZ(this.$get()).Continued();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).StopSignal��CZ.prototype.StopSignal=function(){var $ptr={},i;  ��i=this.$val;  ��    if(!new CZ(i).Stopped()){  ��return-1;    }  ��return((i>>>8>>>0)>>0)&255;    };$ptrType(CZ).prototype.StopSignal=function(){return new CZ(this.$get()).StopSignal();};
WaitStatussyscall.WaitStatus (syscall.WaitStatus).TrapCause��CZ.prototype.TrapCause=function(){var $ptr={},i;  ��i=this.$val;  �return-1;    };$ptrType(CZ).prototype.TrapCause=function(){return new CZ(this.$get()).TrapCause();};
WaitStatussyscall.WaitStatus syscall.Wait4DA�DA=$pkg.Wait4=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p;m=0;n=$ifaceNil;  ��  ��o=0;  ��p=FW(i,($ptr.o||($ptr.o=new NC(function(){return o;},function($v){o=$v;}))),k,l);m=p[0];n=p[1];  �*    if(!(j===MQ.nil)){  �@j.$set((o>>>0));    }  �breturn[m,n];    };Wait4
syscall.MQ
syscall.NCsyscall.Wait4syscall._C_intsyscall.wait4 !(*syscall.SockaddrInet4).sockaddr�	EW.ptr.prototype.sockaddr=function(){var $ptr={},i,j,k,l,m,n,o,p,q;  �i=this;  �]    if(i.Port<0||i.Port>65535){  ��return[0,0,new ER(22)];    }  ��i.raw.Len=16;  ��i.raw.Family=2;  ��k=(j=i.raw,(j.$ptr_Port||(j.$ptr_Port=new ND(function(){return this.$target.Port;},function($v){this.$target.Port=$v;},j))));  �k.nilCheck,k[0]=((i.Port>>8>>0)<<24>>>24);  �#k.nilCheck,k[1]=(i.Port<<24>>>24);  �9  �=l=0;while(true){if(!(l<4)){break;}  �_(n=i.raw.Addr,((l<0||l>=n.length)?$throwRuntimeError("index out of range"):n[l]=(m=i.Addr,((l<0||l>=m.length)?$throwRuntimeError("index out of range"):m[l]))));      �W  �Wl=l+(1)>>0;    }  �o=new Uint8Array(16);return[o,(i.raw.Len>>>0),$ifaceNil];    };EW.prototype.sockaddr=function(){return this.$val.sockaddr();};SockaddrInet4	sockaddr~syscall.Errno
syscall.NDsyscall.SockaddrInet4 !(*syscall.SockaddrInet6).sockaddr�(EX.ptr.prototype.sockaddr=function(){var $ptr={},i,j,k,l,m,n,o,p,q;  ��i=this;  �    if(i.Port<0||i.Port>65535){  �,return[0,0,new ER(22)];    }  �Fi.raw.Len=28;  �hi.raw.Family=30;  ��k=(j=i.raw,(j.$ptr_Port||(j.$ptr_Port=new ND(function(){return this.$target.Port;},function($v){this.$target.Port=$v;},j))));  ��k.nilCheck,k[0]=((i.Port>>8>>0)<<24>>>24);  ��k.nilCheck,k[1]=(i.Port<<24>>>24);  ��i.raw.Scope_id=i.ZoneId;  ��  �l=0;while(true){if(!(l<16)){break;}  �%(n=i.raw.Addr,((l<0||l>=n.length)?$throwRuntimeError("index out of range"):n[l]=(m=i.Addr,((l<0||l>=m.length)?$throwRuntimeError("index out of range"):m[l]))));      �  �l=l+(1)>>0;    }  �Eo=new Uint8Array(28);return[o,(i.raw.Len>>>0),$ifaceNil];    };EX.prototype.sockaddr=function(){return this.$val.sockaddr();};SockaddrInet6	sockaddr~syscall.Errno
syscall.NDsyscall.SockaddrInet6  (*syscall.SockaddrUnix).sockaddr�$EY.ptr.prototype.sockaddr=function(){var $ptr={},i,j,k,l,m,n,o,p;  ��i=this;  ��j=i.Name;  ��k=j.length;  ��    if(k>=104||(k===0)){  �return[0,0,new ER(22)];    }  �,i.raw.Len=((3+k>>0)<<24>>>24);  �fi.raw.Family=1;  �  ��l=0;while(true){if(!(l<k)){break;}  ��(m=i.raw.Path,((l<0||l>=m.length)?$throwRuntimeError("index out of range"):m[l]=(j.charCodeAt(l)<<24>>24)));      ��  ��l=l+(1)>>0;    }  ��n=new Uint8Array(106);return[n,(i.raw.Len>>>0),$ifaceNil];    };EY.prototype.sockaddr=function(){return this.$val.sockaddr();};SockaddrUnix	sockaddr~syscall.Errnosyscall.SockaddrUnix $(*syscall.SockaddrDatalink).sockaddr��DX.ptr.prototype.sockaddr=function(){var $ptr={},i,j,k,l,m,n,o;  � i=this;  �F    if(i.Index===0){  �[return[0,0,new ER(22)];    }  �ui.raw.Len=i.Len;  ��i.raw.Family=18;  ��i.raw.Index=i.Index;  ��i.raw.Type=i.Type;  ��i.raw.Nlen=i.Nlen;  ��i.raw.Alen=i.Alen;  �i.raw.Slen=i.Slen;  �  �j=0;while(true){if(!(j<12)){break;}  �B(l=i.raw.Data,((j<0||j>=l.length)?$throwRuntimeError("index out of range"):l[j]=(k=i.Data,((j<0||j>=k.length)?$throwRuntimeError("index out of range"):k[j]))));      �:  �:j=j+(1)>>0;    }  �bm=new Uint8Array(20);return[m,20,$ifaceNil];    };DX.prototype.sockaddr=function(){return this.$val.sockaddr();};SockaddrDatalink	sockaddr~syscall.Errnosyscall.SockaddrDatalink syscall.anyToSockaddrDB�YDB=function(i){var $ptr={},aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  ��j=i.Addr.Family;  ��if(j===18){  �n=new Uint8Array(108);q=(k=n,l=new LA.ptr(),m=new DataView(k.buffer,k.byteOffset),l.Len=m.getUint8(0,true),l.Family=m.getUint8(1,true),l.Index=m.getUint16(2,true),l.Type=m.getUint8(4,true),l.Nlen=m.getUint8(5,true),l.Alen=m.getUint8(6,true),l.Slen=m.getUint8(7,true),l.Data=new($nativeArray($kindInt8))(k.buffer,$min(k.byteOffset+8,k.buffer.byteLength)),l);o=i,p=new DataView(n.buffer,n.byteOffset),o.Addr.Len=p.getUint8(0,true),o.Addr.Family=p.getUint8(1,true),o.Addr.Data=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+2,n.buffer.byteLength)),o.Pad=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+16,n.buffer.byteLength));  �<r=new DX.ptr();  �Zr.Len=q.Len;  �lr.Family=q.Family;  ��r.Index=q.Index;  ��r.Type=q.Type;  ��r.Nlen=q.Nlen;  ��r.Alen=q.Alen;  ��r.Slen=q.Slen;  ��  ��s=0;while(true){if(!(s<12)){break;}  �(u=r.Data,((s<0||s>=u.length)?$throwRuntimeError("index out of range"):u[s]=(t=q.Data,((s<0||s>=t.length)?$throwRuntimeError("index out of range"):t[s]))));      �  �s=s+(1)>>0;    }  �/return[r,$ifaceNil];      �@}else if(j===1){  �Py=new Uint8Array(108);ab=(v=y,w=new KZ.ptr(),x=new DataView(v.buffer,v.byteOffset),w.Len=x.getUint8(0,true),w.Family=x.getUint8(1,true),w.Path=new($nativeArray($kindInt8))(v.buffer,$min(v.byteOffset+2,v.buffer.byteLength)),w);z=i,aa=new DataView(y.buffer,y.byteOffset),z.Addr.Len=aa.getUint8(0,true),z.Addr.Family=aa.getUint8(1,true),z.Addr.Data=new($nativeArray($kindInt8))(y.buffer,$min(y.byteOffset+2,y.buffer.byteLength)),z.Pad=new($nativeArray($kindInt8))(y.buffer,$min(y.byteOffset+16,y.buffer.byteLength));  ��    if(ab.Len<2||ab.Len>106){  ��return[$ifaceNil,new ER(22)];    }  ��ac=new EY.ptr();  ��ad=(ab.Len>>0)-2>>0;  �
  �ae=0;while(true){if(!(ae<ad)){break;}  �&    if((af=ab.Path,((ae<0||ae>=af.length)?$throwRuntimeError("index out of range"):af[ae]))===0){  ��ad=ae;  ��break;    }      �  �ae=ae+(1)>>0;    }  ��ag=$subslice(new MD($sliceToArray(new MD(ab.Path))),0,ad);  ��ac.Name=$bytesToString(ag);  �return[ac,$ifaceNil];      �}else if(j===2){  �#ak=new Uint8Array(108);an=(ah=ak,ai=new KX.ptr(),aj=new DataView(ah.buffer,ah.byteOffset),ai.Len=aj.getUint8(0,true),ai.Family=aj.getUint8(1,true),ai.Port=aj.getUint16(2,true),ai.Addr=new($nativeArray($kindUint8))(ah.buffer,$min(ah.byteOffset+4,ah.buffer.byteLength)),ai.Zero=new($nativeArray($kindInt8))(ah.buffer,$min(ah.byteOffset+8,ah.buffer.byteLength)),ai);al=i,am=new DataView(ak.buffer,ak.byteOffset),al.Addr.Len=am.getUint8(0,true),al.Addr.Family=am.getUint8(1,true),al.Addr.Data=new($nativeArray($kindInt8))(ak.buffer,$min(ak.byteOffset+2,ak.buffer.byteLength)),al.Pad=new($nativeArray($kindInt8))(ak.buffer,$min(ak.byteOffset+16,ak.buffer.byteLength));  �Tao=new EW.ptr();  �oap=(an.$ptr_Port||(an.$ptr_Port=new ND(function(){return this.$target.Port;},function($v){this.$target.Port=$v;},an)));  ��ao.Port=(((ap.nilCheck,ap[0])>>0)<<8>>0)+((ap.nilCheck,ap[1])>>0)>>0;  ��  ��aq=0;while(true){if(!(aq<4)){break;}  ��(as=ao.Addr,((aq<0||aq>=as.length)?$throwRuntimeError("index out of range"):as[aq]=(ar=an.Addr,((aq<0||aq>=ar.length)?$throwRuntimeError("index out of range"):ar[aq]))));      ��  ��aq=aq+(1)>>0;    }  �return[ao,$ifaceNil];      �}else if(j===30){  �'aw=new Uint8Array(108);az=(at=aw,au=new KY.ptr(),av=new DataView(at.buffer,at.byteOffset),au.Len=av.getUint8(0,true),au.Family=av.getUint8(1,true),au.Port=av.getUint16(2,true),au.Flowinfo=av.getUint32(4,true),au.Addr=new($nativeArray($kindUint8))(at.buffer,$min(at.byteOffset+8,at.buffer.byteLength)),au.Scope_id=av.getUint32(24,true),au);ax=i,ay=new DataView(aw.buffer,aw.byteOffset),ax.Addr.Len=ay.getUint8(0,true),ax.Addr.Family=ay.getUint8(1,true),ax.Addr.Data=new($nativeArray($kindInt8))(aw.buffer,$min(aw.byteOffset+2,aw.buffer.byteLength)),ax.Pad=new($nativeArray($kindInt8))(aw.buffer,$min(aw.byteOffset+16,aw.buffer.byteLength));  �Xba=new EX.ptr();  �sbb=(az.$ptr_Port||(az.$ptr_Port=new ND(function(){return this.$target.Port;},function($v){this.$target.Port=$v;},az)));  ��ba.Port=(((bb.nilCheck,bb[0])>>0)<<8>>0)+((bb.nilCheck,bb[1])>>0)>>0;  ��ba.ZoneId=az.Scope_id;  ��  ��bc=0;while(true){if(!(bc<16)){break;}  �(be=ba.Addr,((bc<0||bc>=be.length)?$throwRuntimeError("index out of range"):be[bc]=(bd=az.Addr,((bc<0||bc>=bd.length)?$throwRuntimeError("index out of range"):bd[bc]))));      ��  ��bc=bc+(1)>>0;    }  �#return[ba,$ifaceNil];    }  �6return[$ifaceNil,new ER(47)];    };anyToSockaddrsyscall.Errno
syscall.MD
syscall.NDsyscall.RawSockaddrDatalinksyscall.RawSockaddrInet4syscall.RawSockaddrInet6syscall.RawSockaddrUnixsyscall.SockaddrDatalinksyscall.SockaddrInet4syscall.SockaddrInet6syscall.SockaddrUnixsyscall.anyToSockaddr syscall.AcceptDC�%DC=$pkg.Accept=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;j=0;k=$ifaceNil;l=$ifaceNil;  ��  ��m=$clone(new LC.ptr(),LC);  ��  ��n=108;  ��o=FX(i,m,($ptr.n||($ptr.n=new NE(function(){return n;},function($v){n=$v;}))));j=o[0];l=o[1];  ��    if(!($interfaceIsEqual(l,$ifaceNil))){  ��return[j,k,l];    }  �	    if(true&&(n===0)){  ��HA(j);  ��    p=0;q=$ifaceNil;r=new ER(53);j=p;k=q;l=r;return[j,k,l];    }  �s=DB(m);k=s[0];l=s[1];  �-    if(!($interfaceIsEqual(l,$ifaceNil))){  �?HA(j);  �Lj=0;    }  �Xreturn[j,k,l];    };Acceptsyscall.Acceptsyscall.Closesyscall.Errno
syscall.NEsyscall.RawSockaddrAnysyscall._Socklensyscall.acceptsyscall.anyToSockaddr syscall.GetsocknameDD�WDD=$pkg.Getsockname=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil;k=$ifaceNil;  ��  ��l=$clone(new LC.ptr(),LC);  ��  ��m=108;  ��  ��k=GE(i,l,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));    if(!($interfaceIsEqual(k,$ifaceNil))){  �
return[j,k];    }  �u  �    n=DB(l);j=n[0];k=n[1];return[j,k];    };Getsocknamesyscall.Getsockname
syscall.NEsyscall.RawSockaddrAnysyscall.anyToSockaddrsyscall.getsockname syscall.GetsockoptByteDE�4DE=$pkg.GetsockoptByte=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=0;m=$ifaceNil;  ��  ��n=0;  ��o=1;  ��m=GB(i,j,k,($ptr.n||($ptr.n=new MF(function(){return n;},function($v){n=$v;}))),($ptr.o||($ptr.o=new NE(function(){return o;},function($v){o=$v;}))));  �     p=n;q=m;l=p;m=q;return[l,m];    };GetsockoptBytesyscall.GetsockoptByte
syscall.MF
syscall.NEsyscall.getsockopt syscall.GetsockoptInet4AddrDF�DF=$pkg.GetsockoptInet4Addr=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=NF.zero();m=$ifaceNil;  �|n=4;  ��m=GB(i,j,k,$sliceToArray(new MD(l)),($ptr.n||($ptr.n=new NE(function(){return n;},function($v){n=$v;}))));  ��    o=$clone(l,NF);p=m;$copy(l,o,NF);m=p;return[l,m];    };GetsockoptInet4Addrsyscall.GetsockoptInet4Addr
syscall.MD
syscall.NE
syscall.NFsyscall.getsockopt syscall.GetsockoptIPMreqDG��DG=$pkg.GetsockoptIPMreq=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;  �,  �0l=$clone(new LG.ptr(),LG);  �>m=8;  �`n=new Uint8Array(8);q=GB(i,j,k,n,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));o=l,p=new DataView(n.buffer,n.byteOffset),o.Multiaddr=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+0,n.buffer.byteLength)),o.Interface=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+4,n.buffer.byteLength));  ¤return[l,q];    };GetsockoptIPMreqsyscall.GetsockoptIPMreqsyscall.IPMreq
syscall.NEsyscall.getsockopt syscall.GetsockoptIPv6MreqDH��DH=$pkg.GetsockoptIPv6Mreq=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;  ��  � l=$clone(new LH.ptr(),LH);  �m=20;  �4n=new Uint8Array(20);q=GB(i,j,k,n,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));o=l,p=new DataView(n.buffer,n.byteOffset),o.Multiaddr=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+0,n.buffer.byteLength)),o.Interface=p.getUint32(16,true);  �xreturn[l,q];    };GetsockoptIPv6Mreqsyscall.GetsockoptIPv6Mreqsyscall.IPv6Mreq
syscall.NEsyscall.getsockopt syscall.GetsockoptIPv6MTUInfoDI�IDI=$pkg.GetsockoptIPv6MTUInfo=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;  ��  ��l=$clone(new LM.ptr(),LM);  ��m=32;  �n=new Uint8Array(32);q=GB(i,j,k,n,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));o=l,p=new DataView(n.buffer,n.byteOffset),o.Addr.Len=p.getUint8(0,true),o.Addr.Family=p.getUint8(1,true),o.Addr.Port=p.getUint16(2,true),o.Addr.Flowinfo=p.getUint32(4,true),o.Addr.Addr=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+8,n.buffer.byteLength)),o.Addr.Scope_id=p.getUint32(24,true),o.Mtu=p.getUint32(28,true);  �Xreturn[l,q];    };GetsockoptIPv6MTUInfosyscall.GetsockoptIPv6MTUInfosyscall.IPv6MTUInfo
syscall.NEsyscall.getsockopt syscall.GetsockoptICMPv6FilterDJ��DJ=$pkg.GetsockoptICMPv6Filter=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;  ĸ  ļl=$clone(new LN.ptr(),LN);  ��m=32;  ��n=new Uint8Array(32);q=GB(i,j,k,n,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));o=l,p=new DataView(n.buffer,n.byteOffset),o.Filt=new($nativeArray($kindUint32))(n.buffer,$min(n.byteOffset+0,n.buffer.byteLength));  �<return[l,q];    };GetsockoptICMPv6Filtersyscall.GetsockoptICMPv6Filtersyscall.ICMPv6Filter
syscall.NEsyscall.getsockopt syscall.RecvmsgDK��DK=$pkg.Recvmsg=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;m=0;n=0;o=0;p=$ifaceNil;q=$ifaceNil;  ��  ��r=$clone(new LI.ptr(),LI);  ��  ��s=$clone(new LC.ptr(),LC);  ��t=new Uint8Array(108);r.Name=t;u=s,v=new DataView(t.buffer,t.byteOffset),u.Addr.Len=v.getUint8(0,true),u.Addr.Family=v.getUint8(1,true),u.Addr.Data=new($nativeArray($kindInt8))(t.buffer,$min(t.byteOffset+2,t.buffer.byteLength)),u.Pad=new($nativeArray($kindInt8))(t.buffer,$min(t.byteOffset+16,t.buffer.byteLength));  �r.Namelen=108;  �?  �Cw=$clone(new LF.ptr(),LF);  �N    if(j.$length>0){  �`w.Base=$sliceToArray(j);  ǌw.SetLen(j.$length);    }  ǣ  ǧx=0;  ǳ    if(k.$length>0){  ��    if(j.$length===0){  �w.Base=($ptr.x||($ptr.x=new MF(function(){return x;},function($v){x=$v;})));  �w.SetLen(1);    }  �*r.Control=$sliceToArray(k);  �[r.SetControllen(k.$length);    }  �{r.Iov=w;  ȋr.Iovlen=1;  ț  Ȟy=GJ(i,r,l);m=y[0];q=y[1];    if(!($interfaceIsEqual(q,$ifaceNil))){  ��return[m,n,o,p,q];    }  ��n=(r.Controllen>>0);  ��o=(r.Flags>>0);  �U    if(!((s.Addr.Family===0))){  �yz=DB(s);p=z[0];q=z[1];    }  ɝreturn[m,n,o,p,q];    };Recvmsgsyscall.Iovec
syscall.MFsyscall.Msghdrsyscall.RawSockaddrAnysyscall.Recvmsgsyscall.anyToSockaddrsyscall.recvmsg syscall.SendmsgDL�DL=$pkg.Sendmsg=function(i,j,k,l,m){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p;n=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  �3p=DM(i,j,k,l,m);$s=1;case 1:if(p&&p.$blocking){p=p();}o=p;n=o[1];  �]return n;    case-1:}return;}};$f.$blocking=true;return $f;};Sendmsgsyscall.Sendmsgsyscall.SendmsgN syscall.SendmsgNDM��DM=$pkg.SendmsgN=function(i,j,k,l,m){var $ptr={},$r,$s=0,$this=this,aa,ab,ac,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;n=0;o=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  ʺ  ʾp=0;  ��  ��q=0;  ��if(!($interfaceIsEqual(l,$ifaceNil))){$s=1;continue;}$s=2;continue;    case 1:  ��s=l.sockaddr();$s=3;case 3:if(s&&s.$blocking){s=s();}r=s;p=r[0];q=r[1];o=r[2];  �    if(!($interfaceIsEqual(o,$ifaceNil))){  �,    t=0;u=o;n=t;o=u;return[n,o];    }    case 2:  �B  �Fv=$clone(new LI.ptr(),LI);  �Rv.Name=p;  �{v.Namelen=(q>>>0);  ˘  ˜w=$clone(new LF.ptr(),LF);  ˧    if(j.$length>0){  ˹w.Base=$sliceToArray(j);  ��w.SetLen(j.$length);    }  ��  � x=0;  �    if(k.$length>0){  �C    if(j.$length===0){  �Ww.Base=($ptr.x||($ptr.x=new MF(function(){return x;},function($v){x=$v;})));  �lw.SetLen(1);    }  ̀v.Control=$sliceToArray(k);  ̱v.SetControllen(k.$length);    }  ��v.Iov=w;  ��v.Iovlen=1;  ��  ��y=GK(i,v,m);n=y[0];o=y[1];    if(!($interfaceIsEqual(o,$ifaceNil))){  �&    z=0;aa=o;n=z;o=aa;return[n,o];    }  �8    if(k.$length>0&&(j.$length===0)){  �[n=0;    }  �e    ab=n;ac=$ifaceNil;n=ab;o=ac;return[n,o];    case-1:}return;}};$f.$blocking=true;return $f;};SendmsgNsyscall.Iovec
syscall.MFsyscall.Msghdrsyscall.SendmsgNsyscall.sendmsgsyscall.sockaddr~ syscall.KeventDN�*DN=$pkg.Kevent=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;m=0;n=$ifaceNil;  �Q  �Uo=0;p=0;q=o;r=p;  �s    if(j.$length>0){  ΋q=$sliceToArray(j);    }  δ    if(k.$length>0){  ��r=$sliceToArray(k);    }  ��    s=GL(i,q,j.$length,r,k.$length,l);m=s[0];n=s[1];return[m,n];    };Keventsyscall.Keventsyscall.kevent syscall.SysctlDO��DO=$pkg.Sysctl=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;j="";k=$ifaceNil;  � l=DY(i);m=l[0];k=l[1];  �    if(!($interfaceIsEqual(k,$ifaceNil))){  �/    n="";o=k;j=n;k=o;return[j,k];    }  �Rp=0;  �c  �fk=GM(m,MF.nil,($ptr.p||($ptr.p=new MT(function(){return p;},function($v){p=$v;}))),MF.nil,0);    if(!($interfaceIsEqual(k,$ifaceNil))){  Й    q="";r=k;j=q;k=r;return[j,k];    }  Ь    if(p===0){  к    s="";t=$ifaceNil;j=s;k=t;return[j,k];    }  ��u=$makeSlice(MD,p);  �	  �k=GM(m,$indexPtr(u.$array,u.$offset+0,MF),($ptr.p||($ptr.p=new MT(function(){return p;},function($v){p=$v;}))),MF.nil,0);    if(!($interfaceIsEqual(k,$ifaceNil))){  �C    v="";w=k;j=v;k=w;return[j,k];    }  �w    if(p>0&&((x=p-1>>>0,((x<0||x>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+x]))===0)){  њ  њp=p-(1)>>>0;        }  Ѣ    y=$bytesToString($subslice(u,0,p));z=$ifaceNil;j=y;k=z;return[j,k];    };Sysctl
syscall.MD
syscall.MF
syscall.MTsyscall.Sysctlsyscall.nametomibsyscall.sysctl syscall.SysctlUint32DP��DP=$pkg.SysctlUint32=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;j=0;k=$ifaceNil;  � l=DY(i);m=l[0];k=l[1];  �=    if(!($interfaceIsEqual(k,$ifaceNil))){  �O    n=0;o=k;j=n;k=o;return[j,k];    }  ҅p=4;  Җq=$makeSlice(MD,4);  Ү  ұk=GM(m,$indexPtr(q.$array,q.$offset+0,MF),($ptr.p||($ptr.p=new MT(function(){return p;},function($v){p=$v;}))),MF.nil,0);    if(!($interfaceIsEqual(k,$ifaceNil))){  ��    r=0;s=k;j=r;k=s;return[j,k];    }  ��    if(!((p===4))){  �    t=0;u=new ER(5);j=t;k=u;return[j,k];    }  �    v=(0>=q.$length?$throwRuntimeError("index out of range"):q.$array[q.$offset+0]);w=$ifaceNil;j=v;k=w;return[j,k];    };SysctlUint32syscall.Errno
syscall.MD
syscall.MF
syscall.MTsyscall.SysctlUint32syscall.nametomibsyscall.sysctl syscall.UtimesDQ��DQ=$pkg.Utimes=function(i,j){var $ptr={},i,j,k;k=$ifaceNil;  ӿ    if(!((j.$length===2))){  ��    k=new ER(22);return k;    }  ��    k=GN(i,$sliceToArray(j));return k;    };Utimessyscall.Errnosyscall.Utimessyscall.utimes syscall.UtimesNanoDR��DR=$pkg.UtimesNano=function(i,j){var $ptr={},i,j,k;  ��    if(!((j.$length===2))){  ��return new ER(22);    }  �fk=$toNativeArray($kindStruct,[$clone(EL(EI((0>=j.$length?$throwRuntimeError("index out of range"):j.$array[j.$offset+0]))),KJ),$clone(EL(EI((1>=j.$length?$throwRuntimeError("index out of range"):j.$array[j.$offset+1]))),KJ)]);  ��return GN(i,$sliceToArray(new MD(k)));    };
UtimesNanosyscall.Errno
syscall.MDsyscall.NsecToTimevalsyscall.TimespecToNsecsyscall.Timevalsyscall.UtimesNanosyscall.utimes syscall.FutimesDS��DS=$pkg.Futimes=function(i,j){var $ptr={},i,j,k;k=$ifaceNil;  �t    if(!((j.$length===2))){  ֈ    k=new ER(22);return k;    }  ֚    k=GO(i,$sliceToArray(j));return k;    };Futimessyscall.Errnosyscall.Futimessyscall.futimes syscall.MmapDU�1DU=$pkg.Mmap=function(i,j,k,l,m){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p,q;n=MD.nil;o=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  �)    q=DT.Mmap(i,j,k,l,m);$s=1;case 1:if(q&&q.$blocking){q=q();}p=q;n=p[0];o=p[1];return[n,o];    case-1:}return;}};$f.$blocking=true;return $f;};Mmap
syscall.MDsyscall.Mmapsyscall.mapper syscall.MunmapDV��DV=$pkg.Munmap=function(i){var $ptr={},$r,$s=0,$this=this,i,j,k;j=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0:  م    k=DT.Munmap(i);$s=1;case 1:if(k&&k.$blocking){k=k();}j=k;return j;    case-1:}return;}};$f.$blocking=true;return $f;};Munmapsyscall.Munmapsyscall.mapper syscall.GetwdDW�8DW=$pkg.Getwd=function(){var $ptr={},i,j,k,l,m;  �	i=$makeSlice(MD,2048);  �$j=ED(".",new EC.ptr(0,0,134217728,0,0,0,0),i,0);k=j[0];l=j[1];  �s    if($interfaceIsEqual(l,$ifaceNil)&&(k.$length===1)&&(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]).$length>=2){  ܮm=$bytesToString((0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]));  �'    if((m.charCodeAt(0)===47)&&(m.charCodeAt((m.length-1>>0))===0)){  �Rreturn[m.substring(0,(m.length-1>>0)),$ifaceNil];    }    }  ��return["",new ER(45)];    };Getwdsyscall.Errnosyscall.Getwd
syscall.MDsyscall.attrListsyscall.getAttrList syscall.nametomibDY��DY=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;j=MS.nil;k=$ifaceNil;  ��  �  �l=$clone(NG.zero(),NG);  ��m=48;  ��n=$sliceToArray(new MD(l));  �o=CT(i);p=o[0];k=o[1];  �5    if(!($interfaceIsEqual(k,$ifaceNil))){  �G    q=MS.nil;r=k;j=q;k=r;return[j,k];    }  ��  ��k=GM(new MS([0,3]),n,($ptr.m||($ptr.m=new MT(function(){return m;},function($v){m=$v;}))),$indexPtr(p.$array,p.$offset+0,MF),(i.length>>>0));    if(!($interfaceIsEqual(k,$ifaceNil))){  �    s=MS.nil;t=k;j=s;k=t;return[j,k];    }  �*    u=$subslice(new MS(l),0,(v=m/4,(v===v&&v!==1/0&&v!==-1/0)?v>>>0:$throwRuntimeError("integer divide by zero")));w=$ifaceNil;j=u;k=w;return[j,k];    };	nametomib	syscall.ByteSliceFromString
syscall.MD
syscall.MF
syscall.MS
syscall.MT
syscall.NGsyscall._C_intsyscall.nametomibsyscall.sysctl syscall.ParseDirentDZ�lDZ=$pkg.ParseDirent=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;l=0;m=0;n=ME.nil;  �~o=i.$length;  �while(true){if(!(!((j===0))&&i.$length>0)){break;}p=[undefined];  �p[0]=(q=$sliceToArray(i),r=new KW.ptr(),s=new DataView(q.buffer,q.byteOffset),r.Ino=new $Uint64(s.getUint32(4,true),s.getUint32(0,true)),r.Seekoff=new $Uint64(s.getUint32(12,true),s.getUint32(8,true)),r.Reclen=s.getUint16(16,true),r.Namlen=s.getUint16(18,true),r.Type=s.getUint8(20,true),r.Name=new($nativeArray($kindInt8))(q.buffer,$min(q.byteOffset+21,q.buffer.byteLength)),r.Pad_cgo_0=new($nativeArray($kindUint8))(q.buffer,$min(q.byteOffset+1045,q.buffer.byteLength)),r);  ��    if(p[0].Reclen===0){  ��i=MD.nil;  �break;    }  �i=$subslice(i,p[0].Reclen);  �3    if((t=p[0].Ino,(t.$high===0&&t.$low===0))){  �hcontinue;    }  �wu=$sliceToArray(new MD(p[0].Name));  �  �v=$bytesToString($subslice(new MD(u),0,p[0].Namlen));  ��    if(v==="."||v===".."){  �continue;    }  �"  �"j=j-(1)>>0;      �*  �*m=m+(1)>>0;      �4k=$append(k,v);    }  �T    w=o-i.$length>>0;x=m;y=k;l=w;m=x;n=y;return[l,m,n];    };ParseDirentsyscall.Dirent
syscall.MD
syscall.MEsyscall.ParseDirent syscall.PtraceAttachEAfEA=$pkg.PtraceAttach=function(i){var $ptr={},i,j;j=$ifaceNil;  ��    j=GQ(10,i,0,0);return j;    };PtraceAttachsyscall.PtraceAttachsyscall.ptrace syscall.PtraceDetachEBfEB=$pkg.PtraceDetach=function(i){var $ptr={},i,j;j=$ifaceNil;  �D    j=GQ(11,i,0,0);return j;    };PtraceDetachsyscall.PtraceDetachsyscall.ptrace syscall.getAttrListED�:ED=function(i,j,k,l){var $ptr={},aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;m=NH.nil;n=$ifaceNil;  �mj=$clone(j,EC);  �    if(k.$length<4){  ��    o=NH.nil;p=E.New("attrBuf too small");m=o;n=p;return[m,n];    }  �j.bitmapCount=5;  �1  �5q=MF.nil;  �@r=V(i);q=r[0];n=r[1];  �d    if(!($interfaceIsEqual(n,$ifaceNil))){  �v    s=NH.nil;t=n;m=s;n=t;return[m,n];    }  �v=new Uint8Array(24);u=S(220,q,v,$sliceToArray(k),(k.$length>>>0),(l>>>0),0);y=u[2];w=j,x=new DataView(v.buffer,v.byteOffset),w.bitmapCount=x.getUint16(0,true),w._$1=x.getUint16(2,true),w.CommonAttr=x.getUint32(4,true),w.VolAttr=x.getUint32(8,true),w.DirAttr=x.getUint32(12,true),w.FileAttr=x.getUint32(16,true),w.Forkattr=x.getUint32(20,true);  �XK(q);  �r    if(!((y===0))){  �    z=NH.nil;aa=new ER(y);m=z;n=aa;return[m,n];    }  �ab=(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]);  �Wac=k;  �g    if((ab>>0)<k.$length){  �ac=$subslice(ac,0,ab);    }  �ac=$subslice(ac,4);  ��  ��ad=0;while(true){if(!((ad>>0)<ac.$length)){break;}ae=[undefined];  ��ae[0]=$subslice(ac,ad);  �    if(ae[0].$length<8){  �    af=m;ag=E.New("truncated attribute header");m=af;n=ag;return[m,n];    }  �[ah=(0>=ae[0].$length?$throwRuntimeError("index out of range"):ae[0].$array[ae[0].$offset+0]);  �ai=(4>=ae[0].$length?$throwRuntimeError("index out of range"):ae[0].$array[ae[0].$offset+4]);  ��    if(ah<0||((ah>>>0)+ai>>>0)>(ac.$length>>>0)){  �    aj=m;ak=E.New("truncated results; attrBuf too small");m=aj;n=ak;return[m,n];    }  �Kal=(ah>>>0)+ai>>>0;  �mm=$append(m,$subslice(ac,ah,al));  �ad=al;  �  �an=(am=ad%4,am===am?am:$throwRuntimeError("integer divide by zero"));    if(!((an===0))){  �  �ad=ad+(((4-an>>>0)))>>>0;        }    }  ��return[m,n];    };getAttrList

errors.Newsyscall.BytePtrFromStringsyscall.Errno
syscall.MD
syscall.MF
syscall.NHsyscall.Syscall6syscall.attrListsyscall.getAttrListsyscall.use syscall.PipeEE�LEE=$pkg.Pipe=function(i){var $ptr={},i,j,k;j=$ifaceNil;  �&    if(!((i.$length===2))){  �9    j=new ER(22);return j;    }  �Kk=GR();(0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0]=k[0]);(1>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+1]=k[1]);j=k[2];  �ereturn j;    };Pipesyscall.Errnosyscall.Pipesyscall.pipe syscall.GetfsstatEF�mEF=$pkg.Getfsstat=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r;k=0;l=$ifaceNil;  ��  ��m=0;  ��  ��n=0;  ��    if(i.$length>0){  ��m=$sliceToArray(i);  �n=(o=(i.$length>>>0),(((2168>>>16<<16)*o>>>0)+(2168<<16>>>16)*o)>>>0);    }  �Lp=R(347,m,n,(j>>>0));q=p[0];r=p[2];  �k=(q>>0);  �    if(!((r===0))){  �l=new ER(r);    }  ��return[k,l];    };	Getfsstatsyscall.Errnosyscall.Getfsstatsyscall.Syscall syscall.KillEGdEG=$pkg.Kill=function(i,j){var $ptr={},i,j,k;k=$ifaceNil;  �H    k=GS(i,(j>>0),1);return k;    };Killsyscall.Killsyscall.kill syscall.GetpagesizeEHCEH=$pkg.Getpagesize=function(){var $ptr={}; Mreturn 4096;    };Getpagesizesyscall.Getpagesize syscall.TimespecToNsecEI��EI=$pkg.TimespecToNsec=function(i){var $ptr={},i,j,k; pi=$clone(i,KI); �return(j=$mul64(i.Sec,new $Int64(0,1000000000)),k=i.Nsec,new $Int64(j.$high+k.$high,j.$low+k.$low));    };TimespecToNsecsyscall.Timespecsyscall.TimespecToNsec syscall.NsecToTimespecEJ��EJ=$pkg.NsecToTimespec=function(i){var $ptr={},i,j;j=new KI.ptr(); �j.Sec=$div64(i,new $Int64(0,1000000000),false); �j.Nsec=$div64(i,new $Int64(0,1000000000),true); return j;    };NsecToTimespecsyscall.NsecToTimespecsyscall.Timespec syscall.TimevalToNsecEK��EK=$pkg.TimevalToNsec=function(i){var $ptr={},i,j,k; +i=$clone(i,KJ); ?return(j=$mul64(i.Sec,new $Int64(0,1000000000)),k=$mul64(new $Int64(0,i.Usec),new $Int64(0,1000)),new $Int64(j.$high+k.$high,j.$low+k.$low));    };TimevalToNsecsyscall.Timevalsyscall.TimevalToNsec syscall.NsecToTimevalEL�_EL=$pkg.NsecToTimeval=function(i){var $ptr={},i,j,k,l;j=new KJ.ptr(); � �i=(k=new $Int64(0,999),new $Int64(i.$high+k.$high,i.$low+k.$low));     �j.Usec=((l=$div64($div64(i,new $Int64(0,1000000000),true),new $Int64(0,1000),false),l.$low+((l.$high>>31)*4294967296))>>0); �j.Sec=$div64(i,new $Int64(0,1000000000),false); return j;    };NsecToTimevalsyscall.NsecToTimevalsyscall.Timeval syscall.GettimeofdayEM��EM=$pkg.Gettimeofday=function(i){var $ptr={},i,j,k,l,m;j=$ifaceNil; k=KD(i);l=k[0];m=k[1];j=k[2]; 'i.Sec=l; 5i.Usec=m; E    j=j;return j;    };Gettimeofdaysyscall.Gettimeofdaysyscall.gettimeofday syscall.SetKeventEN��EN=$pkg.SetKevent=function(i,j,k,l){var $ptr={},i,j,k,l; �i.Ident=new $Uint64(0,j); �i.Filter=(k<<16>>16); �i.Flags=(l<<16>>>16);    };	SetKeventsyscall.SetKevent (*syscall.Iovec).SetLen��LF.ptr.prototype.SetLen=function(i){var $ptr={},i,j; �j=this; �j.Len=new $Uint64(0,i);    };LF.prototype.SetLen=function(i){return this.$val.SetLen(i);};Iovecsyscall.Iovec (*syscall.Msghdr).SetControllen��LI.ptr.prototype.SetControllen=function(i){var $ptr={},i,j; j=this; Gj.Controllen=(i>>>0);    };LI.prototype.SetControllen=function(i){return this.$val.SetControllen(i);};Msghdrsyscall.Msghdr (*syscall.Cmsghdr).SetLen��LJ.ptr.prototype.SetLen=function(i){var $ptr={},i,j; sj=this; �j.Len=(i>>>0);    };LJ.prototype.SetLen=function(i){return this.$val.SetLen(i);};Cmsghdrsyscall.Cmsghdr syscall.sendfileEO�=EO=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p,q;m=0;n=$ifaceNil;  o=new $Uint64(0,l); +p=S(337,(j>>>0),(i>>>0),(k.$get().$low>>>0),($ptr.o||($ptr.o=new NI(function(){return o;},function($v){o=$v;}))),0,0);q=p[2]; �m=(o.$low>>0); �    if(!((q===0))){ �n=new ER(q);    } �return[m,n];    };sendfilesyscall.Errno
syscall.NIsyscall.Syscall6syscall.sendfile syscall.Syscall9EPZEP=$pkg.Syscall9=function(){$panic("Native function not implemented: syscall.Syscall9");};Syscall9syscall.Syscall9 (*syscall.mmapper).Mmap��EQ.ptr.prototype.Mmap=function(i,j,k,l,m){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,aa,ab,ac,ad,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;n=MD.nil;o=$ifaceNil;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0: �p=$this; ,    if(k<=0){ ?    q=MD.nil;r=new ER(22);n=q;o=r;return[n,o];    } ut=p.mmap(0,(k>>>0),l,m,i,j);$s=1;case 1:if(t&&t.$blocking){t=t();}s=t;u=s[0];v=s[1]; �    if(!($interfaceIsEqual(v,$ifaceNil))){ �    w=MD.nil;x=v;n=w;o=x;return[n,o];    } �  y=new NJ.ptr(u,k,k); wz=y; �aa=$indexPtr(z.$array,z.$offset+(z.$capacity-1>>0),MF); �$r=p.Mutex.Lock();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} �$deferred.push([$methodVal(p.Mutex,"Unlock"),[]]); �ab=aa;(p.active||$throwRuntimeError("assignment to entry in nil map"))[ab.$key()]={k:ab,v:z};     ac=z;ad=$ifaceNil;n=ac;o=ad;return[n,o];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[n,o];}};$f.$blocking=true;return $f;};EQ.prototype.Mmap=function(i,j,k,l,m){return this.$val.Mmap(i,j,k,l,m);};mmappersyscall.Errno
syscall.MD
syscall.MF
syscall.NJsyscall.mmapper (*syscall.mmapper).Munmap��EQ.ptr.prototype.Munmap=function(i){var $deferred=[],$err=null,$ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p;j=$ifaceNil;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0: k=$this; M    if((i.$length===0)||!((i.$length===i.$capacity))){ }    j=new ER(22);return j;    } �l=$indexPtr(i.$array,i.$offset+(i.$capacity-1>>0),MF); �$r=k.Mutex.Lock();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} �$deferred.push([$methodVal(k.Mutex,"Unlock"),[]]); �n=(m=k.active[l.$key()],m!==undefined?m.v:MD.nil); �    if(n===MD.nil||!($indexPtr(n.$array,n.$offset+0,MF)===$indexPtr(i.$array,i.$offset+0,MF))){     j=new ER(22);return j;    } T Wo=k.munmap($sliceToArray(n),(n.$length>>>0));$s=2;case 2:if(o&&o.$blocking){o=o();}p=o;if(!($interfaceIsEqual(p,$ifaceNil))){$s=3;continue;}$s=4;continue;    case 3: �    j=p;return j;    case 4: �delete k.active[l.$key()]; �    j=$ifaceNil;return j;    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return j;}};$f.$blocking=true;return $f;};EQ.prototype.Munmap=function(i){return this.$val.Munmap(i);};mmappersyscall.Errno
syscall.MD
syscall.MFsyscall.mmapper (syscall.Errno).Error�TER.prototype.Error=function(){var $ptr={},i,j; �i=this.$val;     if(0<=(i>>0)&&(i>>0)<106){ @j=((i<0||i>=FS.length)?$throwRuntimeError("index out of range"):FS[i]); Q    if(!(j==="")){ areturn j;    }    } rreturn"errno "+CQ((i>>0));    };$ptrType(ER).prototype.Error=function(){return new ER(this.$get()).Error();};Errnosyscall.Errnosyscall.errorssyscall.itoa (syscall.Errno).Temporary��ER.prototype.Temporary=function(){var $ptr={},i; �i=this.$val; �return(i===4)||(i===24)||(i===54)||(i===53)||new ER(i).Timeout();    };$ptrType(ER).prototype.Temporary=function(){return new ER(this.$get()).Temporary();};Errnosyscall.Errno (syscall.Errno).Timeout��ER.prototype.Timeout=function(){var $ptr={},i; i=this.$val; 3return(i===35)||(i===35)||(i===60);    };$ptrType(ER).prototype.Timeout=function(){return new ER(this.$get()).Timeout();};Errnosyscall.Errno (syscall.Signal).Signal��ES.prototype.Signal=function(){var $ptr={},i; �i=this.$val;    };$ptrType(ES).prototype.Signal=function(){return new ES(this.$get()).Signal();};Signalsyscall.Signal (syscall.Signal).String�RES.prototype.String=function(){var $ptr={},i,j; i=this.$val;     if(0<=i&&(i>>0)<32){ Fj=((i<0||i>=FT.length)?$throwRuntimeError("index out of range"):FT[i]); Z    if(!(j==="")){ lreturn j;    }    } return"signal "+CQ((i>>0));    };$ptrType(ES).prototype.String=function(){return new ES(this.$get()).String();};Signalsyscall.Signalsyscall.itoasyscall.signals syscall.ReadET{ET=$pkg.Read=function(i,j){var $ptr={},i,j,k,l,m;k=0;l=$ifaceNil; �m=IV(i,j);k=m[0];l=m[1]; �  zreturn[k,l];    };Readsyscall.Readsyscall.read syscall.WriteEU��EU=$pkg.Write=function(i,j){var $ptr={},i,j,k,l,m;k=0;l=$ifaceNil;  �  �m=JY(i,j);k=m[0];l=m[1]; ! !Wreturn[k,l];    };Writesyscall.Writesyscall.write syscall.BindEZ�zEZ=$pkg.Bind=function(i,j){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o;k=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0: #�m=j.sockaddr();$s=1;case 1:if(m&&m.$blocking){m=m();}l=m;n=l[0];o=l[1];k=l[2]; #�    if(!($interfaceIsEqual(k,$ifaceNil))){ #�    k=k;return k;    } #�    k=FY(i,n,o);return k;    case-1:}return;}};$f.$blocking=true;return $f;};Bindsyscall.Bindsyscall.bindsyscall.sockaddr~ syscall.ConnectFA�}FA=$pkg.Connect=function(i,j){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o;k=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0: $m=j.sockaddr();$s=1;case 1:if(m&&m.$blocking){m=m();}l=m;n=l[0];o=l[1];k=l[2]; $0    if(!($interfaceIsEqual(k,$ifaceNil))){ $B    k=k;return k;    } $Q    k=FZ(i,n,o);return k;    case-1:}return;}};$f.$blocking=true;return $f;};Connectsyscall.Connectsyscall.connectsyscall.sockaddr~ syscall.GetpeernameFB�RFB=$pkg.Getpeername=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil;k=$ifaceNil; $� $�l=$clone(new LC.ptr(),LC); $� $�m=108; $� $�k=GD(i,l,($ptr.m||($ptr.m=new NE(function(){return m;},function($v){m=$v;}))));    if(!($interfaceIsEqual(k,$ifaceNil))){ %return[j,k];    } %"    n=DB(l);j=n[0];k=n[1];return[j,k];    };Getpeernamesyscall.Getpeername
syscall.NEsyscall.RawSockaddrAnysyscall.anyToSockaddrsyscall.getpeername syscall.GetsockoptIntFC�8FC=$pkg.GetsockoptInt=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=0;m=$ifaceNil; %� %�n=0; %�o=4; %�m=GB(i,j,k,($ptr.n||($ptr.n=new NK(function(){return n;},function($v){n=$v;}))),($ptr.o||($ptr.o=new NE(function(){return o;},function($v){o=$v;})))); %�    p=(n>>0);q=m;l=p;m=q;return[l,m];    };GetsockoptIntsyscall.GetsockoptInt
syscall.NE
syscall.NKsyscall.getsockopt syscall.RecvfromFD��FD=$pkg.Recvfrom=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r;l=0;m=$ifaceNil;n=$ifaceNil; &J &No=$clone(new LC.ptr(),LC); &b &fp=108; &� &�q=GH(i,j,k,o,($ptr.p||($ptr.p=new NE(function(){return p;},function($v){p=$v;}))));l=q[0];n=q[1];    if(!($interfaceIsEqual(n,$ifaceNil))){ &�return[l,m,n];    } &�    if(!((o.Addr.Family===0))){ &�r=DB(o);m=r[0];n=r[1];    } 'return[l,m,n];    };Recvfrom
syscall.NEsyscall.RawSockaddrAnysyscall.Recvfromsyscall.anyToSockaddrsyscall.recvfrom syscall.SendtoFE��FE=$pkg.Sendto=function(i,j,k,l){var $ptr={},$r,$s=0,$this=this,i,j,k,l,m,n,o,p,q;m=$ifaceNil;var $f=function(){s:while(true){switch($s){case 0: 'io=l.sockaddr();$s=1;case 1:if(o&&o.$blocking){o=o();}n=o;p=n[0];q=n[1];m=n[2]; '�    if(!($interfaceIsEqual(m,$ifaceNil))){ '�    m=m;return m;    } '�    m=GI(i,j,k,p,q);return m;    case-1:}return;}};$f.$blocking=true;return $f;};Sendtosyscall.Sendtosyscall.sendtosyscall.sockaddr~ syscall.SetsockoptByteFF��FF=$pkg.SetsockoptByte=function(i,j,k,l){var $ptr={},i,j,k,l,m;m=$ifaceNil; (    m=GC(i,j,k,($ptr.l||($ptr.l=new MF(function(){return l;},function($v){l=$v;}))),1);return m;    };SetsockoptByte
syscall.MFsyscall.SetsockoptBytesyscall.setsockopt syscall.SetsockoptIntFG��FG=$pkg.SetsockoptInt=function(i,j,k,l){var $ptr={},i,j,k,l,m,n;m=$ifaceNil; (� (�n=(l>>0); (�    m=GC(i,j,k,($ptr.n||($ptr.n=new NK(function(){return n;},function($v){n=$v;}))),4);return m;    };SetsockoptInt
syscall.NKsyscall.SetsockoptIntsyscall.setsockopt syscall.SetsockoptInet4AddrFH��FH=$pkg.SetsockoptInet4Addr=function(i,j,k,l){var $ptr={},i,j,k,l,m;m=$ifaceNil; )l=$clone(l,NF); )0    m=GC(i,j,k,$sliceToArray(new MD(l)),4);return m;    };SetsockoptInet4Addr
syscall.MD
syscall.NFsyscall.SetsockoptInet4Addrsyscall.setsockopt syscall.SetsockoptIPMreqFI�uFI=$pkg.SetsockoptIPMreq=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p;m=$ifaceNil; )�    n=new Uint8Array(8);m=GC(i,j,k,n,8);o=l,p=new DataView(n.buffer,n.byteOffset),o.Multiaddr=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+0,n.buffer.byteLength)),o.Interface=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+4,n.buffer.byteLength));return m;    };SetsockoptIPMreqsyscall.SetsockoptIPMreqsyscall.setsockopt syscall.SetsockoptIPv6MreqFJ�=FJ=$pkg.SetsockoptIPv6Mreq=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p;m=$ifaceNil; *N    n=new Uint8Array(20);m=GC(i,j,k,n,20);o=l,p=new DataView(n.buffer,n.byteOffset),o.Multiaddr=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+0,n.buffer.byteLength)),o.Interface=p.getUint32(16,true);return m;    };SetsockoptIPv6Mreqsyscall.SetsockoptIPv6Mreqsyscall.setsockopt syscall.SetsockoptICMPv6FilterFK��FK=$pkg.SetsockoptICMPv6Filter=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o; *�m=new Uint8Array(32);return GC(i,j,k,m,32);    };SetsockoptICMPv6Filtersyscall.SetsockoptICMPv6Filtersyscall.setsockopt syscall.SetsockoptLingerFL��FL=$pkg.SetsockoptLinger=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p;m=$ifaceNil; +}    n=new Uint8Array(8);m=GC(i,j,k,n,8);o=l,p=new DataView(n.buffer,n.byteOffset),o.Onoff=p.getInt32(0,true),o.Linger=p.getInt32(4,true);return m;    };SetsockoptLingersyscall.SetsockoptLingersyscall.setsockopt syscall.SetsockoptStringFM��FM=$pkg.SetsockoptString=function(i,j,k,l){var $ptr={},i,j,k,l,m;m=$ifaceNil; ,    m=GC(i,j,k,$sliceToArray(new MD($stringToBytes(l))),(l.length>>>0));return m;    };SetsockoptString
syscall.MDsyscall.SetsockoptStringsyscall.setsockopt syscall.SetsockoptTimevalFN�pFN=$pkg.SetsockoptTimeval=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p;m=$ifaceNil; ,�    n=new Uint8Array(16);m=GC(i,j,k,n,16);o=l,p=new DataView(n.buffer,n.byteOffset),o.Sec=new $Int64(p.getUint32(4,true),p.getUint32(0,true)),o.Usec=p.getInt32(8,true),o.Pad_cgo_0=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+12,n.buffer.byteLength));return m;    };SetsockoptTimevalsyscall.SetsockoptTimevalsyscall.setsockopt syscall.SocketFO��FO=$pkg.Socket=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=0;m=$ifaceNil; -*    if((i===30)&&$pkg.SocketDisableIPv6){ -Y    n=-1;o=new ER(47);l=n;m=o;return[l,m];    } -up=GA(i,j,k);l=p[0];m=p[1]; -�return[l,m];    };Socketsyscall.Errnosyscall.Socketsyscall.SocketDisableIPv6syscall.socket syscall.SocketpairFP��FP=$pkg.Socketpair=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=MN.zero();m=$ifaceNil; -� -�n=$clone(NL.zero(),NL); -�m=GG(i,j,k,n); .%    if($interfaceIsEqual(m,$ifaceNil)){ .7l[0]=(n[0]>>0); .Ml[1]=(n[1]>>0);    } .ereturn[l,m];    };
Socketpair
syscall.MN
syscall.NLsyscall.Socketpairsyscall.socketpair syscall.SendfileFQ��FQ=$pkg.Sendfile=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o;m=0;n=$ifaceNil; .� /	    o=EO(i,j,k,l);m=o[0];n=o[1];return[m,n];    };Sendfilesyscall.Sendfilesyscall.sendfile syscall.getgroupsFU��FU=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=0;l=$ifaceNil; om=T(79,(i>>>0),j,0);n=m[0];o=m[2]; �k=(n>>0); �    if(!((o===0))){ �l=new ER(o);    } �return[k,l];    };	getgroupssyscall.Errnosyscall.RawSyscallsyscall.getgroups syscall.setgroupsFV��FV=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; ql=T(80,(i>>>0),j,0);m=l[2]; �    if(!((m===0))){ �k=new ER(m);    } �return k;    };	setgroupssyscall.Errnosyscall.RawSyscallsyscall.setgroups syscall.wait4FW�FW=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t;m=0;n=$ifaceNil; �p=new Uint8Array(144);o=S(7,(i>>>0),j,(k>>>0),p,0,0);s=o[0];t=o[2];q=l,r=new DataView(p.buffer,p.byteOffset),q.Utime.Sec=new $Int64(r.getUint32(4,true),r.getUint32(0,true)),q.Utime.Usec=r.getInt32(8,true),q.Utime.Pad_cgo_0=new($nativeArray($kindUint8))(p.buffer,$min(p.byteOffset+12,p.buffer.byteLength)),q.Stime.Sec=new $Int64(r.getUint32(20,true),r.getUint32(16,true)),q.Stime.Usec=r.getInt32(24,true),q.Stime.Pad_cgo_0=new($nativeArray($kindUint8))(p.buffer,$min(p.byteOffset+28,p.buffer.byteLength)),q.Maxrss=new $Int64(r.getUint32(36,true),r.getUint32(32,true)),q.Ixrss=new $Int64(r.getUint32(44,true),r.getUint32(40,true)),q.Idrss=new $Int64(r.getUint32(52,true),r.getUint32(48,true)),q.Isrss=new $Int64(r.getUint32(60,true),r.getUint32(56,true)),q.Minflt=new $Int64(r.getUint32(68,true),r.getUint32(64,true)),q.Majflt=new $Int64(r.getUint32(76,true),r.getUint32(72,true)),q.Nswap=new $Int64(r.getUint32(84,true),r.getUint32(80,true)),q.Inblock=new $Int64(r.getUint32(92,true),r.getUint32(88,true)),q.Oublock=new $Int64(r.getUint32(100,true),r.getUint32(96,true)),q.Msgsnd=new $Int64(r.getUint32(108,true),r.getUint32(104,true)),q.Msgrcv=new $Int64(r.getUint32(116,true),r.getUint32(112,true)),q.Nsignals=new $Int64(r.getUint32(124,true),r.getUint32(120,true)),q.Nvcsw=new $Int64(r.getUint32(132,true),r.getUint32(128,true)),q.Nivcsw=new $Int64(r.getUint32(140,true),r.getUint32(136,true)); m=(s>>0); &    if(!((t===0))){ 5n=new ER(t);    } Breturn[m,n];    };wait4syscall.Errnosyscall.Syscall6syscall.wait4 syscall.acceptFX��FX=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;l=0;m=$ifaceNil; �o=new Uint8Array(108);n=R(30,(i>>>0),o,k);r=n[0];s=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Addr.Len=q.getUint8(0,true),p.Addr.Family=q.getUint8(1,true),p.Addr.Data=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+2,o.buffer.byteLength)),p.Pad=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+16,o.buffer.byteLength)); Nl=(r>>0); \    if(!((s===0))){ km=new ER(s);    } xreturn[l,m];    };acceptsyscall.Errnosyscall.Syscallsyscall.accept syscall.bindFY��FY=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=$ifaceNil; m=R(104,(i>>>0),j,(k>>>0));n=m[2]; W    if(!((n===0))){ fl=new ER(n);    } sreturn l;    };bindsyscall.Errnosyscall.Syscallsyscall.bind syscall.connectFZ��FZ=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=$ifaceNil; 	m=R(98,(i>>>0),j,(k>>>0));n=m[2]; X    if(!((n===0))){ gl=new ER(n);    } treturn l;    };connectsyscall.Errnosyscall.Syscallsyscall.connect syscall.socketGA��GA=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=0;m=$ifaceNil; n=T(97,(i>>>0),(j>>>0),(k>>>0));o=n[0];p=n[2]; Wl=(o>>0); e    if(!((p===0))){ tm=new ER(p);    } �return[l,m];    };socketsyscall.Errnosyscall.RawSyscallsyscall.socket syscall.getsockoptGB��GB=function(i,j,k,l,m){var $ptr={},i,j,k,l,m,n,o,p;n=$ifaceNil; .o=S(118,(i>>>0),(j>>>0),(k>>>0),l,m,0);p=o[2]; �    if(!((p===0))){ �n=new ER(p);    } �return n;    };
getsockoptsyscall.Errnosyscall.Syscall6syscall.getsockopt syscall.setsockoptGC��GC=function(i,j,k,l,m){var $ptr={},i,j,k,l,m,n,o,p;n=$ifaceNil; xo=S(105,(i>>>0),(j>>>0),(k>>>0),l,m,0);p=o[2]; �    if(!((p===0))){ �n=new ER(p);    } return n;    };
setsockoptsyscall.Errnosyscall.Syscall6syscall.setsockopt syscall.getpeernameGD��GD=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=$ifaceNil; �n=new Uint8Array(108);m=T(31,(i>>>0),n,k);q=m[2];o=j,p=new DataView(n.buffer,n.byteOffset),o.Addr.Len=p.getUint8(0,true),o.Addr.Family=p.getUint8(1,true),o.Addr.Data=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+2,n.buffer.byteLength)),o.Pad=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+16,n.buffer.byteLength));     if(!((q===0))){ (l=new ER(q);    } 5return l;    };getpeernamesyscall.Errnosyscall.RawSyscallsyscall.getpeername syscall.getsocknameGE��GE=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=$ifaceNil; �n=new Uint8Array(108);m=T(32,(i>>>0),n,k);q=m[2];o=j,p=new DataView(n.buffer,n.byteOffset),o.Addr.Len=p.getUint8(0,true),o.Addr.Family=p.getUint8(1,true),o.Addr.Data=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+2,n.buffer.byteLength)),o.Pad=new($nativeArray($kindInt8))(n.buffer,$min(n.byteOffset+16,n.buffer.byteLength)); G    if(!((q===0))){ Vl=new ER(q);    } creturn l;    };getsocknamesyscall.Errnosyscall.RawSyscallsyscall.getsockname syscall.ShutdownGF��GF=$pkg.Shutdown=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; �l=R(134,(i>>>0),(j>>>0),0);m=l[2];     if(!((m===0))){ +k=new ER(m);    } 8return k;    };Shutdownsyscall.Errnosyscall.Shutdownsyscall.Syscall syscall.socketpairGG��GG=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o;m=$ifaceNil; �n=U(135,(i>>>0),(j>>>0),(k>>>0),l,0,0);o=n[2]; L    if(!((o===0))){ [m=new ER(o);    } hreturn m;    };
socketpairsyscall.Errnosyscall.RawSyscall6syscall.socketpair syscall.recvfromGH��GH=function(i,j,k,l,m){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v;n=0;o=$ifaceNil;  "p=0; 6    if(j.$length>0){ Hp=$sliceToArray(j);    }else{ pp=new Uint8Array(0);    } �r=new Uint8Array(108);q=S(29,(i>>>0),p,(j.$length>>>0),(k>>>0),r,m);u=q[0];v=q[2];s=l,t=new DataView(r.buffer,r.byteOffset),s.Addr.Len=t.getUint8(0,true),s.Addr.Family=t.getUint8(1,true),s.Addr.Data=new($nativeArray($kindInt8))(r.buffer,$min(r.byteOffset+2,r.buffer.byteLength)),s.Pad=new($nativeArray($kindInt8))(r.buffer,$min(r.byteOffset+16,r.buffer.byteLength)); 3n=(u>>0); @    if(!((v===0))){ Oo=new ER(v);    } \return[n,o];    };recvfromsyscall.Errnosyscall.Syscall6syscall.recvfrom syscall.sendtoGI�1GI=function(i,j,k,l,m){var $ptr={},i,j,k,l,m,n,o,p,q;n=$ifaceNil;  
o=0;     if(j.$length>0){ 2o=$sliceToArray(j);    }else{ \o=new Uint8Array(0);    } }p=S(133,(i>>>0),o,(j.$length>>>0),(k>>>0),l,(m>>>0));q=p[2]; �    if(!((q===0))){ 
n=new ER(q);    } return n;    };sendtosyscall.Errnosyscall.Syscall6syscall.sendto syscall.recvmsgGJ�;GJ=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;l=0;m=$ifaceNil; �o=new Uint8Array(36);n=R(27,(i>>>0),o,(k>>>0));r=n[0];s=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Namelen=q.getUint32(4,true),p.Pad_cgo_0=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+8,o.buffer.byteLength)),p.Iovlen=q.getInt32(16,true),p.Pad_cgo_1=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+20,o.buffer.byteLength)),p.Controllen=q.getUint32(28,true),p.Flags=q.getInt32(32,true);  l=(r>>0);      if(!((s===0))){  m=new ER(s);    }  +return[l,m];    };recvmsgsyscall.Errnosyscall.Syscallsyscall.recvmsg syscall.sendmsgGK�;GK=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;l=0;m=$ifaceNil;  �o=new Uint8Array(36);n=R(28,(i>>>0),o,(k>>>0));r=n[0];s=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Namelen=q.getUint32(4,true),p.Pad_cgo_0=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+8,o.buffer.byteLength)),p.Iovlen=q.getInt32(16,true),p.Pad_cgo_1=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+20,o.buffer.byteLength)),p.Controllen=q.getUint32(28,true),p.Flags=q.getInt32(32,true); !l=(r>>0); !#    if(!((s===0))){ !2m=new ER(s);    } !?return[l,m];    };sendmsgsyscall.Errnosyscall.Syscallsyscall.sendmsg syscall.keventGL��GL=function(i,j,k,l,m,n){var $ptr={},i,j,k,l,m,n,o,p,q,r,s,t,u,v;o=0;p=$ifaceNil; "r=new Uint8Array(16);q=S(363,(i>>>0),j,(k>>>0),l,(m>>>0),r);u=q[0];v=q[2];s=n,t=new DataView(r.buffer,r.byteOffset),s.Sec=new $Int64(t.getUint32(4,true),t.getUint32(0,true)),s.Nsec=new $Int64(t.getUint32(12,true),t.getUint32(8,true)); "�o=(u>>0); "�    if(!((v===0))){ "�p=new ER(v);    } "�return[o,p];    };keventsyscall.Errnosyscall.Syscall6syscall.kevent syscall.sysctlGM�GM=function(i,j,k,l,m){var $ptr={},i,j,k,l,m,n,o,p,q;n=$ifaceNil; #y #}o=0; #�    if(i.$length>0){ #�o=$sliceToArray(i);    }else{ #�o=new Uint8Array(0);    } #�p=S(202,o,(i.$length>>>0),j,k,l,m);q=p[2]; $�    if(!((q===0))){ $�n=new ER(q);    } $�return n;    };sysctlsyscall.Errnosyscall.Syscall6syscall.sysctl syscall.utimesGN�GN=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; %H %Ll=MF.nil; %Wm=V(i);l=m[0];k=m[1]; %{    if(!($interfaceIsEqual(k,$ifaceNil))){ %�return k;    } %�n=R(138,l,j,0);o=n[2]; %�K(l); &    if(!((o===0))){ &%k=new ER(o);    } &2return k;    };utimessyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.usesyscall.utimes syscall.futimesGO��GO=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; &�l=R(139,(i>>>0),j,0);m=l[2]; '    if(!((m===0))){ 'k=new ER(m);    } ''return k;    };futimessyscall.Errnosyscall.Syscallsyscall.futimes syscall.fcntlGP��GP=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=0;m=$ifaceNil; '�n=R(92,(i>>>0),(j>>>0),(k>>>0));o=n[0];p=n[2]; '�l=(o>>0); (	    if(!((p===0))){ (m=new ER(p);    } (%return[l,m];    };fcntlsyscall.Errnosyscall.Syscallsyscall.fcntl syscall.ptraceGQ��GQ=function(i,j,k,l){var $ptr={},i,j,k,l,m,n,o;m=$ifaceNil; (�n=S(26,(i>>>0),(j>>>0),k,l,0,0);o=n[2]; )$    if(!((o===0))){ )3m=new ER(o);    } )@return m;    };ptracesyscall.Errnosyscall.Syscall6syscall.ptrace syscall.pipeGR��GR=function(){var $ptr={},i,j,k,l,m,n,o;i=0;j=0;k=$ifaceNil; )�l=T(42,0,0,0);m=l[0];n=l[1];o=l[2]; )�i=(m>>0); )�j=(n>>0); )�    if(!((o===0))){ *k=new ER(o);    } *return[i,j,k];    };pipesyscall.Errnosyscall.RawSyscallsyscall.pipe syscall.killGS��GS=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=$ifaceNil; *�m=R(37,(i>>>0),(j>>>0),(k>>>0));n=m[2]; *�    if(!((n===0))){ *�l=new ER(n);    } +return l;    };killsyscall.Errnosyscall.Syscallsyscall.kill syscall.AccessGT�#GT=$pkg.Access=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; +� +�l=MF.nil; +�m=V(i);l=m[0];k=m[1]; +�    if(!($interfaceIsEqual(k,$ifaceNil))){ +�return k;    } +�n=R(33,l,(j>>>0),0);o=n[2]; ,)K(l); ,C    if(!((o===0))){ ,Rk=new ER(o);    } ,_return k;    };Accesssyscall.Accesssyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.AdjtimeGU��GU=$pkg.Adjtime=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;k=$ifaceNil; ,�m=new Uint8Array(16);p=new Uint8Array(16);n=i,o=new DataView(m.buffer,m.byteOffset),n.Sec=new $Int64(o.getUint32(4,true),o.getUint32(0,true)),n.Usec=o.getInt32(8,true),n.Pad_cgo_0=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+12,m.buffer.byteLength));l=R(140,m,p,0);s=l[2];q=j,r=new DataView(p.buffer,p.byteOffset),q.Sec=new $Int64(r.getUint32(4,true),r.getUint32(0,true)),q.Usec=r.getInt32(8,true),q.Pad_cgo_0=new($nativeArray($kindUint8))(p.buffer,$min(p.byteOffset+12,p.buffer.byteLength)); -R    if(!((s===0))){ -ak=new ER(s);    } -nreturn k;    };Adjtimesyscall.Adjtimesyscall.Errnosyscall.Syscall syscall.ChdirGV�GV=$pkg.Chdir=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; -� -�k=MF.nil; -�l=V(i);k=l[0];j=l[1]; .    if(!($interfaceIsEqual(j,$ifaceNil))){ .&return j;    } .1m=R(12,k,0,0);n=m[2]; .uK(k); .�    if(!((n===0))){ .�j=new ER(n);    } .�return j;    };Chdirsyscall.BytePtrFromStringsyscall.Chdirsyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.ChflagsGW�$GW=$pkg.Chflags=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; /+ //l=MF.nil; /:m=V(i);l=m[0];k=m[1]; /^    if(!($interfaceIsEqual(k,$ifaceNil))){ /preturn k;    } /{n=R(34,l,(j>>>0),0);o=n[2]; /�K(l); /�    if(!((o===0))){ /�k=new ER(o);    } 0return k;    };Chflagssyscall.BytePtrFromStringsyscall.Chflagssyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.ChmodGX�"GX=$pkg.Chmod=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; 0� 0�l=MF.nil; 0�m=V(i);l=m[0];k=m[1]; 0�    if(!($interfaceIsEqual(k,$ifaceNil))){ 0�return k;    } 0�n=R(15,l,(j>>>0),0);o=n[2]; 1$K(l); 1>    if(!((o===0))){ 1Mk=new ER(o);    } 1Zreturn k;    };Chmodsyscall.BytePtrFromStringsyscall.Chmodsyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.ChownGY�,GY=$pkg.Chown=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=$ifaceNil; 1� 1�m=MF.nil; 1�n=V(i);m=n[0];l=n[1]; 2    if(!($interfaceIsEqual(l,$ifaceNil))){ 2$return l;    } 2/o=R(16,m,(j>>>0),(k>>>0));p=o[2]; 2�K(m); 2�    if(!((p===0))){ 2�l=new ER(p);    } 2�return l;    };Chownsyscall.BytePtrFromStringsyscall.Chownsyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.ChrootGZ�GZ=$pkg.Chroot=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; 33 37k=MF.nil; 3Bl=V(i);k=l[0];j=l[1]; 3f    if(!($interfaceIsEqual(j,$ifaceNil))){ 3xreturn j;    } 3�m=R(61,k,0,0);n=m[2]; 3�K(k); 3�    if(!((n===0))){ 3�j=new ER(n);    } 3�return j;    };Chrootsyscall.BytePtrFromStringsyscall.Chrootsyscall.Errno
syscall.MFsyscall.Syscallsyscall.use syscall.CloseHA��HA=$pkg.Close=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; 4lk=R(6,(i>>>0),0,0);l=k[2]; 4�    if(!((l===0))){ 4�j=new ER(l);    } 4�return j;    };Closesyscall.Closesyscall.Errnosyscall.Syscall syscall.DupHB��HB=$pkg.Dup=function(i){var $ptr={},i,j,k,l,m,n;j=0;k=$ifaceNil; 50l=T(41,(i>>>0),0,0);m=l[0];n=l[2]; 5ej=(m>>0); 5t    if(!((n===0))){ 5�k=new ER(n);    } 5�return[j,k];    };Dupsyscall.Dupsyscall.Errnosyscall.RawSyscall syscall.Dup2HC��HC=$pkg.Dup2=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; 6l=T(90,(i>>>0),(j>>>0),0);m=l[2]; 6H    if(!((m===0))){ 6Wk=new ER(m);    } 6dreturn k;    };Dup2syscall.Dup2syscall.Errnosyscall.RawSyscall syscall.ExchangedataHD��HD=$pkg.Exchangedata=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r;l=$ifaceNil; 6� 6�m=MF.nil; 7	n=V(i);m=n[0];l=n[1]; 7.    if(!($interfaceIsEqual(l,$ifaceNil))){ 7@return l;    } 7K 7Oo=MF.nil; 7Zp=V(j);o=p[0];l=p[1]; 7    if(!($interfaceIsEqual(l,$ifaceNil))){ 7�return l;    } 7�q=R(223,m,o,(k>>>0));r=q[2]; 8K(m); 8+K(o); 8E    if(!((r===0))){ 8Tl=new ER(r);    } 8areturn l;    };Exchangedatasyscall.BytePtrFromStringsyscall.Errnosyscall.Exchangedata
syscall.MFsyscall.Syscallsyscall.use syscall.ExitHEPHE=$pkg.Exit=function(i){var $ptr={},i; 8�R(1,(i>>>0),0,0); 8�return;    };Exitsyscall.Exitsyscall.Syscall syscall.FchdirHF��HF=$pkg.Fchdir=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; 9[k=R(13,(i>>>0),0,0);l=k[2]; 9�    if(!((l===0))){ 9�j=new ER(l);    } 9�return j;    };Fchdirsyscall.Errnosyscall.Fchdirsyscall.Syscall syscall.FchflagsHG��HG=$pkg.Fchflags=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; :'l=R(35,(i>>>0),(j>>>0),0);m=l[2]; :j    if(!((m===0))){ :yk=new ER(m);    } :�return k;    };Fchflagssyscall.Errnosyscall.Fchflagssyscall.Syscall syscall.FchmodHH��HH=$pkg.Fchmod=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; ;l=R(124,(i>>>0),(j>>>0),0);m=l[2]; ;B    if(!((m===0))){ ;Qk=new ER(m);    } ;^return k;    };Fchmodsyscall.Errnosyscall.Fchmodsyscall.Syscall syscall.FchownHI��HI=$pkg.Fchown=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=$ifaceNil; ;�m=R(123,(i>>>0),(j>>>0),(k>>>0));n=m[2]; <)    if(!((n===0))){ <8l=new ER(n);    } <Ereturn l;    };Fchownsyscall.Errnosyscall.Fchownsyscall.Syscall syscall.FlockHJ��HJ=$pkg.Flock=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; <�l=R(131,(i>>>0),(j>>>0),0);m=l[2]; <�    if(!((m===0))){ =	k=new ER(m);    } =return k;    };Flocksyscall.Errnosyscall.Flocksyscall.Syscall syscall.FpathconfHK��HK=$pkg.Fpathconf=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=0;l=$ifaceNil; =�m=R(192,(i>>>0),(j>>>0),0);n=m[0];o=m[2]; =�k=(n>>0); =�    if(!((o===0))){ =�l=new ER(o);    } >
return[k,l];    };	Fpathconfsyscall.Errnosyscall.Fpathconfsyscall.Syscall syscall.FstatHL��HL=$pkg.Fstat=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=$ifaceNil; >�m=new Uint8Array(144);l=R(339,(i>>>0),m,0);p=l[2];n=j,o=new DataView(m.buffer,m.byteOffset),n.Dev=o.getInt32(0,true),n.Mode=o.getUint16(4,true),n.Nlink=o.getUint16(6,true),n.Ino=new $Uint64(o.getUint32(12,true),o.getUint32(8,true)),n.Uid=o.getUint32(16,true),n.Gid=o.getUint32(20,true),n.Rdev=o.getInt32(24,true),n.Pad_cgo_0=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+28,m.buffer.byteLength)),n.Atimespec.Sec=new $Int64(o.getUint32(36,true),o.getUint32(32,true)),n.Atimespec.Nsec=new $Int64(o.getUint32(44,true),o.getUint32(40,true)),n.Mtimespec.Sec=new $Int64(o.getUint32(52,true),o.getUint32(48,true)),n.Mtimespec.Nsec=new $Int64(o.getUint32(60,true),o.getUint32(56,true)),n.Ctimespec.Sec=new $Int64(o.getUint32(68,true),o.getUint32(64,true)),n.Ctimespec.Nsec=new $Int64(o.getUint32(76,true),o.getUint32(72,true)),n.Birthtimespec.Sec=new $Int64(o.getUint32(84,true),o.getUint32(80,true)),n.Birthtimespec.Nsec=new $Int64(o.getUint32(92,true),o.getUint32(88,true)),n.Size=new $Int64(o.getUint32(100,true),o.getUint32(96,true)),n.Blocks=new $Int64(o.getUint32(108,true),o.getUint32(104,true)),n.Blksize=o.getInt32(112,true),n.Flags=o.getUint32(116,true),n.Gen=o.getUint32(120,true),n.Lspare=o.getInt32(124,true),n.Qspare=new($nativeArray($kindInt64))(m.buffer,$min(m.byteOffset+128,m.buffer.byteLength)); >�    if(!((p===0))){ >�k=new ER(p);    } >�return k;    };Fstatsyscall.Errnosyscall.Fstatsyscall.Syscall syscall.FstatfsHM��HM=$pkg.Fstatfs=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=$ifaceNil; ?sm=new Uint8Array(2168);l=R(346,(i>>>0),m,0);p=l[2];n=j,o=new DataView(m.buffer,m.byteOffset),n.Bsize=o.getUint32(0,true),n.Iosize=o.getInt32(4,true),n.Blocks=new $Uint64(o.getUint32(12,true),o.getUint32(8,true)),n.Bfree=new $Uint64(o.getUint32(20,true),o.getUint32(16,true)),n.Bavail=new $Uint64(o.getUint32(28,true),o.getUint32(24,true)),n.Files=new $Uint64(o.getUint32(36,true),o.getUint32(32,true)),n.Ffree=new $Uint64(o.getUint32(44,true),o.getUint32(40,true)),n.Fsid.Val=new($nativeArray($kindInt32))(m.buffer,$min(m.byteOffset+48,m.buffer.byteLength)),n.Owner=o.getUint32(56,true),n.Type=o.getUint32(60,true),n.Flags=o.getUint32(64,true),n.Fssubtype=o.getUint32(68,true),n.Fstypename=new($nativeArray($kindInt8))(m.buffer,$min(m.byteOffset+72,m.buffer.byteLength)),n.Mntonname=new($nativeArray($kindInt8))(m.buffer,$min(m.byteOffset+88,m.buffer.byteLength)),n.Mntfromname=new($nativeArray($kindInt8))(m.buffer,$min(m.byteOffset+1112,m.buffer.byteLength)),n.Reserved=new($nativeArray($kindUint32))(m.buffer,$min(m.byteOffset+2136,m.buffer.byteLength)); ?�    if(!((p===0))){ ?�k=new ER(p);    } ?�return k;    };Fstatfssyscall.Errnosyscall.Fstatfssyscall.Syscall syscall.FsyncHN��HN=$pkg.Fsync=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; @Pk=R(95,(i>>>0),0,0);l=k[2]; @�    if(!((l===0))){ @�j=new ER(l);    } @�return j;    };Fsyncsyscall.Errnosyscall.Fsyncsyscall.Syscall syscall.FtruncateHO��HO=$pkg.Ftruncate=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; Al=R(201,(i>>>0),(j.$low>>>0),0);m=l[2]; Ad    if(!((m===0))){ Ask=new ER(m);    } A�return k;    };	Ftruncatesyscall.Errnosyscall.Ftruncatesyscall.Syscall syscall.GetdirentriesHP�PHP=$pkg.Getdirentries=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=0;m=$ifaceNil; B Bn=0; B1    if(j.$length>0){ BEn=$sliceToArray(j);    }else{ Bon=new Uint8Array(0);    } B�o=S(344,(i>>>0),n,(j.$length>>>0),k,0,0);p=o[0];q=o[2]; Cl=(p>>0); C    if(!((q===0))){ C,m=new ER(q);    } C9return[l,m];    };Getdirentriessyscall.Errnosyscall.Getdirentriessyscall.Syscall6 syscall.GetdtablesizeHQtHQ=$pkg.Getdtablesize=function(){var $ptr={},i,j,k;i=0; C�j=R(89,0,0,0);k=j[0]; C�i=(k>>0); C�return i;    };Getdtablesizesyscall.Getdtablesizesyscall.Syscall syscall.GetegidHRnHR=$pkg.Getegid=function(){var $ptr={},i,j,k;i=0; DRj=T(43,0,0,0);k=j[0]; D�i=(k>>0); D�return i;    };Getegidsyscall.Getegidsyscall.RawSyscall syscall.GeteuidHSnHS=$pkg.Geteuid=function(){var $ptr={},i,j,k;i=0; D�j=T(25,0,0,0);k=j[0]; E&i=(k>>0); E5return i;    };Geteuidsyscall.Geteuidsyscall.RawSyscall syscall.GetgidHTmHT=$pkg.Getgid=function(){var $ptr={},i,j,k;i=0; E�j=T(47,0,0,0);k=j[0]; E�i=(k>>0); E�return i;    };Getgidsyscall.Getgidsyscall.RawSyscall syscall.GetpgidHU��HU=$pkg.Getpgid=function(i){var $ptr={},i,j,k,l,m,n;j=0;k=$ifaceNil; FSl=T(151,(i>>>0),0,0);m=l[0];n=l[2]; F�j=(m>>0); F�    if(!((n===0))){ F�k=new ER(n);    } F�return[j,k];    };Getpgidsyscall.Errnosyscall.Getpgidsyscall.RawSyscall syscall.GetpgrpHVnHV=$pkg.Getpgrp=function(){var $ptr={},i,j,k;i=0; G"j=T(81,0,0,0);k=j[0]; GPi=(k>>0); G`return i;    };Getpgrpsyscall.Getpgrpsyscall.RawSyscall syscall.GetpidHWmHW=$pkg.Getpid=function(){var $ptr={},i,j,k;i=0; G�j=T(20,0,0,0);k=j[0]; G�i=(k>>0); Hreturn i;    };Getpidsyscall.Getpidsyscall.RawSyscall syscall.GetppidHXnHX=$pkg.Getppid=function(){var $ptr={},i,j,k;i=0; Hlj=T(39,0,0,0);k=j[0]; H�i=(k>>0); H�return i;    };Getppidsyscall.Getppidsyscall.RawSyscall syscall.GetpriorityHY��HY=$pkg.Getpriority=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=0;l=$ifaceNil; I4m=R(100,(i>>>0),(j>>>0),0);n=m[0];o=m[2]; I|k=(n>>0); I�    if(!((o===0))){ I�l=new ER(o);    } I�return[k,l];    };Getprioritysyscall.Errnosyscall.Getprioritysyscall.Syscall syscall.GetrlimitHZ�dHZ=$pkg.Getrlimit=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=$ifaceNil; J*m=new Uint8Array(16);l=T(194,(i>>>0),m,0);p=l[2];n=j,o=new DataView(m.buffer,m.byteOffset),n.Cur=new $Uint64(o.getUint32(4,true),o.getUint32(0,true)),n.Max=new $Uint64(o.getUint32(12,true),o.getUint32(8,true)); J�    if(!((p===0))){ J�k=new ER(p);    } J�return k;    };	Getrlimitsyscall.Errnosyscall.Getrlimitsyscall.RawSyscall syscall.GetrusageIA��IA=$pkg.Getrusage=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=$ifaceNil; K!m=new Uint8Array(144);l=T(117,(i>>>0),m,0);p=l[2];n=j,o=new DataView(m.buffer,m.byteOffset),n.Utime.Sec=new $Int64(o.getUint32(4,true),o.getUint32(0,true)),n.Utime.Usec=o.getInt32(8,true),n.Utime.Pad_cgo_0=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+12,m.buffer.byteLength)),n.Stime.Sec=new $Int64(o.getUint32(20,true),o.getUint32(16,true)),n.Stime.Usec=o.getInt32(24,true),n.Stime.Pad_cgo_0=new($nativeArray($kindUint8))(m.buffer,$min(m.byteOffset+28,m.buffer.byteLength)),n.Maxrss=new $Int64(o.getUint32(36,true),o.getUint32(32,true)),n.Ixrss=new $Int64(o.getUint32(44,true),o.getUint32(40,true)),n.Idrss=new $Int64(o.getUint32(52,true),o.getUint32(48,true)),n.Isrss=new $Int64(o.getUint32(60,true),o.getUint32(56,true)),n.Minflt=new $Int64(o.getUint32(68,true),o.getUint32(64,true)),n.Majflt=new $Int64(o.getUint32(76,true),o.getUint32(72,true)),n.Nswap=new $Int64(o.getUint32(84,true),o.getUint32(80,true)),n.Inblock=new $Int64(o.getUint32(92,true),o.getUint32(88,true)),n.Oublock=new $Int64(o.getUint32(100,true),o.getUint32(96,true)),n.Msgsnd=new $Int64(o.getUint32(108,true),o.getUint32(104,true)),n.Msgrcv=new $Int64(o.getUint32(116,true),o.getUint32(112,true)),n.Nsignals=new $Int64(o.getUint32(124,true),o.getUint32(120,true)),n.Nvcsw=new $Int64(o.getUint32(132,true),o.getUint32(128,true)),n.Nivcsw=new $Int64(o.getUint32(140,true),o.getUint32(136,true)); Kz    if(!((p===0))){ K�k=new ER(p);    } K�return k;    };	Getrusagesyscall.Errnosyscall.Getrusagesyscall.RawSyscall syscall.GetsidIB��IB=$pkg.Getsid=function(i){var $ptr={},i,j,k,l,m,n;j=0;k=$ifaceNil; Ll=T(310,(i>>>0),0,0);m=l[0];n=l[2]; LHj=(m>>0); LW    if(!((n===0))){ Lfk=new ER(n);    } Lsreturn[j,k];    };Getsidsyscall.Errnosyscall.Getsidsyscall.RawSyscall syscall.GetuidICmIC=$pkg.Getuid=function(){var $ptr={},i,j,k;i=0; L�j=T(24,0,0,0);k=j[0]; Mi=(k>>0); Mreturn i;    };Getuidsyscall.Getuidsyscall.RawSyscall syscall.IssetugidIDyID=$pkg.Issetugid=function(){var $ptr={},i,j,k;i=false; M�j=T(327,0,0,0);k=j[0]; M�i=!((k===0)); M�return i;    };	Issetugidsyscall.Issetugidsyscall.RawSyscall syscall.KqueueIE��IE=$pkg.Kqueue=function(){var $ptr={},i,j,k,l,m;i=0;j=$ifaceNil; N?k=R(362,0,0,0);l=k[0];m=k[2]; Nji=(l>>0); Nx    if(!((m===0))){ N�j=new ER(m);    } N�return[i,j];    };Kqueuesyscall.Errnosyscall.Kqueuesyscall.Syscall syscall.LchownIF�.IF=$pkg.Lchown=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=$ifaceNil; O Om=MF.nil; O)n=V(i);m=n[0];l=n[1]; OM    if(!($interfaceIsEqual(l,$ifaceNil))){ O_return l;    } Ojo=R(364,m,(j>>>0),(k>>>0));p=o[2]; O�K(m); O�    if(!((p===0))){ O�l=new ER(p);    } O�return l;    };Lchownsyscall.BytePtrFromStringsyscall.Errnosyscall.Lchown
syscall.MFsyscall.Syscallsyscall.use syscall.LinkIG��IG=$pkg.Link=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q;k=$ifaceNil; Pz P~l=MF.nil; P�m=V(i);l=m[0];k=m[1]; P�    if(!($interfaceIsEqual(k,$ifaceNil))){ P�return k;    } P� P�n=MF.nil; P�o=V(j);n=o[0];k=o[1]; P�    if(!($interfaceIsEqual(k,$ifaceNil))){ Qreturn k;    } Qp=R(9,l,n,0);q=p[2]; QxK(l); Q�K(n); Q�    if(!((q===0))){ Q�k=new ER(q);    } Q�return k;    };Linksyscall.BytePtrFromStringsyscall.Errnosyscall.Link
syscall.MFsyscall.Syscallsyscall.use syscall.ListenIH��IH=$pkg.Listen=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; RCl=R(106,(i>>>0),(j>>>0),0);m=l[2]; R�    if(!((m===0))){ R�k=new ER(m);    } R�return k;    };Listensyscall.Errnosyscall.Listensyscall.Syscall syscall.LstatII�,II=$pkg.Lstat=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r;k=$ifaceNil; S" S&l=MF.nil; S1m=V(i);l=m[0];k=m[1]; SU    if(!($interfaceIsEqual(k,$ifaceNil))){ Sgreturn k;    } Sro=new Uint8Array(144);n=R(340,l,o,0);r=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Dev=q.getInt32(0,true),p.Mode=q.getUint16(4,true),p.Nlink=q.getUint16(6,true),p.Ino=new $Uint64(q.getUint32(12,true),q.getUint32(8,true)),p.Uid=q.getUint32(16,true),p.Gid=q.getUint32(20,true),p.Rdev=q.getInt32(24,true),p.Pad_cgo_0=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+28,o.buffer.byteLength)),p.Atimespec.Sec=new $Int64(q.getUint32(36,true),q.getUint32(32,true)),p.Atimespec.Nsec=new $Int64(q.getUint32(44,true),q.getUint32(40,true)),p.Mtimespec.Sec=new $Int64(q.getUint32(52,true),q.getUint32(48,true)),p.Mtimespec.Nsec=new $Int64(q.getUint32(60,true),q.getUint32(56,true)),p.Ctimespec.Sec=new $Int64(q.getUint32(68,true),q.getUint32(64,true)),p.Ctimespec.Nsec=new $Int64(q.getUint32(76,true),q.getUint32(72,true)),p.Birthtimespec.Sec=new $Int64(q.getUint32(84,true),q.getUint32(80,true)),p.Birthtimespec.Nsec=new $Int64(q.getUint32(92,true),q.getUint32(88,true)),p.Size=new $Int64(q.getUint32(100,true),q.getUint32(96,true)),p.Blocks=new $Int64(q.getUint32(108,true),q.getUint32(104,true)),p.Blksize=q.getInt32(112,true),p.Flags=q.getUint32(116,true),p.Gen=q.getUint32(120,true),p.Lspare=q.getInt32(124,true),p.Qspare=new($nativeArray($kindInt64))(o.buffer,$min(o.byteOffset+128,o.buffer.byteLength)); S�K(l); S�    if(!((r===0))){ S�k=new ER(r);    } T
return k;    };Lstatsyscall.BytePtrFromStringsyscall.Errnosyscall.Lstat
syscall.MFsyscall.Syscallsyscall.use syscall.MkdirIJ�#IJ=$pkg.Mkdir=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; T� T�l=MF.nil; T�m=V(i);l=m[0];k=m[1]; T�    if(!($interfaceIsEqual(k,$ifaceNil))){ T�return k;    } T�n=R(136,l,(j>>>0),0);o=n[2]; U*K(l); UD    if(!((o===0))){ USk=new ER(o);    } U`return k;    };Mkdirsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Mkdirsyscall.Syscallsyscall.use syscall.MkfifoIK�$IK=$pkg.Mkfifo=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; U� U�l=MF.nil; U�m=V(i);l=m[0];k=m[1]; V    if(!($interfaceIsEqual(k,$ifaceNil))){ V&return k;    } V1n=R(132,l,(j>>>0),0);o=n[2]; V�K(l); V�    if(!((o===0))){ V�k=new ER(o);    } V�return k;    };Mkfifosyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Mkfifosyscall.Syscallsyscall.use syscall.MknodIL�,IL=$pkg.Mknod=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=$ifaceNil; WA WEm=MF.nil; WPn=V(i);m=n[0];l=n[1]; Wt    if(!($interfaceIsEqual(l,$ifaceNil))){ W�return l;    } W�o=R(14,m,(j>>>0),(k>>>0));p=o[2]; W�K(m); X    if(!((p===0))){ Xl=new ER(p);    } X"return l;    };Mknodsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Mknodsyscall.Syscallsyscall.use syscall.MlockIM�IM=$pkg.Mlock=function(i){var $ptr={},i,j,k,l,m;j=$ifaceNil; X� X�k=0; X�    if(i.$length>0){ X�k=$sliceToArray(i);    }else{ X�k=new Uint8Array(0);    } Yl=R(203,k,(i.$length>>>0),0);m=l[2]; YG    if(!((m===0))){ YVj=new ER(m);    } Ycreturn j;    };Mlocksyscall.Errnosyscall.Mlocksyscall.Syscall syscall.MlockallIN��IN=$pkg.Mlockall=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; Y�k=R(324,(i>>>0),0,0);l=k[2]; Z    if(!((l===0))){ Zj=new ER(l);    } Z,return j;    };Mlockallsyscall.Errnosyscall.Mlockallsyscall.Syscall syscall.MprotectIO� IO=$pkg.Mprotect=function(i,j){var $ptr={},i,j,k,l,m,n;k=$ifaceNil; Z� Z�l=0; Z�    if(i.$length>0){ Z�l=$sliceToArray(i);    }else{ Z�l=new Uint8Array(0);    } [m=R(74,l,(i.$length>>>0),(j>>>0));n=m[2]; [m    if(!((n===0))){ [|k=new ER(n);    } [�return k;    };Mprotectsyscall.Errnosyscall.Mprotectsyscall.Syscall syscall.MunlockIP�IP=$pkg.Munlock=function(i){var $ptr={},i,j,k,l,m;j=$ifaceNil; [� [�k=0; \    if(i.$length>0){ \%k=$sliceToArray(i);    }else{ \Mk=new Uint8Array(0);    } \nl=R(204,k,(i.$length>>>0),0);m=l[2]; \�    if(!((m===0))){ \�j=new ER(m);    } \�return j;    };Munlocksyscall.Errnosyscall.Munlocksyscall.Syscall syscall.MunlockallIQ��IQ=$pkg.Munlockall=function(){var $ptr={},i,j,k;i=$ifaceNil; ];j=R(325,0,0,0);k=j[2]; ]i    if(!((k===0))){ ]xi=new ER(k);    } ]�return i;    };
Munlockallsyscall.Errnosyscall.Munlockallsyscall.Syscall syscall.OpenIR�MIR=$pkg.Open=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q,r;l=0;m=$ifaceNil; ^ ^n=MF.nil; ^%o=V(i);n=o[0];m=o[1]; ^I    if(!($interfaceIsEqual(m,$ifaceNil))){ ^[return[l,m];    } ^fp=R(5,n,(j>>>0),(k>>>0));q=p[0];r=p[2]; ^�K(n); ^�l=(q>>0); ^�    if(!((r===0))){ ^�m=new ER(r);    } _return[l,m];    };Opensyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Opensyscall.Syscallsyscall.use syscall.PathconfIS�IIS=$pkg.Pathconf=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q;k=0;l=$ifaceNil; _� _�m=MF.nil; _�n=V(i);m=n[0];l=n[1]; _�    if(!($interfaceIsEqual(l,$ifaceNil))){ _�return[k,l];    } _�o=R(191,m,(j>>>0),0);p=o[0];q=o[2]; `3K(m); `Mk=(p>>0); `\    if(!((q===0))){ `kl=new ER(q);    } `xreturn[k,l];    };Pathconfsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Pathconfsyscall.Syscallsyscall.use syscall.PreadIT�SIT=$pkg.Pread=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=0;m=$ifaceNil; a a	n=0; a    if(j.$length>0){ a/n=$sliceToArray(j);    }else{ aWn=new Uint8Array(0);    } axo=S(153,(i>>>0),n,(j.$length>>>0),(k.$low>>>0),0,0);p=o[0];q=o[2]; a�l=(p>>0); a�    if(!((q===0))){ a�m=new ER(q);    } breturn[l,m];    };Preadsyscall.Errnosyscall.Preadsyscall.Syscall6 syscall.PwriteIU�TIU=$pkg.Pwrite=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p,q;l=0;m=$ifaceNil; b� b�n=0; b�    if(j.$length>0){ b�n=$sliceToArray(j);    }else{ b�n=new Uint8Array(0);    } co=S(154,(i>>>0),n,(j.$length>>>0),(k.$low>>>0),0,0);p=o[0];q=o[2]; cml=(p>>0); cz    if(!((q===0))){ c�m=new ER(q);    } c�return[l,m];    };Pwritesyscall.Errnosyscall.Pwritesyscall.Syscall6 syscall.readIV�1IV=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=0;l=$ifaceNil; d dm=0; d,    if(j.$length>0){ d>m=$sliceToArray(j);    }else{ dfm=new Uint8Array(0);    } d�n=R(3,(i>>>0),m,(j.$length>>>0));o=n[0];p=n[2]; d�k=(o>>0); d�    if(!((p===0))){ d�l=new ER(p);    } d�return[k,l];    };readsyscall.Errnosyscall.Syscallsyscall.read syscall.ReadlinkIW��IW=$pkg.Readlink=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r;k=0;l=$ifaceNil; e� e�m=MF.nil; e�n=V(i);m=n[0];l=n[1]; e�    if(!($interfaceIsEqual(l,$ifaceNil))){ e�return[k,l];    } e� e�o=0; e�    if(j.$length>0){ fo=$sliceToArray(j);    }else{ f+o=new Uint8Array(0);    } fLp=R(58,m,o,(j.$length>>>0));q=p[0];r=p[2]; f�K(m); f�k=(q>>0); f�    if(!((r===0))){ f�l=new ER(r);    } f�return[k,l];    };Readlinksyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Readlinksyscall.Syscallsyscall.use syscall.RenameIX��IX=$pkg.Rename=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q;k=$ifaceNil; gq gul=MF.nil; g�m=V(i);l=m[0];k=m[1]; g�    if(!($interfaceIsEqual(k,$ifaceNil))){ g�return k;    } g� g�n=MF.nil; g�o=V(j);n=o[0];k=o[1]; g�    if(!($interfaceIsEqual(k,$ifaceNil))){ hreturn k;    } hp=R(128,l,n,0);q=p[2]; hoK(l); h�K(n); h�    if(!((q===0))){ h�k=new ER(q);    } h�return k;    };Renamesyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Renamesyscall.Syscallsyscall.use syscall.RevokeIY�IY=$pkg.Revoke=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; i3 i7k=MF.nil; iBl=V(i);k=l[0];j=l[1]; if    if(!($interfaceIsEqual(j,$ifaceNil))){ ixreturn j;    } i�m=R(56,k,0,0);n=m[2]; i�K(k); i�    if(!((n===0))){ i�j=new ER(n);    } i�return j;    };Revokesyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Revokesyscall.Syscallsyscall.use syscall.RmdirIZ�IZ=$pkg.Rmdir=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; jq juk=MF.nil; j�l=V(i);k=l[0];j=l[1]; j�    if(!($interfaceIsEqual(j,$ifaceNil))){ j�return j;    } j�m=R(137,k,0,0);n=m[2]; kK(k); k    if(!((n===0))){ k.j=new ER(n);    } k;return j;    };Rmdirsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Rmdirsyscall.Syscallsyscall.use syscall.SeekJA�JA=$pkg.Seek=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=new $Int64(0,0);m=$ifaceNil; k�n=R(199,(i>>>0),(j.$low>>>0),(k>>>0));o=n[0];p=n[2]; l#l=new $Int64(0,o.constructor===Number?o:1); l:    if(!((p===0))){ lIm=new ER(p);    } lVreturn[l,m];    };Seeksyscall.Errnosyscall.Seeksyscall.Syscall syscall.SelectJB��JB=$pkg.Select=function(i,j,k,l,m){var $ptr={},aa,ab,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;n=$ifaceNil; l�p=new Uint8Array(128);s=new Uint8Array(128);q=j,r=new DataView(p.buffer,p.byteOffset),q.Bits=new($nativeArray($kindInt32))(p.buffer,$min(p.byteOffset+0,p.buffer.byteLength));v=new Uint8Array(128);t=k,u=new DataView(s.buffer,s.byteOffset),t.Bits=new($nativeArray($kindInt32))(s.buffer,$min(s.byteOffset+0,s.buffer.byteLength));y=new Uint8Array(16);w=l,x=new DataView(v.buffer,v.byteOffset),w.Bits=new($nativeArray($kindInt32))(v.buffer,$min(v.byteOffset+0,v.buffer.byteLength));o=S(93,(i>>>0),p,s,v,y,0);ab=o[2];z=m,aa=new DataView(y.buffer,y.byteOffset),z.Sec=new $Int64(aa.getUint32(4,true),aa.getUint32(0,true)),z.Usec=aa.getInt32(8,true),z.Pad_cgo_0=new($nativeArray($kindUint8))(y.buffer,$min(y.byteOffset+12,y.buffer.byteLength)); m�    if(!((ab===0))){ m�n=new ER(ab);    } m�return n;    };Selectsyscall.Errnosyscall.Selectsyscall.Syscall6 syscall.SetegidJC��JC=$pkg.Setegid=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; n)k=R(182,(i>>>0),0,0);l=k[2]; n`    if(!((l===0))){ noj=new ER(l);    } n|return j;    };Setegidsyscall.Errnosyscall.Setegidsyscall.Syscall syscall.SeteuidJD��JD=$pkg.Seteuid=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; n�k=T(183,(i>>>0),0,0);l=k[2]; o(    if(!((l===0))){ o7j=new ER(l);    } oDreturn j;    };Seteuidsyscall.Errnosyscall.RawSyscallsyscall.Seteuid syscall.SetgidJE��JE=$pkg.Setgid=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; o�k=T(181,(i>>>0),0,0);l=k[2]; o�    if(!((l===0))){ o�j=new ER(l);    } preturn j;    };Setgidsyscall.Errnosyscall.RawSyscallsyscall.Setgid syscall.SetloginJF�JF=$pkg.Setlogin=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; p~ p�k=MF.nil; p�l=V(i);k=l[0];j=l[1]; p�    if(!($interfaceIsEqual(j,$ifaceNil))){ p�return j;    } p�m=R(50,k,0,0);n=m[2]; qK(k); q/    if(!((n===0))){ q>j=new ER(n);    } qKreturn j;    };Setloginsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Setloginsyscall.Syscallsyscall.use syscall.SetpgidJG��JG=$pkg.Setpgid=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; q�l=T(82,(i>>>0),(j>>>0),0);m=l[2]; r    if(!((m===0))){ rk=new ER(m);    } r'return k;    };Setpgidsyscall.Errnosyscall.RawSyscallsyscall.Setpgid syscall.SetpriorityJH��JH=$pkg.Setpriority=function(i,j,k){var $ptr={},i,j,k,l,m,n;l=$ifaceNil; r�m=R(96,(i>>>0),(j>>>0),(k>>>0));n=m[2]; s    if(!((n===0))){ sl=new ER(n);    } s return l;    };Setprioritysyscall.Errnosyscall.Setprioritysyscall.Syscall syscall.SetprivexecJI��JI=$pkg.Setprivexec=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; s�k=R(152,(i>>>0),0,0);l=k[2]; s�    if(!((l===0))){ s�j=new ER(l);    } s�return j;    };Setprivexecsyscall.Errnosyscall.Setprivexecsyscall.Syscall syscall.SetregidJJ��JJ=$pkg.Setregid=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; tjl=T(127,(i>>>0),(j>>>0),0);m=l[2]; t�    if(!((m===0))){ t�k=new ER(m);    } t�return k;    };Setregidsyscall.Errnosyscall.RawSyscallsyscall.Setregid syscall.SetreuidJK��JK=$pkg.Setreuid=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; uJl=T(126,(i>>>0),(j>>>0),0);m=l[2]; u�    if(!((m===0))){ u�k=new ER(m);    } u�return k;    };Setreuidsyscall.Errnosyscall.RawSyscallsyscall.Setreuid syscall.SetrlimitJL�dJL=$pkg.Setrlimit=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=$ifaceNil; v/m=new Uint8Array(16);l=T(195,(i>>>0),m,0);p=l[2];n=j,o=new DataView(m.buffer,m.byteOffset),n.Cur=new $Uint64(o.getUint32(4,true),o.getUint32(0,true)),n.Max=new $Uint64(o.getUint32(12,true),o.getUint32(8,true)); v�    if(!((p===0))){ v�k=new ER(p);    } v�return k;    };	Setrlimitsyscall.Errnosyscall.RawSyscallsyscall.Setrlimit syscall.SetsidJM��JM=$pkg.Setsid=function(){var $ptr={},i,j,k,l,m;i=0;j=$ifaceNil; wk=T(147,0,0,0);l=k[0];m=k[2]; wCi=(l>>0); wR    if(!((m===0))){ waj=new ER(m);    } wnreturn[i,j];    };Setsidsyscall.Errnosyscall.RawSyscallsyscall.Setsid syscall.SettimeofdayJN��JN=$pkg.Settimeofday=function(i){var $ptr={},i,j,k,l,m,n,o;j=$ifaceNil; w�l=new Uint8Array(16);k=T(122,l,0,0);o=k[2];m=i,n=new DataView(l.buffer,l.byteOffset),m.Sec=new $Int64(n.getUint32(4,true),n.getUint32(0,true)),m.Usec=n.getInt32(8,true),m.Pad_cgo_0=new($nativeArray($kindUint8))(l.buffer,$min(l.byteOffset+12,l.buffer.byteLength)); x5    if(!((o===0))){ xDj=new ER(o);    } xQreturn j;    };Settimeofdaysyscall.Errnosyscall.RawSyscallsyscall.Settimeofday syscall.SetuidJO��JO=$pkg.Setuid=function(i){var $ptr={},i,j,k,l;j=$ifaceNil; x�k=T(23,(i>>>0),0,0);l=k[2]; x�    if(!((l===0))){ yj=new ER(l);    } yreturn j;    };Setuidsyscall.Errnosyscall.RawSyscallsyscall.Setuid syscall.StatJP�+JP=$pkg.Stat=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r;k=$ifaceNil; y� y�l=MF.nil; y�m=V(i);l=m[0];k=m[1]; y�    if(!($interfaceIsEqual(k,$ifaceNil))){ y�return k;    } y�o=new Uint8Array(144);n=R(338,l,o,0);r=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Dev=q.getInt32(0,true),p.Mode=q.getUint16(4,true),p.Nlink=q.getUint16(6,true),p.Ino=new $Uint64(q.getUint32(12,true),q.getUint32(8,true)),p.Uid=q.getUint32(16,true),p.Gid=q.getUint32(20,true),p.Rdev=q.getInt32(24,true),p.Pad_cgo_0=new($nativeArray($kindUint8))(o.buffer,$min(o.byteOffset+28,o.buffer.byteLength)),p.Atimespec.Sec=new $Int64(q.getUint32(36,true),q.getUint32(32,true)),p.Atimespec.Nsec=new $Int64(q.getUint32(44,true),q.getUint32(40,true)),p.Mtimespec.Sec=new $Int64(q.getUint32(52,true),q.getUint32(48,true)),p.Mtimespec.Nsec=new $Int64(q.getUint32(60,true),q.getUint32(56,true)),p.Ctimespec.Sec=new $Int64(q.getUint32(68,true),q.getUint32(64,true)),p.Ctimespec.Nsec=new $Int64(q.getUint32(76,true),q.getUint32(72,true)),p.Birthtimespec.Sec=new $Int64(q.getUint32(84,true),q.getUint32(80,true)),p.Birthtimespec.Nsec=new $Int64(q.getUint32(92,true),q.getUint32(88,true)),p.Size=new $Int64(q.getUint32(100,true),q.getUint32(96,true)),p.Blocks=new $Int64(q.getUint32(108,true),q.getUint32(104,true)),p.Blksize=q.getInt32(112,true),p.Flags=q.getUint32(116,true),p.Gen=q.getUint32(120,true),p.Lspare=q.getInt32(124,true),p.Qspare=new($nativeArray($kindInt64))(o.buffer,$min(o.byteOffset+128,o.buffer.byteLength)); zFK(l); z`    if(!((r===0))){ zok=new ER(r);    } z|return k;    };Statsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Statsyscall.Syscallsyscall.use syscall.StatfsJQ�)JQ=$pkg.Statfs=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q,r;k=$ifaceNil; {  {l=MF.nil; {m=V(i);l=m[0];k=m[1]; {3    if(!($interfaceIsEqual(k,$ifaceNil))){ {Ereturn k;    } {Po=new Uint8Array(2168);n=R(345,l,o,0);r=n[2];p=j,q=new DataView(o.buffer,o.byteOffset),p.Bsize=q.getUint32(0,true),p.Iosize=q.getInt32(4,true),p.Blocks=new $Uint64(q.getUint32(12,true),q.getUint32(8,true)),p.Bfree=new $Uint64(q.getUint32(20,true),q.getUint32(16,true)),p.Bavail=new $Uint64(q.getUint32(28,true),q.getUint32(24,true)),p.Files=new $Uint64(q.getUint32(36,true),q.getUint32(32,true)),p.Ffree=new $Uint64(q.getUint32(44,true),q.getUint32(40,true)),p.Fsid.Val=new($nativeArray($kindInt32))(o.buffer,$min(o.byteOffset+48,o.buffer.byteLength)),p.Owner=q.getUint32(56,true),p.Type=q.getUint32(60,true),p.Flags=q.getUint32(64,true),p.Fssubtype=q.getUint32(68,true),p.Fstypename=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+72,o.buffer.byteLength)),p.Mntonname=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+88,o.buffer.byteLength)),p.Mntfromname=new($nativeArray($kindInt8))(o.buffer,$min(o.byteOffset+1112,o.buffer.byteLength)),p.Reserved=new($nativeArray($kindUint32))(o.buffer,$min(o.byteOffset+2136,o.buffer.byteLength)); {�K(l); {�    if(!((r===0))){ {�k=new ER(r);    } {�return k;    };Statfssyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Statfssyscall.Syscallsyscall.use syscall.SymlinkJR��JR=$pkg.Symlink=function(i,j){var $ptr={},i,j,k,l,m,n,o,p,q;k=$ifaceNil; |k |ol=MF.nil; |zm=V(i);l=m[0];k=m[1]; |�    if(!($interfaceIsEqual(k,$ifaceNil))){ |�return k;    } |� |�n=MF.nil; |�o=V(j);n=o[0];k=o[1]; |�    if(!($interfaceIsEqual(k,$ifaceNil))){ } return k;    } }p=R(57,l,n,0);q=p[2]; }lK(l); }�K(n); }�    if(!((q===0))){ }�k=new ER(q);    } }�return k;    };Symlinksyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Symlinksyscall.Syscallsyscall.use syscall.SyncJS��JS=$pkg.Sync=function(){var $ptr={},i,j,k;i=$ifaceNil; ~#j=R(36,0,0,0);k=j[2]; ~K    if(!((k===0))){ ~Zi=new ER(k);    } ~greturn i;    };Syncsyscall.Errnosyscall.Syncsyscall.Syscall syscall.TruncateJT�+JT=$pkg.Truncate=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; ~� ~�l=MF.nil; ~�m=V(i);l=m[0];k=m[1];     if(!($interfaceIsEqual(k,$ifaceNil))){ 0return k;    } ;n=R(200,l,(j.$low>>>0),0);o=n[2]; �K(l); �    if(!((o===0))){ �k=new ER(o);    } �return k;    };Truncatesyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.Truncatesyscall.use syscall.UmaskJUuJU=$pkg.Umask=function(i){var $ptr={},i,j,k,l;j=0; �;k=R(60,(i>>>0),0,0);l=k[0]; �sj=(l>>0); ��return j;    };Umasksyscall.Syscallsyscall.Umask syscall.UndeleteJV�JV=$pkg.Undelete=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; �� � k=MF.nil; �l=V(i);k=l[0];j=l[1]; �/    if(!($interfaceIsEqual(j,$ifaceNil))){ �Areturn j;    } �Lm=R(205,k,0,0);n=m[2]; ��K(k); ��    if(!((n===0))){ ��j=new ER(n);    } ��return j;    };Undeletesyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.Undeletesyscall.use syscall.UnlinkJW�JW=$pkg.Unlink=function(i){var $ptr={},i,j,k,l,m,n;j=$ifaceNil; �= �Ak=MF.nil; �Ll=V(i);k=l[0];j=l[1]; �p    if(!($interfaceIsEqual(j,$ifaceNil))){ ��return j;    } ��m=R(10,k,0,0);n=m[2]; ��K(k); ��    if(!((n===0))){ ��j=new ER(n);    } �return j;    };Unlinksyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.Unlinksyscall.use syscall.UnmountJX�%JX=$pkg.Unmount=function(i,j){var $ptr={},i,j,k,l,m,n,o;k=$ifaceNil; �� ��l=MF.nil; ��m=V(i);l=m[0];k=m[1]; ��    if(!($interfaceIsEqual(k,$ifaceNil))){ ��return k;    } ��n=R(159,l,(j>>>0),0);o=n[2]; �+K(l); �E    if(!((o===0))){ �Tk=new ER(o);    } �areturn k;    };Unmountsyscall.BytePtrFromStringsyscall.Errno
syscall.MFsyscall.Syscallsyscall.Unmountsyscall.use syscall.writeJY�1JY=function(i,j){var $ptr={},i,j,k,l,m,n,o,p;k=0;l=$ifaceNil; �� ��m=0; ��    if(j.$length>0){ �
m=$sliceToArray(j);    }else{ �2m=new Uint8Array(0);    } �Sn=R(4,(i>>>0),m,(j.$length>>>0));o=n[0];p=n[2]; ��k=(o>>0); ��    if(!((p===0))){ ��l=new ER(p);    } ��return[k,l];    };writesyscall.Errnosyscall.Syscallsyscall.write syscall.mmapJZ��JZ=function(i,j,k,l,m,n){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;o=0;p=$ifaceNil; ��q=S(197,i,j,(k>>>0),(l>>>0),(m>>>0),(n.$low>>>0));r=q[0];s=q[2]; ��o=r; �    if(!((s===0))){ �p=new ER(s);    } �)return[o,p];    };mmapsyscall.Errnosyscall.Syscall6syscall.mmap syscall.munmapKA��KA=function(i,j){var $ptr={},i,j,k,l,m;k=$ifaceNil; ��l=R(73,i,j,0);m=l[2]; ��    if(!((m===0))){ �k=new ER(m);    } �return k;    };munmapsyscall.Errnosyscall.Syscallsyscall.munmap syscall.readlenKB��KB=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=0;m=$ifaceNil; ��n=R(3,(i>>>0),j,(k>>>0));o=n[0];p=n[2]; ��l=(o>>0); �    if(!((p===0))){ �m=new ER(p);    } �return[l,m];    };readlensyscall.Errnosyscall.Syscallsyscall.readlen syscall.writelenKC��KC=function(i,j,k){var $ptr={},i,j,k,l,m,n,o,p;l=0;m=$ifaceNil; ��n=R(4,(i>>>0),j,(k>>>0));o=n[0];p=n[2]; �l=(o>>0); �    if(!((p===0))){ �!m=new ER(p);    } �.return[l,m];    };writelensyscall.Errnosyscall.Syscallsyscall.writelen syscall.gettimeofdayKD��KD=function(i){var $ptr={},i,j,k,l,m,n,o,p,q,r,s;j=new $Int64(0,0);k=0;l=$ifaceNil; ��n=new Uint8Array(16);m=T(116,n,0,0);q=m[0];r=m[1];s=m[2];o=i,p=new DataView(n.buffer,n.byteOffset),o.Sec=new $Int64(p.getUint32(4,true),p.getUint32(0,true)),o.Usec=p.getInt32(8,true),o.Pad_cgo_0=new($nativeArray($kindUint8))(n.buffer,$min(n.byteOffset+12,n.buffer.byteLength)); �j=new $Int64(0,q.constructor===Number?q:1); �k=(r>>0); �1    if(!((s===0))){ �@l=new ER(s);    } �Mreturn[j,k,l];    };gettimeofdaysyscall.Errnosyscall.RawSyscallsyscall.gettimeofday ��g{"Base":188649,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/syscall/syscall.go","Base":1,"Size":1050,"Lines":[0,13,14,30,31,40,49,59,60,95,97,98,125,147,148,162,221,249,309,329,333,338,340,341,363,385,504,507,530,532,533,565,620,659,707,716,719,720,759,766,807,822,831,835,971,1003,1006,1008,1009,1038,1048],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/syscall/syscall_unix.go","Base":1052,"Size":2875,"Lines":[0,22,23,39,40,49,59,60,95,97,98,129,166,196,209,212,241,297,339,380,415,463,466,479,481,482,511,548,578,609,612,614,615,644,675,693,694,733,749,761,790,795,822,848,862,866,894,932,963,976,980,1024,1027,1059,1061,1062,1131,1171,1205,1292,1295,1343,1376,1416,1464,1488,1527,1530,1546,1583,1585,1586,1668,1709,1755,1842,1845,1922,1939,1942,1979,1981,1982,2054,2094,2128,2215,2218,2234,2271,2273,2274,2359,2400,2446,2533,2536,2552,2589,2591,2592,2642,2696,2727,2741,2763,2767,2790,2793,2820,2873],"Infos":null},{"Name":"/usr/local/go/src/syscall/bpf_bsd.go","Base":3928,"Size":3850,"Lines":[0,56,110,160,161,211,212,255,256,272,273,282,292,294,295,332,383,385,386,431,512,514,515,553,564,650,665,688,691,706,708,709,753,839,854,877,880,895,897,898,938,949,1034,1049,1072,1075,1090,1092,1093,1139,1224,1239,1262,1265,1280,1282,1283,1321,1409,1424,1444,1447,1459,1461,1462,1492,1552,1567,1587,1590,1602,1604,1605,1626,1648,1661,1663,1664,1721,1736,1823,1838,1862,1865,1883,1885,1886,1936,1951,1983,2070,2085,2105,2108,2120,2122,2123,2167,2183,2274,2289,2314,2317,2334,2336,2337,2385,2475,2490,2510,2513,2525,2527,2528,2570,2585,2672,2687,2712,2715,2731,2733,2734,2774,2864,2879,2899,2902,2914,2916,2917,2958,2976,3000,3045,3130,3145,3165,3168,3180,3182,3183,3220,3238,3326,3341,3361,3364,3431,3447,3450,3462,3464,3465,3507,3518,3608,3623,3646,3649,3664,3666,3667,3708,3798,3813,3833,3836,3848],"Infos":null},{"Name":"/usr/local/go/src/syscall/env_unix.go","Base":7779,"Size":2834,"Lines":[0,56,110,160,161,230,231,262,263,279,280,294,295,301,368,387,388,421,443,444,519,539,540,602,664,700,732,734,735,786,787,857,881,908,934,935,952,980,1006,1038,1058,1075,1107,1149,1162,1217,1267,1315,1358,1376,1382,1392,1397,1401,1404,1406,1407,1441,1462,1463,1479,1503,1504,1532,1547,1566,1569,1586,1598,1600,1601,1654,1675,1695,1714,1717,1718,1735,1760,1761,1780,1790,1809,1812,1826,1857,1876,1900,1904,1907,1925,1927,1928,1967,1988,2008,2024,2027,2060,2096,2113,2117,2120,2155,2176,2193,2197,2200,2201,2217,2241,2242,2261,2286,2295,2310,2320,2336,2362,2365,2379,2401,2413,2415,2416,2434,2491,2492,2508,2532,2533,2555,2571,2574,2602,2621,2623,2624,2650,2671,2688,2713,2748,2776,2793,2815,2819,2822,2832],"Infos":null},{"Name":"/usr/local/go/src/syscall/exec_bsd.go","Base":10614,"Size":6205,"Lines":[0,55,109,159,160,210,211,227,228,237,248,258,260,261,287,322,361,404,447,521,581,646,648,649,684,710,735,736,808,866,933,1000,1068,1132,1193,1255,1296,1439,1484,1539,1546,1563,1578,1591,1604,1607,1608,1663,1727,1786,1822,1848,1882,1907,1928,1932,1951,1954,1964,1965,2001,2002,2026,2085,2107,2153,2169,2191,2208,2211,2212,2227,2272,2306,2350,2374,2383,2386,2387,2401,2425,2447,2467,2470,2471,2505,2506,2539,2556,2625,2642,2661,2665,2668,2669,2684,2701,2748,2765,2784,2788,2791,2792,2814,2832,2880,2897,2916,2920,2923,2924,2935,2955,3032,3049,3068,3072,3075,3076,3096,3138,3177,3200,3219,3272,3276,3337,3354,3373,3377,3440,3457,3476,3480,3543,3560,3579,3583,3586,3587,3597,3614,3687,3704,3723,3727,3730,3731,3794,3850,3870,3941,3958,3977,3981,4043,4059,4070,4073,4104,4140,4213,4231,4251,4256,4319,4337,4349,4395,4408,4413,4417,4420,4421,4456,4487,4506,4549,4561,4565,4588,4646,4683,4749,4767,4787,4792,4804,4808,4854,4890,4957,4974,4993,4997,5000,5001,5058,5120,5175,5206,5237,5279,5282,5283,5308,5325,5388,5405,5424,5428,5431,5432,5454,5472,5535,5552,5571,5575,5578,5579,5597,5634,5668,5705,5742,5743,5755,5783,5874,5881,5915,5918,5920,5921,5988,6023,6039,6056,6069,6072,6115,6132,6145,6148,6191,6203],"Infos":null},{"Name":"/usr/local/go/src/syscall/exec_unix.go","Base":16820,"Size":7213,"Lines":[0,55,109,159,160,224,225,251,252,268,269,278,289,297,307,309,310,376,379,444,505,569,625,689,751,818,882,927,930,998,1069,1138,1171,1174,1238,1304,1370,1407,1410,1471,1544,1612,1678,1747,1812,1854,1857,1921,1988,2051,2104,2171,2199,2202,2252,2302,2363,2409,2472,2518,2568,2625,2691,2692,2718,2719,2785,2851,2877,2920,2952,2984,3015,3018,3037,3048,3050,3051,3116,3182,3223,3280,3295,3327,3359,3399,3417,3436,3440,3443,3462,3478,3480,3481,3541,3542,3599,3635,3652,3665,3668,3686,3707,3717,3739,3742,3777,3789,3791,3792,3852,3899,3924,3953,3983,4028,4030,4031,4106,4126,4149,4196,4229,4267,4287,4289,4290,4316,4348,4349,4431,4445,4456,4472,4496,4497,4515,4538,4541,4558,4575,4600,4603,4604,4615,4626,4627,4655,4696,4713,4729,4732,4773,4790,4806,4809,4854,4871,4887,4890,4891,4985,5005,5008,5009,5027,5050,5096,5114,5131,5135,5138,5153,5174,5215,5233,5250,5254,5257,5258,5309,5359,5379,5396,5397,5443,5486,5499,5502,5503,5523,5607,5623,5643,5656,5659,5678,5679,5718,5731,5813,5826,5853,5890,5911,5915,5933,5948,5952,5953,6006,6041,6083,6105,6147,6151,6167,6170,6171,6232,6249,6250,6257,6273,6287,6301,6304,6323,6338,6340,6341,6401,6483,6519,6521,6522,6569,6671,6711,6731,6733,6734,6752,6820,6861,6878,6891,6894,6935,6952,6965,6968,7009,7026,7039,7042,7080,7115,7153,7191,7211],"Infos":null},{"Name":"/usr/local/go/src/syscall/flock.go","Base":24034,"Size":698,"Lines":[0,56,57,112,166,216,217,233,234,250,251,325,379,418,419,504,562,649,666,679,682,696],"Infos":null},{"Name":"/usr/local/go/src/syscall/race0.go","Base":24733,"Size":443,"Lines":[0,56,110,160,161,177,178,194,195,204,214,216,217,243,244,284,286,287,332,334,335,386,388,389,441],"Infos":null},{"Name":"/usr/local/go/src/syscall/route_bsd.go","Base":25177,"Size":5676,"Lines":[0,56,110,160,161,211,212,244,245,261,262,278,279,342,375,396,456,514,577,593,611,624,649,662,665,682,698,701,746,748,749,812,874,889,942,1017,1032,1049,1103,1121,1124,1137,1155,1158,1182,1240,1258,1261,1282,1284,1285,1333,1365,1388,1390,1391,1446,1447,1472,1488,1503,1518,1520,1521,1585,1597,1624,1641,1656,1658,1659,1727,1728,1775,1782,1792,1810,1813,1829,1868,1912,1924,1928,1975,1988,2019,2087,2106,2121,2126,2148,2173,2178,2193,2228,2243,2260,2315,2344,2433,2464,2470,2486,2504,2559,2588,2677,2708,2714,2730,2735,2739,2774,2777,2792,2794,2795,2855,2885,2916,2933,2948,2950,2951,3008,3042,3055,3058,3131,3148,3161,3164,3188,3190,3191,3255,3293,3328,3346,3361,3363,3364,3415,3416,3477,3514,3527,3530,3546,3601,3662,3725,3785,3840,3877,3916,3950,3962,3966,4013,4026,4043,4075,4108,4113,4181,4200,4215,4220,4245,4266,4289,4308,4329,4359,4385,4415,4442,4455,4524,4530,4557,4590,4602,4617,4622,4690,4709,4724,4729,4754,4771,4791,4795,4830,4833,4845,4847,4848,4916,4967,5039,5054,5085,5098,5144,5178,5200,5212,5216,5263,5284,5287,5350,5387,5408,5411,5429,5431,5432,5497,5554,5630,5674],"Infos":null},{"Name":"/usr/local/go/src/syscall/route_darwin.go","Base":30854,"Size":1880,"Lines":[0,56,110,160,161,204,205,221,222,238,239,306,325,432,476,553,571,619,700,732,784,870,905,966,1063,1066,1078,1080,1081,1143,1192,1236,1256,1271,1273,1274,1326,1327,1397,1435,1448,1451,1467,1506,1552,1564,1568,1615,1628,1645,1711,1728,1743,1748,1773,1804,1824,1828,1863,1866,1878],"Infos":null},{"Name":"/usr/local/go/src/syscall/sockcmsg_unix.go","Base":32735,"Size":2962,"Lines":[0,56,110,160,161,225,226,253,254,270,271,287,288,351,385,406,470,532,568,581,584,629,631,632,702,761,793,838,840,841,908,955,989,1047,1049,1050,1093,1182,1184,1185,1246,1281,1297,1312,1314,1315,1383,1396,1471,1504,1512,1542,1601,1619,1638,1642,1694,1719,1750,1753,1771,1773,1774,1851,1891,1942,1968,1971,2023,2025,2026,2093,2144,2181,2206,2245,2285,2307,2328,2356,2386,2412,2458,2470,2473,2483,2485,2486,2555,2619,2682,2717,2738,2741,2775,2796,2799,2835,2880,2934,2940,2943,2960],"Infos":null},{"Name":"/usr/local/go/src/syscall/str.go","Base":35698,"Size":549,"Lines":[0,55,109,159,160,176,177,260,274,307,310,335,337,338,368,410,429,446,476,482,494,497,523,547],"Infos":null},{"Name":"/usr/local/go/src/syscall/syscall.go","Base":36248,"Size":3337,"Lines":[0,55,109,159,160,235,308,384,459,532,608,642,717,791,842,913,966,1030,1090,1145,1148,1212,1273,1340,1398,1462,1465,1481,1482,1498,1499,1566,1626,1649,1689,1723,1740,1802,1805,1815,1817,1818,1881,1942,1981,2034,2065,2082,2104,2108,2111,2140,2152,2167,2169,2170,2233,2293,2316,2385,2386,2454,2521,2560,2610,2644,2661,2679,2682,2701,2703,2704,2773,2794,2812,2813,2866,2904,2906,2907,2959,3004,3006,3007,3042,3085,3087,3088,3122,3170,3172,3173,3232,3296,3310],"Infos":null},{"Name":"/usr/local/go/src/syscall/syscall_bsd.go","Base":39586,"Size":16125,"Lines":[0,55,109,159,160,210,211,268,324,381,434,476,477,493,494,503,514,524,526,527,530,541,545,546,606,659,660,703,732,749,767,770,783,801,804,805,854,878,899,902,903,927,957,974,992,995,1018,1046,1065,1068,1076,1078,1079,1120,1141,1168,1171,1172,1204,1230,1249,1252,1285,1287,1288,1345,1418,1487,1550,1613,1665,1704,1705,1778,1857,1931,1952,1992,2035,2078,2082,2154,2196,2217,2257,2300,2323,2372,2376,2441,2505,2509,2586,2656,2739,2822,2826,2890,2942,2987,3054,3066,3069,3070,3078,3080,3081,3136,3195,3245,3299,3323,3324,3347,3348,3356,3370,3384,3395,3396,3409,3425,3427,3428,3490,3491,3530,3553,3565,3568,3592,3594,3595,3675,3676,3714,3739,3772,3784,3787,3799,3801,3802,3877,3878,3973,3974,4071,4072,4114,4133,4145,4148,4180,4182,4183,4233,4234,4323,4324,4418,4437,4487,4508,4540,4543,4551,4553,4554,4634,4703,4775,4842,4937,5030,5110,5190,5233,5234,5306,5344,5368,5371,5405,5430,5477,5504,5526,5563,5593,5596,5655,5657,5658,5730,5768,5792,5795,5829,5855,5902,5929,5951,5980,6017,6047,6050,6109,6111,6112,6183,6200,6216,6254,6278,6281,6339,6364,6390,6423,6426,6485,6487,6488,6563,6583,6607,6610,6631,6656,6681,6704,6727,6750,6773,6814,6844,6847,6908,6910,6911,6971,6997,7012,7064,7094,7112,7136,7158,7178,7198,7218,7238,7276,7303,7307,7324,7325,7340,7388,7437,7459,7463,7489,7490,7553,7617,7679,7727,7782,7809,7833,7885,7915,7925,7935,7940,7944,8004,8030,8047,8048,8063,8112,8139,8183,8220,8258,8285,8289,8306,8307,8323,8372,8399,8443,8480,8506,8544,8571,8575,8592,8595,8621,8623,8624,8680,8704,8742,8777,8794,8803,8806,8849,8886,8935,8983,9021,9034,9064,9067,9098,9115,9128,9138,9141,9149,9151,9152,9204,9228,9266,9318,9327,9330,9403,9426,9513,9541,9577,9580,9608,9610,9611,9688,9689,9755,9767,9790,9853,9868,9870,9871,9945,9968,10038,10057,10059,10060,10121,10139,10173,10241,10261,10263,10264,10329,10349,10385,10453,10473,10475,10476,10547,10570,10609,10677,10697,10699,10700,10773,10797,10837,10905,10925,10927,10928,11034,11128,11192,11193,11297,11313,11337,11379,11420,11435,11452,11496,11517,11520,11536,11555,11593,11612,11633,11650,11654,11703,11733,11736,11752,11768,11820,11829,11832,11860,11888,11954,11989,12023,12026,12034,12036,12037,12101,12102,12176,12218,12226,12228,12229,12311,12335,12355,12371,12405,12423,12440,12444,12447,12463,12504,12533,12548,12565,12609,12630,12633,12649,12668,12703,12722,12743,12760,12764,12813,12843,12846,12862,12878,12930,12946,12949,12983,12991,12994,13009,13011,13012,13141,13142,13230,13264,13287,13326,13329,13351,13388,13391,13461,13463,13464,13573,13574,13627,13661,13690,13707,13724,13727,13728,13743,13760,13813,13830,13833,13846,13863,13866,13867,13902,13926,13983,14000,14003,14004,14036,14070,14076,14079,14109,14111,14112,14171,14205,14234,14251,14267,14270,14271,14306,14323,14347,14404,14420,14423,14436,14452,14455,14504,14506,14507,14566,14567,14620,14639,14655,14658,14718,14720,14721,14773,14835,14893,14912,14928,14931,14988,15043,15062,15102,15142,15145,15205,15207,15208,15263,15264,15313,15332,15348,15351,15410,15412,15413,15472,15473,15487,15524,15582,15637,15692,15745,15822,15823,15846,15879,15894,15911,15913,15914,16006,16059,16061,16062,16098,16123],"Infos":null},{"Name":"/usr/local/go/src/syscall/syscall_darwin.go","Base":55712,"Size":13009,"Lines":[0,60,114,164,165,189,235,273,338,400,457,495,496,512,513,522,542,552,554,555,584,585,616,643,722,780,805,859,901,943,973,977,980,1042,1062,1082,1084,1085,1116,1130,1144,1159,1173,1187,1201,1215,1232,1260,1262,1263,1314,1370,1405,1406,1464,1512,1571,1635,1700,1756,1793,1826,1859,1860,1899,1940,1957,1975,1978,1979,2028,2079,2164,2182,2185,2213,2215,2216,2274,2330,2386,2424,2525,2546,2578,2625,2651,2664,2673,2677,2705,2757,2769,2773,2832,2876,2928,2940,2944,2952,2962,2992,2995,3036,3038,3039,3116,3195,3274,3275,3283,3304,3334,3336,3337,3360,3380,3400,3420,3440,3460,3480,3500,3502,3503,3612,3635,3684,3687,3727,3728,3743,3779,3796,3814,3817,3818,3841,3860,3892,3930,3970,3995,4015,4020,4023,4049,4063,4080,4083,4132,4133,4193,4253,4278,4294,4325,4344,4347,4386,4387,4429,4449,4472,4533,4537,4587,4639,4702,4773,4777,4811,4852,4862,4888,4904,4908,4911,4919,4921,4922,4963,4964,4997,5015,5031,5034,5060,5068,5070,5071,5134,5158,5179,5198,5230,5288,5291,5369,5382,5396,5407,5410,5418,5420,5421,5424,5435,5439,5440,5495,5496,5579,5580,5583,5603,5607,5658,5719,5756,5806,5856,5911,5949,5981,6022,6065,6137,6158,6191,6237,6283,6334,6375,6430,6490,6556,6588,6638,6735,6768,6797,6825,6852,6899,6928,6955,6984,7044,7098,7153,7198,7225,7260,7295,7351,7400,7445,7510,7560,7611,7670,7704,7742,7789,7825,7856,7923,7982,8045,8109,8157,8216,8265,8303,8340,8426,8506,8542,8580,8616,8656,8703,8763,8803,8852,8901,8955,8993,9039,9075,9138,9207,9259,9284,9338,9377,9417,9455,9505,9554,9661,9718,9791,9866,9867,9870,9887,9891,9901,9914,9929,9941,9955,9970,9979,9989,9999,10008,10016,10024,10036,10047,10060,10070,10080,10094,10103,10113,10123,10132,10144,10153,10162,10172,10186,10202,10215,10223,10232,10243,10255,10281,10299,10314,10329,10350,10362,10372,10384,10392,10406,10419,10431,10443,10456,10468,10481,10496,10512,10525,10539,10548,10562,10577,10588,10598,10610,10620,10630,10640,10650,10660,10669,10679,10689,10699,10709,10718,10728,10737,10747,10759,10773,10785,10798,10812,10824,10839,10851,10867,10879,10894,10911,10929,10946,10964,10982,11000,11019,11038,11048,11058,11072,11086,11100,11114,11133,11151,11166,11192,11216,11243,11267,11291,11318,11344,11367,11393,11421,11446,11465,11493,11506,11520,11535,11549,11562,11574,11587,11601,11624,11639,11651,11665,11683,11704,11717,11743,11767,11789,11809,11822,11834,11853,11873,11893,11912,11932,11941,11952,11963,11974,11986,11998,12015,12032,12044,12064,12087,12105,12127,12141,12154,12170,12187,12205,12223,12241,12259,12277,12295,12311,12327,12344,12362,12380,12398,12409,12426,12444,12461,12479,12497,12517,12537,12558,12577,12595,12613,12632,12650,12670,12693,12711,12730,12749,12767,12786,12805,12822,12841,12860,12881,12905,12927,12956,12971,12990],"Infos":null},{"Name":"/usr/local/go/src/syscall/syscall_darwin_amd64.go","Base":68722,"Size":1751,"Lines":[0,55,109,159,160,176,177,193,194,233,234,319,320,368,389,411,419,421,422,509,510,556,596,631,659,667,669,670,739,784,834,886,912,948,962,978,990,992,993,1044,1066,1090,1115,1117,1118,1157,1183,1185,1186,1236,1272,1274,1275,1317,1344,1346,1347,1435,1463,1464,1589,1590,1613,1614,1628,1639,1642,1650,1652,1653],"Infos":null},{"Name":"/usr/local/go/src/syscall/syscall_unix.go","Base":70474,"Size":7167,"Lines":[0,55,109,159,160,224,225,241,242,251,262,270,280,282,283,289,301,313,325,327,328,336,397,461,522,524,525,592,672,742,825,826,897,898,920,932,1005,1092,1141,1143,1144,1249,1267,1288,1291,1292,1322,1390,1409,1429,1432,1433,1457,1476,1491,1502,1513,1538,1539,1580,1618,1619,1660,1679,1689,1707,1724,1739,1741,1742,1794,1841,1857,1860,1861,1895,1920,1930,1948,1966,2002,2018,2021,2022,2057,2144,2159,2162,2183,2195,2197,2198,2263,2334,2401,2414,2433,2449,2454,2473,2474,2506,2548,2565,2580,2592,2596,2599,2631,2633,2634,2668,2757,2759,2760,2792,2850,2852,2853,2906,2948,2964,2965,2993,2994,3028,3066,3086,3103,3117,3121,3124,3157,3159,3160,3209,3231,3249,3262,3306,3310,3328,3368,3372,3375,3383,3385,3386,3436,3454,3498,3501,3524,3551,3593,3596,3604,3606,3607,3658,3710,3737,3738,3764,3865,3867,3868,3896,3906,3920,3943,3945,3946,3974,3986,4001,4018,4043,4045,4046,4073,4086,4108,4110,4111,4156,4186,4203,4216,4219,4244,4246,4247,4295,4325,4342,4355,4358,4386,4388,4389,4441,4465,4503,4555,4564,4567,4595,4597,4598,4662,4675,4698,4761,4781,4783,4784,4863,4887,4925,4987,4996,4999,5034,5068,5071,5079,5081,5082,5150,5180,5197,5210,5213,5250,5252,5253,5319,5381,5383,5384,5448,5470,5528,5530,5531,5605,5670,5672,5673,5743,5814,5816,5817,5891,5964,5966,5967,6045,6124,6126,6127,6194,6262,6264,6265,6331,6414,6416,6417,6487,6562,6564,6565,6623,6669,6695,6698,6736,6744,6746,6747,6812,6830,6874,6891,6913,6935,6938,6946,6948,6949,7037,7055,7099,7102,7147,7149,7150],"Infos":null},{"Name":"/usr/local/go/src/syscall/zerrors_darwin_amd64.go","Base":77642,"Size":56579,"Lines":[0,20,75,76,116,149,150,166,167,175,217,258,299,341,383,424,465,506,548,589,630,672,713,754,796,838,880,921,962,1004,1045,1087,1129,1171,1213,1254,1295,1337,1378,1420,1462,1504,1545,1587,1628,1669,1710,1752,1797,1840,1882,1926,1968,2011,2055,2097,2142,2185,2229,2272,2316,2360,2402,2446,2489,2533,2575,2620,2664,2712,2760,2808,2856,2904,2952,3000,3048,3096,3144,3192,3240,3288,3336,3384,3432,3480,3528,3576,3624,3672,3714,3756,3797,3838,3879,3921,3963,4005,4046,4087,4129,4170,4212,4254,4296,4337,4379,4420,4461,4502,4544,4586,4627,4672,4715,4757,4799,4841,4882,4923,4965,5007,5049,5091,5136,5177,5219,5260,5301,5343,5384,5426,5467,5508,5549,5590,5634,5677,5718,5761,5804,5847,5890,5932,5974,6016,6059,6101,6142,6183,6225,6266,6308,6349,6390,6431,6473,6515,6556,6597,6638,6679,6721,6763,6805,6847,6889,6930,6972,7014,7055,7097,7139,7180,7221,7262,7303,7344,7385,7426,7467,7508,7549,7590,7631,7672,7713,7755,7796,7837,7878,7920,7962,8004,8046,8088,8130,8172,8214,8255,8296,8338,8380,8422,8464,8506,8547,8589,8630,8671,8713,8754,8798,8842,8886,8930,8972,9016,9060,9102,9146,9190,9234,9277,9318,9361,9407,9449,9491,9532,9573,9615,9656,9698,9740,9782,9824,9865,9906,9947,9989,10031,10072,10114,10156,10198,10240,10282,10324,10366,10408,10450,10491,10533,10574,10616,10658,10700,10741,10783,10825,10866,10907,10948,10989,11031,11072,11114,11156,11198,11239,11280,11322,11363,11407,11450,11492,11535,11578,11621,11665,11706,11747,11791,11835,11879,11920,11964,12006,12048,12091,12133,12176,12218,12261,12302,12344,12385,12427,12469,12511,12553,12595,12637,12679,12721,12763,12805,12847,12888,12930,12971,13013,13055,13097,13138,13180,13222,13263,13305,13347,13389,13431,13473,13514,13555,13596,13637,13679,13721,13763,13805,13847,13889,13931,13972,14013,14054,14096,14138,14180,14222,14264,14306,14348,14390,14432,14474,14516,14558,14600,14642,14684,14726,14768,14809,14851,14893,14935,14977,15018,15059,15101,15143,15184,15226,15267,15311,15353,15395,15441,15483,15531,15573,15617,15662,15710,15752,15794,15842,15883,15930,15978,16020,16068,16110,16152,16194,16236,16278,16320,16361,16403,16445,16487,16529,16571,16613,16655,16697,16739,16781,16823,16865,16908,16950,16991,17032,17074,17116,17158,17200,17242,17283,17325,17367,17409,17451,17492,17533,17575,17617,17659,17701,17742,17784,17826,17868,17910,17952,17993,18035,18077,18119,18160,18202,18243,18285,18327,18369,18411,18453,18495,18538,18580,18622,18664,18706,18748,18790,18832,18874,18916,18958,18999,19041,19083,19124,19166,19208,19249,19291,19333,19374,19416,19458,19500,19542,19584,19626,19668,19710,19752,19794,19836,19877,19919,19961,20003,20044,20086,20128,20170,20212,20254,20296,20338,20380,20422,20464,20506,20548,20589,20631,20673,20715,20757,20799,20841,20883,20925,20967,21009,21051,21092,21133,21175,21217,21265,21313,21355,21397,21439,21481,21523,21565,21606,21648,21689,21730,21772,21815,21859,21902,21945,21987,22029,22072,22113,22154,22195,22236,22277,22318,22359,22401,22442,22483,22524,22565,22607,22648,22690,22732,22774,22815,22857,22899,22941,22982,23023,23067,23108,23150,23192,23234,23276,23318,23360,23402,23444,23486,23528,23570,23612,23653,23695,23739,23782,23825,23867,23909,23953,23995,24037,24080,24121,24163,24204,24245,24286,24328,24372,24414,24456,24498,24540,24582,24624,24665,24707,24749,24790,24831,24872,24913,24955,24996,25038,25079,25121,25162,25206,25248,25289,25331,25373,25415,25456,25498,25539,25581,25623,25665,25709,25752,25795,25838,25879,25920,25961,26002,26043,26084,26125,26166,26207,26248,26289,26330,26371,26412,26456,26497,26538,26580,26623,26666,26709,26752,26794,26835,26877,26919,26960,27001,27042,27084,27125,27167,27210,27251,27294,27338,27381,27426,27467,27508,27552,27596,27638,27680,27723,27764,27805,27846,27887,27929,27971,28012,28053,28094,28135,28176,28217,28258,28299,28347,28388,28429,28470,28511,28559,28607,28654,28695,28743,28791,28839,28885,28926,28974,29022,29064,29105,29147,29188,29235,29280,29328,29370,29417,29459,29500,29547,29588,29629,29676,29717,29765,29813,29861,29909,29950,29992,30037,30079,30120,30162,30204,30245,30286,30327,30375,30416,30458,30505,30548,30594,30640,30684,30727,30769,30811,30852,30897,30940,30981,31029,31070,31111,31153,31199,31241,31284,31325,31369,31410,31454,31502,31543,31584,31625,31666,31707,31748,31789,31830,31871,31912,31954,31995,32037,32079,32120,32161,32202,32243,32284,32325,32366,32407,32448,32489,32530,32571,32612,32653,32694,32735,32776,32817,32873,32914,32955,32996,33037,33078,33119,33160,33201,33242,33284,33326,33367,33408,33449,33491,33533,33574,33618,33664,33707,33754,33796,33838,33880,33921,33962,34009,34056,34099,34145,34187,34233,34279,34324,34368,34412,34457,34498,34541,34582,34627,34670,34711,34752,34793,34834,34876,34917,34959,35000,35042,35083,35124,35165,35206,35247,35289,35330,35371,35412,35453,35498,35539,35580,35621,35662,35703,35745,35787,35829,35871,35913,35954,35995,36036,36077,36118,36159,36200,36241,36289,36337,36385,36433,36481,36529,36577,36625,36673,36721,36769,36817,36865,36913,36961,37009,37057,37105,37153,37201,37249,37297,37345,37393,37441,37489,37537,37585,37633,37681,37729,37777,37825,37873,37921,37969,38017,38065,38113,38161,38209,38257,38305,38353,38401,38449,38497,38545,38593,38641,38689,38737,38785,38833,38881,38929,38977,39025,39073,39121,39169,39217,39265,39313,39361,39409,39457,39505,39553,39601,39649,39697,39738,39780,39821,39862,39903,39944,39988,40030,40071,40113,40154,40196,40240,40284,40325,40369,40411,40455,40499,40543,40587,40631,40675,40719,40763,40806,40850,40894,40938,40982,41026,41070,41111,41152,41200,41241,41284,41328,41372,41416,41460,41503,41546,41590,41634,41676,41720,41764,41806,41850,41894,41938,41982,42026,42070,42114,42158,42202,42245,42287,42328,42371,42413,42454,42497,42540,42583,42626,42669,42711,42752,42794,42836,42877,42918,42960,43001,43042,43083,43125,43167,43209,43251,43292,43336,43377,43418,43460,43503,43546,43587,43628,43669,43711,43754,43795,43843,43891,43939,43987,44035,44083,44131,44179,44227,44275,44323,44371,44419,44467,44515,44563,44611,44659,44707,44755,44803,44851,44899,44947,44989,45031,45073,45116,45157,45198,45240,45282,45323,45365,45406,45454,45502,45550,45598,45639,45681,45722,45763,45805,45847,45888,45929,45977,46025,46073,46121,46169,46217,46265,46313,46361,46409,46457,46505,46553,46601,46649,46697,46745,46793,46841,46889,46937,46985,47031,47072,47113,47154,47195,47236,47277,47318,47359,47400,47442,47483,47524,47565,47607,47648,47689,47730,47775,47820,47862,47903,47945,47987,48028,48069,48111,48153,48194,48235,48237,48238,48248,48256,48286,48316,48347,48378,48409,48440,48471,48502,48533,48564,48594,48625,48656,48687,48718,48749,48779,48810,48841,48872,48902,48933,48964,48995,49026,49057,49087,49118,49149,49180,49211,49242,49273,49304,49334,49365,49395,49426,49457,49488,49519,49550,49581,49612,49643,49674,49705,49736,49767,49798,49829,49860,49891,49922,49953,49983,50013,50044,50075,50105,50136,50167,50198,50229,50260,50291,50322,50352,50383,50414,50445,50476,50507,50538,50569,50599,50630,50661,50692,50722,50753,50784,50815,50846,50877,50908,50939,50970,51001,51032,51063,51094,51125,51156,51187,51218,51249,51280,51310,51341,51372,51403,51434,51465,51496,51527,51558,51560,51561,51572,51580,51605,51630,51655,51681,51707,51732,51757,51782,51807,51833,51858,51884,51909,51934,51959,51985,52010,52035,52061,52086,52111,52136,52162,52188,52214,52240,52266,52292,52318,52344,52370,52396,52398,52399,52414,52440,52473,52508,52533,52566,52594,52625,52657,52684,52713,52741,52776,52808,52835,52856,52887,52910,52931,52958,53001,53026,53050,53076,53115,53144,53184,53208,53232,53265,53287,53318,53342,53363,53405,53431,53473,53508,53547,53587,53625,53651,53691,53723,53755,53790,53823,53862,53919,53951,53991,54016,54048,54093,54135,54169,54204,54241,54274,54316,54359,54388,54416,54459,54487,54509,54535,54564,54592,54616,54645,54676,54719,54746,54773,54802,54833,54868,54896,54930,54973,55003,55031,55060,55082,55133,55177,55213,55254,55285,55313,55341,55377,55408,55437,55458,55488,55528,55556,55585,55607,55631,55661,55704,55730,55761,55790,55792,55793,55809,55836,55851,55869,55882,55910,55933,55952,55969,56002,56017,56035,56062,56086,56106,56126,56145,56174,56201,56219,56237,56258,56286,56315,56336,56367,56399,56429,56461,56489,56517,56547,56577],"Infos":null},{"Name":"/usr/local/go/src/syscall/zsyscall_darwin_amd64.go","Base":134222,"Size":32520,"Lines":[0,73,128,129,145,146,162,163,228,229,288,376,389,403,414,417,425,427,428,493,494,546,633,647,658,661,669,671,672,737,738,828,967,983,997,1008,1011,1019,1021,1022,1087,1088,1169,1279,1293,1307,1318,1321,1329,1331,1332,1397,1398,1468,1544,1558,1569,1572,1580,1582,1583,1648,1649,1722,1801,1815,1826,1829,1837,1839,1840,1905,1906,1972,2056,2070,2084,2095,2098,2106,2108,2109,2174,2175,2271,2402,2416,2427,2430,2438,2440,2441,2506,2507,2601,2716,2730,2741,2744,2752,2754,2755,2820,2821,2900,3018,3032,3043,3046,3054,3056,3057,3122,3123,3202,3320,3334,3345,3348,3356,3358,3359,3424,3425,3469,3533,3547,3558,3561,3569,3571,3572,3637,3638,3714,3837,3851,3862,3865,3873,3875,3876,3941,3942,4047,4071,4088,4118,4128,4159,4162,4324,4337,4351,4362,4365,4373,4375,4376,4441,4442,4535,4559,4578,4610,4620,4651,4654,4780,4794,4805,4808,4816,4818,4819,4884,4885,4950,5043,5056,5070,5081,5084,5092,5094,5095,5160,5161,5226,5319,5332,5346,5357,5360,5368,5370,5371,5436,5437,5567,5717,5730,5744,5755,5758,5766,5768,5769,5834,5835,5930,5954,5973,6005,6015,6046,6049,6228,6242,6253,6256,6264,6266,6267,6332,6333,6393,6408,6444,6461,6470,6473,6573,6599,6613,6624,6627,6635,6637,6638,6703,6704,6760,6844,6858,6869,6872,6880,6882,6883,6948,6949,7009,7083,7098,7112,7123,7126,7134,7136,7137,7202,7203,7279,7381,7395,7406,7409,7417,7419,7420,7485,7486,7526,7571,7584,7597,7611,7622,7625,7633,7635,7636,7701,7702,7758,7836,7850,7861,7864,7872,7874,7875,7940,7941,7993,8008,8044,8061,8070,8073,8154,8180,8194,8205,8208,8216,8218,8219,8284,8285,8347,8451,8465,8476,8479,8487,8489,8490,8555,8556,8594,8609,8645,8662,8671,8674,8742,8768,8782,8793,8796,8804,8806,8807,8872,8873,8924,8939,8975,8992,9001,9004,9087,9113,9127,9138,9141,9149,9151,9152,9217,9218,9269,9284,9320,9337,9346,9349,9429,9455,9469,9480,9483,9491,9493,9494,9559,9560,9616,9631,9667,9684,9693,9696,9786,9812,9826,9837,9840,9848,9850,9851,9916,9917,9956,9971,10007,10024,10033,10036,10105,10131,10145,10156,10159,10167,10169,10170,10235,10236,10269,10320,10334,10345,10348,10356,10358,10359,10424,10425,10465,10518,10533,10547,10558,10561,10569,10571,10572,10637,10638,10680,10745,10759,10770,10773,10781,10783,10784,10849,10850,10923,10938,10975,10992,11001,11004,11019,11056,11073,11082,11085,11202,11228,11254,11268,11279,11282,11290,11292,11293,11358,11359,11381,11421,11429,11431,11432,11497,11498,11532,11584,11598,11609,11612,11620,11622,11623,11688,11689,11736,11803,11817,11828,11831,11839,11841,11842,11907,11908,11955,12019,12033,12044,12047,12055,12057,12058,12123,12124,12176,12250,12264,12275,12278,12286,12288,12289,12354,12355,12397,12459,12473,12484,12487,12495,12497,12498,12563,12564,12620,12688,12703,12717,12728,12731,12739,12741,12742,12807,12808,12855,12936,12950,12961,12964,12972,12974,12975,13040,13041,13092,13175,13189,13200,13203,13211,13213,13214,13279,13280,13313,13364,13378,13389,13392,13400,13402,13403,13468,13469,13520,13589,13603,13614,13617,13625,13627,13628,13693,13694,13770,13794,13813,13845,13855,13886,13889,14017,14030,14044,14055,14058,14066,14068,14069,14134,14135,14169,14218,14234,14242,14244,14245,14310,14311,14339,14385,14401,14409,14411,14412,14477,14478,14505,14551,14566,14574,14576,14577,14642,14643,14669,14714,14729,14737,14739,14740,14805,14806,14852,14910,14926,14940,14951,14954,14962,14964,14965,15030,15031,15059,15105,15121,15129,15131,15132,15197,15198,15224,15269,15284,15292,15294,15295,15360,15361,15389,15435,15451,15459,15461,15462,15527,15528,15589,15661,15677,15691,15702,15705,15713,15715,15716,15781,15782,15835,15923,15937,15948,15951,15959,15961,15962,16027,16028,16082,16171,16185,16196,16199,16207,16209,16210,16275,16276,16320,16377,16392,16406,16417,16420,16428,16430,16431,16496,16497,16523,16568,16583,16591,16593,16594,16659,16660,16694,16742,16767,16775,16777,16778,16843,16844,16880,16923,16937,16951,16962,16965,16973,16975,16976,17041,17042,17099,17114,17150,17167,17176,17179,17270,17296,17310,17321,17324,17332,17334,17335,17400,17401,17451,17466,17502,17519,17528,17531,17546,17582,17599,17608,17611,17705,17731,17757,17771,17782,17785,17793,17795,17796,17861,17862,17908,17974,17988,17999,18002,18010,18012,18013,18078,18079,18131,18146,18182,18199,18208,18211,18309,18335,18349,18360,18363,18371,18373,18374,18439,18440,18491,18506,18542,18559,18568,18571,18651,18677,18691,18702,18705,18713,18715,18716,18781,18782,18834,18849,18885,18902,18911,18914,18995,19021,19035,19046,19049,19057,19059,19060,19125,19126,19186,19201,19237,19254,19263,19266,19357,19383,19397,19408,19411,19419,19421,19422,19487,19488,19523,19547,19564,19594,19604,19635,19638,19704,19718,19729,19732,19740,19742,19743,19808,19809,19848,19905,19919,19930,19933,19941,19943,19944,20009,20010,20058,20082,20099,20129,20139,20170,20173,20254,20268,20279,20282,20290,20292,20293,20358,20359,20396,20420,20437,20467,20477,20508,20511,20579,20593,20604,20607,20615,20617,20618,20683,20684,20716,20762,20776,20787,20790,20798,20800,20801,20866,20867,20935,20950,20986,21003,21012,21015,21107,21133,21147,21161,21172,21175,21183,21185,21186,21251,21252,21312,21327,21363,21380,21389,21392,21476,21502,21517,21531,21542,21545,21553,21555,21556,21621,21622,21686,21710,21727,21757,21767,21798,21801,21902,21915,21929,21940,21943,21951,21953,21954,22019,22020,22085,22109,22126,22156,22166,22197,22200,22302,22315,22329,22340,22343,22351,22353,22354,22419,22420,22469,22493,22510,22540,22550,22581,22584,22660,22673,22687,22698,22701,22709,22711,22712,22777,22778,22838,22853,22889,22906,22915,22918,22942,22961,22993,23003,23034,23037,23136,23162,23175,23189,23200,23203,23211,23213,23214,23279,23280,23330,23345,23381,23398,23407,23410,23425,23459,23476,23485,23488,23584,23610,23636,23650,23661,23664,23672,23674,23675,23740,23741,23780,23795,23831,23848,23857,23860,23929,23955,23969,23980,23983,23991,23993,23994,24059,24060,24098,24113,24149,24166,24175,24178,24246,24272,24286,24297,24300,24308,24310,24311,24376,24377,24452,24532,24555,24569,24580,24583,24591,24593,24594,24659,24660,24741,24908,24922,24933,24936,24944,24946,24947,25012,25013,25050,25105,25119,25130,25133,25141,25143,25144,25209,25210,25247,25305,25319,25330,25333,25341,25343,25344,25409,25410,25445,25501,25515,25526,25529,25537,25539,25540,25605,25606,25647,25662,25698,25715,25724,25727,25798,25824,25838,25849,25852,25860,25862,25863,25928,25929,25975,26044,26058,26069,26072,26080,26082,26083,26148,26149,26210,26293,26307,26318,26321,26329,26331,26332,26397,26398,26439,26498,26512,26523,26526,26534,26536,26537,26602,26603,26651,26722,26736,26747,26750,26758,26760,26761,26826,26827,26875,26946,26960,26971,26974,26982,26984,26985,27050,27051,27104,27192,27206,27217,27220,27228,27230,27231,27296,27297,27334,27380,27395,27409,27420,27423,27431,27433,27434,27499,27500,27545,27622,27636,27647,27650,27658,27660,27661,27726,27727,27762,27818,27832,27843,27846,27854,27856,27857,27922,27923,27974,27989,28025,28042,28051,28054,28151,28177,28191,28202,28205,28213,28215,28216,28281,28282,28337,28352,28388,28405,28414,28417,28516,28542,28556,28567,28570,28578,28580,28581,28646,28647,28700,28715,28751,28768,28777,28780,28795,28831,28848,28857,28860,28957,28983,29009,29023,29034,29037,29045,29047,29048,29113,29114,29140,29180,29194,29205,29208,29216,29218,29219,29284,29285,29340,29355,29391,29408,29417,29420,29505,29531,29545,29556,29559,29567,29569,29570,29635,29636,29676,29732,29751,29759,29761,29762,29827,29828,29869,29884,29920,29937,29946,29949,30020,30046,30060,30071,30074,30082,30084,30085,30150,30151,30190,30205,30241,30258,30267,30270,30339,30365,30379,30390,30393,30401,30403,30404,30469,30470,30521,30536,30572,30589,30598,30601,30684,30710,30724,30735,30738,30746,30748,30749,30814,30815,30865,30889,30906,30936,30946,30977,30980,31057,31070,31084,31095,31098,31106,31108,31109,31174,31175,31281,31403,31422,31436,31447,31450,31458,31460,31461,31526,31527,31583,31651,31665,31676,31679,31687,31689,31690,31755,31756,31819,31909,31922,31936,31947,31950,31958,31960,31961,32026,32027,32091,32182,32195,32209,32220,32223,32231,32233,32234,32299,32300,32368,32447,32464,32482,32496,32507,32510,32518],"Infos":null},{"Name":"/usr/local/go/src/syscall/zsysnum_darwin_amd64.go","Base":166743,"Size":14875,"Lines":[0,49,104,105,121,122,130,170,210,250,290,330,370,410,450,490,531,572,613,654,695,736,777,818,859,900,941,982,1023,1064,1105,1146,1187,1228,1269,1310,1351,1392,1433,1474,1515,1556,1597,1638,1679,1720,1761,1802,1843,1884,1925,1966,2007,2048,2089,2130,2171,2212,2253,2294,2335,2376,2417,2458,2499,2540,2581,2622,2663,2704,2745,2786,2827,2868,2909,2950,2991,3032,3073,3114,3155,3197,3239,3281,3323,3365,3407,3449,3491,3533,3575,3617,3659,3701,3743,3785,3827,3869,3911,3953,3995,4037,4079,4121,4163,4205,4247,4289,4331,4373,4415,4457,4499,4541,4583,4625,4667,4709,4751,4793,4835,4877,4919,4961,5003,5045,5087,5129,5171,5213,5255,5297,5339,5381,5423,5465,5507,5549,5591,5633,5675,5717,5759,5801,5843,5885,5927,5969,6011,6053,6095,6137,6179,6221,6263,6305,6347,6389,6431,6473,6515,6557,6599,6641,6683,6725,6767,6809,6851,6893,6935,6977,7019,7061,7103,7145,7187,7229,7271,7313,7355,7397,7439,7481,7523,7565,7607,7649,7691,7733,7775,7817,7859,7901,7943,7985,8027,8069,8111,8153,8195,8237,8279,8321,8363,8405,8447,8489,8531,8573,8615,8657,8699,8741,8783,8825,8867,8909,8951,8993,9035,9077,9119,9161,9203,9245,9287,9329,9371,9413,9455,9497,9539,9581,9623,9665,9707,9749,9791,9833,9875,9917,9959,10001,10043,10085,10127,10169,10211,10253,10295,10337,10379,10421,10463,10505,10547,10589,10631,10673,10715,10757,10799,10841,10883,10925,10967,11009,11051,11093,11135,11177,11219,11261,11303,11345,11387,11429,11471,11513,11555,11597,11639,11681,11723,11765,11807,11849,11891,11933,11975,12017,12059,12101,12143,12185,12227,12269,12311,12353,12395,12437,12479,12521,12563,12605,12647,12689,12731,12773,12815,12857,12899,12941,12983,13025,13067,13109,13151,13193,13235,13277,13319,13361,13403,13445,13487,13529,13571,13613,13655,13697,13739,13781,13823,13865,13907,13949,13991,14033,14075,14117,14159,14201,14243,14285,14327,14369,14411,14453,14495,14537,14579,14621,14663,14705,14747,14789,14831,14873],"Infos":null},{"Name":"/usr/local/go/src/syscall/ztypes_darwin_amd64.go","Base":181619,"Size":7029,"Lines":[0,40,71,72,88,89,97,119,141,163,185,207,209,210,217,237,257,277,297,299,300,323,335,347,349,350,372,389,406,425,427,428,452,464,476,478,479,500,518,536,552,568,584,600,616,632,648,664,680,696,712,728,744,760,762,763,784,796,808,810,811,830,831,852,873,895,917,939,961,983,1004,1027,1051,1075,1099,1123,1144,1165,1186,1208,1230,1251,1275,1277,1278,1301,1321,1340,1360,1380,1400,1420,1440,1458,1478,1498,1518,1538,1560,1584,1608,1631,1633,1634,1656,1670,1684,1698,1712,1726,1728,1729,1752,1771,1789,1807,1825,1843,1845,1846,1872,1889,1906,1925,1927,1928,1963,1977,1992,2006,2008,2009,2034,2054,2073,2092,2094,2095,2114,2128,2130,2131,2152,2170,2188,2206,2224,2241,2263,2282,2284,2285,2316,2330,2344,2359,2389,2405,2407,2408,2439,2455,2471,2488,2505,2539,2556,2558,2559,2589,2603,2617,2635,2637,2638,2672,2686,2700,2715,2729,2743,2757,2771,2788,2790,2791,2817,2831,2845,2862,2864,2865,2894,2912,2927,2929,2930,2951,2952,2973,2987,3001,3003,3004,3024,3036,3049,3051,3052,3073,3106,3139,3141,3142,3165,3200,3218,3220,3221,3242,3260,3279,3299,3318,3336,3356,3374,3393,3411,3413,3414,3436,3450,3463,3476,3478,3479,3506,3523,3555,3587,3589,3590,3617,3650,3666,3668,3669,3695,3718,3731,3733,3734,3761,3777,3779,3780,3788,3819,3850,3881,3912,3943,3973,4003,4034,4065,4095,4125,4156,4187,4218,4220,4221,4229,4251,4273,4295,4297,4298,4321,4336,4350,4365,4380,4394,4408,4410,4411,4431,4447,4449,4450,4458,4484,4510,4536,4562,4588,4614,4640,4642,4643,4666,4684,4701,4718,4735,4752,4770,4789,4807,4809,4810,4831,4849,4867,4885,4903,4921,4939,4957,4975,4994,5013,5032,5051,5070,5089,5108,5127,5146,5165,5184,5203,5222,5241,5260,5279,5301,5320,5339,5358,5377,5379,5380,5404,5422,5439,5456,5473,5490,5508,5527,5544,5546,5547,5572,5590,5607,5624,5641,5658,5676,5695,5697,5698,5724,5742,5759,5776,5793,5810,5828,5847,5864,5866,5867,5890,5908,5925,5942,5960,5979,5996,6013,6030,6047,6064,6081,6099,6120,6122,6123,6147,6164,6181,6198,6214,6231,6248,6265,6282,6299,6316,6336,6338,6339,6347,6371,6395,6420,6444,6469,6471,6472,6497,6511,6525,6527,6528,6550,6563,6576,6578,6579,6604,6622,6641,6661,6663,6664,6686,6699,6711,6723,6736,6738,6739,6760,6781,6799,6817,6835,6854,6856,6857,6879,6897,6915,6933,6951,6972,6991,7009,7027],"Infos":null}]}
 