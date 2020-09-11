opt subtitle "HI-TECH Software Omniscient Code Generator (Lite mode) build 6446"

opt pagewidth 120

	opt lm

	processor	16F628A
clrc	macro
	bcf	3,0
	endm
clrz	macro
	bcf	3,2
	endm
setc	macro
	bsf	3,0
	endm
setz	macro
	bsf	3,2
	endm
skipc	macro
	btfss	3,0
	endm
skipz	macro
	btfss	3,2
	endm
skipnc	macro
	btfsc	3,0
	endm
skipnz	macro
	btfsc	3,2
	endm
indf	equ	0
indf0	equ	0
pc	equ	2
pcl	equ	2
status	equ	3
fsr	equ	4
fsr0	equ	4
c	equ	1
z	equ	0
pclath	equ	10
	FNROOT	_main
	global	_PORTB
psect	maintext,global,class=CODE,delta=2
global __pmaintext
__pmaintext:
_PORTB	set	6
	global	_TRISB
_TRISB	set	134
	file	"LICAO1.as"
	line	#
psect cinit,class=CODE,delta=2
global start_initialization
start_initialization:

psect cinit,class=CODE,delta=2
global end_of_initialization

;End of C runtime variable initialization code

end_of_initialization:
clrf status
ljmp _main	;jump to C main() function
psect	cstackCOMMON,class=COMMON,space=1
global __pcstackCOMMON
__pcstackCOMMON:
	global	??_main
??_main:	; 0 bytes @ 0x0
	global	?_main
?_main:	; 2 bytes @ 0x0
	ds	2
psect	cstackBANK0,class=BANK0,space=1
global __pcstackBANK0
__pcstackBANK0:
	global	main@A
main@A:	; 2 bytes @ 0x0
	ds	2
	global	main@ICHI
main@ICHI:	; 2 bytes @ 0x2
	ds	2
	global	main@NI
main@NI:	; 2 bytes @ 0x4
	ds	2
	global	main@SAN
main@SAN:	; 2 bytes @ 0x6
	ds	2
	global	main@SHI
main@SHI:	; 2 bytes @ 0x8
	ds	2
	global	main@GO
main@GO:	; 2 bytes @ 0xA
	ds	2
	global	main@ROKU
main@ROKU:	; 2 bytes @ 0xC
	ds	2
	global	main@NANA
main@NANA:	; 2 bytes @ 0xE
	ds	2
	global	main@HACHI
main@HACHI:	; 2 bytes @ 0x10
	ds	2
	global	main@KYUU
main@KYUU:	; 2 bytes @ 0x12
	ds	2
;;Data sizes: Strings 0, constant 0, data 0, bss 0, persistent 0 stack 0
;;Auto spaces:   Size  Autos    Used
;; COMMON          14      2       2
;; BANK0           80     20      20
;; BANK1           80      0       0
;; BANK2           48      0       0

;;
;; Pointer list with targets:



;;
;; Critical Paths under _main in COMMON
;;
;;   None.
;;
;; Critical Paths under _main in BANK0
;;
;;   None.
;;
;; Critical Paths under _main in BANK1
;;
;;   None.
;;
;; Critical Paths under _main in BANK2
;;
;;   None.

;;
;;Main: autosize = 0, tempsize = 2, incstack = 0, save=0
;;

;;
;;Call Graph Tables:
;;
;; ---------------------------------------------------------------------------------
;; (Depth) Function   	        Calls       Base Space   Used Autos Params    Refs
;; ---------------------------------------------------------------------------------
;; (0) _main                                                22    22      0     430
;;                                              0 COMMON     2     2      0
;;                                              0 BANK0     20    20      0
;; ---------------------------------------------------------------------------------
;; Estimated maximum stack depth 0
;; ---------------------------------------------------------------------------------

;; Call Graph Graphs:

;; _main (ROOT)
;;

;; Address spaces:

