/**
 * Verifiable certificates for the resume page.
 *
 * Fields:
 * - id: stable key for React
 * - title: course / specialization name (title case)
 * - teacher: optional (e.g. content author). When set, the meta line is:
 *   `{teacher} | {issuer} - Issued {issued}`; otherwise `{issuer} - Issued {issued}`
 * - issuer: platform or school (e.g. Coursera); also used for “View on {issuer}”
 * - issued: short date string (e.g. Jul 2025)
 * - credentialId: ID shown as "Credential ID - {id}"
 * - url: official verification / profile link
 */
export const certificates = [
  {
    id: 'coursera-selenium-python-pack',
    title: 'Selenium Python Automation Testing and Frameworks',
    teacher: 'Packt',
    issuer: 'Coursera',
    issued: 'Jul 2025',
    credentialId: '3UQT4XN2VGZZ',
    url: 'https://www.coursera.org/account/accomplishments/specialization/3UQT4XN2VGZZ',
  },
]
