import { Dialog } from "@base-ui/react/dialog";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>Hello from About!</p>

      <Dialog.Root>
        <Dialog.Trigger className="mt-4 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700">
          Open dialog
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 bg-black/40 transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            <Dialog.Title className="text-base font-semibold">Base UI is wired up</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-600">
              This dialog is an unstyled Base UI primitive styled with Tailwind.
            </Dialog.Description>
            <Dialog.Close className="mt-4 rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">
              Close
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
