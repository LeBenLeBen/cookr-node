export default {
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
        help: 'Priviligiez un format paysage.',
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
    auth: {
      form: {
        error: {
          invalid: 'Identifiant ou mot de passe invalide.',
          email: {
            provide: 'Un e-mail est requis.',
            format: 'Veuillez entrer une adresse e-mail valide.',
          },
          password: {
            provide: 'Un mot de passe est requis.',
            local:
              'Cet utilisateur n’a pas configuré de mot de passe, veuillez vous connecter avec le service utilisé lors de la création du compte.',
            matching: 'Les mots de passe ne correspondent pas.',
          },
          confirmed: 'L’e-mail lié à votre compte n’est pas confirmé.',
          blocked: 'Votre compte a été bloqué par un administrateur.',
          code: {
            provide:
              'Le code de réinitialisation que vous essayez d’utiliser a expiré.',
          },
          user: {
            'not-exist':
              'Aucun utilisateur enregistré avec cette adresse e-mail n’a été trouvé.',
          },
        },
      },
    },
    provider: {
      disabled: 'Ce service est désactivé.',
    },
  },
};
