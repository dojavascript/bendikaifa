/**
@license

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var _0x9ba6dd=_0x1d42;(function(_0x50911f,_0x53caaf){var _0x4fcc9c=_0x1d42,_0x464367=_0x50911f();while(!![]){try{var _0x52383a=parseInt(_0x4fcc9c(0xd9))/0x1+-parseInt(_0x4fcc9c(0xde))/0x2*(-parseInt(_0x4fcc9c(0xe4))/0x3)+-parseInt(_0x4fcc9c(0xda))/0x4+parseInt(_0x4fcc9c(0xe8))/0x5*(parseInt(_0x4fcc9c(0xe0))/0x6)+-parseInt(_0x4fcc9c(0xe2))/0x7*(-parseInt(_0x4fcc9c(0xe1))/0x8)+parseInt(_0x4fcc9c(0xe5))/0x9+-parseInt(_0x4fcc9c(0xe3))/0xa;if(_0x52383a===_0x53caaf)break;else _0x464367['push'](_0x464367['shift']());}catch(_0x2766ef){_0x464367['push'](_0x464367['shift']());}}}(_0x4681,0x8dd62));function _0x1d42(_0x303438,_0x452674){var _0x4681ca=_0x4681();return _0x1d42=function(_0x1d42e3,_0x198c39){_0x1d42e3=_0x1d42e3-0xd7;var _0x113a59=_0x4681ca[_0x1d42e3];return _0x113a59;},_0x1d42(_0x303438,_0x452674);}var MersenneTwister=function(_0x954dea){var _0x32aaac=_0x1d42;_0x954dea==undefined&&(_0x954dea=new Date()['getTime']()),this['N']=0x270,this['M']=0x18d,this[_0x32aaac(0xdb)]=0x9908b0df,this[_0x32aaac(0xd7)]=0x80000000,this[_0x32aaac(0xe6)]=0x7fffffff,this['mt']=new Array(this['N']),this[_0x32aaac(0xe7)]=this['N']+0x1,this[_0x32aaac(0xdf)](_0x954dea);};function _0x4681(){var _0x1db8c2=['MATRIX_A','genrand_int32','random','48628gbZDcV','init_genrand','420mZwqSO','11128TACgqJ','3199JpZPIr','19899430KOwGzq','111xYOmXR','6336432crkpQM','LOWER_MASK','mti','65600ckRZaN','UPPER_MASK','prototype','215213FDaKbZ','3208244tGtkma'];_0x4681=function(){return _0x1db8c2;};return _0x4681();}MersenneTwister['prototype'][_0x9ba6dd(0xdf)]=function(_0xa33e7e){var _0x5d1698=_0x9ba6dd;this['mt'][0x0]=_0xa33e7e>>>0x0;for(this[_0x5d1698(0xe7)]=0x1;this[_0x5d1698(0xe7)]<this['N'];this[_0x5d1698(0xe7)]++){var _0xa33e7e=this['mt'][this[_0x5d1698(0xe7)]-0x1]^this['mt'][this[_0x5d1698(0xe7)]-0x1]>>>0x1e;this['mt'][this[_0x5d1698(0xe7)]]=(((_0xa33e7e&0xffff0000)>>>0x10)*0x6c078965<<0x10)+(_0xa33e7e&0xffff)*0x6c078965+this[_0x5d1698(0xe7)],this['mt'][this[_0x5d1698(0xe7)]]>>>=0x0;}},MersenneTwister['prototype'][_0x9ba6dd(0xdc)]=function(){var _0x225387=_0x9ba6dd,_0x370622,_0x20c2e8=new Array(0x0,this[_0x225387(0xdb)]);if(this[_0x225387(0xe7)]>=this['N']){var _0x28fd88;if(this[_0x225387(0xe7)]==this['N']+0x1)this[_0x225387(0xdf)](0x1571);for(_0x28fd88=0x0;_0x28fd88<this['N']-this['M'];_0x28fd88++){_0x370622=this['mt'][_0x28fd88]&this['UPPER_MASK']|this['mt'][_0x28fd88+0x1]&this[_0x225387(0xe6)],this['mt'][_0x28fd88]=this['mt'][_0x28fd88+this['M']]^_0x370622>>>0x1^_0x20c2e8[_0x370622&0x1];}for(;_0x28fd88<this['N']-0x1;_0x28fd88++){_0x370622=this['mt'][_0x28fd88]&this[_0x225387(0xd7)]|this['mt'][_0x28fd88+0x1]&this[_0x225387(0xe6)],this['mt'][_0x28fd88]=this['mt'][_0x28fd88+(this['M']-this['N'])]^_0x370622>>>0x1^_0x20c2e8[_0x370622&0x1];}_0x370622=this['mt'][this['N']-0x1]&this['UPPER_MASK']|this['mt'][0x0]&this[_0x225387(0xe6)],this['mt'][this['N']-0x1]=this['mt'][this['M']-0x1]^_0x370622>>>0x1^_0x20c2e8[_0x370622&0x1],this['mti']=0x0;}return _0x370622=this['mt'][this['mti']++],_0x370622^=_0x370622>>>0xb,_0x370622^=_0x370622<<0x7&0x9d2c5680,_0x370622^=_0x370622<<0xf&0xefc60000,_0x370622^=_0x370622>>>0x12,_0x370622>>>0x0;},MersenneTwister[_0x9ba6dd(0xd8)][_0x9ba6dd(0xdd)]=function(){var _0x4bfa0a=_0x9ba6dd;return this[_0x4bfa0a(0xdc)]()*(0x1/0x100000000);};