function hasCollided(TO1,TO2)
{
    BulletRightEdge = TO1.x +TO1.width ;
    wallLeftEdge = TO2.x;
  if (
      BulletRightEdge>=wallLeftEdge
  ) {
    return true;
  }
else{
return false;
}
}