FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY Ayuda-Web/Ayuda-Web.csproj Ayuda-Web/
RUN dotnet restore Ayuda-Web/Ayuda-Web.csproj
COPY . .
WORKDIR /src/Ayuda-Web
RUN dotnet build Ayuda-Web.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Ayuda-Web.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Ayuda-Web.dll"]
