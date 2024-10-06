The TabNavigation component renders a tabbed navigation system using the react-tabs library. It displays a set of tabs, where each tab corresponds to a navigation link, and renders the appropriate content in a TabPanel when a tab is selected.

Component Structure
Tabs: Wraps the entire component, provided by the react-tabs library.
TabList: A list of all the tabs, each linked to a different page or route using Next.js's Link component.
Tab: Each individual tab is rendered inside this component. It uses the selectedClassName property to style the tab when it's selected.
TabPanel: Contains the content corresponding to each tab. The content is passed as children to the component and is rendered inside each TabPanel.
