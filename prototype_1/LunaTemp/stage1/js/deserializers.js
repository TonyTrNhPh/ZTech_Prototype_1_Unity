var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8134 = root || request.c( 'UnityEngine.JointSpring' )
  var i8135 = data
  i8134.spring = i8135[0]
  i8134.damper = i8135[1]
  i8134.targetPosition = i8135[2]
  return i8134
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8136 = root || request.c( 'UnityEngine.JointMotor' )
  var i8137 = data
  i8136.m_TargetVelocity = i8137[0]
  i8136.m_Force = i8137[1]
  i8136.m_FreeSpin = i8137[2]
  return i8136
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8138 = root || request.c( 'UnityEngine.JointLimits' )
  var i8139 = data
  i8138.m_Min = i8139[0]
  i8138.m_Max = i8139[1]
  i8138.m_Bounciness = i8139[2]
  i8138.m_BounceMinVelocity = i8139[3]
  i8138.m_ContactDistance = i8139[4]
  i8138.minBounce = i8139[5]
  i8138.maxBounce = i8139[6]
  return i8138
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8140 = root || request.c( 'UnityEngine.JointDrive' )
  var i8141 = data
  i8140.m_PositionSpring = i8141[0]
  i8140.m_PositionDamper = i8141[1]
  i8140.m_MaximumForce = i8141[2]
  i8140.m_UseAcceleration = i8141[3]
  return i8140
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8142 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8143 = data
  i8142.m_Spring = i8143[0]
  i8142.m_Damper = i8143[1]
  return i8142
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8144 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8145 = data
  i8144.m_Limit = i8145[0]
  i8144.m_Bounciness = i8145[1]
  i8144.m_ContactDistance = i8145[2]
  return i8144
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8146 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8147 = data
  i8146.m_ExtremumSlip = i8147[0]
  i8146.m_ExtremumValue = i8147[1]
  i8146.m_AsymptoteSlip = i8147[2]
  i8146.m_AsymptoteValue = i8147[3]
  i8146.m_Stiffness = i8147[4]
  return i8146
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8148 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8149 = data
  i8148.m_LowerAngle = i8149[0]
  i8148.m_UpperAngle = i8149[1]
  return i8148
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8150 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8151 = data
  i8150.m_MotorSpeed = i8151[0]
  i8150.m_MaximumMotorTorque = i8151[1]
  return i8150
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8152 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8153 = data
  i8152.m_DampingRatio = i8153[0]
  i8152.m_Frequency = i8153[1]
  i8152.m_Angle = i8153[2]
  return i8152
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8154 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8155 = data
  i8154.m_LowerTranslation = i8155[0]
  i8154.m_UpperTranslation = i8155[1]
  return i8154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8156 = root || new pc.UnityMaterial()
  var i8157 = data
  i8156.name = i8157[0]
  request.r(i8157[1], i8157[2], 0, i8156, 'shader')
  i8156.renderQueue = i8157[3]
  i8156.enableInstancing = !!i8157[4]
  var i8159 = i8157[5]
  var i8158 = []
  for(var i = 0; i < i8159.length; i += 1) {
    i8158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8159[i + 0]) );
  }
  i8156.floatParameters = i8158
  var i8161 = i8157[6]
  var i8160 = []
  for(var i = 0; i < i8161.length; i += 1) {
    i8160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8161[i + 0]) );
  }
  i8156.colorParameters = i8160
  var i8163 = i8157[7]
  var i8162 = []
  for(var i = 0; i < i8163.length; i += 1) {
    i8162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8163[i + 0]) );
  }
  i8156.vectorParameters = i8162
  var i8165 = i8157[8]
  var i8164 = []
  for(var i = 0; i < i8165.length; i += 1) {
    i8164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8165[i + 0]) );
  }
  i8156.textureParameters = i8164
  var i8167 = i8157[9]
  var i8166 = []
  for(var i = 0; i < i8167.length; i += 1) {
    i8166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8167[i + 0]) );
  }
  i8156.materialFlags = i8166
  return i8156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8171 = data
  i8170.name = i8171[0]
  i8170.value = i8171[1]
  return i8170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8175 = data
  i8174.name = i8175[0]
  i8174.value = new pc.Color(i8175[1], i8175[2], i8175[3], i8175[4])
  return i8174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8179 = data
  i8178.name = i8179[0]
  i8178.value = new pc.Vec4( i8179[1], i8179[2], i8179[3], i8179[4] )
  return i8178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8183 = data
  i8182.name = i8183[0]
  request.r(i8183[1], i8183[2], 0, i8182, 'value')
  return i8182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8187 = data
  i8186.name = i8187[0]
  i8186.enabled = !!i8187[1]
  return i8186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8189 = data
  i8188.name = i8189[0]
  i8188.width = i8189[1]
  i8188.height = i8189[2]
  i8188.mipmapCount = i8189[3]
  i8188.anisoLevel = i8189[4]
  i8188.filterMode = i8189[5]
  i8188.hdr = !!i8189[6]
  i8188.format = i8189[7]
  i8188.wrapMode = i8189[8]
  i8188.alphaIsTransparency = !!i8189[9]
  i8188.alphaSource = i8189[10]
  i8188.graphicsFormat = i8189[11]
  i8188.sRGBTexture = !!i8189[12]
  i8188.desiredColorSpace = i8189[13]
  i8188.wrapU = i8189[14]
  i8188.wrapV = i8189[15]
  return i8188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8191 = data
  i8190.position = new pc.Vec3( i8191[0], i8191[1], i8191[2] )
  i8190.scale = new pc.Vec3( i8191[3], i8191[4], i8191[5] )
  i8190.rotation = new pc.Quat(i8191[6], i8191[7], i8191[8], i8191[9])
  return i8190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i8192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i8193 = data
  i8192.mass = i8193[0]
  i8192.drag = i8193[1]
  i8192.angularDrag = i8193[2]
  i8192.useGravity = !!i8193[3]
  i8192.isKinematic = !!i8193[4]
  i8192.constraints = i8193[5]
  i8192.maxAngularVelocity = i8193[6]
  i8192.collisionDetectionMode = i8193[7]
  i8192.interpolation = i8193[8]
  return i8192
}

Deserializers["FenceScript"] = function (request, data, root) {
  var i8194 = root || request.c( 'FenceScript' )
  var i8195 = data
  i8194.zBound = i8195[0]
  i8194.speed = i8195[1]
  return i8194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8197 = data
  request.r(i8197[0], i8197[1], 0, i8196, 'sharedMesh')
  return i8196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8199 = data
  request.r(i8199[0], i8199[1], 0, i8198, 'additionalVertexStreams')
  i8198.enabled = !!i8199[2]
  request.r(i8199[3], i8199[4], 0, i8198, 'sharedMaterial')
  var i8201 = i8199[5]
  var i8200 = []
  for(var i = 0; i < i8201.length; i += 2) {
  request.r(i8201[i + 0], i8201[i + 1], 2, i8200, '')
  }
  i8198.sharedMaterials = i8200
  i8198.receiveShadows = !!i8199[6]
  i8198.shadowCastingMode = i8199[7]
  i8198.sortingLayerID = i8199[8]
  i8198.sortingOrder = i8199[9]
  i8198.lightmapIndex = i8199[10]
  i8198.lightmapSceneIndex = i8199[11]
  i8198.lightmapScaleOffset = new pc.Vec4( i8199[12], i8199[13], i8199[14], i8199[15] )
  i8198.lightProbeUsage = i8199[16]
  i8198.reflectionProbeUsage = i8199[17]
  return i8198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i8204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i8205 = data
  request.r(i8205[0], i8205[1], 0, i8204, 'sharedMesh')
  i8204.convex = !!i8205[2]
  i8204.enabled = !!i8205[3]
  i8204.isTrigger = !!i8205[4]
  request.r(i8205[5], i8205[6], 0, i8204, 'material')
  return i8204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8207 = data
  i8206.name = i8207[0]
  i8206.tagId = i8207[1]
  i8206.enabled = !!i8207[2]
  i8206.isStatic = !!i8207[3]
  i8206.layer = i8207[4]
  return i8206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i8208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i8209 = data
  i8208.center = new pc.Vec3( i8209[0], i8209[1], i8209[2] )
  i8208.size = new pc.Vec3( i8209[3], i8209[4], i8209[5] )
  i8208.enabled = !!i8209[6]
  i8208.isTrigger = !!i8209[7]
  request.r(i8209[8], i8209[9], 0, i8208, 'material')
  return i8208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8211 = data
  i8210.name = i8211[0]
  i8210.halfPrecision = !!i8211[1]
  i8210.useSimplification = !!i8211[2]
  i8210.useUInt32IndexFormat = !!i8211[3]
  i8210.vertexCount = i8211[4]
  i8210.aabb = i8211[5]
  var i8213 = i8211[6]
  var i8212 = []
  for(var i = 0; i < i8213.length; i += 1) {
    i8212.push( !!i8213[i + 0] );
  }
  i8210.streams = i8212
  i8210.vertices = i8211[7]
  var i8215 = i8211[8]
  var i8214 = []
  for(var i = 0; i < i8215.length; i += 1) {
    i8214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8215[i + 0]) );
  }
  i8210.subMeshes = i8214
  var i8217 = i8211[9]
  var i8216 = []
  for(var i = 0; i < i8217.length; i += 16) {
    i8216.push( new pc.Mat4().setData(i8217[i + 0], i8217[i + 1], i8217[i + 2], i8217[i + 3],  i8217[i + 4], i8217[i + 5], i8217[i + 6], i8217[i + 7],  i8217[i + 8], i8217[i + 9], i8217[i + 10], i8217[i + 11],  i8217[i + 12], i8217[i + 13], i8217[i + 14], i8217[i + 15]) );
  }
  i8210.bindposes = i8216
  var i8219 = i8211[10]
  var i8218 = []
  for(var i = 0; i < i8219.length; i += 1) {
    i8218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8219[i + 0]) );
  }
  i8210.blendShapes = i8218
  return i8210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8225 = data
  i8224.triangles = i8225[0]
  return i8224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8231 = data
  i8230.name = i8231[0]
  var i8233 = i8231[1]
  var i8232 = []
  for(var i = 0; i < i8233.length; i += 1) {
    i8232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8233[i + 0]) );
  }
  i8230.frames = i8232
  return i8230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i8234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i8235 = data
  i8234.center = new pc.Vec3( i8235[0], i8235[1], i8235[2] )
  i8234.radius = i8235[3]
  i8234.enabled = !!i8235[4]
  i8234.isTrigger = !!i8235[5]
  request.r(i8235[6], i8235[7], 0, i8234, 'material')
  return i8234
}

