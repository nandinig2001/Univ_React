import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavTitle,
    name: 'UNIVERSITY',
  },
  {
    component: CNavGroup,
    name: 'Admissions',
    to: '/admissions',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'First-Time New Students',
        to: '/admissions/firsttime',
      },
      {
        component: CNavItem,
        name: 'Transfer Students',
        to: '/admissions/transfer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Colleges',
    to: '/colleges',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Thadomal',
        to: '/colleges/thad',
      },
      {
        component: CNavItem,
        name: 'Dj',
        to: '/colleges/dj',
      },
      {
        component: CNavItem,
        name: 'Patel',
        to: '/colleges/pat',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Colleges',
  //   to: '/colleges',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Thadomal Shahani Engg. College',
  //       to: '/colleges/thad',
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Staff',
  //           to: '/colleges/thad/staff',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Students',
  //           to: '/colleges/thad/students',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Contact',
  //           to: '/colleges/thad/contact',
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'DJ Engg. College',
  //       to: '/colleges/dj',
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Staff',
  //           to: '/colleges/dj/staff1',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Students',
  //           to: '/colleges/dj/students1',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Contact',
  //           to: '/colleges/dj/contact1',
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Patel Engg. College',
  //       to: '/colleges/pat',
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Staff',
  //           to: '/colleges/pat/staff2',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Students',
  //           to: '/colleges/pat/students2',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Contact',
  //           to: '/colleges/pat/contact2',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/courses',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Engineering',
        to: '/courses/engineer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Marks And Credits',
    to: '/marks',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'College 1',
        to: '/marks/col1',
      },
      {
        component: CNavItem,
        name: 'College 2',
        to: '/marks/col2',
      },
      {
        component: CNavItem,
        name: 'College 3',
        to: '/marks/col3',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Enrollment',
    to: '/enrollment',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Type',
        to: '/enrollment/enroll',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Placements',
    to: '/placements',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employment',
        to: '/placements/job',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Financial Aid',
    to: '/financial',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Scholarships',
        to: '/financial/help',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'ADMIN',
  },
  {
    component: CNavGroup,
    name: 'Task Board',
    to: '/taskboard',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
