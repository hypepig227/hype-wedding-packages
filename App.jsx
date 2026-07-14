import { useState } from "react";

const PHOTOGRAPHERS = {
  jeju: [
    {
      id: "jeju-1",
      number: "#1",
      name: "Jeju and You",
      instagram: "@jejuandyou_snap",
      subPhotographers: [
        {
          id: "jeju-1-1",
          number: "#1-1",
          name: "Main Director",
          instagram: "@jejuandyou_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "Jeju and You Main & Nervi",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Dansum", instagram: "@dansum_makeup" },
                dress: { name: "Nervi", instagram: "@nervi___" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2690,
              priceNoSNS: 2830,
              addons: [
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "4K Videography (Drone included)", price: null, desc: "Agree to SNS Upload: USD 299 / Decline: USD 426. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: USD 43." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Jeju and You Main & Deibe",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2700,
              priceNoSNS: 2835,
              addons: [
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "4K Videography (Drone included)", price: null, desc: "Agree to SNS Upload: USD 299 / Decline: USD 426. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: USD 43." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Jeju and You Main & Ettera",
              partners: {
                photographer: { name: "Main Director", instagram: "@jejuandyou_snap" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Ettera / Marshallbride", instagram: "@ettera_official / @marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2835,
              priceNoSNS: 2975,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "4K Videography (Drone included)", price: null, desc: "Agree to SNS Upload: USD 299 / Decline: USD 426. Includes 2-3 min 4K pre-wedding video + 30-40 sec Full HD vertical video. Original video footage: USD 43." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
          ],
        },
        {
          id: "jeju-1-2",
          number: "#1-2",
          name: "Director Ura",
          instagram: "@jejuandyou_ura",
          packages: [
            {
              name: "Package A",
              subtitle: "Jeju and You Ura & Nervi",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Dansum", instagram: "@dansum_makeup" },
                dress: { name: "Nervi", instagram: "@nervi___" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2415,
              priceNoSNS: 2555,
              addons: [
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Jeju and You Ura & Deibe",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2425,
              priceNoSNS: 2560,
              addons: [
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Jeju and You Ura & Ettera",
              partners: {
                photographer: { name: "Jeju and You Ura", instagram: "@jejuandyou_ura" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Ettera / Marshallbride", instagram: "@ettera_official / @marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "800+",
              retouched: 40,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) + Color Correction: 15",
              priceSNS: 2560,
              priceNoSNS: 2700,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "4K Cinematic Drone Shooting", price: 87, desc: "Weather permitting, 20-30 sec video. Note: Ocean areas are often restricted for drone flights; most shoots will be conducted in open fields." },
                { name: "Studio Photography Addition", price: 291, desc: "Includes Studio Rental, additional fee of stylist accompaniment. 2 hours of studio photography before outdoor shooting. Additional 5 retouched images. Additional interpreter and transportation fees apply for time extension." },
                { name: "Two(2) Photographer Option", price: 340, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images." },
                { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 7-10 days from photo selection date." },
                { name: "Additional Retouching", price: 16, desc: "Per photo, up to 5 images." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-2",
      number: "#2",
      name: "Jeju Ohu",
      instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal",
      packages: [
        {
          name: "Package A",
          subtitle: "Jeju Ohu & OVE",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "OVE", instagram: "@ove.makeup" },
            dress: { name: "OVE", instagram: "@ove.makeup" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,800+",
          retouched: 30,
          retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
          priceSNS: 2350,
          priceNoSNS: 2440,
          addons: [
            { name: "4K Videography (Drone included)", price: 426, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 426, desc: "Weather permitting. Includes color correction images + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 426, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images (Photographer Selected)." },
            { name: "Studio Photography Add-on", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: USD 5/person/hour. Option 1: Ledio Studio (up to 6 ppl) USD 95 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room USD 95 / B-room USD 95 / Entire USD 150 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day USD 95 / Night USD 75 / Entire USD 150 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 17, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 170 / 30P: USD 187 / 40P: USD 204. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Jeju Ohu & Makeup Muto",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
            dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,800+",
          retouched: 30,
          retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
          priceSNS: 2415,
          priceNoSNS: 2505,
          addons: [
            { name: "4K Videography (Drone included)", price: 426, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 426, desc: "Weather permitting. Includes color correction images + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 426, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images (Photographer Selected)." },
            { name: "Studio Photography Add-on", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: USD 5/person/hour. Option 1: Ledio Studio (up to 6 ppl) USD 95 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room USD 95 / B-room USD 95 / Entire USD 150 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day USD 95 / Night USD 75 / Entire USD 150 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 17, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 170 / 30P: USD 187 / 40P: USD 204. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package C",
          subtitle: "Jeju Ohu & Jeju You 1",
          partners: {
            photographer: { name: "Jeju Ohu (Randomly Assigned)", instagram: "@jejuohu_haru / @jejuohu_oneul / @ohujeju_owal" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 - 5 hours",
          locations: "4 sites",
          originalPhotos: "1,800+",
          retouched: 30,
          retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
          priceSNS: 2465,
          priceNoSNS: 2555,
          addons: [
            { name: "4K Videography (Drone included)", price: 426, desc: "Weather permitting. 2 min 4K pre-wedding video + 10 sec drone clip (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: Original video footage NOT provided." },
            { name: "Film Photography (Drone included)", price: 426, desc: "Weather permitting. Includes color correction images + 4K drone video approx. 20 sec (with BGM) + Portrait highlight video for SNS. Final video delivered within 6 weeks. Note: First 30 teams: FREE." },
            { name: "Two(2) Photographer Option", price: 426, desc: "Two photographers working simultaneously for different perspectives. Additional 10 retouched images (Photographer Selected)." },
            { name: "Studio Photography Add-on", price: null, desc: "2 hours of studio photography. Replaces one outdoor location. One outfit only (no outfit change). Additional guests: USD 5/person/hour. Option 1: Ledio Studio (up to 6 ppl) USD 95 (@ledio_studio). Option 2: Donghwaro5 Studio (up to 5 ppl) A-room USD 95 / B-room USD 95 / Entire USD 150 (@donghwaro5). Option 3: Inourdays Studio (up to 4 ppl) Day USD 95 / Night USD 75 / Entire USD 150 (@inourdays_studio)." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Additional Companion Shooting", price: 17, desc: "Per photo. When adding 2 or more people." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 170 / 30P: USD 187 / 40P: USD 204. Size: 14x11 inch Album + Leather Pouch. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-3",
      number: "#3",
      name: "Greemy Snap",
      instagram: "@greemysnap",
      packages: [
        {
          name: "Package A",
          subtitle: "Greemy Snap & K Salon",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "K Salon", instagram: "@why__brush / @k__salon" },
            dress: { name: "K Salon", instagram: "@k__salon_dress" },
            suit: { name: "K Salon / He Spoke Suit", instagram: "@k__salon / @hespokesuit" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,500 - 2,500",
          retouched: 60,
          retouchedDetail: "Detailed Retouched: 30 + Color Correction: 30 *Special Offer: All 60 photos in 3 color tones (Natural / Film / B&W)",
          priceSNS: 2285,
          priceNoSNS: 2375,
          addons: [
            { name: "4K Videography (Drone included)", price: 340, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 128, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched images." },
            { name: "Studio Photography Addition", price: 255, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 170, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: USD 5 per photo. Color correction: USD 3 per photo." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Greemy Snap & Makeup Muto",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
            dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,500 - 2,500",
          retouched: 60,
          retouchedDetail: "Detailed Retouched: 30 + Color Correction: 30 *Special Offer: All 60 photos in 3 color tones (Natural / Film / B&W)",
          priceSNS: 2415,
          priceNoSNS: 2505,
          addons: [
            { name: "4K Videography (Drone included)", price: 340, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 128, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched images." },
            { name: "Studio Photography Addition", price: 255, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 170, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: USD 5 per photo. Color correction: USD 3 per photo." },
          ],
        },
        {
          name: "Package C",
          subtitle: "Greemy Snap & Deibe",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Deibe", instagram: "@deibe_jeju" },
            dress: { name: "Deibe", instagram: "@deibe_jeju" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,500 - 2,500",
          retouched: 60,
          retouchedDetail: "Detailed Retouched: 30 + Color Correction: 30 *Special Offer: All 60 photos in 3 color tones (Natural / Film / B&W)",
          priceSNS: 2430,
          priceNoSNS: 2520,
          addons: [
            { name: "4K Videography (Drone included)", price: 340, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 128, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched images." },
            { name: "Studio Photography Addition", price: 255, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 170, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: USD 5 per photo. Color correction: USD 3 per photo." },
          ],
        },
        {
          name: "Package D",
          subtitle: "Greemy Snap & Jeju You 1",
          partners: {
            photographer: { name: "Greemy Snap", instagram: "@greemysnap" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Footage (1 Clip, 30s-1m)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,500 - 2,500",
          retouched: 60,
          retouchedDetail: "Detailed Retouched: 30 + Color Correction: 30 *Special Offer: All 60 photos in 3 color tones (Natural / Film / B&W)",
          priceSNS: 2465,
          priceNoSNS: 2555,
          addons: [
            { name: "4K Videography (Drone included)", price: 340, desc: "Approx. 3 min music video format (with BGM). Natural direction + emotional scene-focused. Cinematic & Candid feel. Drone shooting weather permitting." },
            { name: "Two(2) Photographer Option", price: 128, desc: "Additional Photographer (@greemy_ellie). Two photographers working simultaneously for different perspectives. Additional 10 detailed retouched images." },
            { name: "Studio Photography Addition", price: 255, desc: "Includes Studio Rental. Additional shooting time approx. 1.5 hours. Additional stylist accompaniment, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Additional Shooting Time and Location", price: 170, desc: "Add shooting time or an additional location. Additional stylist accompaniment fees apply for time extension." },
            { name: "Additional Retouching Service", price: null, desc: "Detailed retouching: USD 5 per photo. Color correction: USD 3 per photo." },
          ],
        },
      ],
    },
    {
      id: "jeju-4",
      number: "#4",
      name: "Rosemarry Snap",
      instagram: "@rosemarry_snap",
      subPhotographers: [
        {
          id: "jeju-4-1",
          number: "#4-1",
          name: "Solo (Photo Only)",
          instagram: "@rosemarry_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "Rosemarry Snap & K Salon",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "K Salon", instagram: "@k__salon" },
                dress: { name: "K Salon", instagram: "@k__salon_dress" },
                suit: { name: "He Spoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 2375,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Rosemarry Snap & Deibe",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 2520,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Rosemarry Snap & Jeju You 1",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 2555,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package D",
              subtitle: "Rosemarry Snap & Opus & Marshallbride",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Marshallbride", instagram: "@marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 2650,
              priceNoSNS: null,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-4-2",
          number: "#4-2",
          name: "Photo + Cinema",
          instagram: "@rosemarry_snap",
          packages: [
            {
              name: "Package B",
              subtitle: "Rosemarry & Han Scene, K Salon",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                dress: { name: "K Salon", instagram: "@k__salon_dress" },
                suit: { name: "He Spoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Videography (3-4 min video + 15-30 sec highlight)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 3095,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Rosemarry & Han Scene, Deibe",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Deibe", instagram: "@deibe_jeju" },
                dress: { name: "Deibe", instagram: "@deibe_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Videography (3-4 min video + 15-30 sec highlight)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 3235,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package D",
              subtitle: "Rosemarry & Han Scene, Jeju You 1",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Videography (3-4 min video + 15-30 sec highlight)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 3270,
              priceNoSNS: null,
              addons: [
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
            {
              name: "Package E",
              subtitle: "Rosemarry & Han Scene, Opus & Marshallbride",
              partners: {
                photographer: { name: "Rosemarry Snap", instagram: "@rosemarry_snap" },
                videographer: { name: "Han Scene", instagram: "@han.scene" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Marshallbride", instagram: "@marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Videography (3-4 min video + 15-30 sec highlight)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "3-4 sites",
              originalPhotos: "1,500+",
              retouched: 25,
              retouchedDetail: "Detailed Retouched: 25 (Customer Selected) *Special Offer: All 25 photos in 2 color tones (Natural / B&W)",
              priceSNS: 3370,
              priceNoSNS: null,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "Film Photography", price: 128, desc: "2 rolls of Film included. Inclusive Printing & Scanning service fee." },
                { name: "Additional Shooting Time and Location", price: 128, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply for time extension. Available upon booking." },
                { name: "Studio Photography Addition", price: 85, desc: "Includes Studio Rental. 2 hours of studio photography before outdoor shooting. Additional stylist accompaniment, interpreter and transportation fees apply for time extension. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
                { name: "Premium Leather Album", price: null, desc: "30 Pages: USD 170. Size: 10x14 inch Album + Leather Cover. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
                { name: "Express Retouching Service", price: 124, desc: "Completed within 7-10 days from photo selection date." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-5",
      number: "#5",
      name: "Indigo Bridge",
      instagram: "@indigo_bridge_snap",
      packages: [
        {
          name: "Package A",
          subtitle: "Indigo Bridge & Jeju You 1",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
            dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
            suit: { name: "Fotton Garment", instagram: "@fotton.jeju" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "2,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 images (Detailed Retouched + Color Correction)",
          priceSNS: 2750,
          priceNoSNS: 2840,
          addons: [
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 170, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: USD 47." },
            { name: "Studio Photography Addition", price: 239, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched images. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 128, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: USD 9/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: USD 41 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: USD 9/photo (no limit, includes retouched + color correction). Color Correction only: USD 5/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 187, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 137 / 25P: USD 145 / 30P: USD 171. Size: 15x12 inch Album + Leather Pouch. Additional pages: USD 4/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Indigo Bridge & K Salon",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@k__salon_dress" },
            suit: { name: "He Spoke Suit", instagram: "@hespokesuit_official" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "2,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 images (Detailed Retouched + Color Correction)",
          priceSNS: 2565,
          priceNoSNS: 2650,
          addons: [
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 170, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: USD 47." },
            { name: "Studio Photography Addition", price: 239, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched images. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 128, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: USD 9/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: USD 41 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: USD 9/photo (no limit, includes retouched + color correction). Color Correction only: USD 5/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 187, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 137 / 25P: USD 145 / 30P: USD 171. Size: 15x12 inch Album + Leather Pouch. Additional pages: USD 4/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
        {
          name: "Package C",
          subtitle: "Indigo Bridge & Dansum & Nervi",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
            hmu: { name: "Dansum", instagram: "@dansum_makeup" },
            dress: { name: "Nervi", instagram: "@nervi___" },
            suit: { name: "Atle Jeju", instagram: "@atlejeju_tuxedo" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Cinematic Drone Shooting (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "2,000+",
          retouched: 20,
          retouchedDetail: "Customer Selected: 20 images (Detailed Retouched + Color Correction)",
          priceSNS: 2705,
          priceNoSNS: 2795,
          addons: [
            { name: "Dress Line Upgrade", price: null, desc: "Additional charges apply depending on the dress line at Nervi." },
            { name: "Pre-Wedding 4K Cinematic Drone Shooting", price: 170, desc: "Weather permitting. 1-2 min landscape video (Full HD or 4K). Logo positioned at bottom. Original drone footage: USD 47." },
            { name: "Studio Photography Addition", price: 239, desc: "Studio Rental fee NOT included. 1 hr session before outdoor shooting. Additional 5 detailed retouched images. Additional stylist, interpreter and transportation fees apply. Note: Props such as confetti must be prepared by the couple with advanced notification to Hype Wedding." },
            { name: "Camping Concept Photography", price: 128, desc: "Setup using photographer's personal equipment. Approx. 15 min additional time (tent setup not possible). Can only proceed in forest. Weather permitting." },
            { name: "Express Retouching Service", price: null, desc: "Photos: USD 9/photo (min 1, max 20). Completed within 2 weeks from photo selection date. Drone Video: USD 41 (completed 1-2 weeks before wedding)." },
            { name: "Additional Retouched or Color Correction", price: null, desc: "Detailed Retouched: USD 9/photo (no limit, includes retouched + color correction). Color Correction only: USD 5/photo (min 5 photos, 5-7 days processing)." },
            { name: "Additional Shooting Time and Location", price: 187, desc: "Based on 1 hour and 1 location. Additional stylist accompaniment fees apply. Available upon booking." },
            { name: "Premium Leather Album", price: null, desc: "20P: USD 137 / 25P: USD 145 / 30P: USD 171. Size: 15x12 inch Album + Leather Pouch. Additional pages: USD 4/page. Production: approx. 2 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-6",
      number: "#6",
      name: "About Mood Jeju",
      instagram: "@_aboutmood",
      packages: [
        {
          name: "Package A",
          subtitle: "About Mood Jeju & Bridal Hwang",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            dress: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            suit: { name: "The Beautiful Bespoke", instagram: "@beautiful_bespoke_jeju" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "4,000+",
          retouched: 30,
          retouchedDetail: "Client-Selected: 25 + Photographer-Selected: 5",
          priceSNS: 2355,
          priceNoSNS: 2445,
          addons: [
            { name: "Videography - Younangman", price: 588, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 511, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. USD 98: Replaces one outdoor location. USD 230: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 128, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 9, desc: "Per photo." },
          ],
        },
        {
          name: "Package B",
          subtitle: "About Mood Jeju & Deibe",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Deibe", instagram: "@deibe_jeju" },
            dress: { name: "Deibe", instagram: "@deibe_jeju" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "4,000+",
          retouched: 30,
          retouchedDetail: "Client-Selected: 25 + Photographer-Selected: 5",
          priceSNS: 2430,
          priceNoSNS: 2520,
          addons: [
            { name: "Videography - Younangman", price: 588, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 511, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. USD 98: Replaces one outdoor location. USD 230: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 128, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 9, desc: "Per photo." },
          ],
        },
        {
          name: "Package C",
          subtitle: "About Mood Jeju & Audrey Tailor",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            dress: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            suit: { name: "Audrey Tailor", instagram: "@audreytailor_jejuwedding" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "4,000+",
          retouched: 30,
          retouchedDetail: "Client-Selected: 25 + Photographer-Selected: 5",
          priceSNS: 2530,
          priceNoSNS: 2615,
          addons: [
            { name: "Videography - Younangman", price: 588, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 511, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. USD 98: Replaces one outdoor location. USD 230: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 128, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 9, desc: "Per photo." },
          ],
        },
        {
          name: "Package D",
          subtitle: "About Mood Jeju & Opus & Marshallbride",
          partners: {
            photographer: { name: "About Mood Jeju", instagram: "@_aboutmood" },
            hmu: { name: "Opus", instagram: "@opus_w" },
            dress: { name: "Marshallbride", instagram: "@marshallbride_jeju" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours",
          locations: "3 sites",
          originalPhotos: "4,000+",
          retouched: 30,
          retouchedDetail: "Client-Selected: 25 + Photographer-Selected: 5",
          priceSNS: 2645,
          priceNoSNS: 2735,
          addons: [
            { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
            { name: "Videography - Younangman", price: 588, desc: "Female videographer (@you__nangman). 4K cinematic highlight film (approx. 3 min). No time limit on filming, accompanies entire photoshoot. 10-15 sec vertical SNS reel video included." },
            { name: "Videography - Cine Mouve", price: 511, desc: "Videographer (@cine_mauve). Main cinematic video (approx. 3 min). 4K highlight video 20-30 sec. Drone footage subject to weather and airspace regulations. Accompanies entire photoshoot." },
            { name: "Studio Photography Addition", price: null, desc: "Studio: flat301studio (@flat301studio.kr). Includes rental for 2 hours. USD 98: Replaces one outdoor location. USD 230: Added to all 3 outdoor locations (includes 2 hrs stylist + car + interpreter). Inclusive props: faux cake, artificial bouquets, wine glasses, tableware, Bluetooth speaker, hair tools." },
            { name: "Express Retouching Service", price: 128, desc: "Completed within 2 weeks from photo selection date. One (1) re-edit available." },
            { name: "Additional Retouched Photo", price: 9, desc: "Per photo." },
          ],
        },
      ],
    },
    {
      id: "jeju-7",
      number: "#7",
      name: "Shutterpresso",
      instagram: "@shutterpresso_official",
      subPhotographers: [
        {
          id: "jeju-7-1",
          number: "#7-1",
          name: "Main Director",
          instagram: "@sungjoo_son",
          packages: [
            {
              name: "Package A",
              subtitle: "Shutterpresso Main & Makeup Muto",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3040, priceNoSNS: 3130,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Shutterpresso Main & By Moon",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3050, priceNoSNS: 3140,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Shutterpresso Main & Command U",
              partners: {
                photographer: { name: "Main Director", instagram: "@sungjoo_son" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 3080, priceNoSNS: 3170,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
        {
          id: "jeju-7-2",
          number: "#7-2",
          name: "Max & Grey & Jeffery",
          instagram: "@max_moumzip / @_greytic / @ryu.jeffery",
          packages: [
            {
              name: "Package A",
              subtitle: "Max/Grey/Jeffery & Makeup Muto",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2685, priceNoSNS: 2775,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Max/Grey/Jeffery & By Moon",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2690, priceNoSNS: 2780,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Max/Grey/Jeffery & Command U",
              partners: {
                photographer: { name: "Randomly Assigned (Max/Grey/Jeffery)", instagram: "@max_moumzip / @_greytic / @ryu.jeffery" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2725, priceNoSNS: 2815,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
        {
          id: "jeju-7-3",
          number: "#7-3",
          name: "Leo & Joel",
          instagram: "@shutterpresso_leo / @joel.jk__",
          packages: [
            {
              name: "Package A",
              subtitle: "Leo/Joel & Makeup Muto",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "Makeup Muto", instagram: "@makeupmuto" },
                dress: { name: "Makeup Muto", instagram: "@makeupmuto" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2595, priceNoSNS: 2685,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Leo/Joel & By Moon",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "By Moon", instagram: "@by_moon_artist_moon" },
                dress: { name: "By Moon", instagram: "@by_moon_dress" },
                suit: { name: "Browntail Suit", instagram: "@browntail_jeju_suit" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 White Heel (KR 44~77, Heel 220~255cm)","2 Suits (Shirt and shoes NOT included, Top 95~120 / Bottom 28~39in)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2600, priceNoSNS: 2690,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Leo/Joel & Command U",
              partners: {
                photographer: { name: "Randomly Assigned (Leo/Joel)", instagram: "@shutterpresso_leo / @joel.jk__" },
                hmu: { name: "Command U", instagram: "@commandu_jeju" },
                dress: { name: "Command U", instagram: "@commandu_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Drone Photography (20-30 sec video)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours", locations: "3-4 sites", originalPhotos: "1,500+", retouched: 40,
              retouchedDetail: "Customer Selected: 20 + Photographer Selected: 20",
              priceSNS: 2635, priceNoSNS: 2725,
              addons: [
                { name: "Two(2) Photographer Option", price: 255, desc: "Additional 600 original photos. Two photographers working simultaneously for different perspectives." },
                { name: "Additional Videographer Option", price: 426, desc: "Original video footage + detailed retouched pre-wedding video 3-4 min + portrait highlight video for SNS 1 min." },
                { name: "Studio Photography Addition", price: 239, desc: "Studio rental included. First-come, first-served (2 teams/day max). Replaces 1 outdoor location; 3 concepts possible." },
                { name: "Photographer Assignment/Change Fee", price: 85, desc: "If not specified, photographer randomly assigned. Additional charge for change after initial assignment (personal reasons)." },
                { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
                { name: "Express Retouching Service", price: 85, desc: "All retouched photos completed within 2 weeks from photo selection date." },
                { name: "Additional Shooting Time", price: 213, desc: "Based on 1 hour. Additional stylist accompaniment fees apply. Available upon booking." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-8",
      number: "#8",
      name: "Jeju AJ Snap",
      instagram: "@jeju_aj_snap",
      packages: [
        {
          name: "Package",
          subtitle: "Jeju AJ Snap & Bridal Hwang",
          partners: {
            photographer: { name: "Jeju AJ Snap", instagram: "@jeju_aj_snap" },
            hmu: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            dress: { name: "Bridal Hwang", instagram: "@jeju.bridalhwang_official" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included, Basic Label)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Studio Session (1 Studio + 2 Outdoor or 3 Outdoor, +5 retouched)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours",
          locations: "3 sites",
          originalPhotos: "1,500+",
          retouched: 25,
          retouchedDetail: "Outdoor: 20 (Customer Selected) + Studio: 5 (Customer Selected)",
          priceSNS: 2490,
          priceNoSNS: 2580,
          addons: [
            { name: "Bridal Hwang Dress Upgrade (Premium Label)", price: null, desc: "Basic Label: No extra charge. Premium Label: Additional USD 255 to USD 2,980 per dress. Pay on-site or in USD to Hype Wedding after fitting." },
            { name: "4K Videography", price: null, desc: "Weather permitting. Price TBD based on client selection. Choose 1 of 3 videographers: @_harufilm_jeju / @studio.cachito / @oou.rin. Delivered via email." },
            { name: "Premium Leather Album", price: 255, desc: "30 Pages. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
          ],
        },
      ],
    },
    {
      id: "jeju-9",
      number: "#9",
      name: "Yeongrami",
      instagram: "@yeongrami_snap",
      subPhotographers: [
        {
          id: "jeju-9-1",
          number: "#9-1",
          name: "Main Director",
          instagram: "@yeongrami_snap",
          packages: [
            {
              name: "Package A",
              subtitle: "Yeongrami Main & Jeju You 1",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2735,
              priceNoSNS: 2910,
              addons: [
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Yeongrami Main & OVE",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "OVE", instagram: "@ove.makeup" },
                dress: { name: "OVE", instagram: "@ove.makeup" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2805,
              priceNoSNS: 2985,
              addons: [
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Yeongrami Main & Opus & Marshallbride",
              partners: {
                photographer: { name: "Main Director", instagram: "@yeongrami_snap" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Marshallbride", instagram: "@marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2830,
              priceNoSNS: 3010,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
          ],
        },
        {
          id: "jeju-9-2",
          number: "#9-2",
          name: "Director Danii",
          instagram: "@yeongrami_danii",
          packages: [
            {
              name: "Package A",
              subtitle: "Yeongrami Danii & Jeju You 1",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "Jeju You 1", instagram: "@jeju_you1_hair_makeup" },
                dress: { name: "Jeju You 1", instagram: "@jeju_you1_dress" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2500,
              priceNoSNS: 2690,
              addons: [
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package B",
              subtitle: "Yeongrami Danii & OVE",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "OVE", instagram: "@ove.makeup" },
                dress: { name: "OVE", instagram: "@ove.makeup" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2580,
              priceNoSNS: 2760,
              addons: [
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
            {
              name: "Package C",
              subtitle: "Yeongrami Danii & Opus & Marshallbride",
              partners: {
                photographer: { name: "Director Danii", instagram: "@yeongrami_danii" },
                hmu: { name: "Opus", instagram: "@opus_w" },
                dress: { name: "Marshallbride", instagram: "@marshallbride_jeju" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 sites",
              originalPhotos: "900",
              retouched: 30,
              retouchedDetail: "Detailed Retouched: 30 (Customer Selected)",
              priceSNS: 2605,
              priceNoSNS: 2785,
              addons: [
                { name: "Opus Dress Upgrade (White/Black Label)", price: 217, desc: "Per dress. Basic Label: No extra charge. White/Black Label dresses can be paid on-site by credit card." },
                { name: "Additional Retouched Photo", price: 85, desc: "Maximum 10 photos available." },
                { name: "Film-Like Edited Photos", price: 255, desc: "Reference: @yeongrami_filmlike. 1 additional sub-photographer. Original photos: 30 images. Detailed retouched: 10 images." },
                { name: "Videography (Spinoff)", price: 510, desc: "Videographer: @__spin.off. Weather permitting. 4K cinematic video approx. 2 min + highlight video approx. 30 sec (landscape or portrait). Delivered within 12 weeks. Optional: Original footage USD 86 / Portrait SNS highlight USD 43." },
                { name: "Premium Leather Album", price: 128, desc: "20 Pages. Size: 14x11 inch Album + Album Box. Production: approx. 3 weeks. Shipped directly to customer. All shipping costs are the customer's responsibility." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jeju-10",
      number: "#10",
      name: "Jeju Fairytale",
      instagram: "@jeju_fairytale",
      subPhotographers: [
        {
          id: "jeju-10-1",
          number: "#10-1",
          name: "Simple Premium",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Cheongdam Jimin",
              subtitle: "Simple Premium & Cheongdam Jimin",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                dress: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 outdoor venues",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 2585,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Stylist Jehee",
              subtitle: "Simple Premium & Stylist Jehee",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "4 hours",
              locations: "3 outdoor venues",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 2450,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-10-2",
          number: "#10-2",
          name: "All Day Fairytale",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Cheongdam Jimin",
              subtitle: "All Day Fairytale & Cheongdam Jimin",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                dress: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 outdoor venues",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 2780,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Stylist Jehee",
              subtitle: "All Day Fairytale & Stylist Jehee",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor Photography Session","Hair & Makeup for Bride and Groom","3 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "5 hours",
              locations: "4 outdoor venues",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 2845,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
        {
          id: "jeju-10-3",
          number: "#10-3",
          name: "All Day Studio",
          instagram: "@jeju_fairytale",
          packages: [
            {
              name: "Cheongdam Jimin",
              subtitle: "All Day Studio & Cheongdam Jimin",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                dress: { name: "Cheongdam Jimin", instagram: "@cheongdam_jimin" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor + Studio Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "6 hours",
              locations: "1 Studio + 3 Outdoor",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 3125,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
            {
              name: "Stylist Jehee",
              subtitle: "All Day Studio & Stylist Jehee",
              partners: {
                photographer: { name: "Jeju Fairytale", instagram: "@jeju_fairytale" },
                hmu: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                dress: { name: "Stylist Jehee", instagram: "@stylist_jehee" },
                suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
            bouquet: { name: "Hatt", instagram: "@hatt__flower" },
              },
              inclusiveItems: ["Outdoor + Studio Photography Session","Hair & Makeup for Bride and Groom","4 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
              shootingTime: "6 hours",
              locations: "1 Studio + 3 Outdoor",
              originalPhotos: "2,500+ (All Raw JPG)",
              retouched: 35,
              retouchedDetail: "Professionally Retouched: 35 (Customer Selected)",
              priceSNS: 3340,
              priceNoSNS: null,
              addons: [
                { name: "Express Retouching Service", price: 8, desc: "Per image. 10 retouched photos for invitation card. Completed within 2 weeks from photo selection date." },
              ],
            },
          ],
        },
      ],
    },
  ],
  seoul: [
{
      id: "seoul-1", number: "#1", name: "Misang Snap", instagram: "@__misang_seoul",
      packages: [
        {
          name: "Package A",
          subtitle: "Studio & Outdoor (Misang & K Salon)",
          partners: {
            photographer: { name: "Misang Seoul", instagram: "@__misang_seoul" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session (2 Photographers)","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Videography (2:30 behind-the-scenes video, Original + Final)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "1 Indoor Studio + 1 Outdoor Site (Noeul Park)", originalPhotos: "1,500+", retouched: 25,
          retouchedDetail: "Precise Retouching: 25 (Customer Selected)",
          priceSNS: 2570, priceNoSNS: 2670,
          addons: [
            { name: "Night Photography", price: 128, desc: "Location: Dongjak Bridge (Han River, Seoul). 1 hour additional. 5 additional retouched images. Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Photography Addition", price: null, desc: "Price varies by studio; booked after consultation." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Outdoor Only (Misang & K Salon)",
          partners: {
            photographer: { name: "Misang Seoul", instagram: "@__misang_seoul" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session (2 Photographers)","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","4K Videography (2:30 behind-the-scenes video, Original + Final)","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 Outdoor Sites (Noeul Park + Eulwangri Beach)", originalPhotos: "1,500+", retouched: 25,
          retouchedDetail: "Precise Retouching: 25 (Customer Selected)",
          priceSNS: 2570, priceNoSNS: 2670,
          addons: [
            { name: "Night Photography with Fireworks", price: 128, desc: "1 hour additional. Fireworks provided by photographer. Weather permitting. 5 additional retouched images. Additional stylist/interpreter/transport fees apply." },
          ],
        },
      ],
    },
{
      id: "seoul-2", number: "#2", name: "About Mood Seoul", instagram: "@_aboutmood",
      packages: [
        {
          name: "Package A",
          subtitle: "Studio & Outdoor (About Mood & K Salon)",
          partners: {
            photographer: { name: "About Mood", instagram: "@_aboutmood" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "1 Studio (2hrs) + 1-2 Outdoor", originalPhotos: "1,500+", retouched: 30,
          retouchedDetail: "Customer Selected: 23 + Photographer Selected: 7",
          priceSNS: 2670, priceNoSNS: null,
          addons: [
            { name: "4K Videography (Younangman)", price: 657, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: USD 41 (30 sec). Original footage: USD 41 (20 min). Express Retouching: USD 124." },
            { name: "Studio Photography Addition", price: null, desc: "Studio rental fee charged separately. Studio list provided upon request. Additional stylist/interpreter/transport fees apply." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Outdoor Only (About Mood & K Salon)",
          partners: {
            photographer: { name: "About Mood", instagram: "@_aboutmood" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "2-3 Outdoor locations", originalPhotos: "1,500+", retouched: 30,
          retouchedDetail: "Customer Selected: 23 + Photographer Selected: 7",
          priceSNS: 2670, priceNoSNS: null,
          addons: [
            { name: "4K Videography (Younangman)", price: 657, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: USD 41 (30 sec). Original footage: USD 41 (20 min). Express Retouching: USD 124." },
            { name: "Studio Photography Addition", price: null, desc: "Studio rental fee charged separately. Studio list provided upon request. Additional stylist/interpreter/transport fees apply." },
          ],
        },
      ],
    },
{
      id: "seoul-3", number: "#3", name: "Deriz", instagram: "@de.riz_",
      packages: [
        {
          name: "Package A",
          subtitle: "Half Wedding 3hr (Deriz & K Salon)",
          partners: {
            photographer: { name: "Deriz", instagram: "@de.riz_" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites", originalPhotos: "500+", retouched: 20,
          retouchedDetail: "Precise Retouching: 20 (Customer Selected). Up to 2 outfits available.",
          priceSNS: 2005, priceNoSNS: 2060,
          addons: [
            { name: "Additional 1-hour", price: 100, desc: "Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
          ],
        },
        {
          name: "Package B",
          subtitle: "One Day Wedding 5hr (Deriz & K Salon)",
          partners: {
            photographer: { name: "Deriz", instagram: "@de.riz_" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 30,
          retouchedDetail: "Precise Retouching: 30 (Customer Selected). Up to 3 outfits available.",
          priceSNS: 2500, priceNoSNS: 2570,
          addons: [
            { name: "Additional 1-hour", price: 100, desc: "Additional stylist/interpreter/transport fees apply." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
          ],
        },
      ],
    },
    {
      id: "seoul-4", number: "#4", name: "Muhwagwa Wedding", instagram: "@muhwagwa_wedding",
      packages: [
        {
          name: "Package A",
          subtitle: "Studio & Outdoor (1 Photographer)",
          partners: {
            photographer: { name: "Muhwagwa", instagram: "@muhwagwa_wedding" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session (1 Photographer)","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 hours", locations: "1 Indoor Studio + 1 Outdoor Site (Noeul Park)", originalPhotos: "All Original", retouched: 20,
          retouchedDetail: "Precise Retouching: 20 (Customer Selected)",
          priceSNS: 2555, priceNoSNS: null,
          addons: [
            { name: "Additional Shooting Time", price: null, desc: "Night shooting (after sunset): USD 85 per 30 min. Daytime shooting (before sunset): USD 60 per 30 min." },
            { name: "Express Retouching Service", price: 125, desc: "10 photos delivered within 10 days from photo selection date." },
            { name: "Premium Compact Album", price: 327, desc: "22 pages included. Samples available on Instagram (@muhwagwa_wedding) Highlights. Shipping costs are billed separately after delivery." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Studio & Outdoor (2 Photographers)",
          partners: {
            photographer: { name: "Muhwagwa", instagram: "@muhwagwa_wedding" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography & Videography Session (2 Photographers)","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Approx. 2 Min Video","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4.5 hours", locations: "1 Indoor Studio + 1 Outdoor Site (Noeul Park)", originalPhotos: "All Original", retouched: 25,
          retouchedDetail: "Precise Retouching: 25 (Customer Selected)",
          priceSNS: 2905, priceNoSNS: null,
          addons: [
            { name: "Additional Shooting Time", price: null, desc: "Night shooting (after sunset): USD 85 per 30 min. Daytime shooting (before sunset): USD 60 per 30 min." },
            { name: "Express Retouching Service", price: 125, desc: "10 photos delivered within 10 days from photo selection date." },
            { name: "Premium Compact Album", price: 327, desc: "22 pages included. Samples available on Instagram (@muhwagwa_wedding) Highlights. Shipping costs are billed separately after delivery." },
          ],
        },
        {
          name: "Package C",
          subtitle: "Snap Package (Photo Only)",
          partners: {
            photographer: { name: "Muhwagwa", instagram: "@muhwagwa_wedding" },
          },
          inclusiveItems: ["Photography Session (Morning Shoot Only)"],
          shootingTime: "2 hours", locations: "1 Site", originalPhotos: "All Original", retouched: 10,
          retouchedDetail: "Precise Retouching: 10 (Customer Selected)",
          priceSNS: 500, priceNoSNS: null,
          addons: [
            { name: "Interpreter (English)", price: 100, desc: "For 2 hours." },
            { name: "Hair & Makeup for Bride and Groom", price: 210, desc: "K Salon (Instagram: @k__salon)." },
            { name: "Express Retouching Service", price: 125, desc: "10 photos delivered within 10 days from photo selection date." },
          ],
        },
      ],
    },
{
      id: "seoul-5", number: "#5", name: "Seol in Seoul", instagram: "@seolinseoul_",
      packages: [
        {
          name: "Package A",
          subtitle: "Half Wedding 3hr (Seol in Seoul & K Salon)",
          partners: {
            photographer: { name: "Seol in Seoul", instagram: "@seolinseoul_" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "3 hours", locations: "2 sites (Daytime+Sunset or Sunset+Night)", originalPhotos: "500+", retouched: 30,
          retouchedDetail: "Precise Retouching: 30 (Customer Selected). Up to 2 outfits available.",
          priceSNS: 2005, priceNoSNS: null,
          addons: [
            { name: "4K Videography (Younangman)", price: 657, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: USD 41. Original footage: USD 41. Express Retouching: USD 124." },
            { name: "Film Photography", price: 83, desc: "35mm film. Up to 30 original images. Kodak/Fuji options. Inclusive Printing & Scanning." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
            { name: "Express Retouching Service", price: 83, desc: "Completed within 2 weeks from photo selection date." },
          ],
        },
        {
          name: "Package B",
          subtitle: "One Day Wedding 5hr (Seol in Seoul & K Salon) - 2 Suits",
          partners: {
            photographer: { name: "Seol in Seoul", instagram: "@seolinseoul_" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites (Day+Sunset+Night)", originalPhotos: "1,000+", retouched: 45,
          retouchedDetail: "Precise Retouching: 45 (Customer Selected). Up to 3 outfits available.",
          priceSNS: 2500, priceNoSNS: null,
          addons: [
            { name: "4K Videography - Younangman", price: 657, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: USD 41. Original footage: USD 41. Express Retouching: USD 124." },
            { name: "4K Videography - Ownorbit", price: 665, desc: "4K cinematic highlight film approx. 2 min. Accompanies entire photoshoot. Portrait SNS video approx. 20 sec. Original footage included. Drone videography (weather permitting). Express Retouching: USD 83." },
            { name: "Film Photography", price: 83, desc: "35mm film. Up to 30 original images. Kodak/Fuji options. Inclusive Printing & Scanning." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
            { name: "Express Retouching Service", price: 83, desc: "Completed within 2 weeks from photo selection date." },
          ],
        },
        {
          name: "Package C",
          subtitle: "One Day Wedding 5hr (Seol in Seoul & K Salon) - 1 Suit",
          partners: {
            photographer: { name: "Seol in Seoul", instagram: "@seolinseoul_" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "5 hours", locations: "3 sites (Day+Sunset+Night)", originalPhotos: "1,000+", retouched: 45,
          retouchedDetail: "Precise Retouching: 45 (Customer Selected). Up to 3 outfits available.",
          priceSNS: 2400, priceNoSNS: null,
          addons: [
            { name: "4K Videography - Younangman", price: 657, desc: "4K cinematic highlight film approx. 3 min. No time limit, accompanies entire photoshoot. Portrait SNS video: USD 41. Original footage: USD 41. Express Retouching: USD 124." },
            { name: "4K Videography - Ownorbit", price: 665, desc: "4K cinematic highlight film approx. 2 min. Accompanies entire photoshoot. Portrait SNS video approx. 20 sec. Original footage included. Drone videography (weather permitting). Express Retouching: USD 83." },
            { name: "Film Photography", price: 83, desc: "35mm film. Up to 30 original images. Kodak/Fuji options. Inclusive Printing & Scanning." },
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo." },
            { name: "Express Retouching Service", price: 83, desc: "Completed within 2 weeks from photo selection date." },
          ],
        },
      ],
    },
    {
      id: "seoul-6", number: "#6", name: "Eo.ways", instagram: "@eo.ways",
      packages: [
        {
          name: "Package A",
          subtitle: "Eo.ways (4-5 hr) & K Salon",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress (Shoes NOT included)","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4-5 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 40,
          retouchedDetail: "Precise Retouching: 40 (Customer Selected)",
          priceSNS: 2185, priceNoSNS: null,
          addons: [],
        },
        {
          name: "Package B",
          subtitle: "Eo.ways (3 hr) Snap",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
          },
          inclusiveItems: ["Photography Session"],
          shootingTime: "3 hours", locations: "2 sites", originalPhotos: "200+", retouched: 30,
          retouchedDetail: "Precise Retouching: 30 (Customer Selected)",
          priceSNS: 330, priceNoSNS: null,
          addons: [
            { name: "Hair & Makeup for Bride and Groom", price: 210, desc: "K Salon (Instagram: @k__salon)." },
          ],
        },
        {
          name: "Package C",
          subtitle: "Eo.ways (2 hr) Snap",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
          },
          inclusiveItems: ["Photography Session (Up to 1 Outfit)"],
          shootingTime: "2 hours", locations: "1 site", originalPhotos: "100+", retouched: 15,
          retouchedDetail: "Precise Retouching: 15 (Customer Selected)",
          priceSNS: 240, priceNoSNS: null,
          addons: [
            { name: "Hair & Makeup for Bride and Groom", price: 210, desc: "K Salon (Instagram: @k__salon)." },
          ],
        },
      ],
    },
{
      id: "seoul-7", number: "#7", name: "Kiss and Smoking", instagram: "@kiss_and.smoking",
      packages: [
        {
          name: "Package A",
          subtitle: "Half Day 4hr (1 Dress, 1 Suit)",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","1 Dress + 1 Heel","1 Suit (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 sites", originalPhotos: "500+", retouched: 10,
          retouchedDetail: "Precise Retouching: 10 (Customer Selected). Up to 2 outfits available.",
          priceSNS: 1860, priceNoSNS: null,
          addons: [
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "On-site Hair Stylist", price: 250, desc: "Live hair changes during the shoot using professional hot tools and accessories." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Half Day 4hr (2 Dress, 2 Suit)",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "4 hours", locations: "2 sites", originalPhotos: "500+", retouched: 10,
          retouchedDetail: "Precise Retouching: 10 (Customer Selected). Up to 2 outfits available.",
          priceSNS: 2475, priceNoSNS: null,
          addons: [
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "On-site Hair Stylist", price: 250, desc: "Live hair changes during the shoot using professional hot tools and accessories." },
          ],
        },
        {
          name: "Package C",
          subtitle: "One Day 7hr",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
            dress: { name: "K Salon", instagram: "@ksalon_seoul" },
            suit: { name: "K Salon", instagram: "@ksalon_seoul" },
            bouquet: { name: "TBD", instagram: "" },
          },
          inclusiveItems: ["Photography Session","Hair & Makeup for Bride and Groom","2 Dress + 1 Heel","2 Suits (Shirt and shoes NOT included)","Accessories (Veil, Earrings, Hair acc)","Stylist (On Shoot Day)","1 Fresh Flower Bouquet","Interpreter (On Shoot Day)","Private Van with Driver (On Shoot Day)"],
          shootingTime: "7 hours", locations: "3 sites", originalPhotos: "1,000+", retouched: 20,
          retouchedDetail: "Precise Retouching: 20 (Customer Selected). Up to 3 outfits available.",
          priceSNS: 2520, priceNoSNS: null,
          addons: [
            { name: "Studio Rental", price: null, desc: "Price varies by studio; booked after consultation." },
            { name: "Additional Dress", price: 187, desc: "Per dress." },
            { name: "Additional Suit", price: 85, desc: "Per suit." },
            { name: "On-site Hair Stylist", price: 250, desc: "Live hair changes during the shoot using professional hot tools and accessories." },
          ],
        },
        {
          name: "Package D",
          subtitle: "Simple Day 2hr (Photo Only)",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
          },
          inclusiveItems: ["Photography Session (2 hours)","Interpreter (On Shoot Day)"],
          shootingTime: "2 hours", locations: "1 site", originalPhotos: "300+", retouched: 10,
          retouchedDetail: "Precise Retouching: 10 (Customer Selected). 1 outfit available.",
          priceSNS: 385, priceNoSNS: null,
          addons: [],
        },
      ],
    },
  ],
};

function InstagramLink({ handle }) {
  if (!handle) return null;
  const handles = handle.split(" / ");
  return (
    <span>
      {handles.map((h, i) => (
        <span key={h}>
          <a
            href={`https://instagram.com/${h.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8B7355", textDecoration: "none", borderBottom: "1px solid #D4C5B0" }}
          >
            {h}
          </a>
          {i < handles.length - 1 && " / "}
        </span>
      ))}
    </span>
  );
}

function RenderDesc({ text }) {
  if (!text) return null;
  const parts = text.split(/(@[\w._]+)/g);
  return parts.map((part, i) =>
    part.startsWith("@") ? (
      <a key={i} href={`https://instagram.com/${part.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ color: "#8B7355", textDecoration: "none", borderBottom: "1px solid #D4C5B0" }}>{part}</a>
    ) : <span key={i}>{part}</span>
  );
}

function BackButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: "#8B7355",
        cursor: "pointer",
        fontSize: "14px",
        padding: "8px 0",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <span style={{ fontSize: "18px" }}>&#8249;</span> {label}
    </button>
  );
}

function ListButton({ onClick, disabled, left, right }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        background: !disabled ? "#fff" : "#FAFAF8",
        border: "1px solid #E8E0D4",
        borderRadius: "4px",
        cursor: !disabled ? "pointer" : "default",
        opacity: !disabled ? 1 : 0.5,
        transition: "all 0.2s",
        textAlign: "left",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "#8B7355";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(139,115,85,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E8E0D4";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </button>
  );
}

function RegionSelect({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "60px" }}>
      <p style={{ color: "#666", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
        Select Location
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { key: "jeju", label: "Jeju", sub: "10 Photographers" },
          { key: "seoul", label: "Seoul", sub: "7 Photographers" },
        ].map((r) => (
          <button
            key={r.key}
            onClick={() => onSelect(r.key)}
            style={{
              width: "200px",
              padding: "40px 24px",
              background: "#fff",
              border: "1px solid #E8E0D4",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8B7355";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,115,85,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E8E0D4";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: 300, color: "#2C2420", fontFamily: "'Cormorant Garamond', serif" }}>{r.label}</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px", letterSpacing: "1px" }}>{r.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PhotographerList({ region, photographers, onSelect, onBack }) {
  return (
    <div>
      <BackButton onClick={onBack} label="Location" />
      <p style={{ color: "#666", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", margin: "24px 0 16px", textAlign: "center" }}>
        {region === "jeju" ? "Jeju" : "Seoul"} Photographers
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        {photographers.map((p) => {
          const hasSubs = p.subPhotographers && p.subPhotographers.length > 0;
          const hasPackages = p.packages && p.packages.length > 0;
          const available = hasSubs || hasPackages;
          return (
            <ListButton
              key={p.id}
              onClick={() => available && onSelect(p)}
              disabled={!available}
              left={
                <>
                  <span style={{ color: "#8B7355", fontSize: "12px", fontWeight: 600 }}>{p.number}</span>
                  <span style={{ color: "#2C2420", fontSize: "16px", marginLeft: "12px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    {p.name}
                  </span>
                </>
              }
              right={
                available ? (
                  <span style={{ color: "#8B7355", fontSize: "12px" }}>
                    {hasSubs ? `${p.subPhotographers.length} directors ›` : `${p.packages.length} packages ›`}
                  </span>
                ) : (
                  <span style={{ color: "#999", fontSize: "12px" }}>Coming Soon</span>
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

function SubPhotographerList({ photographer, onSelect, onBack }) {
  return (
    <div>
      <BackButton onClick={onBack} label="Photographers" />
      <div style={{ textAlign: "center", margin: "24px 0 24px" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "28px", color: "#2C2420", margin: 0 }}>
          {photographer.name}
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
          <InstagramLink handle={photographer.instagram} />
        </p>
      </div>
      <p style={{ color: "#666", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px", textAlign: "center" }}>
        Select Director
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        {photographer.subPhotographers.map((sub) => (
          <ListButton
            key={sub.id}
            onClick={() => onSelect(sub)}
            disabled={false}
            left={
              <>
                <span style={{ color: "#8B7355", fontSize: "12px", fontWeight: 600 }}>{sub.number}</span>
                <span style={{ color: "#2C2420", fontSize: "16px", marginLeft: "12px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                  {sub.name}
                </span>
              </>
            }
            right={
              <span style={{ color: "#8B7355", fontSize: "12px" }}>{sub.packages.length} packages ›</span>
            }
          />
        ))}
      </div>
    </div>
  );
}

function PackageDetail({ photographer, parentName, onBack, backLabel }) {
  const [selectedPkg, setSelectedPkg] = useState(0);
  const [expandedAddon, setExpandedAddon] = useState(null);
  const pkg = photographer.packages[selectedPkg];
  const displayName = parentName ? `${parentName} (${photographer.name})` : photographer.name;

  return (
    <div>
      <BackButton onClick={onBack} label={backLabel} />

      <div style={{ textAlign: "center", margin: "24px 0 32px" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "28px", color: "#2C2420", margin: 0 }}>
          {displayName}
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
          <InstagramLink handle={photographer.instagram} />
        </p>
      </div>

      {/* Package tabs */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
        {photographer.packages.map((p, i) => (
          <button
            key={p.name}
            onClick={() => { setSelectedPkg(i); setExpandedAddon(null); }}
            style={{
              padding: "10px 20px",
              background: i === selectedPkg ? "#2C2420" : "#fff",
              color: i === selectedPkg ? "#fff" : "#2C2420",
              border: "1px solid #2C2420",
              borderRadius: "2px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Package subtitle */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{ fontSize: "14px", color: "#8B7355", fontWeight: 500, margin: 0, letterSpacing: "0.5px" }}>{pkg.subtitle}</p>
      </div>

      {/* Partners */}
      <div style={{ background: "#FAFAF8", border: "1px solid #E8E0D4", borderRadius: "4px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Partners</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {Object.entries(pkg.partners).map(([role, info]) => (
            <div key={role}>
              <span style={{ fontSize: "12px", color: "#666", textTransform: "capitalize" }}>{role === "hmu" ? "Hair & Makeup" : role === "dress" ? "Dress" : role === "suit" ? "Suit" : role === "videographer" ? "Videographer" : role === "bouquet" ? "Bouquet" : "Photographer"}</span>
              <div style={{ fontSize: "14px", color: "#2C2420", fontWeight: 500, marginTop: "2px" }}>{info.name}</div>
              <InstagramLink handle={info.instagram} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: "14px", color: "#8B7355", fontWeight: 500, margin: "12px 0 0" }}>
          * Please check each studio's portfolio on Instagram
        </p>
      </div>

      {/* Package Inclusive */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Package Inclusive</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "6px" }}>
          {pkg.inclusiveItems.map((item) => (
            <div key={item} style={{ fontSize: "14px", color: "#2C2420", padding: "6px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ color: "#8B7355", flexShrink: 0 }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Photography Details */}
      <div style={{ background: "#FAFAF8", border: "1px solid #E8E0D4", borderRadius: "4px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px" }}>Photography Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "Shooting Time", value: pkg.shootingTime },
            { label: "Locations", value: pkg.locations },
            { label: "Original Photos", value: pkg.originalPhotos },
            { label: "Retouched", value: `${pkg.retouched} images` },
          ].map((d) => (
            <div key={d.label}>
              <div style={{ fontSize: "12px", color: "#666" }}>{d.label}</div>
              <div style={{ fontSize: "18px", fontWeight: 400, color: "#2C2420", marginTop: "2px", fontFamily: "'Cormorant Garamond', serif" }}>{d.value}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #E8E0D4", marginTop: "14px", paddingTop: "12px", fontSize: "13px", color: "#555", lineHeight: "1.6" }}>
          {pkg.retouchedDetail}
        </div>
      </div>

      {/* Pricing */}
      {pkg.priceNoSNS !== null ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          <div style={{ background: "#2C2420", borderRadius: "4px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Agree to SNS Upload</div>
            <div style={{ fontSize: "32px", fontWeight: 300, color: "#fff", marginTop: "8px", fontFamily: "'Cormorant Garamond', serif" }}>
              ${pkg.priceSNS.toLocaleString()}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>USD</div>
          </div>
          <div style={{ background: "#FAFAF8", border: "1px solid #E8E0D4", borderRadius: "4px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}>Decline SNS Upload</div>
            <div style={{ fontSize: "32px", fontWeight: 300, color: "#2C2420", marginTop: "8px", fontFamily: "'Cormorant Garamond', serif" }}>
              ${pkg.priceNoSNS.toLocaleString()}
            </div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>USD</div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#2C2420", borderRadius: "4px", padding: "24px", textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Package Price</div>
          <div style={{ fontSize: "32px", fontWeight: 300, color: "#fff", marginTop: "8px", fontFamily: "'Cormorant Garamond', serif" }}>
            ${pkg.priceSNS.toLocaleString()}
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>USD</div>
        </div>
      )}
      <p style={{ fontSize: "12px", color: "#666", margin: "-12px 0 8px 4px" }}>
        * Final price is subject to change based on current USD exchange rate and does NOT include add-ons.
      </p>
      {pkg.priceNoSNS !== null && (
        <p style={{ fontSize: "12px", color: "#666", margin: "0 0 24px 4px" }}>
          * SNS Upload: Hype Pig (Hype Wedding, Hype Snap) SNS, Photographer SNS
        </p>
      )}

      {/* Add-ons */}
      <div style={{ marginBottom: "32px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Add-ons</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {pkg.addons.map((addon, i) => (
            <div
              key={addon.name}
              style={{ border: "1px solid #E8E0D4", borderRadius: "4px", overflow: "hidden" }}
            >
              <button
                onClick={() => setExpandedAddon(expandedAddon === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  background: expandedAddon === i ? "#FAFAF8" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "14px", color: "#2C2420" }}>{addon.name}</span>
                <span style={{ fontSize: "14px", color: "#8B7355", fontWeight: 500, flexShrink: 0, marginLeft: "12px" }}>
                  {addon.price !== null ? `+$${addon.price}` : "See details"} {expandedAddon === i ? "−" : "+"}
                </span>
              </button>
              {expandedAddon === i && (
                <div style={{ padding: "0 16px 12px", fontSize: "13px", color: "#555", lineHeight: "1.6", background: "#FAFAF8" }}>
                  <RenderDesc text={addon.desc} />
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: "12px", color: "#666", margin: "8px 0 0 4px", fontStyle: "italic" }}>
          * Add-ons are NOT included in the total price. Additional charges will apply.
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid #E8E0D4" }}>
        <p style={{ fontSize: "14px", color: "#555", margin: "0 0 16px" }}>Ready to book or have questions?</p>
        <a
          href="https://wa.me/821062695990"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 40px",
            background: "#2C2420",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "2px",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: 500,
          }}
        >
          CONTACT US ON WHATSAPP
        </a>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "12px" }}>
          Instagram:{" "}
          <a href="https://instagram.com/hypewedd_ing" target="_blank" rel="noopener noreferrer" style={{ color: "#8B7355", textDecoration: "none" }}>
            @hypewedd_ing
          </a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [region, setRegion] = useState(null);
  const [photographer, setPhotographer] = useState(null);
  const [subPhotographer, setSubPhotographer] = useState(null);

  const handlePhotographerSelect = (p) => {
    setPhotographer(p);
    // If no sub-photographers, go directly to packages
    if (!p.subPhotographers || p.subPhotographers.length === 0) {
      setSubPhotographer(p);
    }
  };

  const handleBack = () => {
    if (subPhotographer) {
      if (photographer.subPhotographers) {
        setSubPhotographer(null);
      } else {
        setSubPhotographer(null);
        setPhotographer(null);
      }
    } else if (photographer) {
      setPhotographer(null);
    } else {
      setRegion(null);
    }
  };

  // Determine which view to show
  const showPackages = subPhotographer !== null;
  const showSubs = photographer !== null && photographer.subPhotographers && !subPhotographer;
  const showList = region !== null && !photographer;
  const showRegion = !region;

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      maxWidth: "640px",
      margin: "0 auto",
      padding: "24px 20px",
      color: "#2C2420",
      minHeight: "100vh",
      background: "#fff",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "20px",
          fontWeight: 300,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#2C2420",
          margin: 0,
        }}>
          Hype Wedding
        </h1>
        <div style={{ width: "40px", height: "1px", background: "#D4C5B0", margin: "12px auto" }} />
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
          Package & Rate
        </p>
      </div>

      {/* Content */}
      {showRegion && <RegionSelect onSelect={setRegion} />}
      {showList && (
        <PhotographerList
          region={region}
          photographers={PHOTOGRAPHERS[region]}
          onSelect={handlePhotographerSelect}
          onBack={() => setRegion(null)}
        />
      )}
      {showSubs && (
        <SubPhotographerList
          photographer={photographer}
          onSelect={setSubPhotographer}
          onBack={() => setPhotographer(null)}
        />
      )}
      {showPackages && (
        <PackageDetail
          photographer={subPhotographer}
          parentName={photographer.subPhotographers ? photographer.name : null}
          onBack={handleBack}
          backLabel={photographer.subPhotographers ? photographer.name : "Photographers"}
        />
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "40px 0 16px", borderTop: "1px solid #F0EBE4", marginTop: "40px" }}>
        <p style={{ fontSize: "12px", color: "#888", letterSpacing: "1px", margin: 0 }}>
          © 2026 Hype Pig Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