Deserializers["CoinScript"] = function (request, data, root) {
  var i8236 = root || request.c( 'CoinScript' )
  var i8237 = data
  i8236.spinSpeed = i8237[0]
  i8236.zBound = i8237[1]
  i8236.speed = i8237[2]
  i8236.particleDuration = i8237[3]
  i8236.moveSpeed = i8237[4]
  return i8236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8239 = data
  i8238.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8239[0], i8238.main)
  i8238.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8239[1], i8238.colorBySpeed)
  i8238.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8239[2], i8238.colorOverLifetime)
  i8238.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8239[3], i8238.emission)
  i8238.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8239[4], i8238.rotationBySpeed)
  i8238.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8239[5], i8238.rotationOverLifetime)
  i8238.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8239[6], i8238.shape)
  i8238.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8239[7], i8238.sizeBySpeed)
  i8238.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8239[8], i8238.sizeOverLifetime)
  i8238.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8239[9], i8238.textureSheetAnimation)
  i8238.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8239[10], i8238.velocityOverLifetime)
  i8238.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8239[11], i8238.noise)
  i8238.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8239[12], i8238.inheritVelocity)
  i8238.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8239[13], i8238.forceOverLifetime)
  i8238.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8239[14], i8238.limitVelocityOverLifetime)
  i8238.useAutoRandomSeed = !!i8239[15]
  i8238.randomSeed = i8239[16]
  return i8238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8240 = root || new pc.ParticleSystemMain()
  var i8241 = data
  i8240.duration = i8241[0]
  i8240.loop = !!i8241[1]
  i8240.prewarm = !!i8241[2]
  i8240.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[3], i8240.startDelay)
  i8240.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[4], i8240.startLifetime)
  i8240.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[5], i8240.startSpeed)
  i8240.startSize3D = !!i8241[6]
  i8240.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[7], i8240.startSizeX)
  i8240.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[8], i8240.startSizeY)
  i8240.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[9], i8240.startSizeZ)
  i8240.startRotation3D = !!i8241[10]
  i8240.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[11], i8240.startRotationX)
  i8240.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[12], i8240.startRotationY)
  i8240.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[13], i8240.startRotationZ)
  i8240.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8241[14], i8240.startColor)
  i8240.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8241[15], i8240.gravityModifier)
  i8240.simulationSpace = i8241[16]
  request.r(i8241[17], i8241[18], 0, i8240, 'customSimulationSpace')
  i8240.simulationSpeed = i8241[19]
  i8240.useUnscaledTime = !!i8241[20]
  i8240.scalingMode = i8241[21]
  i8240.playOnAwake = !!i8241[22]
  i8240.maxParticles = i8241[23]
  i8240.emitterVelocityMode = i8241[24]
  i8240.stopAction = i8241[25]
  return i8240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8242 = root || new pc.MinMaxCurve()
  var i8243 = data
  i8242.mode = i8243[0]
  i8242.curveMin = new pc.AnimationCurve( { keys_flow: i8243[1] } )
  i8242.curveMax = new pc.AnimationCurve( { keys_flow: i8243[2] } )
  i8242.curveMultiplier = i8243[3]
  i8242.constantMin = i8243[4]
  i8242.constantMax = i8243[5]
  return i8242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8244 = root || new pc.MinMaxGradient()
  var i8245 = data
  i8244.mode = i8245[0]
  i8244.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8245[1], i8244.gradientMin)
  i8244.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8245[2], i8244.gradientMax)
  i8244.colorMin = new pc.Color(i8245[3], i8245[4], i8245[5], i8245[6])
  i8244.colorMax = new pc.Color(i8245[7], i8245[8], i8245[9], i8245[10])
  return i8244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8247 = data
  i8246.mode = i8247[0]
  var i8249 = i8247[1]
  var i8248 = []
  for(var i = 0; i < i8249.length; i += 1) {
    i8248.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8249[i + 0]) );
  }
  i8246.colorKeys = i8248
  var i8251 = i8247[2]
  var i8250 = []
  for(var i = 0; i < i8251.length; i += 1) {
    i8250.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8251[i + 0]) );
  }
  i8246.alphaKeys = i8250
  return i8246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8252 = root || new pc.ParticleSystemColorBySpeed()
  var i8253 = data
  i8252.enabled = !!i8253[0]
  i8252.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8253[1], i8252.color)
  i8252.range = new pc.Vec2( i8253[2], i8253[3] )
  return i8252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8257 = data
  i8256.color = new pc.Color(i8257[0], i8257[1], i8257[2], i8257[3])
  i8256.time = i8257[4]
  return i8256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8261 = data
  i8260.alpha = i8261[0]
  i8260.time = i8261[1]
  return i8260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8262 = root || new pc.ParticleSystemColorOverLifetime()
  var i8263 = data
  i8262.enabled = !!i8263[0]
  i8262.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8263[1], i8262.color)
  return i8262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8264 = root || new pc.ParticleSystemEmitter()
  var i8265 = data
  i8264.enabled = !!i8265[0]
  i8264.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8265[1], i8264.rateOverTime)
  i8264.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8265[2], i8264.rateOverDistance)
  var i8267 = i8265[3]
  var i8266 = []
  for(var i = 0; i < i8267.length; i += 1) {
    i8266.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8267[i + 0]) );
  }
  i8264.bursts = i8266
  return i8264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8270 = root || new pc.ParticleSystemBurst()
  var i8271 = data
  i8270.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8271[0], i8270.count)
  i8270.cycleCount = i8271[1]
  i8270.minCount = i8271[2]
  i8270.maxCount = i8271[3]
  i8270.repeatInterval = i8271[4]
  i8270.time = i8271[5]
  return i8270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8272 = root || new pc.ParticleSystemRotationBySpeed()
  var i8273 = data
  i8272.enabled = !!i8273[0]
  i8272.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8273[1], i8272.x)
  i8272.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8273[2], i8272.y)
  i8272.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8273[3], i8272.z)
  i8272.separateAxes = !!i8273[4]
  i8272.range = new pc.Vec2( i8273[5], i8273[6] )
  return i8272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8274 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8275 = data
  i8274.enabled = !!i8275[0]
  i8274.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8275[1], i8274.x)
  i8274.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8275[2], i8274.y)
  i8274.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8275[3], i8274.z)
  i8274.separateAxes = !!i8275[4]
  return i8274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8276 = root || new pc.ParticleSystemShape()
  var i8277 = data
  i8276.enabled = !!i8277[0]
  i8276.shapeType = i8277[1]
  i8276.randomDirectionAmount = i8277[2]
  i8276.sphericalDirectionAmount = i8277[3]
  i8276.randomPositionAmount = i8277[4]
  i8276.alignToDirection = !!i8277[5]
  i8276.radius = i8277[6]
  i8276.radiusMode = i8277[7]
  i8276.radiusSpread = i8277[8]
  i8276.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8277[9], i8276.radiusSpeed)
  i8276.radiusThickness = i8277[10]
  i8276.angle = i8277[11]
  i8276.length = i8277[12]
  i8276.boxThickness = new pc.Vec3( i8277[13], i8277[14], i8277[15] )
  i8276.meshShapeType = i8277[16]
  request.r(i8277[17], i8277[18], 0, i8276, 'mesh')
  request.r(i8277[19], i8277[20], 0, i8276, 'meshRenderer')
  request.r(i8277[21], i8277[22], 0, i8276, 'skinnedMeshRenderer')
  i8276.useMeshMaterialIndex = !!i8277[23]
  i8276.meshMaterialIndex = i8277[24]
  i8276.useMeshColors = !!i8277[25]
  i8276.normalOffset = i8277[26]
  i8276.arc = i8277[27]
  i8276.arcMode = i8277[28]
  i8276.arcSpread = i8277[29]
  i8276.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8277[30], i8276.arcSpeed)
  i8276.donutRadius = i8277[31]
  i8276.position = new pc.Vec3( i8277[32], i8277[33], i8277[34] )
  i8276.rotation = new pc.Vec3( i8277[35], i8277[36], i8277[37] )
  i8276.scale = new pc.Vec3( i8277[38], i8277[39], i8277[40] )
  return i8276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8278 = root || new pc.ParticleSystemSizeBySpeed()
  var i8279 = data
  i8278.enabled = !!i8279[0]
  i8278.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8279[1], i8278.x)
  i8278.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8279[2], i8278.y)
  i8278.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8279[3], i8278.z)
  i8278.separateAxes = !!i8279[4]
  i8278.range = new pc.Vec2( i8279[5], i8279[6] )
  return i8278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8280 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8281 = data
  i8280.enabled = !!i8281[0]
  i8280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[1], i8280.x)
  i8280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[2], i8280.y)
  i8280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[3], i8280.z)
  i8280.separateAxes = !!i8281[4]
  return i8280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8282 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8283 = data
  i8282.enabled = !!i8283[0]
  i8282.mode = i8283[1]
  i8282.animation = i8283[2]
  i8282.numTilesX = i8283[3]
  i8282.numTilesY = i8283[4]
  i8282.useRandomRow = !!i8283[5]
  i8282.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8283[6], i8282.frameOverTime)
  i8282.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8283[7], i8282.startFrame)
  i8282.cycleCount = i8283[8]
  i8282.rowIndex = i8283[9]
  i8282.flipU = i8283[10]
  i8282.flipV = i8283[11]
  i8282.spriteCount = i8283[12]
  var i8285 = i8283[13]
  var i8284 = []
  for(var i = 0; i < i8285.length; i += 2) {
  request.r(i8285[i + 0], i8285[i + 1], 2, i8284, '')
  }
  i8282.sprites = i8284
  return i8282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8288 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8289 = data
  i8288.enabled = !!i8289[0]
  i8288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[1], i8288.x)
  i8288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[2], i8288.y)
  i8288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[3], i8288.z)
  i8288.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[4], i8288.radial)
  i8288.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[5], i8288.speedModifier)
  i8288.space = i8289[6]
  i8288.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[7], i8288.orbitalX)
  i8288.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[8], i8288.orbitalY)
  i8288.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[9], i8288.orbitalZ)
  i8288.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[10], i8288.orbitalOffsetX)
  i8288.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[11], i8288.orbitalOffsetY)
  i8288.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[12], i8288.orbitalOffsetZ)
  return i8288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8290 = root || new pc.ParticleSystemNoise()
  var i8291 = data
  i8290.enabled = !!i8291[0]
  i8290.separateAxes = !!i8291[1]
  i8290.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[2], i8290.strengthX)
  i8290.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[3], i8290.strengthY)
  i8290.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[4], i8290.strengthZ)
  i8290.frequency = i8291[5]
  i8290.damping = !!i8291[6]
  i8290.octaveCount = i8291[7]
  i8290.octaveMultiplier = i8291[8]
  i8290.octaveScale = i8291[9]
  i8290.quality = i8291[10]
  i8290.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[11], i8290.scrollSpeed)
  i8290.scrollSpeedMultiplier = i8291[12]
  i8290.remapEnabled = !!i8291[13]
  i8290.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[14], i8290.remapX)
  i8290.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[15], i8290.remapY)
  i8290.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[16], i8290.remapZ)
  i8290.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[17], i8290.positionAmount)
  i8290.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[18], i8290.rotationAmount)
  i8290.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[19], i8290.sizeAmount)
  return i8290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8292 = root || new pc.ParticleSystemInheritVelocity()
  var i8293 = data
  i8292.enabled = !!i8293[0]
  i8292.mode = i8293[1]
  i8292.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8293[2], i8292.curve)
  return i8292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8294 = root || new pc.ParticleSystemForceOverLifetime()
  var i8295 = data
  i8294.enabled = !!i8295[0]
  i8294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[1], i8294.x)
  i8294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[2], i8294.y)
  i8294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[3], i8294.z)
  i8294.space = i8295[4]
  i8294.randomized = !!i8295[5]
  return i8294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8296 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8297 = data
  i8296.enabled = !!i8297[0]
  i8296.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[1], i8296.limit)
  i8296.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[2], i8296.limitX)
  i8296.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[3], i8296.limitY)
  i8296.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[4], i8296.limitZ)
  i8296.dampen = i8297[5]
  i8296.separateAxes = !!i8297[6]
  i8296.space = i8297[7]
  i8296.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[8], i8296.drag)
  i8296.multiplyDragByParticleSize = !!i8297[9]
  i8296.multiplyDragByParticleVelocity = !!i8297[10]
  return i8296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8299 = data
  request.r(i8299[0], i8299[1], 0, i8298, 'mesh')
  i8298.meshCount = i8299[2]
  i8298.activeVertexStreamsCount = i8299[3]
  i8298.alignment = i8299[4]
  i8298.renderMode = i8299[5]
  i8298.sortMode = i8299[6]
  i8298.lengthScale = i8299[7]
  i8298.velocityScale = i8299[8]
  i8298.cameraVelocityScale = i8299[9]
  i8298.normalDirection = i8299[10]
  i8298.sortingFudge = i8299[11]
  i8298.minParticleSize = i8299[12]
  i8298.maxParticleSize = i8299[13]
  i8298.pivot = new pc.Vec3( i8299[14], i8299[15], i8299[16] )
  request.r(i8299[17], i8299[18], 0, i8298, 'trailMaterial')
  i8298.applyActiveColorSpace = !!i8299[19]
  i8298.enabled = !!i8299[20]
  request.r(i8299[21], i8299[22], 0, i8298, 'sharedMaterial')
  var i8301 = i8299[23]
  var i8300 = []
  for(var i = 0; i < i8301.length; i += 2) {
  request.r(i8301[i + 0], i8301[i + 1], 2, i8300, '')
  }
  i8298.sharedMaterials = i8300
  i8298.receiveShadows = !!i8299[24]
  i8298.shadowCastingMode = i8299[25]
  i8298.sortingLayerID = i8299[26]
  i8298.sortingOrder = i8299[27]
  i8298.lightmapIndex = i8299[28]
  i8298.lightmapSceneIndex = i8299[29]
  i8298.lightmapScaleOffset = new pc.Vec4( i8299[30], i8299[31], i8299[32], i8299[33] )
  i8298.lightProbeUsage = i8299[34]
  i8298.reflectionProbeUsage = i8299[35]
  return i8298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i8302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i8303 = data
  i8302.center = new pc.Vec3( i8303[0], i8303[1], i8303[2] )
  i8302.radius = i8303[3]
  i8302.height = i8303[4]
  i8302.direction = i8303[5]
  i8302.enabled = !!i8303[6]
  i8302.isTrigger = !!i8303[7]
  request.r(i8303[8], i8303[9], 0, i8302, 'material')
  return i8302
}

Deserializers["ShieldScript"] = function (request, data, root) {
  var i8304 = root || request.c( 'ShieldScript' )
  var i8305 = data
  i8304.spinSpeed = i8305[0]
  i8304.zBound = i8305[1]
  i8304.speed = i8305[2]
  i8304.particleDuration = i8305[3]
  return i8304
}

Deserializers["Magnet"] = function (request, data, root) {
  var i8306 = root || request.c( 'Magnet' )
  var i8307 = data
  i8306.spinSpeed = i8307[0]
  i8306.zBound = i8307[1]
  i8306.speed = i8307[2]
  i8306.magnetDuration = i8307[3]
  return i8306
}

