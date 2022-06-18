FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
#ENTRYPOINT [ "dotnet" , "netcoreapp3.1/journal-api.dll" ] 
#ENTRYPOINT ["tail"]
#CMD ["-f","/dev/null"]
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ./src .
RUN dotnet restore
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "journal-api.dll"]