import React from 'react';
import './globals.css'; // Import your CSS file for any necessary styles

const StevenGieselMyMiddleware = () => {
  return (
    <pre className="steven-giesel-pre">
      <code className="steven-giesel-code-section language-csharp">
        {`public class MyMiddleware
{
    private readonly RequestDelegate _next;

    public MyMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        // Begin_Request
        await _next(context);
        // End_Request
    }
}`}
      </code>
    </pre>
  );
};

export default StevenGieselMyMiddleware;
