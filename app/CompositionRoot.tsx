// CompositionRoot.tsx
import React from 'react';

export const CompositionRoot: React.FC = () => {
    return (
        <pre>
            <code>
            {`public class CompositionRoot : IHttpControllerActivator
                {
                    public IHttpController Create(
                        HttpRequestMessage request,
                        HttpControllerDescriptor controllerDescriptor,
                        Type controllerType)
                    {
                        if (controllerType == typeof(TodoController))
                            return new TodoController(
                                new TodoRepository());
                        
                        return null;
                    }
                }`}
            </code>
        </pre>
    );
};
