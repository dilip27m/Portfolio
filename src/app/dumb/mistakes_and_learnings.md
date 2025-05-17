<!-- # mistake related undefined data and trying to render and condition rendering 

If project.visit is not present (i.e., undefined), then:

{project.visit && (
  <a href={project.visit}>Visit</a>
)}

✅ What Happens:
React will evaluate the condition.

Since project.visit is undefined (a falsy value), the entire expression evaluates to false.

As a result, nothing will be rendered, and no error will occur.

🛑 What You Should Avoid:
If you write it like this without checking:

<a href={project.visit}>Visit</a>
Then:

If project.visit is undefined, Next.js will throw:

Error: Failed prop type: The prop `href` expects a `string` or `object`, but got `undefined`.
✅ Best Practice:

{project.visit && (
  <a
    href={project.visit}
    className="text-blue-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit
  </a>
)}

# use of noopener and noreferrer.
⚠️ Why we use rel="noopener noreferrer" with target="_blank"
When you open a link in a new tab using:

<a href="..." target="_blank">Visit</a>

it introduces a security risk known as tabnabbing. Here's what happens:

🧨 Problem: window.opener
When you open a link with target="_blank", the new page can access the original page using:

window.opener
This allows the new page to potentially:
Redirect your original page
Steal data or session information
Mimic your site and phish users

✅ Solution: rel="noopener"
Adding rel="noopener" prevents the new page from gaining access to window.opener.

🔒 rel="noreferrer"
This does two things:

Prevents the new page from seeing the referrer (i.e., the URL of the page that opened it)

Also implicitly disables window.opener (like noopener)

✅ Best Practice
Use both like this:

<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Site
</a>
This is:

Secure 🛡️

Compatible ✅

Recommended 🔍 by Mozilla and other browser vendors

# lucid icons 
🔄 Icon Name Translation: circle-pause → PauseCircle
You're seeing circle-pause on the Lucide website, but in lucide-react (the React package), the icon names are converted from kebab-case to PascalCase when you import them.

📦 So:
Website Name	React Component Import
circle-pause	PauseCircle
check-circle	CheckCircle
clock-3	Clock3
circle-slash	CircleSlash
# tailwind
default you will shadow color black ,you can get using shadow-blue-50

⚠️ Why hover:shadow-blue-400/30 doesn't work when you remove shadow-md (or any default shadow):
Tailwind’s hover:shadow-* utility only works if there’s some shadow class present by default, because:

The hover: variant transitions from the existing shadow to the new one.

If you have no base shadow-* class, Tailwind doesn't generate the required box-shadow transition, so nothing happens.

✅ Fix: Use a shadow-none base
If you don’t want any visible shadow by default but want hover to work, you can explicitly set:

shadow-none hover:shadow-blue-400/30 transition-shadow duration-300
This tells Tailwind:

Start with no shadow.

Transition to the blue glow on hover.

<div className="shadow-none hover:shadow-blue-400/30 transition-shadow duration-300 ...">
  {/* your card content */}
</div>
You can also use transition-all instead of transition-shadow if you’re animating more properties.

🎯 Summary
Base Class	Hover Works?	Result
No shadow-*	❌ No	No transition or glow
shadow-md	✅ Yes	Default shadow, hover glow
shadow-none	✅ Yes	No default shadow, clean look, hover glow works

Tailwind's border-b-2 + hover:border-blue-500 creates a bottom border, which looks like an underline.

# use react-icons to get all the icons 
https://react-icons.github.io/react-icons/ -->