import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';
import checklist     from './widgets/checklist';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ checklist, drawers, extendingForm, tabs }, document);
});
