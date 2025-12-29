https://zefame-free.com/api_free.php
Request Method
POST
Status Code
200 OK
Remote Address
[64:ff9b::c636:7ea7]:443
Referrer Policy
strict-origin-when-cross-origin

Output : {
    "success": true,
    "message": "ID vérifié avec succès",
    "data": {
        "postId": "DR-hZEQk3Pq"
    }
}

https://zefame-free.com/api_free.php?action=check&device=94cb6a40-0193-43ee-ad08-b8bc5839a7aa&service=237&postId=DR-hZEQk3Pq
Request Method
GET
Status Code
200 OK
Remote Address
[64:ff9b::c636:7ea7]:443
Referrer Policy
strict-origin-when-cross-origin

Output : {
    "success": true,
    "message": "Service disponible",
    "data": {
        "allowed": true
    }
}

if already done submission in 5 min 
output {
    "success": false,
    "message": "Vous avez déjà utilisé ce service. Attendez encore 4 minutes et 47 secondes",
    "data": {
        "allowed": false,
        "message": "Vous avez déjà utilisé ce service. Attendez encore 4 minutes et 47 secondes",
        "timeLeft": 287,
        "blockType": "posts"
    }
}

Request URL
https://zefame-free.com/api_free.php?action=order
Request Method
POST
Status Code
200 OK
Remote Address
[64:ff9b::c636:7ea7]:443
Referrer Policy
strict-origin-when-cross-origin

Output : {
    "success": true,
    "message": "Commande passée avec succès",
    "data": {
        "orderId": 4571260,
        "nextAvailable": 1766987437
    }
}

These are the request done through form submission and got output of respective request. implement these in InstagramDemo.tsx page and  Remeber 
1) It accepts only Instagram reel url so check is it reel url EG:"https://www.instagram.com/reel/DR-hZEQk3Pq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
2)And after button push it send request api_free.php POST method where it verify is any already submission is done if not then 
https://zefame-free.com/api_free.php?action=check&device=94cb6a40-0193-43ee-ad08-b8bc5839a7aa&service=237&postId=DR-hZEQk3Pq
Request Method
GET
Status Code
200 OK
Remote Address
[64:ff9b::c636:7ea7]:443
Referrer Policy
strict-origin-when-cross-origin this request than take 1.2min to process than final submission request api_free.php?action=order
3) Wait for 5 min to submit another request

but i want to every user get only one submission in 12hr instead of 1hr 

This is Site Body Element 
<body class="out">
        <div id="header" class="headOut fixed">
            <div class="b-menu-wrapper">
                <button class="b-menu-close" onclick="noAuthMenu()">
                    <i class="ri-close-line"></i>
                </button>
                <div class="container">
                    <div class="row row-btn align-items-center">
                        <div class="col-xl-auto d-none d-xl-block">
                            <div class="home-logo">
                              <a href="/en">
                                  <img src="https://storage.perfectcdn.com/rx634k/k3ex5mm5a1m4jih7.png" alt="zefame.com" title="">
                                              </a>
                            </div>
                        </div>
                        <div class="col text-center">
                            <ul class="nmenu">
<style>
.flag-icon-small {
    width: 16px;  /* Taille réduite des drapeaux dans le menu déroulant */
    height: 16px;
    border-radius: 0%;  /* Forme ronde */
    object-fit: cover;
    margin-right: 8px;  /* Espace entre le drapeau et le texte */
}

.dropdown-menu.langs {
  border: 1px solid var(--color-1);
  border-radius: 15px;
  box-shadow: none;
  background-color: var(--color-2);
  width: 100%;
  right: auto !important;
  left: 0 !important;
  transform: translate3d(0px, 52px, 0px) !important;
  min-width: 250px;
}

</style>

<div class="col-lg-auto" style="text-align: left;">
    <div class="btn-group">
        <button type="button" class="dropdown-toggle language-toggle" data-toggle="dropdown" aria-expanded="false">
            <div class="colIc">
                <div class="g-ticon">
                    <!-- Icône de la Terre pour la langue actuelle -->
                    <i class="ri-earth-line"></i>
                </div>
            </div>
        </button>
        <!-- Ajout de `dropdown-menu-end` pour aligner le menu à droite du bouton -->
        <ul class="dropdown-menu dropdown-menu-end langs">
                            <li>
                    <a class="dropdown-item" href="/fr">
                                                    <img src="https://www.svgrepo.com/show/405485/flag-for-flag-france.svg" alt="French flag" class="flag-icon-small"> Français
                                                                                            </a>
                </li>
                            <li>
                    <a class="dropdown-item" href="/en">
                                                                            <img src="https://www.svgrepo.com/show/248821/united-kingdom-uk.svg" alt="English flag" class="flag-icon-small"> English
                                                                    </a>
                </li>
                    </ul>
    </div>
</div>
                                              <li class="nmenu-item">
                                    <a href="/en" class="nmenu-link">
                                        Home
                                    </a>
                                </li>
                                              <li class="nmenu-item">
                                    <a href="/en/services" class="nmenu-link">
                                        Services
                                    </a>
                                </li>
                                              <li class="nmenu-item">
                                    <a href="/en/blog" class="nmenu-link">
                                        Blog
                                    </a>
                                </li>
                                              <li class="nmenu-item">
                                    <a href="/en/tutoriel" class="nmenu-link">
                                        Tutorial
                                    </a>
                                </li>
                                          </ul>
                        </div>
            <div class="row align-items-center">
              <div class="col-lg-auto col-12 mb-2 mb-lg-0">
                                  <a href="/en/" class="header-btn btn-block without-icon">
                <span class="text">Sign in</span>
                </a>
                         						                </div>
              <div class="col-lg-auto col-12">
        <a href="/en/signup" class="header-btn btn-block">
                  <span class="text">Sign up</span>
                <span class="icon">
                  <i class="ri-arrow-right-line icon-ri"></i>
                </span>
                </a>
              </div>
              </div>
                    </div>
                </div>
            </div>
            <div class="sm-header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <a href="/en">
                                  <img src="https://storage.perfectcdn.com/rx634k/k3ex5mm5a1m4jih7.png" height="45" alt="zefame.com" title="">
                                            </a>
                        </div>
                        <div class="col-auto">
                            <button class="menu-btn" onclick="noAuthMenu()">
                                <i class="ri-menu-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <!-- Main variables *content* -->
     <!-- Après votre balise <style> existante, ajoutez : -->

    <!-- Utilisateur non connecté : garder le padding-top existant -->