;;Name               Size   Autos  Total    Cost      Usage
;;BITCOMMON            E      0       0       0        0.0%
;;EEDATA              80      0       0       0        0.0%
;;NULL                 0      0       0       0        0.0%
;;CODE                 0      0       0       0        0.0%
;;COMMON               E      2       2       1       14.3%
;;BITSFR0              0      0       0       1        0.0%
;;SFR0                 0      0       0       1        0.0%
;;BITSFR1              0      0       0       2        0.0%
;;SFR1                 0      0       0       2        0.0%
;;STACK                0      0       0       2        0.0%
;;BANK0               50     14      14       3       25.0%
;;BITSFR3              0      0       0       4        0.0%
;;SFR3                 0      0       0       4        0.0%
;;ABS                  0      0       0       4        0.0%
;;BITBANK0            50      0       0       5        0.0%
;;BITSFR2              0      0       0       5        0.0%
;;SFR2                 0      0       0       5        0.0%
;;BITBANK1            50      0       0       6        0.0%
;;BANK1               50      0       0       7        0.0%
;;BITBANK2            30      0       0       8        0.0%
;;BANK2               30      0       0       9        0.0%
;;DATA                 0      0       0      10        0.0%

	global	_main
psect	maintext

;; *************** function _main *****************
;; Defined at:
;;		line 5 in file "C:\SM1\LICAO1\LICAO1.c"
;; Parameters:    Size  Location     Type
;;		None
;; Auto vars:     Size  Location     Type
;;  KYUU            2   18[BANK0 ] short 
;;  HACHI           2   16[BANK0 ] short 
;;  NANA            2   14[BANK0 ] short 
;;  ROKU            2   12[BANK0 ] short 
;;  GO              2   10[BANK0 ] short 
;;  SHI             2    8[BANK0 ] short 
;;  SAN             2    6[BANK0 ] short 
;;  NI              2    4[BANK0 ] short 
;;  ICHI            2    2[BANK0 ] short 
;;  A               2    0[BANK0 ] int 
;; Return value:  Size  Location     Type
;;                  2  326[COMMON] int 
;; Registers used:
;;		wreg, status,2
;; Tracked objects:
;;		On entry : 17F/0
;;		On exit  : 0/0
;;		Unchanged: 0/0
;; Data sizes:     COMMON   BANK0   BANK1   BANK2
;;      Params:         0       0       0       0
;;      Locals:         0      20       0       0
;;      Temps:          2       0       0       0
;;      Totals:         2      20       0       0
;;Total ram usage:       22 bytes
;; This function calls:
;;		Nothing
;; This function is called by:
;;		Startup code after reset
;; This function uses a non-reentrant model
;;
psect	maintext
	file	"C:\SM1\LICAO1\LICAO1.c"
	line	5
	global	__size_of_main
	__size_of_main	equ	__end_of_main-_main
	
_main:	
	opt	stack 8
; Regs used in _main: [wreg+status,2]
	line	6
	
l1515:	
;LICAO1.c: 6: int A = 1;
	movlw	low(01h)
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movwf	(main@A)
	movlw	high(01h)
	movwf	((main@A))+1
	line	8
	
l1517:	
;LICAO1.c: 8: TRISB=0B00000000;
	bsf	status, 5	;RP0=1, select bank1
	bcf	status, 6	;RP1=0, select bank1
	clrf	(134)^080h	;volatile
	line	9
	
l1519:	
;LICAO1.c: 9: short ICHI=0B10000000;
	movlw	low(080h)
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movwf	(main@ICHI)
	movlw	high(080h)
	movwf	((main@ICHI))+1
	line	10
	
l1521:	
;LICAO1.c: 10: short NI=0B01000000;
	movlw	low(040h)
	movwf	(main@NI)
	movlw	high(040h)
	movwf	((main@NI))+1
	line	11
	
l1523:	
;LICAO1.c: 11: short SAN=0B00100000;
	movlw	low(020h)
	movwf	(main@SAN)
	movlw	high(020h)
	movwf	((main@SAN))+1
	line	12
	
l1525:	
;LICAO1.c: 12: short SHI=0B00010000;
	movlw	low(010h)
	movwf	(main@SHI)
	movlw	high(010h)
	movwf	((main@SHI))+1
	line	13
	
l1527:	
;LICAO1.c: 13: short GO=0B00001000;
	movlw	low(08h)
	movwf	(main@GO)
	movlw	high(08h)
	movwf	((main@GO))+1
	line	14
	