Deserializers["DoubleScore"] = function (request, data, root) {
  var i8308 = root || request.c( 'DoubleScore' )
  var i8309 = data
  i8308.spinSpeed = i8309[0]
  i8308.zBound = i8309[1]
  i8308.speed = i8309[2]
  i8308.particleDuration = i8309[3]
  return i8308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8311 = data
  request.r(i8311[0], i8311[1], 0, i8310, 'animatorController')
  request.r(i8311[2], i8311[3], 0, i8310, 'avatar')
  i8310.updateMode = i8311[4]
  i8310.hasTransformHierarchy = !!i8311[5]
  i8310.applyRootMotion = !!i8311[6]
  var i8313 = i8311[7]
  var i8312 = []
  for(var i = 0; i < i8313.length; i += 2) {
  request.r(i8313[i + 0], i8313[i + 1], 2, i8312, '')
  }
  i8310.humanBones = i8312
  i8310.enabled = !!i8311[8]
  return i8310
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i8316 = root || request.c( 'PlayerController' )
  var i8317 = data
  i8316.speed = i8317[0]
  i8316.jumpForce = i8317[1]
  i8316.xLeftRail = i8317[2]
  i8316.xRightRail = i8317[3]
  i8316.xMiddleRail = i8317[4]
  i8316.gravityModifier = i8317[5]
  request.r(i8317[6], i8317[7], 0, i8316, 'dirtParti')
  i8316.minSwipeDistance = i8317[8]
  i8316.maxSwipeTime = i8317[9]
  request.r(i8317[10], i8317[11], 0, i8316, 'audioSource')
  request.r(i8317[12], i8317[13], 0, i8316, 'jumpSound')
  request.r(i8317[14], i8317[15], 0, i8316, 'rollSound')
  request.r(i8317[16], i8317[17], 0, i8316, 'deathSound')
  return i8316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8319 = data
  request.r(i8319[0], i8319[1], 0, i8318, 'clip')
  request.r(i8319[2], i8319[3], 0, i8318, 'outputAudioMixerGroup')
  i8318.playOnAwake = !!i8319[4]
  i8318.loop = !!i8319[5]
  i8318.time = i8319[6]
  i8318.volume = i8319[7]
  i8318.pitch = i8319[8]
  i8318.enabled = !!i8319[9]
  return i8318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i8320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i8321 = data
  request.r(i8321[0], i8321[1], 0, i8320, 'sharedMesh')
  var i8323 = i8321[2]
  var i8322 = []
  for(var i = 0; i < i8323.length; i += 2) {
  request.r(i8323[i + 0], i8323[i + 1], 2, i8322, '')
  }
  i8320.bones = i8322
  i8320.updateWhenOffscreen = !!i8321[3]
  i8320.localBounds = i8321[4]
  request.r(i8321[5], i8321[6], 0, i8320, 'rootBone')
  var i8325 = i8321[7]
  var i8324 = []
  for(var i = 0; i < i8325.length; i += 1) {
    i8324.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i8325[i + 0]) );
  }
  i8320.blendShapesWeights = i8324
  i8320.enabled = !!i8321[8]
  request.r(i8321[9], i8321[10], 0, i8320, 'sharedMaterial')
  var i8327 = i8321[11]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 2) {
  request.r(i8327[i + 0], i8327[i + 1], 2, i8326, '')
  }
  i8320.sharedMaterials = i8326
  i8320.receiveShadows = !!i8321[12]
  i8320.shadowCastingMode = i8321[13]
  i8320.sortingLayerID = i8321[14]
  i8320.sortingOrder = i8321[15]
  i8320.lightmapIndex = i8321[16]
  i8320.lightmapSceneIndex = i8321[17]
  i8320.lightmapScaleOffset = new pc.Vec4( i8321[18], i8321[19], i8321[20], i8321[21] )
  i8320.lightProbeUsage = i8321[22]
  i8320.reflectionProbeUsage = i8321[23]
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i8330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i8331 = data
  i8330.weight = i8331[0]
  return i8330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8333 = data
  i8332.name = i8333[0]
  i8332.atlasId = i8333[1]
  i8332.mipmapCount = i8333[2]
  i8332.hdr = !!i8333[3]
  i8332.size = i8333[4]
  i8332.anisoLevel = i8333[5]
  i8332.filterMode = i8333[6]
  var i8335 = i8333[7]
  var i8334 = []
  for(var i = 0; i < i8335.length; i += 4) {
    i8334.push( UnityEngine.Rect.MinMaxRect(i8335[i + 0], i8335[i + 1], i8335[i + 2], i8335[i + 3]) );
  }
  i8332.rects = i8334
  i8332.wrapU = i8333[8]
  i8332.wrapV = i8333[9]
  return i8332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8339 = data
  i8338.name = i8339[0]
  i8338.index = i8339[1]
  i8338.startup = !!i8339[2]
  return i8338
}

