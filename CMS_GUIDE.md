# Content Management System (CMS) Guide

This website uses Decap CMS (formerly Netlify CMS) to manage its content. This guide provides instructions on how to access and use the CMS.

## Accessing the CMS

1.  **Navigate to the Admin Panel:** Open your web browser and go to `[YourWebsiteURL]/admin`.
    *   If you are working locally, this will typically be `http://localhost:PORT/admin` (e.g., `http://localhost:5173/admin`) when your development server is running.
2.  **Authentication:** You will be prompted to log in.
    *   If GitHub authentication is configured, click the "Login with GitHub" (or similar) button and authorize the application.
    *   Ensure you have the necessary permissions on the configured GitHub repository.

## Managing Content

Once logged in, you will see the CMS dashboard. Content is organized into "Collections." Based on the current setup, you will primarily interact with the "Pages" collection.

### Editing Pages

1.  **Select "Pages":** In the left sidebar (or main dashboard view), click on "Pages."
2.  **Choose a Page to Edit:** You will see a list of available pages (e.g., "Home Page," "Admission Page," "Events Page"). Click on the page you wish to edit.
3.  **Editing Fields:**
    *   The page content is broken down into various fields that correspond to sections and elements on the actual webpage (e.g., "Hero Title," "About Section Text," "Program List").
    *   **Text Fields:** For simple text or titles, click into the field and type your changes.
    *   **Markdown/Text Area Fields:** For longer text blocks (like paragraphs or descriptions), you'll have a text editor, which might offer basic formatting (bold, italics, lists) if it's a Markdown field.
    *   **Image Fields:**
        *   To change an image, click on it or look for an "Upload," "Replace Image," or "Media Library" button.
        *   You can typically drag-and-drop a new image or select one from your computer.
        *   Uploaded images will be stored in the path configured in `public/admin/config.yml` (e.g., `public/images/uploads/`, `public/images/pages/`, or `public/images/gallery/`).
    *   **List Fields:** Some content (like "Programs List" on the Home page, "FAQ List" on the Admission page, or "Gallery Images" on the Events page) is managed as a list of items.
        *   You can usually "Add New" items to the list.
        *   Edit existing items by clicking on them.
        *   Remove items using a "Remove" or "Delete" button.
        *   Some lists might allow reordering by dragging and dropping.
    *   **Icon Fields:** For fields that determine icons (e.g., "Program Icon" or "Stats Icon"), you'll need to enter the specific name of a Lucide React icon (e.g., `Eye`, `Users`, `Award`). Refer to the [Lucide Icons website](https://lucide.dev/) for available icon names.

### Saving and Publishing Changes

Decap CMS uses an editorial workflow:

1.  **Save Draft:** After making changes, scroll to the top or bottom of the editing interface. Click the "Save" button. This typically saves your work as a "Draft."
2.  **Workflow Stages:**
    *   Your saved draft will appear in the "Workflow" section of the CMS.
    *   **Drafts:** Changes are saved but not yet live.
    *   **In Review:** You can move a draft to "In Review" if someone else needs to approve it (this step might be optional depending on your team's process).
    *   **Ready:** Mark the changes as "Ready" when they are approved and prepared to go live.
3.  **Publish:**
    *   From the "Ready" column in the Workflow, select your changes.
    *   Click "Publish" (or "Publish now").
    *   This will commit your changes to the GitHub repository.
    *   If your site is hosted on Vercel and connected to this repository branch, Vercel will automatically trigger a new build and deploy your website with the updated content. This may take a few minutes.

## Important Notes

*   **Repository Updates:** All content changes made via the CMS are committed to the configured branch in your GitHub repository. This means your content is version-controlled alongside your code.
*   **JSON Files:** The content you edit is stored in JSON files located in the `src/content/` directory of your project (e.g., `src/content/home.json`).
*   **Image Paths:** When you upload images, the CMS stores the path to the image in these JSON files. The actual image files are stored in your repository, typically under `public/images/uploads/` or other specified `media_folder` locations.
*   **Wait for Deployment:** After publishing changes in the CMS, allow a few minutes for Vercel (or your hosting platform) to rebuild and deploy the site before the changes are visible on the live URL. You can usually check the deployment status on your Vercel dashboard.

This guide covers the basic operations. For more advanced configurations or troubleshooting, refer to the [Decap CMS Documentation](https://decapcms.org/docs/).
