@ECHO OFF
cls
ECHO ::::::::::::::::::::::::::::: :::::
ECHO :::::  Nexacro generate START :::::
ECHO :::::  copyright TOBESOFT :::::
ECHO :::::::::::::::::::::::::::::::::::

SET SOURCE = "C:\eGovFrame-3.2\workspace\nexacroplatform\src\main\nxui\packageB"              
SET WEBROOT= "C:\eGovFrame-3.2\workspace\nexacroplatform\src\main\webapp"


xcopy "C:\egove35\workspace\nexacro-sample-egov\src\main\nxui\packageB\nexacro14lib\component\IjectJS\*.*" "C:\egove35\workspace\nexacro-sample-egov\src\main\webapp\packageB\nexacro14lib\component\IjectJS\" /k/e/c/h/r/y 
ECHO :::::::: SUCCESS Generateor :::::::