Deserializers["GameManager"] = function (request, data, root) {
  var i8340 = root || request.c( 'GameManager' )
  var i8341 = data
  i8340.gameState = i8341[0]
  i8340.scorePer = i8341[1]
  i8340.FPS60 = !!i8341[2]
  request.r(i8341[3], i8341[4], 0, i8340, 'scoreText')
  request.r(i8341[5], i8341[6], 0, i8340, 'coinText')
  request.r(i8341[7], i8341[8], 0, i8340, 'multipleText')
  request.r(i8341[9], i8341[10], 0, i8340, 'activePowerUpsText')
  request.r(i8341[11], i8341[12], 0, i8340, 'gameOverPanel')
  request.r(i8341[13], i8341[14], 0, i8340, 'gamePlayingPanel')
  request.r(i8341[15], i8341[16], 0, i8340, 'gameStartPanel')
  i8340.initialRepeatRate = i8341[17]
  i8340.minRepeatRate = i8341[18]
  i8340.rateDecreaseInterval = i8341[19]
  i8340.rateDecreaseAmount = i8341[20]
  return i8340
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i8342 = root || request.c( 'SpawnManager' )
  var i8343 = data
  var i8345 = i8343[0]
  var i8344 = []
  for(var i = 0; i < i8345.length; i += 2) {
  request.r(i8345[i + 0], i8345[i + 1], 2, i8344, '')
  }
  i8342.obstaclePrefabs = i8344
  var i8347 = i8343[1]
  var i8346 = []
  for(var i = 0; i < i8347.length; i += 2) {
  request.r(i8347[i + 0], i8347[i + 1], 2, i8346, '')
  }
  i8342.coinPrefabs = i8346
  var i8349 = i8343[2]
  var i8348 = []
  for(var i = 0; i < i8349.length; i += 2) {
  request.r(i8349[i + 0], i8349[i + 1], 2, i8348, '')
  }
  i8342.powerUpPrefabs = i8348
  i8342.startDelay = i8343[3]
  i8342.coinSpacing = i8343[4]
  i8342.spawnZPosition = i8343[5]
  i8342.xSpawnPos = i8343[6]
  i8342.minCoinCount = i8343[7]
  i8342.maxCoinCount = i8343[8]
  return i8342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8353 = data
  i8352.aspect = i8353[0]
  i8352.orthographic = !!i8353[1]
  i8352.orthographicSize = i8353[2]
  i8352.backgroundColor = new pc.Color(i8353[3], i8353[4], i8353[5], i8353[6])
  i8352.nearClipPlane = i8353[7]
  i8352.farClipPlane = i8353[8]
  i8352.fieldOfView = i8353[9]
  i8352.depth = i8353[10]
  i8352.clearFlags = i8353[11]
  i8352.cullingMask = i8353[12]
  i8352.rect = i8353[13]
  request.r(i8353[14], i8353[15], 0, i8352, 'targetTexture')
  i8352.usePhysicalProperties = !!i8353[16]
  i8352.focalLength = i8353[17]
  i8352.sensorSize = new pc.Vec2( i8353[18], i8353[19] )
  i8352.lensShift = new pc.Vec2( i8353[20], i8353[21] )
  i8352.gateFit = i8353[22]
  i8352.commandBufferCount = i8353[23]
  i8352.cameraType = i8353[24]
  i8352.enabled = !!i8353[25]
  return i8352
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i8354 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i8355 = data
  i8354.m_RenderShadows = !!i8355[0]
  i8354.m_RequiresDepthTextureOption = i8355[1]
  i8354.m_RequiresOpaqueTextureOption = i8355[2]
  i8354.m_CameraType = i8355[3]
  var i8357 = i8355[4]
  var i8356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i8357.length; i += 2) {
  request.r(i8357[i + 0], i8357[i + 1], 1, i8356, '')
  }
  i8354.m_Cameras = i8356
  i8354.m_RendererIndex = i8355[5]
  i8354.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i8355[6] )
  request.r(i8355[7], i8355[8], 0, i8354, 'm_VolumeTrigger')
  i8354.m_VolumeFrameworkUpdateModeOption = i8355[9]
  i8354.m_RenderPostProcessing = !!i8355[10]
  i8354.m_Antialiasing = i8355[11]
  i8354.m_AntialiasingQuality = i8355[12]
  i8354.m_StopNaN = !!i8355[13]
  i8354.m_Dithering = !!i8355[14]
  i8354.m_ClearDepth = !!i8355[15]
  i8354.m_AllowXRRendering = !!i8355[16]
  i8354.m_AllowHDROutput = !!i8355[17]
  i8354.m_UseScreenCoordOverride = !!i8355[18]
  i8354.m_ScreenSizeOverride = new pc.Vec4( i8355[19], i8355[20], i8355[21], i8355[22] )
  i8354.m_ScreenCoordScaleBias = new pc.Vec4( i8355[23], i8355[24], i8355[25], i8355[26] )
  i8354.m_RequiresDepthTexture = !!i8355[27]
  i8354.m_RequiresColorTexture = !!i8355[28]
  i8354.m_Version = i8355[29]
  i8354.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i8355[30], i8354.m_TaaSettings)
  return i8354
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i8360 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i8361 = data
  i8360.m_Quality = i8361[0]
  i8360.m_FrameInfluence = i8361[1]
  i8360.m_JitterScale = i8361[2]
  i8360.m_MipBias = i8361[3]
  i8360.m_VarianceClampScale = i8361[4]
  i8360.m_ContrastAdaptiveSharpening = i8361[5]
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8363 = data
  i8362.type = i8363[0]
  i8362.color = new pc.Color(i8363[1], i8363[2], i8363[3], i8363[4])
  i8362.cullingMask = i8363[5]
  i8362.intensity = i8363[6]
  i8362.range = i8363[7]
  i8362.spotAngle = i8363[8]
  i8362.shadows = i8363[9]
  i8362.shadowNormalBias = i8363[10]
  i8362.shadowBias = i8363[11]
  i8362.shadowStrength = i8363[12]
  i8362.shadowResolution = i8363[13]
  i8362.lightmapBakeType = i8363[14]
  i8362.renderMode = i8363[15]
  request.r(i8363[16], i8363[17], 0, i8362, 'cookie')
  i8362.cookieSize = i8363[18]
  i8362.shadowNearPlane = i8363[19]
  i8362.occlusionMaskChannel = i8363[20]
  i8362.enabled = !!i8363[21]
  return i8362
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i8364 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i8365 = data
  i8364.m_Version = i8365[0]
  i8364.m_UsePipelineSettings = !!i8365[1]
  i8364.m_AdditionalLightsShadowResolutionTier = i8365[2]
  i8364.m_LightLayerMask = i8365[3]
  i8364.m_RenderingLayers = i8365[4]
  i8364.m_CustomShadowLayers = !!i8365[5]
  i8364.m_ShadowLayerMask = i8365[6]
  i8364.m_ShadowRenderingLayers = i8365[7]
  i8364.m_LightCookieSize = new pc.Vec2( i8365[8], i8365[9] )
  i8364.m_LightCookieOffset = new pc.Vec2( i8365[10], i8365[11] )
  i8364.m_SoftShadowQuality = i8365[12]
  return i8364
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i8366 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i8367 = data
  i8366.priority = i8367[0]
  i8366.blendDistance = i8367[1]
  i8366.weight = i8367[2]
  request.r(i8367[3], i8367[4], 0, i8366, 'sharedProfile')
  i8366.m_IsGlobal = !!i8367[5]
  return i8366
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8368 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8369 = data
  request.r(i8369[0], i8369[1], 0, i8368, 'm_FirstSelected')
  i8368.m_sendNavigationEvents = !!i8369[2]
  i8368.m_DragThreshold = i8369[3]
  return i8368
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i8370 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i8371 = data
  i8370.m_MoveRepeatDelay = i8371[0]
  i8370.m_MoveRepeatRate = i8371[1]
  request.r(i8371[2], i8371[3], 0, i8370, 'm_XRTrackingOrigin')
  request.r(i8371[4], i8371[5], 0, i8370, 'm_ActionsAsset')
  request.r(i8371[6], i8371[7], 0, i8370, 'm_PointAction')
  request.r(i8371[8], i8371[9], 0, i8370, 'm_MoveAction')
  request.r(i8371[10], i8371[11], 0, i8370, 'm_SubmitAction')
  request.r(i8371[12], i8371[13], 0, i8370, 'm_CancelAction')
  request.r(i8371[14], i8371[15], 0, i8370, 'm_LeftClickAction')
  request.r(i8371[16], i8371[17], 0, i8370, 'm_MiddleClickAction')
  request.r(i8371[18], i8371[19], 0, i8370, 'm_RightClickAction')
  request.r(i8371[20], i8371[21], 0, i8370, 'm_ScrollWheelAction')
  request.r(i8371[22], i8371[23], 0, i8370, 'm_TrackedDevicePositionAction')
  request.r(i8371[24], i8371[25], 0, i8370, 'm_TrackedDeviceOrientationAction')
  i8370.m_DeselectOnBackgroundClick = !!i8371[26]
  i8370.m_PointerBehavior = i8371[27]
  i8370.m_CursorLockBehavior = i8371[28]
  i8370.m_ScrollDeltaPerTick = i8371[29]
  i8370.m_SendPointerHoverToParent = !!i8371[30]
  return i8370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8373 = data
  i8372.pivot = new pc.Vec2( i8373[0], i8373[1] )
  i8372.anchorMin = new pc.Vec2( i8373[2], i8373[3] )
  i8372.anchorMax = new pc.Vec2( i8373[4], i8373[5] )
  i8372.sizeDelta = new pc.Vec2( i8373[6], i8373[7] )
  i8372.anchoredPosition3D = new pc.Vec3( i8373[8], i8373[9], i8373[10] )
  i8372.rotation = new pc.Quat(i8373[11], i8373[12], i8373[13], i8373[14])
  i8372.scale = new pc.Vec3( i8373[15], i8373[16], i8373[17] )
  return i8372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8375 = data
  i8374.planeDistance = i8375[0]
  i8374.referencePixelsPerUnit = i8375[1]
  i8374.isFallbackOverlay = !!i8375[2]
  i8374.renderMode = i8375[3]
  i8374.renderOrder = i8375[4]
  i8374.sortingLayerName = i8375[5]
  i8374.sortingOrder = i8375[6]
  i8374.scaleFactor = i8375[7]
  request.r(i8375[8], i8375[9], 0, i8374, 'worldCamera')
  i8374.overrideSorting = !!i8375[10]
  i8374.pixelPerfect = !!i8375[11]
  i8374.targetDisplay = i8375[12]
  i8374.overridePixelPerfect = !!i8375[13]
  i8374.enabled = !!i8375[14]
  return i8374
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8376 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8377 = data
  i8376.m_UiScaleMode = i8377[0]
  i8376.m_ReferencePixelsPerUnit = i8377[1]
  i8376.m_ScaleFactor = i8377[2]
  i8376.m_ReferenceResolution = new pc.Vec2( i8377[3], i8377[4] )
  i8376.m_ScreenMatchMode = i8377[5]
  i8376.m_MatchWidthOrHeight = i8377[6]
  i8376.m_PhysicalUnit = i8377[7]
  i8376.m_FallbackScreenDPI = i8377[8]
  i8376.m_DefaultSpriteDPI = i8377[9]
  i8376.m_DynamicPixelsPerUnit = i8377[10]
  i8376.m_PresetInfoIsWorld = !!i8377[11]
  return i8376
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8378 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8379 = data
  i8378.m_IgnoreReversedGraphics = !!i8379[0]
  i8378.m_BlockingObjects = i8379[1]
  i8378.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8379[2] )
  return i8378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8381 = data
  i8380.cullTransparentMesh = !!i8381[0]
  return i8380
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8382 = root || request.c( 'UnityEngine.UI.Image' )
  var i8383 = data
  request.r(i8383[0], i8383[1], 0, i8382, 'm_Sprite')
  i8382.m_Type = i8383[2]
  i8382.m_PreserveAspect = !!i8383[3]
  i8382.m_FillCenter = !!i8383[4]
  i8382.m_FillMethod = i8383[5]
  i8382.m_FillAmount = i8383[6]
  i8382.m_FillClockwise = !!i8383[7]
  i8382.m_FillOrigin = i8383[8]
  i8382.m_UseSpriteMesh = !!i8383[9]
  i8382.m_PixelsPerUnitMultiplier = i8383[10]
  request.r(i8383[11], i8383[12], 0, i8382, 'm_Material')
  i8382.m_Maskable = !!i8383[13]
  i8382.m_Color = new pc.Color(i8383[14], i8383[15], i8383[16], i8383[17])
  i8382.m_RaycastTarget = !!i8383[18]
  i8382.m_RaycastPadding = new pc.Vec4( i8383[19], i8383[20], i8383[21], i8383[22] )
  return i8382
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8384 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8385 = data
  i8384.m_hasFontAssetChanged = !!i8385[0]
  request.r(i8385[1], i8385[2], 0, i8384, 'm_baseMaterial')
  i8384.m_maskOffset = new pc.Vec4( i8385[3], i8385[4], i8385[5], i8385[6] )
  i8384.m_text = i8385[7]
  i8384.m_isRightToLeft = !!i8385[8]
  request.r(i8385[9], i8385[10], 0, i8384, 'm_fontAsset')
  request.r(i8385[11], i8385[12], 0, i8384, 'm_sharedMaterial')
  var i8387 = i8385[13]
  var i8386 = []
  for(var i = 0; i < i8387.length; i += 2) {
  request.r(i8387[i + 0], i8387[i + 1], 2, i8386, '')
  }
  i8384.m_fontSharedMaterials = i8386
  request.r(i8385[14], i8385[15], 0, i8384, 'm_fontMaterial')
  var i8389 = i8385[16]
  var i8388 = []
  for(var i = 0; i < i8389.length; i += 2) {
  request.r(i8389[i + 0], i8389[i + 1], 2, i8388, '')
  }
  i8384.m_fontMaterials = i8388
  i8384.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8385[17], i8385[18], i8385[19], i8385[20])
  i8384.m_fontColor = new pc.Color(i8385[21], i8385[22], i8385[23], i8385[24])
  i8384.m_enableVertexGradient = !!i8385[25]
  i8384.m_colorMode = i8385[26]
  i8384.m_fontColorGradient = request.d('TMPro.VertexGradient', i8385[27], i8384.m_fontColorGradient)
  request.r(i8385[28], i8385[29], 0, i8384, 'm_fontColorGradientPreset')
  request.r(i8385[30], i8385[31], 0, i8384, 'm_spriteAsset')
  i8384.m_tintAllSprites = !!i8385[32]
  request.r(i8385[33], i8385[34], 0, i8384, 'm_StyleSheet')
  i8384.m_TextStyleHashCode = i8385[35]
  i8384.m_overrideHtmlColors = !!i8385[36]
  i8384.m_faceColor = UnityEngine.Color32.ConstructColor(i8385[37], i8385[38], i8385[39], i8385[40])
  i8384.m_fontSize = i8385[41]
  i8384.m_fontSizeBase = i8385[42]
  i8384.m_fontWeight = i8385[43]
  i8384.m_enableAutoSizing = !!i8385[44]
  i8384.m_fontSizeMin = i8385[45]
  i8384.m_fontSizeMax = i8385[46]
  i8384.m_fontStyle = i8385[47]
  i8384.m_HorizontalAlignment = i8385[48]
  i8384.m_VerticalAlignment = i8385[49]
  i8384.m_textAlignment = i8385[50]
  i8384.m_characterSpacing = i8385[51]
  i8384.m_wordSpacing = i8385[52]
  i8384.m_lineSpacing = i8385[53]
  i8384.m_lineSpacingMax = i8385[54]
  i8384.m_paragraphSpacing = i8385[55]
  i8384.m_charWidthMaxAdj = i8385[56]
  i8384.m_enableWordWrapping = !!i8385[57]
  i8384.m_wordWrappingRatios = i8385[58]
  i8384.m_overflowMode = i8385[59]
  request.r(i8385[60], i8385[61], 0, i8384, 'm_linkedTextComponent')
  request.r(i8385[62], i8385[63], 0, i8384, 'parentLinkedComponent')
  i8384.m_enableKerning = !!i8385[64]
  i8384.m_enableExtraPadding = !!i8385[65]
  i8384.checkPaddingRequired = !!i8385[66]
  i8384.m_isRichText = !!i8385[67]
  i8384.m_parseCtrlCharacters = !!i8385[68]
  i8384.m_isOrthographic = !!i8385[69]
  i8384.m_isCullingEnabled = !!i8385[70]
  i8384.m_horizontalMapping = i8385[71]
  i8384.m_verticalMapping = i8385[72]
  i8384.m_uvLineOffset = i8385[73]
  i8384.m_geometrySortingOrder = i8385[74]
  i8384.m_IsTextObjectScaleStatic = !!i8385[75]
  i8384.m_VertexBufferAutoSizeReduction = !!i8385[76]
  i8384.m_useMaxVisibleDescender = !!i8385[77]
  i8384.m_pageToDisplay = i8385[78]
  i8384.m_margin = new pc.Vec4( i8385[79], i8385[80], i8385[81], i8385[82] )
  i8384.m_isUsingLegacyAnimationComponent = !!i8385[83]
  i8384.m_isVolumetricText = !!i8385[84]
  request.r(i8385[85], i8385[86], 0, i8384, 'm_Material')
  i8384.m_Maskable = !!i8385[87]
  i8384.m_Color = new pc.Color(i8385[88], i8385[89], i8385[90], i8385[91])
  i8384.m_RaycastTarget = !!i8385[92]
  i8384.m_RaycastPadding = new pc.Vec4( i8385[93], i8385[94], i8385[95], i8385[96] )
  return i8384
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8390 = root || request.c( 'TMPro.VertexGradient' )
  var i8391 = data
  i8390.topLeft = new pc.Color(i8391[0], i8391[1], i8391[2], i8391[3])
  i8390.topRight = new pc.Color(i8391[4], i8391[5], i8391[6], i8391[7])
  i8390.bottomLeft = new pc.Color(i8391[8], i8391[9], i8391[10], i8391[11])
  i8390.bottomRight = new pc.Color(i8391[12], i8391[13], i8391[14], i8391[15])
  return i8390
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8392 = root || request.c( 'UnityEngine.UI.Button' )
  var i8393 = data
  i8392.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8393[0], i8392.m_OnClick)
  i8392.m_Navigation = request.d('UnityEngine.UI.Navigation', i8393[1], i8392.m_Navigation)
  i8392.m_Transition = i8393[2]
  i8392.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8393[3], i8392.m_Colors)
  i8392.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8393[4], i8392.m_SpriteState)
  i8392.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8393[5], i8392.m_AnimationTriggers)
  i8392.m_Interactable = !!i8393[6]
  request.r(i8393[7], i8393[8], 0, i8392, 'm_TargetGraphic')
  return i8392
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8394 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8395 = data
  i8394.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8395[0], i8394.m_PersistentCalls)
  return i8394
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8396 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8397 = data
  var i8399 = i8397[0]
  var i8398 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8399.length; i += 1) {
    i8398.add(request.d('UnityEngine.Events.PersistentCall', i8399[i + 0]));
  }
  i8396.m_Calls = i8398
  return i8396
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8402 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8403 = data
  request.r(i8403[0], i8403[1], 0, i8402, 'm_Target')
  i8402.m_TargetAssemblyTypeName = i8403[2]
  i8402.m_MethodName = i8403[3]
  i8402.m_Mode = i8403[4]
  i8402.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8403[5], i8402.m_Arguments)
  i8402.m_CallState = i8403[6]
  return i8402
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8404 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8405 = data
  request.r(i8405[0], i8405[1], 0, i8404, 'm_ObjectArgument')
  i8404.m_ObjectArgumentAssemblyTypeName = i8405[2]
  i8404.m_IntArgument = i8405[3]
  i8404.m_FloatArgument = i8405[4]
  i8404.m_StringArgument = i8405[5]
  i8404.m_BoolArgument = !!i8405[6]
  return i8404
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8406 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8407 = data
  i8406.m_Mode = i8407[0]
  i8406.m_WrapAround = !!i8407[1]
  request.r(i8407[2], i8407[3], 0, i8406, 'm_SelectOnUp')
  request.r(i8407[4], i8407[5], 0, i8406, 'm_SelectOnDown')
  request.r(i8407[6], i8407[7], 0, i8406, 'm_SelectOnLeft')
  request.r(i8407[8], i8407[9], 0, i8406, 'm_SelectOnRight')
  return i8406
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8408 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8409 = data
  i8408.m_NormalColor = new pc.Color(i8409[0], i8409[1], i8409[2], i8409[3])
  i8408.m_HighlightedColor = new pc.Color(i8409[4], i8409[5], i8409[6], i8409[7])
  i8408.m_PressedColor = new pc.Color(i8409[8], i8409[9], i8409[10], i8409[11])
  i8408.m_SelectedColor = new pc.Color(i8409[12], i8409[13], i8409[14], i8409[15])
  i8408.m_DisabledColor = new pc.Color(i8409[16], i8409[17], i8409[18], i8409[19])
  i8408.m_ColorMultiplier = i8409[20]
  i8408.m_FadeDuration = i8409[21]
  return i8408
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8410 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8411 = data
  request.r(i8411[0], i8411[1], 0, i8410, 'm_HighlightedSprite')
  request.r(i8411[2], i8411[3], 0, i8410, 'm_PressedSprite')
  request.r(i8411[4], i8411[5], 0, i8410, 'm_SelectedSprite')
  request.r(i8411[6], i8411[7], 0, i8410, 'm_DisabledSprite')
  return i8410
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8412 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8413 = data
  i8412.m_NormalTrigger = i8413[0]
  i8412.m_HighlightedTrigger = i8413[1]
  i8412.m_PressedTrigger = i8413[2]
  i8412.m_SelectedTrigger = i8413[3]
  i8412.m_DisabledTrigger = i8413[4]
  return i8412
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i8414 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i8415 = data
  i8414.m_Spacing = i8415[0]
  i8414.m_ChildForceExpandWidth = !!i8415[1]
  i8414.m_ChildForceExpandHeight = !!i8415[2]
  i8414.m_ChildControlWidth = !!i8415[3]
  i8414.m_ChildControlHeight = !!i8415[4]
  i8414.m_ChildScaleWidth = !!i8415[5]
  i8414.m_ChildScaleHeight = !!i8415[6]
  i8414.m_ReverseArrangement = !!i8415[7]
  i8414.m_Padding = UnityEngine.RectOffset.FromPaddings(i8415[8], i8415[9], i8415[10], i8415[11])
  i8414.m_ChildAlignment = i8415[12]
  return i8414
}