l1529:	
;LICAO1.c: 14: short ROKU=0B00000100;
	movlw	low(04h)
	movwf	(main@ROKU)
	movlw	high(04h)
	movwf	((main@ROKU))+1
	line	15
	
l1531:	
;LICAO1.c: 15: short NANA=0B00000010;
	movlw	low(02h)
	movwf	(main@NANA)
	movlw	high(02h)
	movwf	((main@NANA))+1
	line	16
	
l1533:	
;LICAO1.c: 16: short HACHI=0B00000001;
	movlw	low(01h)
	movwf	(main@HACHI)
	movlw	high(01h)
	movwf	((main@HACHI))+1
	line	17
	
l1535:	
;LICAO1.c: 17: short KYUU=0B00000000;
	movlw	low(0)
	movwf	(main@KYUU)
	movlw	high(0)
	movwf	((main@KYUU))+1
	line	20
;LICAO1.c: 20: while(1){
	
l327:	
	line	21
	
l1537:	
;LICAO1.c: 21: if(A == 1){
	movlw	01h
	xorwf	(main@A),w
	iorwf	(main@A+1),w
	skipz
	goto	u2151
	goto	u2150
u2151:
	goto	l328
u2150:
	line	22
	
l1539:	
;LICAO1.c: 22: PORTB=ICHI;
	movf	(main@ICHI),w
	movwf	(6)	;volatile
	line	23
;LICAO1.c: 23: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2167:
	decfsz	((??_main+0)+0),f
	goto	u2167
	decfsz	((??_main+0)+0+1),f
	goto	u2167
opt asmopt_on

	line	24
;LICAO1.c: 24: PORTB=NI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@NI),w
	movwf	(6)	;volatile
	line	25
;LICAO1.c: 25: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2177:
	decfsz	((??_main+0)+0),f
	goto	u2177
	decfsz	((??_main+0)+0+1),f
	goto	u2177
opt asmopt_on

	line	26
;LICAO1.c: 26: PORTB=SAN;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@SAN),w
	movwf	(6)	;volatile
	line	27
;LICAO1.c: 27: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2187:
	decfsz	((??_main+0)+0),f
	goto	u2187
	decfsz	((??_main+0)+0+1),f
	goto	u2187
opt asmopt_on

	line	28
;LICAO1.c: 28: PORTB=SHI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@SHI),w
	movwf	(6)	;volatile
	line	29
;LICAO1.c: 29: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2197:
	decfsz	((??_main+0)+0),f
	goto	u2197
	decfsz	((??_main+0)+0+1),f
	goto	u2197
opt asmopt_on

	line	30
;LICAO1.c: 30: PORTB=GO;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@GO),w
	movwf	(6)	;volatile
	line	31
;LICAO1.c: 31: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2207:
	decfsz	((??_main+0)+0),f
	goto	u2207
	decfsz	((??_main+0)+0+1),f
	goto	u2207
opt asmopt_on

	line	32
;LICAO1.c: 32: PORTB=ROKU;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@ROKU),w
	movwf	(6)	;volatile
	line	33
;LICAO1.c: 33: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2217:
	decfsz	((??_main+0)+0),f
	goto	u2217
	decfsz	((??_main+0)+0+1),f
	goto	u2217
opt asmopt_on

	line	34
;LICAO1.c: 34: PORTB=NANA;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@NANA),w
	movwf	(6)	;volatile
	line	35
;LICAO1.c: 35: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2227:
	decfsz	((??_main+0)+0),f
	goto	u2227
	decfsz	((??_main+0)+0+1),f
	goto	u2227
opt asmopt_on

	line	36
;LICAO1.c: 36: PORTB=HACHI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@HACHI),w
	movwf	(6)	;volatile
	line	37
;LICAO1.c: 37: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2237:
	decfsz	((??_main+0)+0),f
	goto	u2237
	decfsz	((??_main+0)+0+1),f
	goto	u2237
opt asmopt_on

	line	38
;LICAO1.c: 38: PORTB=KYUU;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@KYUU),w
	movwf	(6)	;volatile
	line	39
;LICAO1.c: 39: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2247:
	decfsz	((??_main+0)+0),f
	goto	u2247
	decfsz	((??_main+0)+0+1),f
	goto	u2247
opt asmopt_on

	line	40
