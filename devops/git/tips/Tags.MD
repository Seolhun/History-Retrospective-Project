# Delete local tags.

```bash
git tag -l | xargs git tag -d
```

# Fetch remote tags.
```bash
git fetch
```

# Delete remote tags.
```bash
git tag -l | xargs -n 1 git push --delete origin
```

# Delete local tasg.
```bash
git tag -l | xargs git tag -d
```