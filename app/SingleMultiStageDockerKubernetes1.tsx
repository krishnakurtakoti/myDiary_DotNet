import React from 'react';

export const SingleMultiStageDockerKubernetes1: React.FC = () => {
    const pinkHyphenStyle = {
        color: 'pink'
    };

    const goldenRodStyle = {
        color: 'goldenrod'
    };

    const codeSnippet = `
    FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim AS runtime
    WORKDIR /app
    EXPOSE 80
    
    FROM mcr.microsoft.com/dotnet/sdk:6.0-bullseye-slim AS sdk
    
    ARG build_number=1.0.0
    
    WORKDIR /app
    
    COPY src/ .
    
    # restore nuget packages
    RUN dotnet restore
    
    # build
    RUN dotnet build --no-restore "-p:Version={build_number}"
    
    # test
    RUN dotnet test --no-build GreetingService.Tests/GreetingService.Tests.csproj
    
    # publish
    RUN dotnet publish --no-build -o output
    
    # create runtime image
    FROM runtime AS final
    WORKDIR /app
    COPY --from=sdk /app/output/ ./
    ENTRYPOINT ["./GreetingsService"]
    `.split('-').map((part, index, array) => (
        index === array.length - 1 ? part : (
            <React.Fragment key={index}>
                {part}
                <span style={pinkHyphenStyle}>-</span>
            </React.Fragment>
        )
    ));

    return (
        <pre style={{ backgroundColor: 'black', color: 'white' }}>
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
};



