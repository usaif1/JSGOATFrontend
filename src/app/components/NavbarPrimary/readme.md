Component: NavbarPrimary
Purpose: The NavbarPrimary component is a left-aligned navigation drawer that adjusts its behavior based on screen size:

Persistent on Desktop: It remains open as a sidebar.
Closable on Mobile/Tablet: It can be toggled open/closed using a hamburger menu.
Key Dependencies:
react-modern-drawer: A lightweight drawer component for React that allows for responsive drawers.
react-icons/io5: The IoMenu icon from react-icons is used as a hamburger menu.
Core Logic:
State Management:

isOpen: Boolean state to manage whether the drawer is open.
isMobile: Boolean state to track if the current screen width matches mobile/tablet sizes.
Resize Handler:

An useEffect hook listens for the resize event to adjust the behavior based on the window width.
It defines a breakpoint (1024px) to distinguish mobile/tablet from desktop.
Drawer Behavior:

Mobile/Tablet: A hamburger button is shown to toggle the drawer. An overlay is enabled when the drawer is open.
Desktop: The drawer is always open and behaves like a sticky sidebar with no overlay.