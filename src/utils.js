/**
 * Formattage de l'objet à envoyer en cas de succès
 *
 * @export
 * @param {*} data
 * @return {object}
 */
export function successObj (data) {
  return {
    status: 'success',
    data
  }
}

/**
 * Formattage de l'objet à envoyer en cas d'échec
 *
 * @export
 * @param {string} message
 * @return {object}
 */
export function errorObj (message) {
  return {
    status: 'error',
    message
  }
}
