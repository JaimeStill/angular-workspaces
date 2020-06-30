@echo off

echo Updating dbseeder dependencies...
cd .\dbseeder
call dotnet add package Microsoft.EntityFrameworkCore.Relational
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer

echo Updating Platform.Data dependencies...
cd ..\Platform.Data
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer
call dotnet add package Microsoft.EntityFrameworkCore.Tools

echo Updating Platform.Web dependencies...
cd ..\Platform.Web
call dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
call dotnet add package Microsoft.EntityFrameworkCore.Design

cd ..
echo Dependencies successfully updated!