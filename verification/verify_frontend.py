import time
from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Reset Password Page
        print("Verifying Reset Password Page...")
        try:
            page.goto("http://localhost:5173/reset-password", timeout=30000)
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification/reset_password.png")
            print("Reset Password Page screenshot captured.")
        except Exception as e:
            print(f"Error capturing Reset Password Page: {e}")

        # Verify Departments Page
        print("Verifying Departments Page...")
        try:
            page.goto("http://localhost:5173/departments", timeout=30000)
            page.wait_for_load_state("networkidle")
            page.screenshot(path="verification/departments.png")
            print("Departments Page screenshot captured.")

            # Click New Department button to open modal
            print("Opening Create Department Modal...")
            page.get_by_role("button", name="New Department").click()
            time.sleep(1) # Wait for animation
            page.screenshot(path="verification/create_department_modal.png")
            print("Create Department Modal screenshot captured.")

        except Exception as e:
            print(f"Error capturing Departments Page: {e}")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
