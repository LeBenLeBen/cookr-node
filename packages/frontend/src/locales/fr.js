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
    new: {
      title: 'Nouvelle recette',
      addIngredient: 'Ajouter un ingrédient',
      time: 'Temps',
      quantity: 'Quantité',
      image: 'Image',
      submit: 'Créer la recette',
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
    recentlyAdded: 'Dernières recettes',
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
  common: {
    loading: 'Chargement…',
    loadMore: 'Afficher plus',
    delete: 'Supprimer',
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
    password: 'Mot de passe',
    logout: 'Déconnexion',
    logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter?',
  },
  api: {
    auth: {
      form: {
        error: {
          invalid: 'Identifiant ou mot de passe invalide.',
          email: {
            provide: 'Un e-mail est requis.',
          },
          password: {
            provide: 'Un mot de passe est requis.',
            local:
              'Cet utilisateur n’a pas configuré de mot de passe, veuillez vous connecter avec le service utilisé lors de la création du compte.',
          },
          confirmed: 'L’e-mail lié à votre compte n’est pas confirmé.',
          blocked: 'Votre compte a été bloqué par un administrateur.',
        },
      },
    },
    provider: {
      disabled: 'Ce service est désactivé.',
    },
  },
};