Deserializers["RoadScript"] = function (request, data, root) {
  var i8416 = root || request.c( 'RoadScript' )
  var i8417 = data
  i8416.zBound = i8417[0]
  i8416.speed = i8417[1]
  return i8416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8419 = data
  i8418.ambientIntensity = i8419[0]
  i8418.reflectionIntensity = i8419[1]
  i8418.ambientMode = i8419[2]
  i8418.ambientLight = new pc.Color(i8419[3], i8419[4], i8419[5], i8419[6])
  i8418.ambientSkyColor = new pc.Color(i8419[7], i8419[8], i8419[9], i8419[10])
  i8418.ambientGroundColor = new pc.Color(i8419[11], i8419[12], i8419[13], i8419[14])
  i8418.ambientEquatorColor = new pc.Color(i8419[15], i8419[16], i8419[17], i8419[18])
  i8418.fogColor = new pc.Color(i8419[19], i8419[20], i8419[21], i8419[22])
  i8418.fogEndDistance = i8419[23]
  i8418.fogStartDistance = i8419[24]
  i8418.fogDensity = i8419[25]
  i8418.fog = !!i8419[26]
  request.r(i8419[27], i8419[28], 0, i8418, 'skybox')
  i8418.fogMode = i8419[29]
  var i8421 = i8419[30]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8421[i + 0]) );
  }
  i8418.lightmaps = i8420
  i8418.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8419[31], i8418.lightProbes)
  i8418.lightmapsMode = i8419[32]
  i8418.mixedBakeMode = i8419[33]
  i8418.environmentLightingMode = i8419[34]
  i8418.ambientProbe = new pc.SphericalHarmonicsL2(i8419[35])
  i8418.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8419[36])
  i8418.useReferenceAmbientProbe = !!i8419[37]
  request.r(i8419[38], i8419[39], 0, i8418, 'customReflection')
  request.r(i8419[40], i8419[41], 0, i8418, 'defaultReflection')
  i8418.defaultReflectionMode = i8419[42]
  i8418.defaultReflectionResolution = i8419[43]
  i8418.sunLightObjectId = i8419[44]
  i8418.pixelLightCount = i8419[45]
  i8418.defaultReflectionHDR = !!i8419[46]
  i8418.hasLightDataAsset = !!i8419[47]
  i8418.hasManualGenerate = !!i8419[48]
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8425 = data
  request.r(i8425[0], i8425[1], 0, i8424, 'lightmapColor')
  request.r(i8425[2], i8425[3], 0, i8424, 'lightmapDirection')
  request.r(i8425[4], i8425[5], 0, i8424, 'shadowMask')
  return i8424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8426 = root || new UnityEngine.LightProbes()
  var i8427 = data
  return i8426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i8434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i8435 = data
  i8434.AdditionalLightsRenderingMode = i8435[0]
  i8434.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i8435[1], i8434.LightRenderingMode)
  i8434.MainLightRenderingModeValue = i8435[2]
  i8434.SupportsMainLightShadows = !!i8435[3]
  i8434.MainLightShadowmapResolutionValue = i8435[4]
  i8434.SupportsSoftShadows = !!i8435[5]
  i8434.SoftShadowQualityValue = i8435[6]
  i8434.ShadowDistance = i8435[7]
  i8434.ShadowCascadeCount = i8435[8]
  i8434.Cascade2Split = i8435[9]
  i8434.Cascade3Split = new pc.Vec2( i8435[10], i8435[11] )
  i8434.Cascade4Split = new pc.Vec3( i8435[12], i8435[13], i8435[14] )
  i8434.CascadeBorder = i8435[15]
  i8434.ShadowDepthBias = i8435[16]
  i8434.ShadowNormalBias = i8435[17]
  i8434.RequireDepthTexture = !!i8435[18]
  i8434.RequireOpaqueTexture = !!i8435[19]
  i8434.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i8435[20], i8434.scriptableRendererData)
  return i8434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i8436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i8437 = data
  i8436.Disabled = i8437[0]
  i8436.PerVertex = i8437[1]
  i8436.PerPixel = i8437[2]
  return i8436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i8438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i8439 = data
  i8438.opaqueLayerMask = i8439[0]
  i8438.transparentLayerMask = i8439[1]
  var i8441 = i8439[2]
  var i8440 = []
  for(var i = 0; i < i8441.length; i += 1) {
    i8440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i8441[i + 0]) );
  }
  i8438.RenderObjectsFeatures = i8440
  i8438.name = i8439[3]
  return i8438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i8444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i8445 = data
  i8444.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i8445[0], i8444.settings)
  i8444.name = i8445[1]
  i8444.typeName = i8445[2]
  return i8444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8447 = data
  var i8449 = i8447[0]
  var i8448 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8449.length; i += 1) {
    i8448.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8449[i + 0]));
  }
  i8446.ShaderCompilationErrors = i8448
  i8446.name = i8447[1]
  i8446.guid = i8447[2]
  var i8451 = i8447[3]
  var i8450 = []
  for(var i = 0; i < i8451.length; i += 1) {
    i8450.push( i8451[i + 0] );
  }
  i8446.shaderDefinedKeywords = i8450
  var i8453 = i8447[4]
  var i8452 = []
  for(var i = 0; i < i8453.length; i += 1) {
    i8452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8453[i + 0]) );
  }
  i8446.passes = i8452
  var i8455 = i8447[5]
  var i8454 = []
  for(var i = 0; i < i8455.length; i += 1) {
    i8454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8455[i + 0]) );
  }
  i8446.usePasses = i8454
  var i8457 = i8447[6]
  var i8456 = []
  for(var i = 0; i < i8457.length; i += 1) {
    i8456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8457[i + 0]) );
  }
  i8446.defaultParameterValues = i8456
  request.r(i8447[7], i8447[8], 0, i8446, 'unityFallbackShader')
  i8446.readDepth = !!i8447[9]
  i8446.hasDepthOnlyPass = !!i8447[10]
  i8446.isCreatedByShaderGraph = !!i8447[11]
  i8446.disableBatching = !!i8447[12]
  i8446.compiled = !!i8447[13]
  return i8446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8461 = data
  i8460.shaderName = i8461[0]
  i8460.errorMessage = i8461[1]
  return i8460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8466 = root || new pc.UnityShaderPass()
  var i8467 = data
  i8466.id = i8467[0]
  i8466.subShaderIndex = i8467[1]
  i8466.name = i8467[2]
  i8466.passType = i8467[3]
  i8466.grabPassTextureName = i8467[4]
  i8466.usePass = !!i8467[5]
  i8466.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[6], i8466.zTest)
  i8466.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[7], i8466.zWrite)
  i8466.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[8], i8466.culling)
  i8466.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8467[9], i8466.blending)
  i8466.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8467[10], i8466.alphaBlending)
  i8466.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[11], i8466.colorWriteMask)
  i8466.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[12], i8466.offsetUnits)
  i8466.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[13], i8466.offsetFactor)
  i8466.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[14], i8466.stencilRef)
  i8466.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[15], i8466.stencilReadMask)
  i8466.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8467[16], i8466.stencilWriteMask)
  i8466.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8467[17], i8466.stencilOp)
  i8466.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8467[18], i8466.stencilOpFront)
  i8466.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8467[19], i8466.stencilOpBack)
  var i8469 = i8467[20]
  var i8468 = []
  for(var i = 0; i < i8469.length; i += 1) {
    i8468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8469[i + 0]) );
  }
  i8466.tags = i8468
  var i8471 = i8467[21]
  var i8470 = []
  for(var i = 0; i < i8471.length; i += 1) {
    i8470.push( i8471[i + 0] );
  }
  i8466.passDefinedKeywords = i8470
  var i8473 = i8467[22]
  var i8472 = []
  for(var i = 0; i < i8473.length; i += 1) {
    i8472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8473[i + 0]) );
  }
  i8466.passDefinedKeywordGroups = i8472
  var i8475 = i8467[23]
  var i8474 = []
  for(var i = 0; i < i8475.length; i += 1) {
    i8474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8475[i + 0]) );
  }
  i8466.variants = i8474
  var i8477 = i8467[24]
  var i8476 = []
  for(var i = 0; i < i8477.length; i += 1) {
    i8476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8477[i + 0]) );
  }
  i8466.excludedVariants = i8476
  i8466.hasDepthReader = !!i8467[25]
  return i8466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8479 = data
  i8478.val = i8479[0]
  i8478.name = i8479[1]
  return i8478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8481 = data
  i8480.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8481[0], i8480.src)
  i8480.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8481[1], i8480.dst)
  i8480.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8481[2], i8480.op)
  return i8480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8483 = data
  i8482.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8483[0], i8482.pass)
  i8482.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8483[1], i8482.fail)
  i8482.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8483[2], i8482.zFail)
  i8482.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8483[3], i8482.comp)
  return i8482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8487 = data
  i8486.name = i8487[0]
  i8486.value = i8487[1]
  return i8486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8491 = data
  var i8493 = i8491[0]
  var i8492 = []
  for(var i = 0; i < i8493.length; i += 1) {
    i8492.push( i8493[i + 0] );
  }
  i8490.keywords = i8492
  i8490.hasDiscard = !!i8491[1]
  return i8490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8497 = data
  i8496.passId = i8497[0]
  i8496.subShaderIndex = i8497[1]
  var i8499 = i8497[2]
  var i8498 = []
  for(var i = 0; i < i8499.length; i += 1) {
    i8498.push( i8499[i + 0] );
  }
  i8496.keywords = i8498
  i8496.vertexProgram = i8497[3]
  i8496.fragmentProgram = i8497[4]
  i8496.exportedForWebGl2 = !!i8497[5]
  i8496.readDepth = !!i8497[6]
  return i8496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8503 = data
  request.r(i8503[0], i8503[1], 0, i8502, 'shader')
  i8502.pass = i8503[2]
  return i8502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8507 = data
  i8506.name = i8507[0]
  i8506.type = i8507[1]
  i8506.value = new pc.Vec4( i8507[2], i8507[3], i8507[4], i8507[5] )
  i8506.textureValue = i8507[6]
  i8506.shaderPropertyFlag = i8507[7]
  return i8506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8509 = data
  i8508.name = i8509[0]
  request.r(i8509[1], i8509[2], 0, i8508, 'texture')
  i8508.aabb = i8509[3]
  i8508.vertices = i8509[4]
  i8508.triangles = i8509[5]
  i8508.textureRect = UnityEngine.Rect.MinMaxRect(i8509[6], i8509[7], i8509[8], i8509[9])
  i8508.packedRect = UnityEngine.Rect.MinMaxRect(i8509[10], i8509[11], i8509[12], i8509[13])
  i8508.border = new pc.Vec4( i8509[14], i8509[15], i8509[16], i8509[17] )
  i8508.transparency = i8509[18]
  i8508.bounds = i8509[19]
  i8508.pixelsPerUnit = i8509[20]
  i8508.textureWidth = i8509[21]
  i8508.textureHeight = i8509[22]
  i8508.nativeSize = new pc.Vec2( i8509[23], i8509[24] )
  i8508.pivot = new pc.Vec2( i8509[25], i8509[26] )
  i8508.textureRectOffset = new pc.Vec2( i8509[27], i8509[28] )
  return i8508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8511 = data
  i8510.name = i8511[0]
  return i8510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8513 = data
  i8512.name = i8513[0]
  i8512.wrapMode = i8513[1]
  i8512.isLooping = !!i8513[2]
  i8512.length = i8513[3]
  var i8515 = i8513[4]
  var i8514 = []
  for(var i = 0; i < i8515.length; i += 1) {
    i8514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8515[i + 0]) );
  }
  i8512.curves = i8514
  var i8517 = i8513[5]
  var i8516 = []
  for(var i = 0; i < i8517.length; i += 1) {
    i8516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8517[i + 0]) );
  }
  i8512.events = i8516
  i8512.halfPrecision = !!i8513[6]
  i8512._frameRate = i8513[7]
  i8512.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8513[8], i8512.localBounds)
  i8512.hasMuscleCurves = !!i8513[9]
  var i8519 = i8513[10]
  var i8518 = []
  for(var i = 0; i < i8519.length; i += 1) {
    i8518.push( i8519[i + 0] );
  }
  i8512.clipMuscleConstant = i8518
  i8512.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8513[11], i8512.clipBindingConstant)
  return i8512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8523 = data
  i8522.path = i8523[0]
  i8522.hash = i8523[1]
  i8522.componentType = i8523[2]
  i8522.property = i8523[3]
  i8522.keys = i8523[4]
  var i8525 = i8523[5]
  var i8524 = []
  for(var i = 0; i < i8525.length; i += 1) {
    i8524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8525[i + 0]) );
  }
  i8522.objectReferenceKeys = i8524
  return i8522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8529 = data
  i8528.functionName = i8529[0]
  i8528.floatParameter = i8529[1]
  i8528.intParameter = i8529[2]
  i8528.stringParameter = i8529[3]
  request.r(i8529[4], i8529[5], 0, i8528, 'objectReferenceParameter')
  i8528.time = i8529[6]
  return i8528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8531 = data
  i8530.center = new pc.Vec3( i8531[0], i8531[1], i8531[2] )
  i8530.extends = new pc.Vec3( i8531[3], i8531[4], i8531[5] )
  return i8530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8535 = data
  var i8537 = i8535[0]
  var i8536 = []
  for(var i = 0; i < i8537.length; i += 1) {
    i8536.push( i8537[i + 0] );
  }
  i8534.genericBindings = i8536
  var i8539 = i8535[1]
  var i8538 = []
  for(var i = 0; i < i8539.length; i += 1) {
    i8538.push( i8539[i + 0] );
  }
  i8534.pptrCurveMapping = i8538
  return i8534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8543 = data
  i8542.time = i8543[0]
  request.r(i8543[1], i8543[2], 0, i8542, 'value')
  return i8542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i8544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i8545 = data
  i8544.name = i8545[0]
  i8544.blendParameter = i8545[1]
  i8544.blendParameterY = i8545[2]
  i8544.blendType = i8545[3]
  var i8547 = i8545[4]
  var i8546 = []
  for(var i = 0; i < i8547.length; i += 1) {
    i8546.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i8547[i + 0]) );
  }
  i8544.children = i8546
  i8544.useAutomaticThresholds = !!i8545[5]
  i8544.minThreshold = i8545[6]
  i8544.maxThreshold = i8545[7]
  return i8544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i8550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i8551 = data
  request.r(i8551[0], i8551[1], 0, i8550, 'motion')
  i8550.threshold = i8551[2]
  i8550.position = new pc.Vec2( i8551[3], i8551[4] )
  i8550.timeScale = i8551[5]
  i8550.cycleOffset = i8551[6]
  i8550.directBlendParameter = i8551[7]
  i8550.mirror = !!i8551[8]
  return i8550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8553 = data
  i8552.name = i8553[0]
  i8552.ascent = i8553[1]
  i8552.originalLineHeight = i8553[2]
  i8552.fontSize = i8553[3]
  var i8555 = i8553[4]
  var i8554 = []
  for(var i = 0; i < i8555.length; i += 1) {
    i8554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8555[i + 0]) );
  }
  i8552.characterInfo = i8554
  request.r(i8553[5], i8553[6], 0, i8552, 'texture')
  i8552.originalFontSize = i8553[7]
  return i8552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8559 = data
  i8558.index = i8559[0]
  i8558.advance = i8559[1]
  i8558.bearing = i8559[2]
  i8558.glyphWidth = i8559[3]
  i8558.glyphHeight = i8559[4]
  i8558.minX = i8559[5]
  i8558.maxX = i8559[6]
  i8558.minY = i8559[7]
  i8558.maxY = i8559[8]
  i8558.uvBottomLeftX = i8559[9]
  i8558.uvBottomLeftY = i8559[10]
  i8558.uvBottomRightX = i8559[11]
  i8558.uvBottomRightY = i8559[12]
  i8558.uvTopLeftX = i8559[13]
  i8558.uvTopLeftY = i8559[14]
  i8558.uvTopRightX = i8559[15]
  i8558.uvTopRightY = i8559[16]
  return i8558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8561 = data
  i8560.name = i8561[0]
  var i8563 = i8561[1]
  var i8562 = []
  for(var i = 0; i < i8563.length; i += 1) {
    i8562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8563[i + 0]) );
  }
  i8560.layers = i8562
  var i8565 = i8561[2]
  var i8564 = []
  for(var i = 0; i < i8565.length; i += 1) {
    i8564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8565[i + 0]) );
  }
  i8560.parameters = i8564
  i8560.animationClips = i8561[3]
  i8560.avatarUnsupported = i8561[4]
  return i8560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8569 = data
  i8568.name = i8569[0]
  i8568.defaultWeight = i8569[1]
  i8568.blendingMode = i8569[2]
  i8568.avatarMask = i8569[3]
  i8568.syncedLayerIndex = i8569[4]
  i8568.syncedLayerAffectsTiming = !!i8569[5]
  i8568.syncedLayers = i8569[6]
  i8568.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8569[7], i8568.stateMachine)
  return i8568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8571 = data
  i8570.id = i8571[0]
  i8570.name = i8571[1]
  i8570.path = i8571[2]
  var i8573 = i8571[3]
  var i8572 = []
  for(var i = 0; i < i8573.length; i += 1) {
    i8572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8573[i + 0]) );
  }
  i8570.states = i8572
  var i8575 = i8571[4]
  var i8574 = []
  for(var i = 0; i < i8575.length; i += 1) {
    i8574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8575[i + 0]) );
  }
  i8570.machines = i8574
  var i8577 = i8571[5]
  var i8576 = []
  for(var i = 0; i < i8577.length; i += 1) {
    i8576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8577[i + 0]) );
  }
  i8570.entryStateTransitions = i8576
  var i8579 = i8571[6]
  var i8578 = []
  for(var i = 0; i < i8579.length; i += 1) {
    i8578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8579[i + 0]) );
  }
  i8570.exitStateTransitions = i8578
  var i8581 = i8571[7]
  var i8580 = []
  for(var i = 0; i < i8581.length; i += 1) {
    i8580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8581[i + 0]) );
  }
  i8570.anyStateTransitions = i8580
  i8570.defaultStateId = i8571[8]
  return i8570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8585 = data
  i8584.id = i8585[0]
  i8584.name = i8585[1]
  i8584.cycleOffset = i8585[2]
  i8584.cycleOffsetParameter = i8585[3]
  i8584.cycleOffsetParameterActive = !!i8585[4]
  i8584.mirror = !!i8585[5]
  i8584.mirrorParameter = i8585[6]
  i8584.mirrorParameterActive = !!i8585[7]
  i8584.motionId = i8585[8]
  i8584.nameHash = i8585[9]
  i8584.fullPathHash = i8585[10]
  i8584.speed = i8585[11]
  i8584.speedParameter = i8585[12]
  i8584.speedParameterActive = !!i8585[13]
  i8584.tag = i8585[14]
  i8584.tagHash = i8585[15]
  i8584.writeDefaultValues = !!i8585[16]
  var i8587 = i8585[17]
  var i8586 = []
  for(var i = 0; i < i8587.length; i += 2) {
  request.r(i8587[i + 0], i8587[i + 1], 2, i8586, '')
  }
  i8584.behaviours = i8586
  var i8589 = i8585[18]
  var i8588 = []
  for(var i = 0; i < i8589.length; i += 1) {
    i8588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8589[i + 0]) );
  }
  i8584.transitions = i8588
  return i8584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8595 = data
  i8594.fullPath = i8595[0]
  i8594.canTransitionToSelf = !!i8595[1]
  i8594.duration = i8595[2]
  i8594.exitTime = i8595[3]
  i8594.hasExitTime = !!i8595[4]
  i8594.hasFixedDuration = !!i8595[5]
  i8594.interruptionSource = i8595[6]
  i8594.offset = i8595[7]
  i8594.orderedInterruption = !!i8595[8]
  i8594.destinationStateId = i8595[9]
  i8594.isExit = !!i8595[10]
  i8594.mute = !!i8595[11]
  i8594.solo = !!i8595[12]
  var i8597 = i8595[13]
  var i8596 = []
  for(var i = 0; i < i8597.length; i += 1) {
    i8596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8597[i + 0]) );
  }
  i8594.conditions = i8596
  return i8594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8601 = data
  i8600.mode = i8601[0]
  i8600.parameter = i8601[1]
  i8600.threshold = i8601[2]
  return i8600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8607 = data
  i8606.destinationStateId = i8607[0]
  i8606.isExit = !!i8607[1]
  i8606.mute = !!i8607[2]
  i8606.solo = !!i8607[3]
  var i8609 = i8607[4]
  var i8608 = []
  for(var i = 0; i < i8609.length; i += 1) {
    i8608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8609[i + 0]) );
  }
  i8606.conditions = i8608
  return i8606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8613 = data
  i8612.defaultBool = !!i8613[0]
  i8612.defaultFloat = i8613[1]
  i8612.defaultInt = i8613[2]
  i8612.name = i8613[3]
  i8612.nameHash = i8613[4]
  i8612.type = i8613[5]
  return i8612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8615 = data
  i8614.name = i8615[0]
  i8614.bytes64 = i8615[1]
  i8614.data = i8615[2]
  return i8614
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8616 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8617 = data
  request.r(i8617[0], i8617[1], 0, i8616, 'atlas')
  i8616.normalStyle = i8617[2]
  i8616.normalSpacingOffset = i8617[3]
  i8616.boldStyle = i8617[4]
  i8616.boldSpacing = i8617[5]
  i8616.italicStyle = i8617[6]
  i8616.tabSize = i8617[7]
  i8616.hashCode = i8617[8]
  request.r(i8617[9], i8617[10], 0, i8616, 'material')
  i8616.materialHashCode = i8617[11]
  i8616.m_Version = i8617[12]
  i8616.m_SourceFontFileGUID = i8617[13]
  request.r(i8617[14], i8617[15], 0, i8616, 'm_SourceFontFile_EditorRef')
  request.r(i8617[16], i8617[17], 0, i8616, 'm_SourceFontFile')
  i8616.m_AtlasPopulationMode = i8617[18]
  i8616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8617[19], i8616.m_FaceInfo)
  var i8619 = i8617[20]
  var i8618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8619.length; i += 1) {
    i8618.add(request.d('UnityEngine.TextCore.Glyph', i8619[i + 0]));
  }
  i8616.m_GlyphTable = i8618
  var i8621 = i8617[21]
  var i8620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8621.length; i += 1) {
    i8620.add(request.d('TMPro.TMP_Character', i8621[i + 0]));
  }
  i8616.m_CharacterTable = i8620
  var i8623 = i8617[22]
  var i8622 = []
  for(var i = 0; i < i8623.length; i += 2) {
  request.r(i8623[i + 0], i8623[i + 1], 2, i8622, '')
  }
  i8616.m_AtlasTextures = i8622
  i8616.m_AtlasTextureIndex = i8617[23]
  i8616.m_IsMultiAtlasTexturesEnabled = !!i8617[24]
  i8616.m_ClearDynamicDataOnBuild = !!i8617[25]
  var i8625 = i8617[26]
  var i8624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8625.length; i += 1) {
    i8624.add(request.d('UnityEngine.TextCore.GlyphRect', i8625[i + 0]));
  }
  i8616.m_UsedGlyphRects = i8624
  var i8627 = i8617[27]
  var i8626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8627.length; i += 1) {
    i8626.add(request.d('UnityEngine.TextCore.GlyphRect', i8627[i + 0]));
  }
  i8616.m_FreeGlyphRects = i8626
  i8616.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8617[28], i8616.m_fontInfo)
  i8616.m_AtlasWidth = i8617[29]
  i8616.m_AtlasHeight = i8617[30]
  i8616.m_AtlasPadding = i8617[31]
  i8616.m_AtlasRenderMode = i8617[32]
  var i8629 = i8617[33]
  var i8628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8629.length; i += 1) {
    i8628.add(request.d('TMPro.TMP_Glyph', i8629[i + 0]));
  }
  i8616.m_glyphInfoList = i8628
  i8616.m_KerningTable = request.d('TMPro.KerningTable', i8617[34], i8616.m_KerningTable)
  i8616.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8617[35], i8616.m_FontFeatureTable)
  var i8631 = i8617[36]
  var i8630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8631.length; i += 2) {
  request.r(i8631[i + 0], i8631[i + 1], 1, i8630, '')
  }
  i8616.fallbackFontAssets = i8630
  var i8633 = i8617[37]
  var i8632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8633.length; i += 2) {
  request.r(i8633[i + 0], i8633[i + 1], 1, i8632, '')
  }
  i8616.m_FallbackFontAssetTable = i8632
  i8616.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8617[38], i8616.m_CreationSettings)
  var i8635 = i8617[39]
  var i8634 = []
  for(var i = 0; i < i8635.length; i += 1) {
    i8634.push( request.d('TMPro.TMP_FontWeightPair', i8635[i + 0]) );
  }
  i8616.m_FontWeightTable = i8634
  var i8637 = i8617[40]
  var i8636 = []
  for(var i = 0; i < i8637.length; i += 1) {
    i8636.push( request.d('TMPro.TMP_FontWeightPair', i8637[i + 0]) );
  }
  i8616.fontWeights = i8636
  return i8616
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8638 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8639 = data
  i8638.m_FaceIndex = i8639[0]
  i8638.m_FamilyName = i8639[1]
  i8638.m_StyleName = i8639[2]
  i8638.m_PointSize = i8639[3]
  i8638.m_Scale = i8639[4]
  i8638.m_UnitsPerEM = i8639[5]
  i8638.m_LineHeight = i8639[6]
  i8638.m_AscentLine = i8639[7]
  i8638.m_CapLine = i8639[8]
  i8638.m_MeanLine = i8639[9]
  i8638.m_Baseline = i8639[10]
  i8638.m_DescentLine = i8639[11]
  i8638.m_SuperscriptOffset = i8639[12]
  i8638.m_SuperscriptSize = i8639[13]
  i8638.m_SubscriptOffset = i8639[14]
  i8638.m_SubscriptSize = i8639[15]
  i8638.m_UnderlineOffset = i8639[16]
  i8638.m_UnderlineThickness = i8639[17]
  i8638.m_StrikethroughOffset = i8639[18]
  i8638.m_StrikethroughThickness = i8639[19]
  i8638.m_TabWidth = i8639[20]
  return i8638
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8642 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8643 = data
  i8642.m_Index = i8643[0]
  i8642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8643[1], i8642.m_Metrics)
  i8642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8643[2], i8642.m_GlyphRect)
  i8642.m_Scale = i8643[3]
  i8642.m_AtlasIndex = i8643[4]
  i8642.m_ClassDefinitionType = i8643[5]
  return i8642
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8644 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8645 = data
  i8644.m_Width = i8645[0]
  i8644.m_Height = i8645[1]
  i8644.m_HorizontalBearingX = i8645[2]
  i8644.m_HorizontalBearingY = i8645[3]
  i8644.m_HorizontalAdvance = i8645[4]
  return i8644
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8646 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8647 = data
  i8646.m_X = i8647[0]
  i8646.m_Y = i8647[1]
  i8646.m_Width = i8647[2]
  i8646.m_Height = i8647[3]
  return i8646
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8650 = root || request.c( 'TMPro.TMP_Character' )
  var i8651 = data
  i8650.m_ElementType = i8651[0]
  i8650.m_Unicode = i8651[1]
  i8650.m_GlyphIndex = i8651[2]
  i8650.m_Scale = i8651[3]
  return i8650
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8656 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8657 = data
  i8656.Name = i8657[0]
  i8656.PointSize = i8657[1]
  i8656.Scale = i8657[2]
  i8656.CharacterCount = i8657[3]
  i8656.LineHeight = i8657[4]
  i8656.Baseline = i8657[5]
  i8656.Ascender = i8657[6]
  i8656.CapHeight = i8657[7]
  i8656.Descender = i8657[8]
  i8656.CenterLine = i8657[9]
  i8656.SuperscriptOffset = i8657[10]
  i8656.SubscriptOffset = i8657[11]
  i8656.SubSize = i8657[12]
  i8656.Underline = i8657[13]
  i8656.UnderlineThickness = i8657[14]
  i8656.strikethrough = i8657[15]
  i8656.strikethroughThickness = i8657[16]
  i8656.TabWidth = i8657[17]
  i8656.Padding = i8657[18]
  i8656.AtlasWidth = i8657[19]
  i8656.AtlasHeight = i8657[20]
  return i8656
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8660 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8661 = data
  i8660.id = i8661[0]
  i8660.x = i8661[1]
  i8660.y = i8661[2]
  i8660.width = i8661[3]
  i8660.height = i8661[4]
  i8660.xOffset = i8661[5]
  i8660.yOffset = i8661[6]
  i8660.xAdvance = i8661[7]
  i8660.scale = i8661[8]
  return i8660
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8662 = root || request.c( 'TMPro.KerningTable' )
  var i8663 = data
  var i8665 = i8663[0]
  var i8664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.add(request.d('TMPro.KerningPair', i8665[i + 0]));
  }
  i8662.kerningPairs = i8664
  return i8662
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8668 = root || request.c( 'TMPro.KerningPair' )
  var i8669 = data
  i8668.xOffset = i8669[0]
  i8668.m_FirstGlyph = i8669[1]
  i8668.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8669[2], i8668.m_FirstGlyphAdjustments)
  i8668.m_SecondGlyph = i8669[3]
  i8668.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8669[4], i8668.m_SecondGlyphAdjustments)
  i8668.m_IgnoreSpacingAdjustments = !!i8669[5]
  return i8668
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8670 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8671 = data
  var i8673 = i8671[0]
  var i8672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8673.length; i += 1) {
    i8672.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8673[i + 0]));
  }
  i8670.m_GlyphPairAdjustmentRecords = i8672
  return i8670
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8676 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8677 = data
  i8676.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8677[0], i8676.m_FirstAdjustmentRecord)
  i8676.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8677[1], i8676.m_SecondAdjustmentRecord)
  i8676.m_FeatureLookupFlags = i8677[2]
  return i8676
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8680 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8681 = data
  i8680.sourceFontFileName = i8681[0]
  i8680.sourceFontFileGUID = i8681[1]
  i8680.pointSizeSamplingMode = i8681[2]
  i8680.pointSize = i8681[3]
  i8680.padding = i8681[4]
  i8680.packingMode = i8681[5]
  i8680.atlasWidth = i8681[6]
  i8680.atlasHeight = i8681[7]
  i8680.characterSetSelectionMode = i8681[8]
  i8680.characterSequence = i8681[9]
  i8680.referencedFontAssetGUID = i8681[10]
  i8680.referencedTextAssetGUID = i8681[11]
  i8680.fontStyle = i8681[12]
  i8680.fontStyleModifier = i8681[13]
  i8680.renderMode = i8681[14]
  i8680.includeFontFeatures = !!i8681[15]
  return i8680
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8684 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8685 = data
  request.r(i8685[0], i8685[1], 0, i8684, 'regularTypeface')
  request.r(i8685[2], i8685[3], 0, i8684, 'italicTypeface')
  return i8684
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i8686 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i8687 = data
  var i8689 = i8687[0]
  var i8688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i8689.length; i += 2) {
  request.r(i8689[i + 0], i8689[i + 1], 1, i8688, '')
  }
  i8686.components = i8688
  return i8686
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i8692 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i8693 = data
  i8692.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i8693[0], i8692.mode)
  i8692.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i8693[1], i8692.neutralHDRRangeReductionMode)
  i8692.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i8693[2], i8692.acesPreset)
  i8692.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8693[3], i8692.hueShiftAmount)
  i8692.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i8693[4], i8692.detectPaperWhite)
  i8692.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8693[5], i8692.paperWhite)
  i8692.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i8693[6], i8692.detectBrightnessLimits)
  i8692.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8693[7], i8692.minNits)
  i8692.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8693[8], i8692.maxNits)
  i8692.active = !!i8693[9]
  return i8692
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i8694 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i8695 = data
  i8694.m_Value = i8695[0]
  i8694.m_OverrideState = !!i8695[1]
  return i8694
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i8696 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i8697 = data
  i8696.m_Value = i8697[0]
  i8696.m_OverrideState = !!i8697[1]
  return i8696
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i8698 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i8699 = data
  i8698.m_Value = i8699[0]
  i8698.m_OverrideState = !!i8699[1]
  return i8698
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i8700 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i8701 = data
  i8700.m_Value = i8701[0]
  i8700.m_OverrideState = !!i8701[1]
  return i8700
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i8702 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i8703 = data
  i8702.m_Value = !!i8703[0]
  i8702.m_OverrideState = !!i8703[1]
  return i8702
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i8704 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i8705 = data
  i8704.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i8705[0], i8704.skipIterations)
  i8704.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i8705[1], i8704.threshold)
  i8704.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i8705[2], i8704.intensity)
  i8704.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8705[3], i8704.scatter)
  i8704.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i8705[4], i8704.clamp)
  i8704.tint = request.d('UnityEngine.Rendering.ColorParameter', i8705[5], i8704.tint)
  i8704.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i8705[6], i8704.highQualityFiltering)
  i8704.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i8705[7], i8704.downscale)
  i8704.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i8705[8], i8704.maxIterations)
  i8704.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i8705[9], i8704.dirtTexture)
  i8704.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i8705[10], i8704.dirtIntensity)
  i8704.active = !!i8705[11]
  return i8704
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i8706 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i8707 = data
  i8706.m_Value = i8707[0]
  i8706.m_OverrideState = !!i8707[1]
  return i8706
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i8708 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i8709 = data
  i8708.m_Value = i8709[0]
  i8708.m_OverrideState = !!i8709[1]
  return i8708
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i8710 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i8711 = data
  i8710.m_Value = new pc.Color(i8711[0], i8711[1], i8711[2], i8711[3])
  i8710.m_OverrideState = !!i8711[4]
  return i8710
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i8712 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i8713 = data
  i8712.m_Value = i8713[0]
  i8712.m_OverrideState = !!i8713[1]
  return i8712
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i8714 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i8715 = data
  i8714.dimension = i8715[0]
  request.r(i8715[1], i8715[2], 0, i8714, 'm_Value')
  i8714.m_OverrideState = !!i8715[3]
  return i8714
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i8716 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i8717 = data
  i8716.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i8717[0], i8716.mode)
  i8716.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i8717[1], i8716.quality)
  i8716.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8717[2], i8716.intensity)
  i8716.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8717[3], i8716.clamp)
  i8716.active = !!i8717[4]
  return i8716
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i8718 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i8719 = data
  i8718.m_Value = i8719[0]
  i8718.m_OverrideState = !!i8719[1]
  return i8718
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i8720 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i8721 = data
  i8720.m_Value = i8721[0]
  i8720.m_OverrideState = !!i8721[1]
  return i8720
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i8722 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i8723 = data
  i8722.color = request.d('UnityEngine.Rendering.ColorParameter', i8723[0], i8722.color)
  i8722.center = request.d('UnityEngine.Rendering.Vector2Parameter', i8723[1], i8722.center)
  i8722.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8723[2], i8722.intensity)
  i8722.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i8723[3], i8722.smoothness)
  i8722.rounded = request.d('UnityEngine.Rendering.BoolParameter', i8723[4], i8722.rounded)
  i8722.active = !!i8723[5]
  return i8722
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i8724 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i8725 = data
  i8724.m_Value = new pc.Vec2( i8725[0], i8725[1] )
  i8724.m_OverrideState = !!i8725[2]
  return i8724
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i8726 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i8727 = data
  var i8729 = i8727[0]
  var i8728 = []
  for(var i = 0; i < i8729.length; i += 1) {
    i8728.push( request.d('UnityEngine.InputSystem.InputActionMap', i8729[i + 0]) );
  }
  i8726.m_ActionMaps = i8728
  var i8731 = i8727[1]
  var i8730 = []
  for(var i = 0; i < i8731.length; i += 1) {
    i8730.push( request.d('UnityEngine.InputSystem.InputControlScheme', i8731[i + 0]) );
  }
  i8726.m_ControlSchemes = i8730
  i8726.m_IsProjectWide = !!i8727[2]
  return i8726
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i8734 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i8735 = data
  i8734.m_Name = i8735[0]
  i8734.m_Id = i8735[1]
  request.r(i8735[2], i8735[3], 0, i8734, 'm_Asset')
  var i8737 = i8735[4]
  var i8736 = []
  for(var i = 0; i < i8737.length; i += 1) {
    i8736.push( request.d('UnityEngine.InputSystem.InputAction', i8737[i + 0]) );
  }
  i8734.m_Actions = i8736
  var i8739 = i8735[5]
  var i8738 = []
  for(var i = 0; i < i8739.length; i += 1) {
    i8738.push( request.d('UnityEngine.InputSystem.InputBinding', i8739[i + 0]) );
  }
  i8734.m_Bindings = i8738
  return i8734
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i8742 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i8743 = data
  i8742.m_Name = i8743[0]
  i8742.m_Type = i8743[1]
  i8742.m_ExpectedControlType = i8743[2]
  i8742.m_Id = i8743[3]
  i8742.m_Processors = i8743[4]
  i8742.m_Interactions = i8743[5]
  var i8745 = i8743[6]
  var i8744 = []
  for(var i = 0; i < i8745.length; i += 1) {
    i8744.push( request.d('UnityEngine.InputSystem.InputBinding', i8745[i + 0]) );
  }
  i8742.m_SingletonActionBindings = i8744
  i8742.m_Flags = i8743[7]
  return i8742
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i8748 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i8749 = data
  i8748.m_Name = i8749[0]
  i8748.m_Id = i8749[1]
  i8748.m_Path = i8749[2]
  i8748.m_Interactions = i8749[3]
  i8748.m_Processors = i8749[4]
  i8748.m_Groups = i8749[5]
  i8748.m_Action = i8749[6]
  i8748.m_Flags = i8749[7]
  return i8748
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i8752 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i8753 = data
  i8752.m_Name = i8753[0]
  i8752.m_BindingGroup = i8753[1]
  var i8755 = i8753[2]
  var i8754 = []
  for(var i = 0; i < i8755.length; i += 1) {
    i8754.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i8755[i + 0]) );
  }
  i8752.m_DeviceRequirements = i8754
  return i8752
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i8758 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i8759 = data
  i8758.m_ControlPath = i8759[0]
  i8758.m_Flags = i8759[1]
  return i8758
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i8760 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i8761 = data
  request.r(i8761[0], i8761[1], 0, i8760, 'm_Asset')
  i8760.m_ActionId = i8761[2]
  return i8760
}