;LICAO1.c: 40: A = 0;
	movlw	low(0)
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movwf	(main@A)
	movlw	high(0)
	movwf	((main@A))+1
	line	42
;LICAO1.c: 42: } else{
	goto	l329
	
l328:	
	line	43
	
l1541:	
;LICAO1.c: 43: PORTB=HACHI;
	movf	(main@HACHI),w
	movwf	(6)	;volatile
	line	44
;LICAO1.c: 44: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2257:
	decfsz	((??_main+0)+0),f
	goto	u2257
	decfsz	((??_main+0)+0+1),f
	goto	u2257
opt asmopt_on

	line	45
;LICAO1.c: 45: PORTB=NANA;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@NANA),w
	movwf	(6)	;volatile
	line	46
;LICAO1.c: 46: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2267:
	decfsz	((??_main+0)+0),f
	goto	u2267
	decfsz	((??_main+0)+0+1),f
	goto	u2267
opt asmopt_on

	line	47
;LICAO1.c: 47: PORTB=ROKU;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@ROKU),w
	movwf	(6)	;volatile
	line	48
;LICAO1.c: 48: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2277:
	decfsz	((??_main+0)+0),f
	goto	u2277
	decfsz	((??_main+0)+0+1),f
	goto	u2277
opt asmopt_on

	line	49
;LICAO1.c: 49: PORTB=GO;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@GO),w
	movwf	(6)	;volatile
	line	50
;LICAO1.c: 50: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2287:
	decfsz	((??_main+0)+0),f
	goto	u2287
	decfsz	((??_main+0)+0+1),f
	goto	u2287
opt asmopt_on

	line	51
;LICAO1.c: 51: PORTB=SHI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@SHI),w
	movwf	(6)	;volatile
	line	52
;LICAO1.c: 52: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2297:
	decfsz	((??_main+0)+0),f
	goto	u2297
	decfsz	((??_main+0)+0+1),f
	goto	u2297
opt asmopt_on

	line	53
;LICAO1.c: 53: PORTB=SAN;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@SAN),w
	movwf	(6)	;volatile
	line	54
;LICAO1.c: 54: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2307:
	decfsz	((??_main+0)+0),f
	goto	u2307
	decfsz	((??_main+0)+0+1),f
	goto	u2307
opt asmopt_on

	line	55
;LICAO1.c: 55: PORTB=NI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@NI),w
	movwf	(6)	;volatile
	line	56
;LICAO1.c: 56: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2317:
	decfsz	((??_main+0)+0),f
	goto	u2317
	decfsz	((??_main+0)+0+1),f
	goto	u2317
opt asmopt_on

	line	57
;LICAO1.c: 57: PORTB=ICHI;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@ICHI),w
	movwf	(6)	;volatile
	line	58
;LICAO1.c: 58: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2327:
	decfsz	((??_main+0)+0),f
	goto	u2327
	decfsz	((??_main+0)+0+1),f
	goto	u2327
opt asmopt_on

	line	59
;LICAO1.c: 59: PORTB=KYUU;
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movf	(main@KYUU),w
	movwf	(6)	;volatile
	line	60
;LICAO1.c: 60: _delay((unsigned long)((150)*(4000000/4000.0)));
	opt asmopt_off
movlw	195
movwf	((??_main+0)+0+1),f
	movlw	205
movwf	((??_main+0)+0),f
u2337:
	decfsz	((??_main+0)+0),f
	goto	u2337
	decfsz	((??_main+0)+0+1),f
	goto	u2337
opt asmopt_on

	line	61
;LICAO1.c: 61: A = 1;
	movlw	low(01h)
	bcf	status, 5	;RP0=0, select bank0
	bcf	status, 6	;RP1=0, select bank0
	movwf	(main@A)
	movlw	high(01h)
	movwf	((main@A))+1
	line	63
	
l329:	
	line	64
	
l330:	
	line	20
	goto	l327
	
l331:	
	line	66
	
l332:	
	global	start
	ljmp	start
	opt stack 0
GLOBAL	__end_of_main
	__end_of_main:
;; =============== function _main ends ============

	signat	_main,90
psect	maintext
	global	btemp
	btemp set 07Eh

	DABS	1,126,2	;btemp
	global	wtemp0
	wtemp0 set btemp
	end
