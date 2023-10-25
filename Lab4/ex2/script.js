
function myFuntion(){
    var a = -3
    var b = -2
    var c = -1
    var delta = b*b - 4*a*c
    var x1 = (-b+Math.sqrt(delta))/2*a
    var x2 = (b+Math.sqrt(delta))/2*a
    var x3 = -b/2*a
    if(delta>0) document.write("Phương trình đã cho có 2 nghiệm là: "+x1+" và "+x2)
    if(delta<0) document.write("Phương trình đã cho có 1 nghiệm kép là: "+x3)
    if(delta==0) document.write("Phương trình đã cho vô nghiệm")
}