<style>
        .card, .gcard {
            background: #012bff !important;
        }

        .fsc-freeservice-container.fsc {
            background: #161b22 !important;
        }
        
        body {
            background: #0d1117;
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
            color: #ffffff;
        }

        .g-dash-content {
            padding-top: 125px;
            min-height: auto;
            background: transparent;
        }

        .fsc-freeservice-container.fsc {
            background: #161b22;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            margin: 10px auto;
            max-width: 600px;
        }

        .free_bx {
            border: 3px solid #0029f7;
            border-radius: 0.3rem 0.3rem 0 0;
            margin-bottom: 0;
            padding: 20px;
            background: #161b22;
            position: relative;
        }

        .free_bx::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(0, 41, 247, 0.1), rgba(52, 15, 232, 0.1));
            pointer-events: none;
        }

        .free_bx h1 {
            font-size: 2rem !important;
            font-weight: 600;
            margin-bottom: 15px;
            color: #ffffff;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .fsc-freeservice-container.fsc .card {
            background: #012bff !important;
            border-radius: 0 0 0.3rem 0.3rem;
            margin-top: 0px !important;
            border: none;
        }

        .gcard {
            padding: 20px;
            color: #ffffff;
        }

        .input-optin-link {
            height: 50px;
            background-color: white;
            padding: 0px 20px;
            width: 100%;
            caret-color: #fc4e03;
            font-size: 18px;
            color: #000000;
            outline-style: none;
            border: none;
            border-radius: 100px;
            transition: all 0.3s ease;
        }

        .input-optin-link:focus {
            box-shadow: 0 0 0 3px rgba(252, 78, 3, 0.25);
        }

        .input-optin-link::placeholder {
            color: #666666;
        }

        .btn-optin {
            height: 50px;
            min-width: 100px;
            width: fit-content;
            padding: 0 20px;
            background: linear-gradient(45deg, #17a2b8, #0056b3);
            font-size: 18px;
            border-radius: 100px;
            color: white;
            border: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
            white-space: nowrap;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn-optin:hover {
            background: linear-gradient(45deg, #039b78, #004494);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
        }

        .btn-optin:disabled {
            background: #6c757d;
            transform: none;
            box-shadow: none;
        }

        .form-group.d-flex.align-items-center.justify-content-center.flex-nowrap {
            background: #fff;
            border-radius: 25px;
            max-width: 500px;
            margin: 0 auto;
            padding: 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Timer Page */
        .timer-page-inner {
            background: #340fe8;
            text-align: center;
            padding: 30px;
            border-radius: 0 0px 5px 5px;
            color: #ffffff;
        }

        .fsc-quantity-text {
            margin-bottom: 32px;
            border: 1px solid #ffffff33;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 32px;
            display: inline-block;
            font-size: 1.1rem;
            word-spacing: 3px;
        }

        #timeTimer {
            font-size: 28px;
            border-radius: 50%;
            border: 2px solid #ffffffaa;
            width: 90px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            margin: 20px auto;
            color: #ffffff;
            font-weight: bold;
            font-family: 'Courier New', monospace;
        }

        .horizontal-progress {
            height: 25px;
            width: 100%;
            position: relative;
            background: #f5f5f5;
            border-radius: 32px;
            padding: 0px;
            box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
            margin: 20px 0;
        }

        .horizontal-progress > span {
            display: block;
            height: 100%;
            border-radius: 12px;
            background: linear-gradient(90deg, #3e9fe6 37%, rgb(84,240,84) 69%);
            box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
            position: relative;
            overflow: hidden;
            transition: width 0.3s ease;
        }

        /* Thanks/Error Pages */
        .thanks-page-inner {
            background: #340fe8;
            text-align: center;
            padding: 40px 20px;
            border-radius: 0 0px 5px 5px;
        }

        .thanks-page-success, .thanks-page-error {
            background: #ffffff;
            padding: 40px;
            display: block;
            border-radius: 10px;
            margin: 20px;
            color: #000000;
        }

        .thanks-page-success-icon {
            display: block;
            margin: 0 auto;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background: #e9fccd;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .thanks-page-success-icon svg {
            fill: #7cdf5a;
            width: 50px;
            height: 50px;
        }

        .thanks-page-error-icon {
            margin: 0 auto 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .thanks-page-error-icon svg {
            fill: red;
            border: 3px solid red;
            border-radius: 50%;
            height: 80px;
            width: 80px;
            padding: 15px;
        }

        .thanks-page-header {
            font-size: 2rem;
            margin: 20px 0;
            font-weight: 600;
            color: #000000;
        }

        h2.thanks-page-header.thanks-page-header-error {
            color: #dc3545;
            font-size: 1.3rem;
        }

        .thanks-page-body {
            font-size: 1.1rem;
            margin: 20px 0;
            color: #000000;
        }

        .thanks-page-get-again-button {
            color: #ffffff;
            background: #340fe8;
            border-radius: 25px;
            padding: 12px 30px;
            font-weight: 600;
            border: none;
            font-size: 1rem;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }

        .thanks-page-get-again-button:hover {
            background: #2a0bc4;
            transform: translateY(-1px);
            color: #ffffff;
            text-decoration: none;
        }

        .service-name-header {
            background: #340fe8;
            margin: 0;
            text-align: center;
            padding: 15px 0;
            font-weight: 600;
            color: #ffffff;
            font-size: 1.3rem;
        }

        /* SEO Header Section - Correction du centrage */
        .seo-header-section {
            background: #161b22;
            padding: 30px 20px;
            margin: 0 auto 20px auto;
            border-radius: 10px;
            color: #ffffff;
            border: 1px solid #21262d;
            max-width: 900px;
            text-align: center;
        }

        .seo-header-section h1 {
            color: #58a6ff;
            font-size: 2.2rem;
            margin: 0;
            font-weight: 600;
            line-height: 1.3;
            text-align: center;
            width: 100%;
        }

        /* Alert modernisé */
        .alert-info {
            background: linear-gradient(45deg, rgba(23, 162, 184, 0.2), rgba(0, 86, 179, 0.2));
            border: 1px solid rgba(23, 162, 184, 0.5);
            border-radius: 10px;
            color: #ffffff;
            margin-bottom: 15px;
        }

        .feature-list {
            list-style: none;
            padding: 0;
            margin: 15px 0;
        }

        .feature-list li {
            padding: 8px 0;
            color: #ffffff;
            font-size: 0.95rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-list li:last-child {
            border-bottom: none;
        }

        .feature-list li::before {
            content: "✅";
            margin-right: 10px;
        }

        /* Loading spinner */
        .loading-container {
            background: #340fe8;
            text-align: center;
            padding: 60px 30px;
            color: #ffffff;
        }

        .spinner-border {
            width: 4rem;
            height: 4rem;
            border-color: #ffffff;
            border-right-color: transparent;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Important note */
        .important-note {
            background: rgba(252, 78, 3, 0.2);
            border: 1px solid rgba(252, 78, 3, 0.5);
            border-radius: 10px;
            padding: 12px;
            margin-top: 15px;
            color: #ffffff;
            font-size: 0.9rem;
        }

        /* SEO Sections */
        .seo-section {
            background: #161b22;
            padding: 40px;
            margin: 40px auto;
            border-radius: 10px;
            color: #ffffff;
            border: 1px solid #21262d;
            max-width: 900px;
        }

        .seo-section h2 {
            color: #58a6ff;
            margin-bottom: 20px;
            font-size: 2rem;
            font-weight: 600;
        }

        .seo-section h3 {
            color: #7dd3fc;
            margin-bottom: 15px;
            margin-top: 30px;
            font-size: 1.5rem;
        }

        .seo-section p {
            line-height: 1.8;
            margin-bottom: 20px;
            color: #e6edf3;
            font-size: 1.05rem;
        }

        .keyword-highlight {
            background: linear-gradient(45deg, #58a6ff, #7dd3fc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }

        /* Success CTA Section */
        .success-cta {
            background: linear-gradient(135deg, #1e293b, #334155);
            border-radius: 15px;
            padding: 30px;
            margin-top: 30px;
            text-align: center;
            border: 1px solid #475569;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .success-cta h3 {
            font-size: 1.8rem;
            color: #ffffff;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .success-cta p {
            color: #e2e8f0;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 25px;
        }

        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary-cta {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 30px;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            border: none;
            font-size: 1rem;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .btn-primary-cta:hover {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
        }

        .btn-secondary-cta {
            background: transparent;
            color: #3b82f6;
            padding: 14px 28px;
            border-radius: 30px;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            border: 2px solid #3b82f6;
            font-size: 1rem;
        }

        .btn-secondary-cta:hover {
            background: rgba(59, 130, 246, 0.1);
            transform: translateY(-2px);
        }

        /* FAQ Styles */
        .faq-container {
            margin-top: 40px;
        }

        .faq-item {
            margin-bottom: 20px;
            border: 1px solid #30363d;
            border-radius: 8px;
            overflow: hidden;
        }

        .faq-question {
            background: #21262d;
            padding: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }

        .faq-question:hover {
            background: #262c33;
        }

        .faq-question h4 {
            margin: 0;
            color: #58a6ff;
            font-size: 1.2rem;
            font-weight: 500;
        }

        .faq-toggle {
            color: #58a6ff;
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }

        .faq-answer {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-answer.active {
            padding: 20px;
            max-height: 500px;
        }

        .faq-item.active .faq-toggle {
            transform: rotate(45deg);
        }

        /* Responsive */
        @media screen and (max-width: 550px) {
            .form-group.d-flex.align-items-center.justify-content-center.flex-nowrap {
                border-radius: 10px;
                margin: 0;
                width: 100%;
            }

            .btn-optin {
                border-radius: 10px;
                min-width: 80px;
                font-size: 16px;
                padding: 0 15px;
            }

            .input-optin-link {
                border-radius: 10px;
            }

            .free_bx h1 {
                font-size: 1.5rem !important;
            }

            .seo-header-section h1 {
                font-size: 1.6rem;
            }

            #timeTimer {
                font-size: 22px;
                width: 70px;
                height: 70px;
            }

            .cta-buttons {
                flex-direction: column;
                width: 100%;
            }

            .btn-primary-cta, .btn-secondary-cta {
                width: 100%;
                text-align: center;
            }

            .seo-section {
                padding: 20px;
            }
        }
.maintenance-notice {
        background: rgba(255, 193, 7, 0.2);
        border: 1px solid rgba(255, 193, 7, 0.5);
        border-radius: 10px;
        padding: 12px;
        margin-bottom: 15px;
		margin-top: 15px;
        color: #ffffff;
        font-size: 0.95rem;
        text-align: center;
        display: none;
    }
    
    .maintenance-notice.active {
        display: block;
    }
    
    .btn-optin:disabled {
        background: #6c757d !important;
        cursor: not-allowed !important;
        opacity: 0.6;
    }
    
    /* Style pour le pop-up de maintenance */
    .maintenance-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #161b22;
        border: 2px solid #ff6b6b;
        border-radius: 15px;
        padding: 30px;
        z-index: 9999;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        max-width: 400px;
        width: 90%;
        display: none;
        text-align: center;
    }
    
    .maintenance-popup.show {
        display: block;
    }
    
    .maintenance-popup h3 {
        color: #ff6b6b;
        margin-bottom: 15px;
        font-size: 1.5rem;
    }
    
    .maintenance-popup p {
        color: #ffffff;
        margin-bottom: 20px;
        line-height: 1.6;
    }
    
    .maintenance-popup button {
        background: #340fe8;
        color: #ffffff;
        border: none;
        padding: 10px 25px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .maintenance-popup button:hover {
        background: #2a0bc4;
        transform: translateY(-1px);
    }
    
    .maintenance-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9998;
        display: none;
    }
    
    .maintenance-overlay.show {
        display: block;
    }
    </style>


<div class="maintenance-overlay" id="maintenanceOverlay"></div>
<div class="maintenance-popup" id="maintenancePopup">
                                                                <h3>🔧 Service under maintenance</h3>
                <p>This service is currently under maintenance. Please try again in a few hours.</p>
                <button onclick="closeMaintenancePopup()">Got it</button>
                                    </div>
    <div class="g-dash-content">
        <!-- SEO Header Section -->
        <div class="container">
            <div class="seo-header-section">
                                                                                                                                                    <h1>🚀 Free Instagram Views - Zefame</h1>
                                                                                                </div>
        </div>

        <section class="container">
            <div class="fsc-freeservice-container fsc">
                <!-- Page principale -->
                <div id="main-page" style="display: none;">
                    <div class="free_bx">
                                                                                                                                                                                                            <h1>👁️ Free Instagram Views</h1>
                                                                                                                                            
                        <div class="alert alert-info">
                                                                                                                                                                                                                                        <strong>⚡ INSTANT: Get <span id="service-quantity">300</span> free views for your Instagram reel in seconds!</strong>
                                                                                                                                                            </div>
                        
                        <ul class="feature-list">
                                                                                                                                                                                                                                        <li>⚡ INSTANT DELIVERY - In seconds</li>
                                        <li>🆓 100% FREE - <span id="service-timer-info">Every 5 min</span></li>
                                        <li>🔒 SECURE - No password required</li>
                                        <li>🎥 REELS ONLY - Works only with reels</li>
                                                                                                                                                            </ul>
                    </div>

                    <div class="card">
                        <div class="gcard">
                            <form id="instagram-form" class="submitted">
                                <div class="form-group d-flex align-items-center justify-content-center flex-nowrap">
                                                                                                                                                                                                                                                                                                <input type="text" id="instagram-link" class="input-optin-link" placeholder="📱 Paste your Instagram reel link here..." required="" autocomplete="off">
                                                <button type="submit" class="btn-optin" id="submit-btn">
                                                    Get Now
                                                </button>
                                                                                                                                                                                                    </div>
                            </form>
<div class="maintenance-notice" id="maintenanceNotice">
                                                                <strong>🔧 Maintenance:</strong> Service temporarily unavailable.
                                    </div>
                            <div class="important-note">
                                                                                                                                                                                                                                                                    <strong>🔴 Important:</strong> This service works only with Instagram Reels. Make sure your profile is public.
                                                                                                                                                                                </div>
                        </div>
                    </div>
                </div>

                <!-- Page de chargement -->
                <div id="loading-page" style="display: none;">
                                                                                                                                                                                <h3 class="service-name-header">Free Instagram Views</h3>
                                                                                                                        <div class="loading-container">
                        <div class="spinner-border" role="status"></div>
                                                                                                                                                                                                            <p class="mt-3">Verification in progress...</p>
                                                                                                                                        </div>
                </div>

                <!-- Page de timer -->
                <div id="timer-page" style="display: none;">
                                                                                                                                                                                <h3 class="service-name-header">Get <span id="timer-quantity">300</span> Instagram Views</h3>
                                                                                                                        <div class="timer-page-inner">
                                                                                                                                                                                                            <p class="fsc-timer-wait">Please wait for the countdown to finish to get the service.</p>
                                                                                                                                            
                        <div class="fsc-quantity-text">
                            <span><span id="timer-quantity-text">300</span> Free Instagram Views</span>
                        </div>
                        
                        <div id="timeTimer">01:00</div>
                        
                        <div id="timeProgressbar" class="horizontal-progress">
                            <span style="width: 0%"></span>
                        </div>
                    </div>
                </div>

                <!-- Page de succès -->
                <div id="success-page" style="display: none;">
                    <h3 class="service-name-header"></h3>
                    <div class="thanks-page-inner">
                        <div class="thanks-page-success">
                            <div class="thanks-page-success-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px">
                                    <path d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"></path>
                                </svg>
                            </div>
                                                                                                                                                                                                                                        <h2 class="thanks-page-header" style="color: #7cdf5a;">Success</h2>
                                        <p class="thanks-page-body">You will get the service on your link in a few minutes.</p>
                                                                                                                                                                
                            <!-- Success CTA Section -->
                            <div class="success-cta">
                                
                                                                                                                                                                                                                                                                    <p>
                                                To get Instagram views <strong>without limits, instantly</strong> and at the <strong>best price</strong>, create a free account or check our offers.
                                            </p>
                                            <div class="cta-buttons">
                                                <a href="/en/signup" class="btn-primary-cta">Sign Up</a>
                                                <a href="/en/services" class="btn-secondary-cta">View Prices</a>
                                            </div>
                                                                                                                                                                                </div>
                            
                                                                                                                                                                                                                                        <a href="/en/free-services" class="thanks-page-get-again-button" style="margin-top: 20px;">
                                            Back to services
                                        </a>
                                                                                                                                                            </div>
                    </div>
                </div>

                <!-- Page d'erreur -->
                <div id="error-page" style="display: block;">
                                                                                                                                                                                <h3 class="service-name-header">Free Instagram Views</h3>
                                                                                                                        <div class="thanks-page-inner">
                        <div class="thanks-page-error">
                            <div class="thanks-page-error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 -960 960 960" width="72">
                                    <path d="M480-424 284-228q-11 11-28 11t-28 11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"></path>
                                </svg>
                            </div>
                            <h2 class="thanks-page-header thanks-page-header-error">
                                                                                                                                                                                                                                                                    <span id="error-message">Please wait 4m 47s before using this service again.</span>
                                                                                                                                                                                </h2>
                            <button type="button" onclick="resetPage()" class="thanks-page-get-again-button">
                                                                                                                                                                                                                                                                    🔄 Try Again
                                                                                                                                                                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEO Content Section -->
        <section class="seo-section">
                                                                                                                        <h2>How to get free Instagram views for your Reels in 2025?</h2>
                        
                        <p>
                            Looking to <span class="keyword-highlight">get free Instagram views</span> to boost your reels' performance? Our service allows you to <span class="keyword-highlight">have free Instagram views</span> in just a few clicks, without any complex registration or app download. With over 100,000 satisfied users, we are the leading platform to <span class="keyword-highlight">increase Instagram views for free</span>.
                        </p>
                        
                        <p>
                            Our platform offers <span class="keyword-highlight">Instagram views without registration</span>, which means you don't need to create an account to get started. Simply paste your Instagram reel link, wait a few seconds, and your views will start increasing naturally. This simple and effective method allows all content creators to improve their visibility without effort or cost.
                        </p>
                        
                        <p>
                            Views are crucial for your reels' success on Instagram. Instagram's algorithm favors reels with high view counts, propelling them in the Reels section and increasing their organic reach. The faster your reel accumulates views, the more likely it is to be recommended to other users. Our free service is perfect for giving that initial boost needed for your reels to go viral.
                        </p>
                                                                    
                                                                                                                        <h3>FAQ - Frequently asked questions about free Instagram views</h3>
                                                                                
            <div class="faq-container">
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                                                                                                                                                                                                            <h4>How to get free Instagram views for my reels?</h4>
                                                                                                                                            <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                                                                                                                                                                                                            <p>
                                        To get free Instagram views quickly, use our service by following these simple steps: copy your Instagram reel link, paste it into our form, and click "Get Now". After a short 60-second verification countdown, your views will be automatically added to your reel. The process is fully automated and you can repeat the operation every 5 minutes.
                                    </p>
                                                                                                                                        </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                                                                                                                                                                                                            <h4>Why does this service only work with Instagram Reels?</h4>
                                                                                                                                            <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                                                                                                                                                                                                            <p>
                                        Our service is specifically optimized for Instagram Reels because it's the video format prioritized by Instagram's algorithm in 2025. Reels have much higher viral potential than regular posts. Instagram promotes reels with good performance, which makes our service particularly effective for boosting your visibility on the platform.
                                    </p>
                                                                                                                                        </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                                                                                                                                                                                                            <h4>Are free Instagram views safe for my account?</h4>
                                                                                                                                            <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                                                                                                                                                                                                            <p>
                                        Absolutely! Our service is 100% secure and compliant with Instagram's terms of use. We never ask for your password and don't access your account. Views are added progressively and naturally to avoid any detection. Just make sure your profile is public for the service to work properly. Thousands of users use our service every day without any issues.
                                    </p>
                                                                                                                                        </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                                                                                                                                                                                                            <h4>How many times can I get free Instagram views?</h4>
                                                                                                                                            <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                                                                                                                                                                                                            <p>
                                        With our free service, you can get Instagram views every 5 minutes. Each use allows you to receive up to 1000 free views on any reel. You cannot use the service multiple times on the same reel within the 5-minute period. For larger needs or to get views instantly without waiting, we also offer premium options with higher quantities.
                                    </p>
                                                                                                                                        </div>
                </div>
            </div>
        </section>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
		const IS_MAINTENANCE = false;
        // Configuration
        const API_URL = 'https://zefame-free.com/api_free.php';
        const INSTAGRAM_SERVICE_ID = 237; // ID pour les vues Instagram
        const TIMER_DURATION = 60; // 1 minute d'attente pour tous les services
        
        // Variables globales
        let timerInterval;
        let deviceUUID;
        let serviceConfig = null;
        
        // Log de démarrage
        console.log('API URL:', API_URL);
        console.log('Service ID:', INSTAGRAM_SERVICE_ID);
        
        // Charger la configuration du service au démarrage
        async function loadServiceConfig() {
            try {
                console.log('Chargement de la configuration du service...');
                const response = await $.ajax({
                    url: API_URL,
                    type: 'GET',
                    data: { 
                        action: 'config'
                    },
                    dataType: 'json',
                    timeout: 10000
                });
                
                if (response.success && response.data) {
                    // Chercher le service Instagram Views dans la configuration
                    for (const category in response.data) {
                        const services = response.data[category].services || [];
                        const instagramViewsService = services.find(s => s.id === INSTAGRAM_SERVICE_ID);
                        if (instagramViewsService) {
                            serviceConfig = instagramViewsService;
                            console.log('Configuration du service trouvée:', serviceConfig);
                            updateServiceDisplay();
                            break;
                        }
                    }
                }
            } catch (error) {
                console.error('Erreur lors du chargement de la configuration:', error);
                // Utiliser les valeurs par défaut
                serviceConfig = {
                    quantity: 1000,
                    timer: '5 min',
                    timerSeconds: 300,
                    type: 'limited',
                    dailyLimit: 0
                };
                updateServiceDisplay();
            }
        }
        
        // Mettre à jour l'affichage avec les données du service
        function updateServiceDisplay() {
            if (!serviceConfig) return;
            
            // Mettre à jour les quantités
            document.getElementById('service-quantity').textContent = serviceConfig.quantity;
            document.getElementById('timer-quantity').textContent = serviceConfig.quantity;
            document.getElementById('timer-quantity-text').textContent = serviceConfig.quantity;
            
            // Mettre à jour le timer info
            let timerInfo = '';
                                                                                                                        if (serviceConfig.type === 'unlimited' && serviceConfig.dailyLimit === 0) {
                            timerInfo = `Unlimited every ${serviceConfig.timer}`;
                        } else if (serviceConfig.dailyLimit > 0) {
                            timerInfo = `Every ${serviceConfig.timer} (max ${serviceConfig.dailyLimit} times/day)`;
                        } else {
                            timerInfo = `Every ${serviceConfig.timer}`;
                        }
                                                                                document.getElementById('service-timer-info').textContent = timerInfo;
        }
        
        // Génération d'un UUID simple
        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        
        // Stockage local du UUID
        function getDeviceUUID() {
            let uuid = localStorage.getItem('deviceUUID');
            if (!uuid) {
                uuid = generateUUID();
                localStorage.setItem('deviceUUID', uuid);
            }
            return uuid;
        }
        
        // Validation du lien Instagram - SEULEMENT les reels
        function isValidInstagramLink(link) {
            // Accepter uniquement les liens de reels
            return link.includes('instagram.com/reel/');
        }
        
        // Extraction de l'ID du reel Instagram
        function extractInstagramReelId(link) {
            // Pattern pour extraire l'ID du reel
            const pattern = /instagram\.com\/reel\/([A-Za-z0-9_-]+)/;
            
            const match = link.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
            
            return null;
        }
        
        // Vérification initiale avec extraction de l'ID du reel
        async function checkReelAndStatus(link) {
            try {
                // D'abord extraire l'ID localement
                const reelId = extractInstagramReelId(link);
                
                if (!reelId) {
                    return {
                        success: false,
                        message: 'Unable to extract Instagram reel ID'                    };
                }
                
                // Puis vérifier avec l'API
                const response = await $.ajax({
                    url: API_URL,
                    type: 'POST',
                    data: {
                        action: 'checkPostId',
                        link: link,
                        postId: reelId,
                        platform: 'instagram'
                    },
                    dataType: 'json',
                    timeout: 15000
                });
                
                console.log('CheckPostId response:', response);
                
                if (response.success) {
                    return {
                        success: true,
                        postId: reelId
                    };
                } else {
                    return {
                        success: false,
                        message: response.message || 'Error during verification'                    };
                }
            } catch (error) {
                console.error("Erreur lors de la vérification:", error);
                
                // Si l'API n'a pas encore la route, utiliser l'ID extrait localement
                const reelId = extractInstagramReelId(link);
                if (reelId) {
                    return {
                        success: true,
                        postId: reelId
                    };
                }
                
                return {
                    success: false,
                    message: 'Server connection error'                };
            }
        }
        
        // Affichage des pages
        function showPage(pageId) {
            document.querySelectorAll('#main-page, #loading-page, #timer-page, #success-page, #error-page').forEach(page => {
                page.style.display = 'none';
            });
            document.getElementById(pageId).style.display = 'block';
            
            // Scroll vers le conteneur principal
            if (pageId !== 'main-page') {
                setTimeout(() => {
                    const container = document.querySelector('.fsc-freeservice-container');
                    if (container) {
                        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
        }
        
        // Réinitialisation de la page
        function resetPage() {
            showPage('main-page');
            document.getElementById('instagram-link').value = '';
            document.getElementById('submit-btn').disabled = false;
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        }
        
        // Affichage d'erreur
        function showError(message) {
            document.getElementById('error-message').textContent = message;
            showPage('error-page');
        }
        
        // Vérification du statut du service avec l'ID du reel
        async function checkServiceStatusWithPostId(postId) {
            try {
                const response = await $.ajax({
                    url: API_URL,
                    type: 'GET',
                    data: { 
                        action: 'check',
                        device: deviceUUID,
                        service: INSTAGRAM_SERVICE_ID,
                        postId: postId
                    },
                    dataType: 'json',
                    timeout: 10000
                });
                
                console.log('Service status with post ID:', response);
                return response;
            } catch (error) {
                console.error('Status check error:', error);
                throw new Error('Server connection error');
            }
        }
        
        // Soumission de la commande
        async function submitOrder(link, postId) {
            try {
                const response = await $.ajax({
                    url: API_URL + '?action=order',
                    type: 'POST',
                    data: { 
                        service: INSTAGRAM_SERVICE_ID,
                        link: link,
                        uuid: deviceUUID,
                        postId: postId
                    },
                    dataType: 'json',
                    timeout: 10000
                });
                
                console.log('Order response:', response);
                
                if (response.success) {
                    return 'success';
                } else {
                    throw new Error(response.message || 'Unknown error');
                }
            } catch (error) {
                console.error('Order error:', error);
                throw new Error(error.responseJSON?.message || 'Order error');
            }
        }
        
        // Démarrage du timer
        function startTimer(postId) {
            showPage('timer-page');
            
            let timeLeft = TIMER_DURATION; // Toujours 60 secondes d'attente
            const timerDisplay = document.getElementById('timeTimer');
            const progressBar = document.querySelector('#timeProgressbar span');
            const totalTime = timeLeft;
            
            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                
                timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                const progress = ((totalTime - timeLeft) / totalTime) * 100;
                progressBar.style.width = progress + '%';
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerDisplay.textContent = "Loading...";
                    timerDisplay.style.fontSize = "14px";
                    progressBar.style.width = '100%';
                    processOrder(postId);
                }
                
                timeLeft--;
            }, 1000);
        }
        
        // Traitement de la commande après le timer
        async function processOrder(postId) {
            const link = document.getElementById('instagram-link').value;
            
            try {
                await submitOrder(link, postId);
                showPage('success-page');
            } catch (error) {
                showError(error.message);
            }
        }
        
        // Gestionnaire de soumission du formulaire
        document.getElementById('instagram-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const link = document.getElementById('instagram-link').value.trim();
            const submitBtn = document.getElementById('submit-btn');
            
            // Validation du lien
            if (!link) {
                alert('Please enter an Instagram link');
                return;
            }
            
            if (!isValidInstagramLink(link)) {
    const errorMessage = "⚠️ The link must be a valid Instagram reel.<br>To learn how to copy the reel link, click <a href='https://zefame.crisp.help/en/article/how-to-copy-the-link-of-an-instagram-post-16ihvpw/' target='_blank' style='color: #58a6ff; text-decoration: underline;'>here</a>.";
    showCustomError(errorMessage);
    return;
}
            
            // Désactivation du bouton
            submitBtn.disabled = true;
            showPage('loading-page');
            
            try {
                // Vérification et extraction de l'ID du reel
                const checkResult = await checkReelAndStatus(link);
                
                if (!checkResult.success) {
                    showError(checkResult.message || 'Unable to extract Instagram reel ID. Please check your link.');
                    submitBtn.disabled = false;
                    return;
                }
                
                const postId = checkResult.postId;
                console.log('Reel ID extrait:', postId);
                
                // Vérification du statut avec l'ID du reel
                const status = await checkServiceStatusWithPostId(postId);
                
                if (!status.success) {
                    if (status.data && status.data.timeLeft) {
                        const minutes = Math.floor(status.data.timeLeft / 60);
                        const seconds = status.data.timeLeft % 60;
                        
                        if (status.data.blockType === 'post') {
                            showError(status.message);
                        } else {
                            showError(`Please wait ${minutes}m ${seconds}s before using this service again.`);
                        }
                    } else if (status.data && status.data.resetTime) {
                        showError('You have reached the daily limit. Come back tomorrow!');
                    } else {
                        showError(status.message);
                    }
                    submitBtn.disabled = false;
                    return;
                }
                
                // Démarrage du timer
                startTimer(postId);
                
            } catch (error) {
                showError(error.message);
                submitBtn.disabled = false;
            }
        });
        
        // Toggle FAQ
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            
            // Toggle active class
            faqItem.classList.toggle('active');
            answer.classList.toggle('active');
            
            // Close other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('active');
                }
            });
        }
        
        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            deviceUUID = getDeviceUUID();
            console.log('Device UUID:', deviceUUID);
            
            // Charger la configuration du service
            loadServiceConfig();
        });
function showMaintenancePopup() {
        document.getElementById('maintenanceOverlay').classList.add('show');
        document.getElementById('maintenancePopup').classList.add('show');
    }
    
    // Fonction pour fermer le popup de maintenance
    function closeMaintenancePopup() {
        document.getElementById('maintenanceOverlay').classList.remove('show');
        document.getElementById('maintenancePopup').classList.remove('show');
    }
    
    // Fonction pour vérifier la maintenance
    function checkMaintenance() {
        if (IS_MAINTENANCE) {
            // Désactiver le bouton
            document.getElementById('submit-btn').disabled = true;
            
            // Afficher la notice de maintenance
            document.getElementById('maintenanceNotice').classList.add('active');
            
            // Griser le champ de saisie
            document.getElementById('instagram-link').style.opacity = '0.6';
            document.getElementById('instagram-link').disabled = true;
            
            return true;
        }
        return false;
    }
    
    // Modifier votre gestionnaire de soumission existant
    // Remplacez le début de votre event listener par :
    document.getElementById('instagram-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Vérifier si le service est en maintenance
        if (IS_MAINTENANCE) {
            showMaintenancePopup();
            return;
        }
        
        // Le reste de votre code existant continue normalement...
        const link = document.getElementById('instagram-link').value.trim();
        const submitBtn = document.getElementById('submit-btn');
        
        // ... reste du code existant
    });

// Fonction pour afficher un message d'erreur avec HTML
function showCustomError(htmlMessage) {
    // Créer un div pour le message d'erreur personnalisé
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #161b22;
        border: 2px solid #ff6b6b;
        border-radius: 15px;
        padding: 25px;
        z-index: 10000;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        max-width: 400px;
        width: 90%;
        text-align: center;
        color: #ffffff;
    `;
    
    // Ajouter le contenu HTML
    errorDiv.innerHTML = `
        <div style="margin-bottom: 20px; line-height: 1.6;">
            ${htmlMessage}
        </div>
        <button onclick="closeCustomError()" style="
            background: #340fe8;
            color: #ffffff;
            border: none;
            padding: 10px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        ">OK</button>
    `;
    
    // Créer un overlay
    const overlay = document.createElement('div');
    overlay.id = 'customErrorOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9999;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(overlay);
    document.body.appendChild(errorDiv);
    
    // Stocker la référence pour pouvoir la fermer
    window.customErrorDiv = errorDiv;
}

// Fonction pour fermer le message d'erreur personnalisé
function closeCustomError() {
    const overlay = document.getElementById('customErrorOverlay');
    if (overlay) overlay.remove();
    if (window.customErrorDiv) {
        window.customErrorDiv.remove();
        window.customErrorDiv = null;
    }
}
    
    // Modifier votre fonction DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        deviceUUID = getDeviceUUID();
        console.log('Device UUID:', deviceUUID);
        
        // Vérifier la maintenance au chargement
        checkMaintenance();
        
        // Charger la configuration du service
        loadServiceConfig();
    });
    
    // Ajouter un gestionnaire de clic sur l'overlay pour fermer le popup
    document.getElementById('maintenanceOverlay').addEventListener('click', closeMaintenancePopup);
    </script>

    



<style>.particle-snow{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}.particle-snow canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}.christmas-garland{text-align:center;white-space:nowrap;overflow:hidden;position:absolute;z-index:1;padding:0;pointer-events:none;width:100%;height:85px}.christmas-garland .christmas-garland__item{position:relative;width:28px;height:28px;border-radius:50%;display:inline-block;margin-left:20px}.christmas-garland .christmas-garland__item .shape{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:flash-1;animation-name:flash-1;-webkit-animation-duration:2s;animation-duration:2s}.christmas-garland .christmas-garland__item .apple{width:22px;height:22px;border-radius:50%;margin-left:auto;margin-right:auto;margin-top:8px}.christmas-garland .christmas-garland__item .pear{width:12px;height:28px;border-radius:50%;margin-left:auto;margin-right:auto;margin-top:6px}.christmas-garland .christmas-garland__item:nth-child(2n+1) .shape{-webkit-animation-name:flash-2;animation-name:flash-2;-webkit-animation-duration:.4s;animation-duration:.4s}.christmas-garland .christmas-garland__item:nth-child(4n+2) .shape{-webkit-animation-name:flash-3;animation-name:flash-3;-webkit-animation-duration:1.1s;animation-duration:1.1s}.christmas-garland .christmas-garland__item:nth-child(odd) .shape{-webkit-animation-duration:1.8s;animation-duration:1.8s}.christmas-garland .christmas-garland__item:nth-child(3n+1) .shape{-webkit-animation-duration:1.4s;animation-duration:1.4s}.christmas-garland .christmas-garland__item:before{content:"";position:absolute;background:#222;width:10px;height:10px;border-radius:3px;top:-1px;left:9px}.christmas-garland .christmas-garland__item:after{content:"";top:-9px;left:14px;position:absolute;width:52px;height:18px;border-bottom:solid #222 2px;border-radius:50%}.christmas-garland .christmas-garland__item:last-child:after{content:none}.christmas-garland .christmas-garland__item:first-child{margin-left:-40px}</style>

        <footer id="footer" class="footer-bg mt-0">
        <div class="container text-center my-3 py-5">
          <a href="/">
                      <img src="https://storage.perfectcdn.com/rx634k/k3ex5mm5a1m4jih7.png" height="55" class="mb-4" alt="zefame.com" title="zefame.com">
                  </a><p class="mb-4">
              Follow us on<strong> our social media</strong>!
                      </p>
            <ul class="ficons ficons-big ficons-dark-2">
            <li class="ficons-instagram"><a href="http://www.instagram.com/zefame_official" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
            <li class="ficons-facebook"><a href="https://www.tiktok.com/@zefame_official" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a></li>
            <li class="ficons-twitter"><a href="http://www.twitter.com" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="ficons-youtube"><a href="https://www.youtube.com" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
        <div class="copyright footer-alt-bg py-4">
          <div class="container text-center py-2">
            <p class="mb-0 text-2 ls-0">Copyright 2025 Zefame - All rights reserved.</p><br>
			<p class="mb-0 text-2 ls-0">
              <a href="/en/terms" class="text-light">
              Terms
                      </a> - 
    <a href="/en/politique" class="text-light">
              Privacy
                      </a> <br>
    <a href="/en/mentions-legales" class="text-light">
              Legal Notice
                      </a>
  
    </p>
          </div>
        </div>
      </footer>
  

 

       <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
       <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/libs/jquery/1.12.4/jquery.min.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/global/fgks9m94k0nhqmix.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/global/8gmoznjnttfyk1mz.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/global/w8l498eitwhkze7w.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/global/jq8derbjf313z5ai.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/global/0ud5szi4ocdmm9ep.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/rx634k/4quos25tsph8os0r.js">
              </script>
          <script type="text/javascript" src="https://storage.perfectcdn.com/rx634k/0f65ax06iqmrk7b4.js">
              </script>
          <script type="text/javascript">
                  window.modules.layouts = {"theme_id":1,"auth":0,"live":true,"csrftoken":"0uK_h4heGjG4IbUGnP9GewxXNOEhNEIq-6XroQQmTwLrqe7S4DZ8QPFY91PFljY8IT9k0GVSL2eR0r_mZhMZaA=="};
              </script>
          <script type="text/javascript">
                  document.addEventListener('DOMContentLoaded', function() { 
var newYearEvent = new window.NewYearEvent({"snow":{"init":false,"options":{"particles":{"move":{"speed":3,"bounce":false,"enable":true,"random":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200},"out_mode":"out","straight":false,"direction":"bottom"},"size":{"anim":{"sync":false,"speed":40,"enable":false,"size_min":0.1},"value":5,"random":true},"color":{"value":"#fff"},"number":{"value":50,"density":{"enable":true,"value_area":650}},"opacity":{"anim":{"sync":false,"speed":1,"enable":true,"opacity_min":0.9},"value":0.9,"random":true},"line_linked":{"color":"#ffffff","width":1,"enable":false,"opacity":0.8,"distance":500}},"interactivity":{"modes":{"bubble":{"size":4,"speed":3,"opacity":1,"distance":400,"duration":0.3},"repulse":{"speed":3,"distance":200,"duration":0.4}},"events":{"resize":true,"onclick":{"mode":"repulse","enable":true},"onhover":{"mode":"bubble","enable":false}},"detect_on":"window"},"retina_detect":true}},"toys":{"init":false,"options":{"count":40,"speed":1,"images":["data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC\/xhBQAAAAFzUkdCAK7OHOkAAAL3UExURUdwTP\/\/\/\/Hw8aenp\/T09Pr7+\/\/\/AIGBfaGgnPn4+IyLiKKhoPDv8ImGgczMx\/\/\/\/6+ure7w7Zublu\/u7n+BfLKxsJKSj+\/u7wAXOvb29cbFxe7t7u7t7tTT0v\/\/\/\/Dv8P7+\/v\/\/\/\/X19KSkoP\/\/\/87OzPLx8fLx8ZyblMHBwJ6emsrJyMrJyM3MzLW1s7q5t6ysp7Oysc7NzeXl4vHx8enp6f\/\/\/\/\/\/\/8zLy+3s7bi3t4iIiJOTj6KgnsTEwMTDwsnIxba1tLS0s+zs7L+\/vuno6\/\/\/\/6Ghn5aWkvLx8pCQjMLCwK+vrbS0sZOTkJGRjfPy85ubl\/\/\/\/5eWk5WVkq+vrsrKyKiopfX19K6uq7y8u7Kwr6WlotnZ2cfHw5qal6Cgnf\/\/\/6OjoszLyczHxdXV1NTT0q2trMvLyp6dm\/\/\/\/\/36\/fLz88PDwtjY1uXk5d\/e3\/j4+Lu7uZqalvDw8aKhoP\/\/\/6mop\/\/\/\/87OzpGRjLa1s8\/PzPj29be3tru7uJKRjcrJyP39\/bm4t7y8uP79\/tDQ0ICAe+no6f7+\/v7+\/qCem\/7+\/8TEwcXFwMjIx+jo5K6urMfGxvT09aKin+Dg3JKSkfX09KurqdjZ1ujn6I+Pjbi4uPj4+NDQ0L28vNXT05OTk\/n5+u\/v7vb19J2dm\/z6\/K+vrrW1s9PT0d7e3tnY2dXU1Pr6+pCQjf\/\/\/6Cgntzc3efl5+rq6oiIgqGhnePj48C\/vunp6bu7uezs7dLR0YuLhtfX2P79\/a2trUYC4QLt7v\/\/\/\/\/\/\/9HQ0dDP0dDQ0dHQ0s7NztDQ0M\/P0OHg4tHR0tLS08\/Pz7m5uNfV183MzdXV1djY2eno6qurqtnZ2dHP0r28vODg4dbW18fGyMzLzNfX2MvKysXExtTT1M\/Oz8HAwcLCw87Oz769vfHw8uPi5O\/u8NrZ29bV1qmpp9bV1dzb3KampaOjouzr7NbW1uXl5snIyb++vu7t7t7e366urc\/P0bOysvX09ra2tru6unx5e2UAAADEdFJOUwD76wQqEgECCxHCNvoGBQ7rKMW4CTUj+QElIOj62KzlCvW3NAg\/trgP98XqwbmAgjTpOxP5BvOP6fk2C40dYPdi6+u49\/mo\/pbpvGnp5qy96raIubro3zGy6\/YjLNEMm7KTxecZ0851afubF0LFNrjsIeu+4pzyyo2sOXlEtetJbYOi6xNl6hTogXep8FhMlXnkur2BIN+q6mD4efLqE9czMfefmJLQrWS7q\/n4umdT7dyTw17gmeLGzdrhnLeUzuraAQF3\/egxAAAH00lEQVRo3r2ad2ATVRzHXw0lgtDKEAIyAhYpAorFFCsyRaYgIFKgLBkKAgIyFBDZG2XvJUPcey\/8I5e73PWS0qSU0ZGkLW2TSoEuKPCHv\/cuaZM0uWbc9cuVpsmFD5\/f7713d7kiFFyit587d0SL5M2mnY3a\/NVDXoamXURJSeZ+eSHzzudX3CjdIW+9Wi0tuWbKWdJYVki99gVWpmxJc3khw5J5+nrTh2WFNMGQK017y27Cyg55KJnXXZG5XPUeulo3ELYOIEz4kOhIRbg90czTiDMWv71v94HwyjW\/10\/rpoq8rp03OP7e1i86hVEu7abzJ7I2rxP7X2yKuFdecHv8xyGbaLbvzDfb9JMmi6m2LC+wW43jPwpxCEdtAwart\/yyRQQy9cs0u9VK6f26AITybxKzfXl+Ostaio8pRdemKTesBp7y6yLaE8225fl2mrMUjdoiOroUcW+mG3igzOwbNEQ9dnm+mWKB0aKWeaKIa2vm\/VNEGh8zNj4\/nWIzisa1qPXAGRX3ptnAM5TeJwUmo5+exLwfX2im6FLwUNU+56Pi2maBi9HYtW8Q5QKPQjPNZlwa10IZyMoS1altloG\/rPPl4g+CPdIpGjMCPMmI+oC4sD5cBMhT3hA1qVXgHmQsdmoLY4xh9TP7+2y8N4T0gwmO4XJhwKW\/qgaEu+4FUffqUIjH1aXXgmEg1BhcgGL0dvFVrhhgBFsrNxfqslHfdUR98XJhDzNNB+3hHGNmmC6cpwtZuzzKpXZ5hMAQRjLPMNhF67VAukHUFzqUZ8GaGBqDUKAvlz1cvE3AoxyvV6EyXC6kLyo3iNvoUr8BDJbUKuQT\/ahOs8EF+lJVMTK6qiDYIwt7jAnVo8qFwn2Zo6oJwR5Z2GNMi7AuWKLiwIUhLtVD+PoMAom5IIWH5xjrq6qa8QSiHgv9oImHCoWZKpeZuGL1hl1lADIV1yoePHTg0UeJwo5CmJVG\/fP9BQhbBhDwKDSzpFYqJEGwC8PDSH5+jmBS9p4m5kK8MD+mS+FBXN7BZxc6zrh5DkAogPQUep57aUcfFUJSUWbbGYoy2jb\/OBrP+H\/PdnB5SHixDS52A6zJeV81qqC4lEFnwIO2SOlBKJ9MSWeg+1xyBcU+sBfi+XFHUg8nxUxROhtvZzhLAcwPXKtgPKKicRrUTKR75v9wm+d1rIHX6\/HaXrTk9MaNJ0\/2FOK2X\/Xb8b+qFi4o5o9dPwHypFuauaVzs844HTvuW1oC65iOY\/LuMlCrO6f+Wbhw4UvOCLt2du4KWd1xNc6EQ2d310No24n4M881grR0pQ0kAW8JQtq0EZ5PSCsACksZKTaz1GpPPnr0ZZIE97h2diXh6KLxa9DS8rRku9mchXMRf+Fcc8b5wPWEw2Rg4DBG6xirwyHsB5vjGn7kcMBWIyZDdk7lNDQaGHCOxcDKwdDki6HhuxAab\/AHbzj4CYY8x8IP5HX8SvXfwqOqsGxqbkrRKLSw5Oo1Lk8fQFJLs\/NogmDzsrMzU\/WpED3eyKNU1ze3ZGaW5twfsha1Xrfg1EicZ10Z6MyAgQMgH0I2bHgXcjzXccNKsSBx12ipLD58eOLEiY\/CViOvkLyOs2fPe9PX9kYqTWxSYmJiD5LH3POCZ9ZMyU9zQM8ZWx6jg+E1auUjPvOEWxITJyf1Fj6B0yoDiPpQxC0Hy+Ya+TwLVN6YcfytQN6mDGbCRq+PuGWi2JwHdsr4IMMAlOxJb6mkXVWi345IM9FsblFpBcNVFrE8RXFAUUrKGBwB\/eByi2csggXy\/sE\/8AUfuKxSSupxywEel5bFbYXjSUrDHgusUDGuVEIXwQNqtSy2CUC4lIaNkxZYYR0zZg+SyiUSGLjnxZ\/GoiaPE5Pm2qS9VtL9QU8rpPQoXgZnWwBhwKQ50iZ1MzG4+5JQnB652INAKAJB2tZ7TTxNYxelFB5WzJhGTk1d5cJTuHU3ExwrJXCJbAe1ojEjFnlBMOU\/HvelS3gu0e2Ent90MjwgSAEuwhgLxyVSYORWMUjjdS4Ipjgo3P0wXBoAwwq1ujm06mNzDxOhLzx1F1dMEboHMHJuDo1FfiCYcpusY12eUYbsgfsx1O2CunoIu7vQuhBdfHn4gDhddFxmCC7VDI+POGpCkKp1d+gLZYOKKUJgUN4ePiHg0h1cOGOwLpG++uEPgl3+g77YMoNymedkDHkxFgUAqXbpFzjFOT+AUeNjQN8QhHBfgnJxrom+GKhJe+dS730fYFb32wycj4FLQH1psB7WEgYzfNweA4jHZPTqC2XL7LdKEYyHr1twGOLLBKH64ELRxoD6gs99\/DNEIAjNgr7odEAZUUvFNBcExtwXfd959dd4oS8rTAzNQfc\/F4d81wGPq7K5x\/zc3cVLPesHAi4rTDzLpVpGit2jQepvbjl4\/x4ItRIpF2TjCuvd1Iwr9\/eLXRb3XASX6zlz1\/rdR4AM93erXDt1l6H0SmXxKLHeK498fdHy\/bf+d6gFgrSaXf0eFB1cKd6U\/guWnUaiEFoMAlnz2ZKVtY1h8ZuhtZmQI3+4vxLQaimGvCrvry8AhK4LCGWrCxNbLT2RAJKMy6WoC4i8JosJZLhCZshVNi9luFJWyIE\/K\/Sp94fLykDq329kWO78LS8E\/Woquz7kZ5kh7\/xWeafpFpkhqM\/kybHBvud\/1hvMFvB\/+GMAAAAASUVORK5CYII="],"maxSize":30,"launches":"1"}},"garland":{"init":false,"options":{"type":"pear","style":"style1"}},"fireworks":{"init":false,"options":{"delay":{"max":50,"min":40},"friction":0.97}}})
newYearEvent.start()
});
              </script>
    <script>
/*$(document).ready(function() {
    $(window).on("contextmenu",function(e){
       return false;
    }); 
}); 
 document.onkeydown = function (e) {
    e = e || window.event;
    if (e.ctrlKey) {
        var c = e.which || e.keyCode;
        switch (c) {
            case 83://Block Ctrl+S
            case 87://Block Ctrl+W
            case 73://Block Ctrl+I
            case 67: //Block Ctrl+C
                e.preventDefault();     
                e.stopPropagation();
            break;
        }
    }
};*/
</script>  
<script type="text/javascript">
    localStorage.clear();
</script>  


  
<iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;"></iframe><div id="GOOGLE_INPUT_CHEXT_FLAG" style="display: none;" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}"></div><div class="crisp-client" aria-live="polite" translate="no" tabindex="-1" lang="en" dir="ltr" style="--crisp-color-theme-10: 240, 242, 245; --crisp-color-theme-20: 246, 244, 237; --crisp-color-theme-100: 167, 178, 233; --crisp-color-theme-200: 4, 40, 218; --crisp-color-theme-300: 4, 40, 216; --crisp-color-theme-400: 4, 39, 212; --crisp-color-theme-500: 4, 36, 193; --crisp-color-theme-600: 3, 30, 164; --crisp-color-theme-700: 3, 27, 144; --crisp-color-theme-800: 2, 23, 125; --crisp-color-theme-900: 2, 18, 96; --crisp-color-theme-reverse: 255, 255, 255;"><div class="cc-1lkve"></div><div class="cc-yv368" id="crisp-chatbox" data-hidden="false" data-force-show="false" data-color-mode="light" data-availability="away" data-lock-maximized="false" data-website-logo="false" data-last-operator-face="false" data-ongoing-operator-face="false" data-availability-tooltip="false" data-hide-vacation="false" data-blocked="false" data-mobile-view="false" data-full-view="false" data-small-view="true" data-large-view="false" data-has-local-messages="false" data-was-availability-online="false" data-is-activity-ongoing="false" data-hide-on-away="false" data-hide-on-mobile="false" data-position-reverse="false"><div class="cc-1kr6o cc-cxjxh cc-jx6a3"><div class="cc-18ov6" data-maximized="false" data-is-failure="false" role="button" tabindex="0" aria-label="Open chat" data-pane-animate-entrance="false" data-pop="minimized:open"><span class="cc-1442g"><!--v-if--></span><span class="cc-1qbp0 cc-1o31k"><span class="cc-otlyh" data-id="chat_closed" data-is-ongoing="false"><span class="cc-11f3x cc-16kzz" data-partial-pending="false"><!--v-if--></span></span></span></div></div></div><div class="cc-yv368 cc-vx6i0"></div><div class="cc-yv368 cc-1tx1r"></div><div class="cc-yv368 cc-jcxto" data-color-mode="light"></div></div></body>

