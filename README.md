# Programmer Per: ASP.NET 5

This is an experiment with **ASP.NET 5**. More info will come as I move along. 

## Getting started
Or basically follow [this guide](https://azure.microsoft.com/sv-se/documentation/articles/web-sites-create-web-app-using-vscode/).

### Prerequisites (Windows)
*   Node.js
*   .NET Version Manager (DNVM)
    *   run the following commands:
    1. `@powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}"`  
    2. `dnvm upgrade`
*   NuGet package restore (DNU)
    `dnu restore`

### Launch application
*   run `dnx web`
*   It should start on [localhost:5000](http://localhost:5000/)

## About
*   I am Per, a programmer.
*   This is my [Portfolio](http://www.programmerper.com)