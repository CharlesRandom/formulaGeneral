function General(a,b,c){
  this.a = a
  this.b = b
  this.c = c
  this.f4ac = function(){
    return 4 * this.a * this.c
  }
  this.f2a = function(){
    return 2 * this.a 
  }
  this.fbpow2 = function(){
    return this.b * this.b
  }
  this.fmenosb = function(){
    return -this.b
  }
  this.fraiz = function(){
    return Math.sqrt(this.fbpow2() - this.f4ac())
  }
  this.ecuacion = function(){
    var x1 = (this.fmenosb() + this.fraiz()) / this.f2a()
    var x2 = (this.fmenosb() - this.fraiz()) / this.f2a()
    return [x1,x2]
  }
}

var solucion = new General(4,6,2)
// solucion.mult1()
console.log(solucion.ecuacion())
