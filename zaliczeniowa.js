<html>
<body>
<div style="color:red;font-size:50px;">
 <script language="JavaScript">
var x=prompt("podaj liczbę x=","");
var a=parseFloat(x.replace(",",".")); // Zamień przecinek na kropkę
document.write("czytana liczba x="+a+"<br>");
if(a > 0) {
    document.write("czytana liczba jest większa od 0"+"<br>");
} else if (a == 0) {
    document.write("czytana liczba jest równa 0"+"<br>");
} else {
    document.write("czytana liczba jest mniejsza od 0"+"<br>");
}
 </script>
</div>
</body>
</html>
