import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

const transfer = React.lazy(() => import('./views/admissions/transfer'))
const firsttime = React.lazy(() => import('./views/admissions/firsttime'))
const engineer = React.lazy(() => import('./views/courses/engineer'))
const col1 = React.lazy(() => import('./views/marks/col1'))
const col2 = React.lazy(() => import('./views/marks/col2'))
const col3 = React.lazy(() => import('./views/marks/col3'))
const enroll = React.lazy(() => import('./views/enrollment/enroll'))
const job = React.lazy(() => import('./views/placements/job'))
const help = React.lazy(() => import('./views/financial/help'))
// const thad = React.lazy(() => import('./views/colleges/thad'))
// const dj = React.lazy(() => import('./views/colleges/dj'))
// const pat = React.lazy(() => import('./views/colleges/pat'))
// // const contact = React.lazy(() => import('./views/colleges/thad/contact'))
// const staff = React.lazy(() => import('./views/colleges/thad/staff'))
// const students = React.lazy(() => import('./views/colleges/thad/students'))
// const contact1 = React.lazy(() => import('./views/colleges/dj/contact1'))
// const staff1 = React.lazy(() => import('./views/colleges/dj/staff1'))
// const students1 = React.lazy(() => import('./views/colleges/dj/students1'))
// const contact2 = React.lazy(() => import('./views/colleges/pat/contact2'))
// const staff2 = React.lazy(() => import('./views/colleges/pat/staff2'))
// const students2 = React.lazy(() => import('./views/colleges/pat/students2'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  { path: '/admissions', name: 'Admissions', element: firsttime },
  { path: '/admissions/firsttime', name: 'First-Time New Students', element: firsttime },
  { path: '/admissions/transfer', name: 'Transfer Students', element: transfer },
  { path: '/courses', name: 'Courses' },
  { path: '/courses/enginner', name: 'Engineering', element: engineer },
  { path: '/marks', name: 'Marks And Credits', element: col1 },
  { path: '/marks/col1', name: 'College 1', element: col1 },
  { path: '/marks/col2', name: 'College 2', element: col2 },
  { path: '/marks/col3', name: 'College 3', element: col3 },
  { path: '/enrollment', name: 'Enrollment', element: enroll },
  { path: '/enrollment/enroll', name: 'Type', element: enroll },
  { path: '/placements', name: 'Placements', element: job },
  { path: '/placements/job', name: 'Employment', element: job },
  { path: '/financial', name: 'Financial Aid', element: help },
  { path: '/financial/help', name: 'Scholarships', element: help },
  { path: '/taskboard', name: 'Task Board', element: help },
  { path: '/settings', name: 'Settings', element: help },
  // { path: '/colleges', name: 'Colleges', element: thad },
  // { path: '/colleges/thad', name: 'Thadomal Shahani Engg. College', element: thad },
  // { path: '/colleges/dj', name: 'DJ Engg. College', element: dj },
  // { path: '/colleges/pat', name: 'Patel Engg. College', element: pat },
  // { path: '/colleges/pat/staff2', name: 'Staff', element: staff2 },
  // { path: '/colleges/pat/students2', name: 'Students', element: students2 },
  // { path: '/colleges/pat/contact2', name: 'Contact', element: contact2 },
  // { path: '/colleges/dj/staff1', name: 'Staff', element: staff1 },
  // { path: '/colleges/dj/students1', name: 'Students', element: students1 },
  // { path: '/colleges/dj/contact1', name: 'Contact', element: contact1 },
  // { path: '/colleges/thad/staff', name: 'Staff', element: staff },
  // { path: '/colleges/thad/students', name: 'Students', element: students },
  // { path: '/colleges/thad/contact', name: 'Contact', element: contact },
]

export default routes
