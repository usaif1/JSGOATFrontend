The Tab component is responsible for rendering individual navigation tabs in the application. It dynamically applies styles based on the active route, which is determined using the usePathname hook from Next.js.

When the current tab's path matches the active route (pathname), the tab is highlighted with specific borders to visually indicate that it is active. Otherwise, it renders without any special styling. This component is often used in a tabbed navigation layout where multiple tabs link to different pages or sections of the application.

The Tab component is implemented as a functional component using TypeScript (React.FC<Props>). It receives the following props:

tabData: An object containing the link and title for each tab.
Logic:
Path Matching: The component checks if the current pathname (returned by the usePathname hook) includes the link of the tab. If true, it adds specific styles to visually indicate the tab is active.
Conditional Styling: The component uses Tailwind CSS classes to apply conditional borders and rounded corners to the active tab, creating the effect of a highlighted tab without a bottom border.
Rendered Output:
Link: The component wraps the tab’s title in a Next.js Link component, which allows for client-side navigation.
Text Component: It uses the Text component (imported from ../../Text) to display the tab's title.