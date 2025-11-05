import { createTool } from "@mastra/core/tools";
import { MCPServer } from "@mastra/mcp";
import { z } from "zod";
import { ghibliFanatic } from "../agents/ghibli";

export const docsServer = new MCPServer({
    name: "docs-server",
    description: "A server that serves documentation",
    version: "1.0.0",
    tools: {
        getTailwindDocs: createTool({
            id: "get-tailwind-docs",
            description: "Get the Tailwind documentation",
            inputSchema: z.object({}),
            execute: async () => {
                return `
                # tailwindcss.com llms.txt
                > Facilitates easy installation and setup of Tailwind CSS, a utility-first CSS framework, providing guidance and resources for developers to efficiently build and customize user interfaces.

                - [Font Variant Numeric](https://tailwindcss.com/docs/font-variant-numeric): Explains how to use Tailwind CSS utilities for various numeric font variants in web design.
                - [Align Content Documentation](https://tailwindcss.com/docs/align-content): Details various utility classes for aligning content in Tailwind CSS.
                - [Configuring Screens in Tailwind](https://tailwindcss.com/docs/screens): Guide to configuring responsive breakpoints in Tailwind CSS.
                - [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles): This page instructs users on how to add and customize styles in Tailwind CSS projects.
                - [Flexbox Utilities Guide](https://tailwindcss.com/docs/flex): Explains how to use Flexbox utilities in Tailwind CSS for responsive design.
                - [Responsive Design with Tailwind](https://tailwindcss.com/docs/responsive-design): Explains how to implement responsive design using Tailwind CSS utility classes for different breakpoints.
                - [Grid Auto Rows Guide](https://tailwindcss.com/docs/grid-auto-rows): Guide on using Tailwind CSS for controlling grid row sizes.
                - [Grid Column Utilities](https://tailwindcss.com/docs/grid-column): This page details grid column utilities in Tailwind CSS for layout customization.
                - [Tailwind CSS Spacing Docs](https://tailwindcss.com/docs/space): Provides documentation for using spacing utilities in Tailwind CSS for layout purposes.
                - [Tailwind CSS Theme Config](https://tailwindcss.com/docs/theme): Guide for configuring and customizing the theme in Tailwind CSS projects.
                - [Tailwind CSS Clear Utility](https://tailwindcss.com/docs/clear): Guide to using the 'clear' utility in Tailwind CSS for managing element positioning.
                - [Visibility Utilities Guide](https://tailwindcss.com/docs/visibility): Explains how to use visibility utilities in Tailwind CSS.
                - [Z-Index Documentation](https://tailwindcss.com/docs/z-index): To explain how to use z-index utilities in Tailwind CSS for controlling stacking order of elements.
                - [Text Color Documentation](https://tailwindcss.com/docs/text-color): Detailed documentation on applying text color utilities in Tailwind CSS.
                - [Flex Wrap Documentation](https://tailwindcss.com/docs/flex-wrap): Explains how to use the flex-wrap utility in Tailwind CSS for responsive design.
                - [Minimum Height Documentation](https://tailwindcss.com/docs/min-height): Details how to set and customize minimum height using Tailwind CSS utilities.
                - [Line Clamp Documentation](https://tailwindcss.com/docs/line-clamp): Explains how to use the line-clamp utility in Tailwind CSS for truncating text.
                - [Using Tailwind with Preprocessors](https://tailwindcss.com/docs/using-with-preprocessors): Guide on integrating Tailwind CSS with preprocessors like Sass and Less, offering best practices and recommendations.
                - [Customizing Tailwind Colors](https://tailwindcss.com/docs/customizing-colors): Guide for customizing color palettes in Tailwind CSS.
                - [Tailwind CSS Functions](https://tailwindcss.com/docs/functions-and-directives): This page explains Tailwind CSS functions and directives to enhance styling methodologies in projects.
                - [Height Utilities Documentation](https://tailwindcss.com/docs/height): Documentation for using height utilities in Tailwind CSS.
                - [Justify Content Documentation](https://tailwindcss.com/docs/justify-content): A guide for using justify-content utilities in Tailwind CSS for layout control.
                - [Break After Utility Guide](https://tailwindcss.com/docs/break-after): Explain how to use the break-after utility in Tailwind CSS for controlling breaks in content formatting.
                - [Optimizing Tailwind CSS](https://tailwindcss.com/docs/optimizing-for-production): Guide for optimizing Tailwind CSS for production to achieve minimal file size and efficient delivery.
                - [Text Decoration Thickness](https://tailwindcss.com/docs/text-decoration-thickness): This page details the Tailwind CSS utilities for adjusting text decoration thickness in web design.
                - [List Style Image Documentation](https://tailwindcss.com/docs/list-style-image): Guide for using list style images in Tailwind CSS.
                - [Break Before Utilities](https://tailwindcss.com/docs/break-before): Explain the usage of the 'break-before' utilities in Tailwind CSS.
                - [Text Decoration Styles](https://tailwindcss.com/docs/text-decoration-style): This webpage explains how to set different text decoration styles using Tailwind CSS utilities.
                - [Tailwind CSS Gap Utilities](https://tailwindcss.com/docs/gap): Guide on using gap utilities in Tailwind CSS for layout design.
                - [Place Self Utility](https://tailwindcss.com/docs/place-self): This page details the 'place-self' utility in Tailwind CSS for aligning grid items.
                - [Min-Width Utilities Guide](https://tailwindcss.com/docs/min-width): Provide documentation on how to use the min-width utilities in Tailwind CSS for responsive design.
                - [Flex Direction Documentation](https://tailwindcss.com/docs/flex-direction): Explain how to use flex-direction utilities in Tailwind CSS for layout design.
                - [Styling Element States](https://tailwindcss.com/docs/hover-focus-and-other-states): Explain how to style elements in different states using Tailwind CSS utility classes.
                - [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns): Explain how to use Tailwind CSS grid template columns utility for creating responsive grid layouts.
                - [Tailwind CSS Presets](https://tailwindcss.com/docs/presets): Guide on using presets in Tailwind CSS for efficient project configuration management.
                - [Dark Mode Documentation](https://tailwindcss.com/docs/dark-mode): Explains how to implement dark mode in Tailwind CSS applications.
                - [Tailwind CSS Place Content](https://tailwindcss.com/docs/place-content): Explains how to use the 'place-content' utility in Tailwind CSS for grid item alignment.
                - [Tailwind CSS Columns Guide](https://tailwindcss.com/docs/columns): Guide on using Tailwind CSS columns utility for layout design.
                - [Letter Spacing Documentation](https://tailwindcss.com/docs/letter-spacing): This page explains how to use letter spacing utilities in Tailwind CSS.
                - [Box Sizing in Tailwind](https://tailwindcss.com/docs/box-sizing): Explains the usage of box-sizing utilities in Tailwind CSS for layout designs.
                - [Object Position Utilities](https://tailwindcss.com/docs/object-position): This page details the utility classes for positioning replaced elements in Tailwind CSS.
                - [Text Decoration Utilities](https://tailwindcss.com/docs/text-decoration): Details various text decoration utilities in Tailwind CSS for customizing text appearance.
                - [Align Self Documentation](https://tailwindcss.com/docs/align-self): Explains how to use the align-self utility in Tailwind CSS for flexbox layouts.
                - [Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide): Guide developers on upgrading to Tailwind CSS v3.0 with detailed changes and instructions.
                - [Tailwind CSS Display Utilities](https://tailwindcss.com/docs/display): Provides documentation on display utility classes in Tailwind CSS.
                - [Align Items in Tailwind](https://tailwindcss.com/docs/align-items): Explain how to use align-items utility classes in Tailwind CSS for layout design.
                - [Catalyst Release Announcement](https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts): Announces the stable release of Catalyst, a UI kit for building React applications with new layout components.
                - [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration): Guideline for customizing Tailwind CSS configuration for personalized user interfaces.
                - [Preflight Documentation](https://tailwindcss.com/docs/preflight): Explains the Preflight feature of Tailwind CSS, including its styles and customization options for projects.
                - [Tailwind CSS Order Documentation](https://tailwindcss.com/docs/order): Provides documentation for using Tailwind CSS's order utilities to manage the layout of flexbox and grid items.
                - [Float Utilities Documentation](https://tailwindcss.com/docs/float): This page explains the usage of float utilities in Tailwind CSS.
                - [Customizing Spacing Guide](https://tailwindcss.com/docs/customizing-spacing): Guide to customizing spacing in Tailwind CSS configuration.
                - [Text Transform Utilities](https://tailwindcss.com/docs/text-transform): Detailing text transformation utilities in Tailwind CSS for web development.
                - [Reusing Styles in Tailwind](https://tailwindcss.com/docs/reusing-styles): Learn strategies for reusing styles effectively in Tailwind CSS projects.
                - [Tailwind CSS Plugins Guide](https://tailwindcss.com/docs/plugins): Guide users on creating and using plugins for Tailwind CSS to enhance styling capabilities.
                - [List Style Position Guide](https://tailwindcss.com/docs/list-style-position): To explain how to use Tailwind CSS utilities for setting list style positions in web design.
                - [Tailwind CSS Sizing Guide](https://tailwindcss.com/docs/size): Guide for using size utilities in Tailwind CSS.
                - [Font Weight Documentation](https://tailwindcss.com/docs/font-weight): Explains how to use font weight utilities in Tailwind CSS for styling text elements.
                - [Tailwind CSS Padding Guide](https://tailwindcss.com/docs/padding): This page details Tailwind CSS padding utilities and usage examples for developers.
                - [Overscroll Behavior Docs](https://tailwindcss.com/docs/overscroll-behavior): This page explains the overscroll behavior utilities in Tailwind CSS for controlling scrolling interactions.
                - [Grid Row Utilities](https://tailwindcss.com/docs/grid-row): This page explains how to use row utilities in Tailwind CSS for grid layouts.
                - [Editor Setup Guide](https://tailwindcss.com/docs/editor-setup): Guide to setting up Tailwind CSS in various editors for optimal development experience.
                - [Grid Template Rows](https://tailwindcss.com/docs/grid-template-rows): To provide documentation for using grid-template-rows utilities in Tailwind CSS for creating flexible grid layouts.
                - [Font Size Documentation](https://tailwindcss.com/docs/font-size): Guide for using font size utilities in Tailwind CSS.
                - [Tailwind CSS Margin Utilities](https://tailwindcss.com/docs/margin): Guide to using margin utilities in Tailwind CSS for styling elements.
                - [Font Style Documentation](https://tailwindcss.com/docs/font-style): Describes how to use font style utilities in Tailwind CSS.
                - [Tailwind CSS Showcase](https://tailwindcss.com/showcase): Showcase various applications and websites built using Tailwind CSS.
                - [Utility-First CSS Guide](https://tailwindcss.com/docs/utility-first): Educate users on the utility-first CSS approach for styling web applications with Tailwind CSS.
                - [Flex Basis Documentation](https://tailwindcss.com/docs/flex-basis): This page details the utility classes for setting flex-basis in Tailwind CSS.
                - [Grid Auto Flow Guide](https://tailwindcss.com/docs/grid-auto-flow): Explains how to use grid auto flow utilities in Tailwind CSS for responsive layouts.
                - [Tailwind CSS Resources](https://tailwindcss.com/resources): This webpage offers design resources and tools to assist developers using Tailwind CSS.
                - [Tailwind CSS Container Usage](https://tailwindcss.com/docs/container): Explain how to use the 'container' class in Tailwind CSS for responsive design.
                - [Break Inside Documentation](https://tailwindcss.com/docs/break-inside): Explains how to use the break-inside utilities in Tailwind CSS to control element breaking behavior.
                - [Text Decoration Color Guide](https://tailwindcss.com/docs/text-decoration-color): Provide documentation for setting and customizing text decoration colors in Tailwind CSS.
                - [Justify Self Utilities](https://tailwindcss.com/docs/justify-self): This page details Tailwind CSS utilities for aligning grid items using the justify-self property.
                - [Place Items in Tailwind CSS](https://tailwindcss.com/docs/place-items): Explains how to use the 'place-items' utility in Tailwind CSS for grid layouts.
                - [Flex Grow Documentation](https://tailwindcss.com/docs/flex-grow): Explains how to use the flex-grow utility in Tailwind CSS for responsive design and customization.
                - [Aspect Ratio in Tailwind](https://tailwindcss.com/docs/aspect-ratio): Explains how to use aspect ratio utilities in Tailwind CSS for responsive design.
                - [Flex Shrink Utility](https://tailwindcss.com/docs/flex-shrink): Explains how to use the flex-shrink utility in Tailwind CSS for responsive design.
                - [List Style Types](https://tailwindcss.com/docs/list-style-type): Explain how to use list style types in Tailwind CSS for creating various types of lists.
                - [Tailwind CSS Width Utilities](https://tailwindcss.com/docs/width): This page explains how to set widths using Tailwind CSS utility classes.
                - [Box Decoration Break Guide](https://tailwindcss.com/docs/box-decoration-break): Explain how to use box-decoration-break utilities in Tailwind CSS.
                - [Tailwind CSS Line Height](https://tailwindcss.com/docs/line-height): Guide on using line-height utilities in Tailwind CSS for typography control.
                - [Grid Auto Columns Guide](https://tailwindcss.com/docs/grid-auto-columns): Explains how to use 'grid-auto-columns' utilities in Tailwind CSS for responsive design.
                - [Text Underline Offset Guide](https://tailwindcss.com/docs/text-underline-offset): This webpage details how to utilize Tailwind CSS's text underline offset utilities for styling text underlines.
                - [Tailwind CSS Installation](https://tailwindcss.com/docs/installation): Guide for installing Tailwind CSS using various methods.
                - [Font Smoothing Guide](https://tailwindcss.com/docs/font-smoothing): Explains how to apply font smoothing utilities in Tailwind CSS.
                - [Max Width Utilities](https://tailwindcss.com/docs/max-width): This page details the max-width utilities in Tailwind CSS for controlling element sizes in designs.
                - [Tailwind CSS Positioning Guide](https://tailwindcss.com/docs/position): Guide on using Tailwind CSS positioning utilities for web development.
                - [Browser Support Guide](https://tailwindcss.com/docs/browser-support): Details the browser compatibility and support for Tailwind CSS features.
                - [Tailwind CSS Overview](https://tailwindcss.com/): Promoting Tailwind CSS as an innovative utility-first CSS framework that simplifies and enhances web development.
                - [Overflow Utilities Documentation](https://tailwindcss.com/docs/overflow): Provides documentation for using overflow utilities in Tailwind CSS for managing content overflow.
                - [Tailwind CSS Blog](https://tailwindcss.com/blog): Announce updates, releases, and developments related to Tailwind CSS and associated tools.
                - [Object Fit Utilities](https://tailwindcss.com/docs/object-fit): This page explains the usage of Tailwind CSS's object-fit utilities for responsive image handling.
                - [Justify Items in Tailwind](https://tailwindcss.com/docs/justify-items): Explains how to use justify-items utility in Tailwind CSS for grid layout alignment.
                - [Text Alignment Documentation](https://tailwindcss.com/docs/text-align): To provide documentation on text alignment utilities in Tailwind CSS.
                - [Tailwind CSS Positioning](https://tailwindcss.com/docs/top-right-bottom-left): This page offers documentation on positioning elements with Tailwind CSS utilities for top, right, bottom, and left properties.
                - [Content Configuration Guide](https://tailwindcss.com/docs/content-configuration): Guide on configuring content paths for Tailwind CSS to ensure proper CSS generation.
                - [Font Family Documentation](https://tailwindcss.com/docs/font-family): Guide for utilizing and customizing font families in Tailwind CSS.
                - [Tailwind CSS Isolation](https://tailwindcss.com/docs/isolation): Explains how to use Tailwind CSS utilities for managing isolation and stacking context in applications.
                - [Max Height Utility Guide](https://tailwindcss.com/docs/max-height): Explains how to use the max-height utility in Tailwind CSS for styling elements.
                `
            }
        })
    },
    agents: {
        ghibliFanatic,
    }
})