Deserializers["UnityEditor.Rendering.Universal.AssetVersion"] = function (request, data, root) {
  var i8762 = root || request.c( 'UnityEditor.Rendering.Universal.AssetVersion' )
  var i8763 = data
  i8762.version = i8763[0]
  return i8762
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8764 = root || request.c( 'TMPro.TMP_Settings' )
  var i8765 = data
  i8764.m_enableWordWrapping = !!i8765[0]
  i8764.m_enableKerning = !!i8765[1]
  i8764.m_enableExtraPadding = !!i8765[2]
  i8764.m_enableTintAllSprites = !!i8765[3]
  i8764.m_enableParseEscapeCharacters = !!i8765[4]
  i8764.m_EnableRaycastTarget = !!i8765[5]
  i8764.m_GetFontFeaturesAtRuntime = !!i8765[6]
  i8764.m_missingGlyphCharacter = i8765[7]
  i8764.m_warningsDisabled = !!i8765[8]
  request.r(i8765[9], i8765[10], 0, i8764, 'm_defaultFontAsset')
  i8764.m_defaultFontAssetPath = i8765[11]
  i8764.m_defaultFontSize = i8765[12]
  i8764.m_defaultAutoSizeMinRatio = i8765[13]
  i8764.m_defaultAutoSizeMaxRatio = i8765[14]
  i8764.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8765[15], i8765[16] )
  i8764.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8765[17], i8765[18] )
  i8764.m_autoSizeTextContainer = !!i8765[19]
  i8764.m_IsTextObjectScaleStatic = !!i8765[20]
  var i8767 = i8765[21]
  var i8766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8767.length; i += 2) {
  request.r(i8767[i + 0], i8767[i + 1], 1, i8766, '')
  }
  i8764.m_fallbackFontAssets = i8766
  i8764.m_matchMaterialPreset = !!i8765[22]
  request.r(i8765[23], i8765[24], 0, i8764, 'm_defaultSpriteAsset')
  i8764.m_defaultSpriteAssetPath = i8765[25]
  i8764.m_enableEmojiSupport = !!i8765[26]
  i8764.m_MissingCharacterSpriteUnicode = i8765[27]
  i8764.m_defaultColorGradientPresetsPath = i8765[28]
  request.r(i8765[29], i8765[30], 0, i8764, 'm_defaultStyleSheet')
  i8764.m_StyleSheetsResourcePath = i8765[31]
  request.r(i8765[32], i8765[33], 0, i8764, 'm_leadingCharacters')
  request.r(i8765[34], i8765[35], 0, i8764, 'm_followingCharacters')
  i8764.m_UseModernHangulLineBreakingRules = !!i8765[36]
  return i8764
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8768 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8769 = data
  i8768.m_GlyphIndex = i8769[0]
  i8768.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8769[1], i8768.m_GlyphValueRecord)
  return i8768
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8770 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8771 = data
  i8770.m_XPlacement = i8771[0]
  i8770.m_YPlacement = i8771[1]
  i8770.m_XAdvance = i8771[2]
  i8770.m_YAdvance = i8771[3]
  return i8770
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8772 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8773 = data
  request.r(i8773[0], i8773[1], 0, i8772, 'spriteSheet')
  var i8775 = i8773[2]
  var i8774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8775.length; i += 1) {
    i8774.add(request.d('TMPro.TMP_Sprite', i8775[i + 0]));
  }
  i8772.spriteInfoList = i8774
  var i8777 = i8773[3]
  var i8776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8777.length; i += 2) {
  request.r(i8777[i + 0], i8777[i + 1], 1, i8776, '')
  }
  i8772.fallbackSpriteAssets = i8776
  i8772.hashCode = i8773[4]
  request.r(i8773[5], i8773[6], 0, i8772, 'material')
  i8772.materialHashCode = i8773[7]
  i8772.m_Version = i8773[8]
  i8772.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8773[9], i8772.m_FaceInfo)
  var i8779 = i8773[10]
  var i8778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8779.length; i += 1) {
    i8778.add(request.d('TMPro.TMP_SpriteCharacter', i8779[i + 0]));
  }
  i8772.m_SpriteCharacterTable = i8778
  var i8781 = i8773[11]
  var i8780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8781.length; i += 1) {
    i8780.add(request.d('TMPro.TMP_SpriteGlyph', i8781[i + 0]));
  }
  i8772.m_SpriteGlyphTable = i8780
  return i8772
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8784 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8785 = data
  i8784.name = i8785[0]
  i8784.hashCode = i8785[1]
  i8784.unicode = i8785[2]
  i8784.pivot = new pc.Vec2( i8785[3], i8785[4] )
  request.r(i8785[5], i8785[6], 0, i8784, 'sprite')
  i8784.id = i8785[7]
  i8784.x = i8785[8]
  i8784.y = i8785[9]
  i8784.width = i8785[10]
  i8784.height = i8785[11]
  i8784.xOffset = i8785[12]
  i8784.yOffset = i8785[13]
  i8784.xAdvance = i8785[14]
  i8784.scale = i8785[15]
  return i8784
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8790 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8791 = data
  i8790.m_Name = i8791[0]
  i8790.m_HashCode = i8791[1]
  i8790.m_ElementType = i8791[2]
  i8790.m_Unicode = i8791[3]
  i8790.m_GlyphIndex = i8791[4]
  i8790.m_Scale = i8791[5]
  return i8790
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8794 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8795 = data
  request.r(i8795[0], i8795[1], 0, i8794, 'sprite')
  i8794.m_Index = i8795[2]
  i8794.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8795[3], i8794.m_Metrics)
  i8794.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8795[4], i8794.m_GlyphRect)
  i8794.m_Scale = i8795[5]
  i8794.m_AtlasIndex = i8795[6]
  i8794.m_ClassDefinitionType = i8795[7]
  return i8794
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8796 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8797 = data
  var i8799 = i8797[0]
  var i8798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8799.length; i += 1) {
    i8798.add(request.d('TMPro.TMP_Style', i8799[i + 0]));
  }
  i8796.m_StyleList = i8798
  return i8796
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8802 = root || request.c( 'TMPro.TMP_Style' )
  var i8803 = data
  i8802.m_Name = i8803[0]
  i8802.m_HashCode = i8803[1]
  i8802.m_OpeningDefinition = i8803[2]
  i8802.m_ClosingDefinition = i8803[3]
  i8802.m_OpeningTagArray = i8803[4]
  i8802.m_ClosingTagArray = i8803[5]
  i8802.m_OpeningTagUnicodeArray = i8803[6]
  i8802.m_ClosingTagUnicodeArray = i8803[7]
  return i8802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8805 = data
  var i8807 = i8805[0]
  var i8806 = []
  for(var i = 0; i < i8807.length; i += 1) {
    i8806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8807[i + 0]) );
  }
  i8804.files = i8806
  i8804.componentToPrefabIds = i8805[1]
  return i8804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8811 = data
  i8810.path = i8811[0]
  request.r(i8811[1], i8811[2], 0, i8810, 'unityObject')
  return i8810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8813 = data
  var i8815 = i8813[0]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8815[i + 0]) );
  }
  i8812.scriptsExecutionOrder = i8814
  var i8817 = i8813[1]
  var i8816 = []
  for(var i = 0; i < i8817.length; i += 1) {
    i8816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8817[i + 0]) );
  }
  i8812.sortingLayers = i8816
  var i8819 = i8813[2]
  var i8818 = []
  for(var i = 0; i < i8819.length; i += 1) {
    i8818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8819[i + 0]) );
  }
  i8812.cullingLayers = i8818
  i8812.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8813[3], i8812.timeSettings)
  i8812.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8813[4], i8812.physicsSettings)
  i8812.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8813[5], i8812.physics2DSettings)
  i8812.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8813[6], i8812.qualitySettings)
  i8812.enableRealtimeShadows = !!i8813[7]
  i8812.enableAutoInstancing = !!i8813[8]
  i8812.enableStaticBatching = !!i8813[9]
  i8812.enableDynamicBatching = !!i8813[10]
  i8812.lightmapEncodingQuality = i8813[11]
  i8812.desiredColorSpace = i8813[12]
  var i8821 = i8813[13]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 1) {
    i8820.push( i8821[i + 0] );
  }
  i8812.allTags = i8820
  return i8812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8825 = data
  i8824.name = i8825[0]
  i8824.value = i8825[1]
  return i8824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8829 = data
  i8828.id = i8829[0]
  i8828.name = i8829[1]
  i8828.value = i8829[2]
  return i8828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8833 = data
  i8832.id = i8833[0]
  i8832.name = i8833[1]
  return i8832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8835 = data
  i8834.fixedDeltaTime = i8835[0]
  i8834.maximumDeltaTime = i8835[1]
  i8834.timeScale = i8835[2]
  i8834.maximumParticleTimestep = i8835[3]
  return i8834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8837 = data
  i8836.gravity = new pc.Vec3( i8837[0], i8837[1], i8837[2] )
  i8836.defaultSolverIterations = i8837[3]
  i8836.bounceThreshold = i8837[4]
  i8836.autoSyncTransforms = !!i8837[5]
  i8836.autoSimulation = !!i8837[6]
  var i8839 = i8837[7]
  var i8838 = []
  for(var i = 0; i < i8839.length; i += 1) {
    i8838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8839[i + 0]) );
  }
  i8836.collisionMatrix = i8838
  return i8836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8843 = data
  i8842.enabled = !!i8843[0]
  i8842.layerId = i8843[1]
  i8842.otherLayerId = i8843[2]
  return i8842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8845 = data
  request.r(i8845[0], i8845[1], 0, i8844, 'material')
  i8844.gravity = new pc.Vec2( i8845[2], i8845[3] )
  i8844.positionIterations = i8845[4]
  i8844.velocityIterations = i8845[5]
  i8844.velocityThreshold = i8845[6]
  i8844.maxLinearCorrection = i8845[7]
  i8844.maxAngularCorrection = i8845[8]
  i8844.maxTranslationSpeed = i8845[9]
  i8844.maxRotationSpeed = i8845[10]
  i8844.baumgarteScale = i8845[11]
  i8844.baumgarteTOIScale = i8845[12]
  i8844.timeToSleep = i8845[13]
  i8844.linearSleepTolerance = i8845[14]
  i8844.angularSleepTolerance = i8845[15]
  i8844.defaultContactOffset = i8845[16]
  i8844.autoSimulation = !!i8845[17]
  i8844.queriesHitTriggers = !!i8845[18]
  i8844.queriesStartInColliders = !!i8845[19]
  i8844.callbacksOnDisable = !!i8845[20]
  i8844.reuseCollisionCallbacks = !!i8845[21]
  i8844.autoSyncTransforms = !!i8845[22]
  var i8847 = i8845[23]
  var i8846 = []
  for(var i = 0; i < i8847.length; i += 1) {
    i8846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8847[i + 0]) );
  }
  i8844.collisionMatrix = i8846
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8851 = data
  i8850.enabled = !!i8851[0]
  i8850.layerId = i8851[1]
  i8850.otherLayerId = i8851[2]
  return i8850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8853 = data
  var i8855 = i8853[0]
  var i8854 = []
  for(var i = 0; i < i8855.length; i += 1) {
    i8854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8855[i + 0]) );
  }
  i8852.qualityLevels = i8854
  var i8857 = i8853[1]
  var i8856 = []
  for(var i = 0; i < i8857.length; i += 1) {
    i8856.push( i8857[i + 0] );
  }
  i8852.names = i8856
  i8852.shadows = i8853[2]
  i8852.anisotropicFiltering = i8853[3]
  i8852.antiAliasing = i8853[4]
  i8852.lodBias = i8853[5]
  i8852.shadowCascades = i8853[6]
  i8852.shadowDistance = i8853[7]
  i8852.shadowmaskMode = i8853[8]
  i8852.shadowProjection = i8853[9]
  i8852.shadowResolution = i8853[10]
  i8852.softParticles = !!i8853[11]
  i8852.softVegetation = !!i8853[12]
  i8852.activeColorSpace = i8853[13]
  i8852.desiredColorSpace = i8853[14]
  i8852.masterTextureLimit = i8853[15]
  i8852.maxQueuedFrames = i8853[16]
  i8852.particleRaycastBudget = i8853[17]
  i8852.pixelLightCount = i8853[18]
  i8852.realtimeReflectionProbes = !!i8853[19]
  i8852.shadowCascade2Split = i8853[20]
  i8852.shadowCascade4Split = new pc.Vec3( i8853[21], i8853[22], i8853[23] )
  i8852.streamingMipmapsActive = !!i8853[24]
  i8852.vSyncCount = i8853[25]
  i8852.asyncUploadBufferSize = i8853[26]
  i8852.asyncUploadTimeSlice = i8853[27]
  i8852.billboardsFaceCameraPosition = !!i8853[28]
  i8852.shadowNearPlaneOffset = i8853[29]
  i8852.streamingMipmapsMemoryBudget = i8853[30]
  i8852.maximumLODLevel = i8853[31]
  i8852.streamingMipmapsAddAllCameras = !!i8853[32]
  i8852.streamingMipmapsMaxLevelReduction = i8853[33]
  i8852.streamingMipmapsRenderersPerFrame = i8853[34]
  i8852.resolutionScalingFixedDPIFactor = i8853[35]
  i8852.streamingMipmapsMaxFileIORequests = i8853[36]
  i8852.currentQualityLevel = i8853[37]
  return i8852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i8860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i8861 = data
  i8860.name = i8861[0]
  var i8863 = i8861[1]
  var i8862 = []
  for(var i = 0; i < i8863.length; i += 1) {
    i8862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i8863[i + 0]) );
  }
  i8860.tos = i8862
  var i8865 = i8861[2]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 1) {
    i8864.push( i8865[i + 0] );
  }
  i8860.constant = i8864
  i8860.isValid = !!i8861[3]
  i8860.isHuman = !!i8861[4]
  i8860.hasRootMotion = !!i8861[5]
  return i8860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i8868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i8869 = data
  i8868.hash = i8869[0]
  i8868.path = i8869[1]
  return i8868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask"] = function (request, data, root) {
  var i8870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask' )
  var i8871 = data
  i8870.name = i8871[0]
  var i8873 = i8871[1]
  var i8872 = []
  for(var i = 0; i < i8873.length; i += 1) {
    i8872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement', i8873[i + 0]) );
  }
  i8870.elements = i8872
  i8870.mask = i8871[2]
  return i8870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement"] = function (request, data, root) {
  var i8876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement' )
  var i8877 = data
  i8876.path = i8877[0]
  i8876.weight = i8877[1]
  i8876.hash = i8877[2]
  return i8876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8881 = data
  i8880.weight = i8881[0]
  i8880.vertices = i8881[1]
  i8880.normals = i8881[2]
  i8880.tangents = i8881[3]
  return i8880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i8882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i8883 = data
  i8882.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8883[0], i8882.Event)
  i8882.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i8883[1], i8882.filterSettings)
  i8882.overrideMaterialId = i8883[2]
  i8882.overrideMaterialPassIndex = i8883[3]
  i8882.overrideShaderId = i8883[4]
  i8882.overrideShaderPassIndex = i8883[5]
  i8882.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8883[6], i8882.overrideMode)
  i8882.overrideDepthState = !!i8883[7]
  i8882.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8883[8], i8882.depthCompareFunction)
  i8882.enableWrite = !!i8883[9]
  i8882.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i8883[10], i8882.stencilSettings)
  i8882.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i8883[11], i8882.cameraSettings)
  return i8882
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8884 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8885 = data
  i8884.xPlacement = i8885[0]
  i8884.yPlacement = i8885[1]
  i8884.xAdvance = i8885[2]
  i8884.yAdvance = i8885[3]
  return i8884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i8886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i8887 = data
  i8886.Value = i8887[0]
  return i8886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i8888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i8889 = data
  i8888.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8889[0], i8888.RenderQueueType)
  i8888.LayerMask = i8889[1]
  var i8891 = i8889[2]
  var i8890 = []
  for(var i = 0; i < i8891.length; i += 1) {
    i8890.push( i8891[i + 0] );
  }
  i8888.PassNames = i8890
  return i8888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i8892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i8893 = data
  i8892.overrideStencilState = !!i8893[0]
  i8892.stencilReference = i8893[1]
  i8892.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8893[2], i8892.stencilCompareFunctionValue)
  i8892.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8893[3], i8892.passOperationValue)
  i8892.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8893[4], i8892.failOperationValue)
  i8892.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i8893[5], i8892.zFailOperationValue)
  return i8892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i8894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i8895 = data
  i8894.overrideCamera = !!i8895[0]
  i8894.restoreCamera = !!i8895[1]
  i8894.offset = new pc.Vec4( i8895[2], i8895[3], i8895[4], i8895[5] )
  i8894.cameraFieldOfView = i8895[6]
  return i8894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AvatarMask":{"name":0,"elements":1,"mask":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.TransformMaskElement":{"path":0,"weight":1,"hash":2}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[26],"74":[31],"75":[3],"76":[3],"77":[3],"78":[3],"79":[3],"80":[3],"81":[3],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[31],"97":[8],"98":[99],"100":[99],"44":[43],"101":[43],"102":[31],"33":[31],"35":[34],"103":[31],"104":[105],"106":[43],"107":[43],"46":[44],"48":[47,43],"108":[43],"45":[44],"109":[43],"110":[43],"111":[43],"112":[43],"113":[43],"114":[43],"52":[43],"115":[43],"116":[43],"117":[47,43],"118":[43],"119":[43],"120":[43],"121":[43],"122":[47,43],"123":[43],"124":[39],"125":[39],"126":[39],"127":[39],"128":[31],"129":[31],"130":[105],"40":[39],"131":[44],"132":[43],"133":[8,43],"28":[43,47],"134":[43],"135":[47,43],"136":[8],"137":[47,43],"138":[43],"139":[105]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","FenceScript","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.SphereCollider","CoinScript","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CapsuleCollider","ShieldScript","Magnet","DoubleScore","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","PlayerController","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.SkinnedMeshRenderer","GameManager","TMPro.TextMeshProUGUI","UnityEngine.GameObject","SpawnManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TMP_FontAsset","UnityEngine.UI.Button","UnityEngine.UI.VerticalLayoutGroup","RoadScript","UnityEngine.Cubemap","UnityEngine.AnimationClip","UnityEngine.Font","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEditor.Rendering.Universal.AssetVersion","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Quitting Job";

Deserializers.lunaInitializationTime = "03/20/2026 08:39:03";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37659";

Deserializers.projectId = "c91b2ab9862ac504cbca2448278da8f0";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.1\ncom.unity.postprocessing: 3.4.0\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1656";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4129";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "896f42ab-31ad-42f4-975b-dd4dda1f05ad";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

