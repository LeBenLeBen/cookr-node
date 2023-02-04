import { DefineLocaleMessage } from 'vue-i18n';

const fr: DefineLocaleMessage = {
  recipe: {
    title: 'Titre',
    author: 'par',
    quantity: 'personne | personnes',
    time: 'minute | minutes',
    notes: 'Notes',
    ingredients: 'Ingrédients',
    amount: 'Quantité',
    label: 'Libellé',
    tags: 'Tags',
    steps: 'Étapes',
    form: {
      addIngredient: 'Ajouter un ingrédient',
      time: 'Temps',
      steps: {
        help: 'Séparez chaque étape par un retour à la ligne.',
      },
      quantity: 'Quantité',
      image: {
        label: 'Image',
        help: 'Privilégiez un format paysage.',
      },
    },
    new: {
      title: 'Nouvelle recette',
    },
    edit: {
      title: 'Modifier la recette',
    },
  },
  recipes: {
    filters: {
      label: 'Filtres',
      sort: {
        label: 'Tri',
        mostRecentFirst: 'Plus récente en premier',
        oldestFirst: 'Plus ancienne en premier',
        quickestFirst: 'Le plus rapide',
      },
    },
    total: 'Aucune recette | 1 recette | {count} recettes',
    empty: 'Aucune recette à afficher.',
  },
  favorites: {
    title: 'Recettes favorites',
    add: 'Ajouter aux favoris',
    remove: 'Retirer des favoris',
  },
  home: {
    title: 'Accueil',
    recentlyAdded: 'Ajoutées en dernier',
    recentlyViewed: 'Consultées récemment',
  },
  explore: {
    title: 'Explorer',
  },
  app: {
    explore: 'Explorer',
    home: 'Accueil',
    browse: 'Toutes les recettes',
    mySpace: 'Mon espace',
    myRecipes: 'Mes recettes',
    favoritesRecipes: 'Recettes favorites',
  },
  search: {
    label: 'Rechercher',
    results: 'Résultats',
    empty: 'Votre recherche n’a donné aucun résultat.',
  },
  imageUploader: {
    browse: 'Parcourir',
    delete: 'Supprimer l’image',
  },
  common: {
    loading: 'Chargement…',
    loadMore: 'Afficher plus',
    delete: 'Supprimer',
    edit: 'Modifier',
    save: 'Sauvegarder',
  },
  forms: {
    rules: {
      required: 'Ce champ est requis',
      integer: 'Doit être un nombre entier',
      minValue: 'La valeur minimale est {value}',
    },
  },
  auth: {
    login: 'Connexion',
    email: 'E-mail',
    username: 'Nom d’utilisateur',
    password: 'Mot de passe',
    forgotPassword: 'Mot de passe oublié?',
    logout: 'Déconnexion',
    logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter?',
  },
  forgotPassword: {
    title: 'Mot de passe oublié',
    submit: 'Envoyer le lien',
    success:
      'Un email contenant un lien de réinitialisation vient de vous être envoyé.',
  },
  resetPassword: {
    title: 'Réinitialisation du mot de passe',
    password: 'Nouveau mot de passe',
    passwordConfirmation: 'Confirmation du mot de passe',
    submit: 'Modifier mon mot de passe',
    success:
      'Votre mot de passe a bien été réinitialisé. Vous êtes maintenant connecté·e.',
  },
  profile: {
    title: 'Mon profil',
    success: 'Votre profil a bien été mis à jour.',
  },
  notFound: {
    title: 'Erreur 404',
    body: 'La page demandée est introuvable.',
    home: 'Aller à l’accueil',
  },
  api: {
    error: {
      INTERNAL_SERVER_ERROR: 'Une erreur interne au serveur s’est produite.',
      FAILED_VALIDATION: 'Certains champs sont invalides.',
      FORBIDDEN: 'Vous n’avez pas les droits pour effectuer cette action.',
      INVALID_TOKEN: 'Jeton de connexion invalide, veuillez vous reconnecter.',
      TOKEN_EXPIRED: 'Votre session a expiré, veuillez vous reconnecter.',
      INVALID_CREDENTIALS: 'Identifiant ou mot de passe invalide.',
      INVALID_IP: 'Votre adresse IP n’est pas autorisée.',
      INVALID_OTP: 'Code pour l’authentification à deux facteurs invalide.',
      INVALID_PAYLOAD: 'Le contenu de la requête est invalide.',
      INVALID_QUERY: 'Les paramètres de la requêtes sont invalides.',
      UNSUPPORTED_MEDIA_TYPE:
        'Le type de média utilisé pour la requête est invalide.',
      REQUESTS_EXCEEDED: 'Vous avez dépassé le nombre de requêtes autorisées.',
      ROUTE_NOT_FOUND: 'La page demandée est introuvable.',
      SERVICE_UNAIVAILABLE: 'Le service est temporairement indisponible.',
      UNPROCESSABLE_ENTITY: 'La requête est invalide.',
    },
    provider: {
      disabled: 'Ce service est désactivé.',
    },
  },
};

export default fr;
