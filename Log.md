# Uzair Log File | MOC-RNF

## 1/June/17
* Environment setup completed
* Built React app for creating Tabs and displaying information

## 2/June/17
* Applied Thinking in React methodology to create ui
* Dropdown ui built
* Stacked dropdown over Tab ui using concepts like position and zIndex

## 3/June/17
* Worked on fixing Dropdown Menu, making it look like Bootstrap dropdown
* Watched video on best practices in React
* Dropdown list disappear when clicked outside of div element pending

## 5/June/17
* Went through bootstrap dropwdown code
* Watched the video Secrets of Virtual DOM by Pete Hunt
* Skimmed through React Docs

## 6/June/17
* Went through React.Component doc and Lifecycle hooks:
  - You cannot call this.setState() componentWillUpdate(). If you need to update state in response to a prop change, use componentWillReceiveProps() instead.
  - componentDidUpdate: Can be used as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
  - setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)), either of which are guaranteed to fire after the update has been applied.
  - Avoid making changes to DOM in event handlers and componentWill*** methods.
* Dropdown re-click issue solved.

## 7/June/17
* CSS modifications on dropdown menu
