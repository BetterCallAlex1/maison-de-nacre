## Insertion du numéro de téléphone

Remplacer le placeholder `[À COMPLÉTER]` (téléphone uniquement) par le numéro réel.

- Affichage : `06 69 26 08 17`
- Lien `tel:` : `+33669260817`

### Fichiers modifiés

**`src/components/landing/Header.tsx`** (lignes 17 et 22)
```diff
-            href="tel:[À COMPLÉTER]"
+            href="tel:+33669260817"
...
-            [À COMPLÉTER]
+            06 69 26 08 17
```

**`src/components/landing/Footer.tsx`** (ligne 14)
```diff
-            <p>Téléphone : <a href="tel:[À COMPLÉTER]" className="font-medium text-deep hover:text-primary">[À COMPLÉTER]</a></p>
+            <p>Téléphone : <a href="tel:+33669260817" className="font-medium text-deep hover:text-primary">06 69 26 08 17</a></p>
```

### Non touché

La ligne email du Footer (`mailto:[À COMPLÉTER]`) reste inchangée — la consigne porte uniquement sur le téléphone.
