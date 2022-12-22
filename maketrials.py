tests = [
    ### Compare parameters of algos

    #Compare jitter border park
    ['park_border_J=0,0', 'park_border_J=0,1'],
    ['park_border_J=0,0', 'park_border_J=0,2'],
    ['park_border_J=0,1', 'park_border_J=0,2'],
    #Compare jitter uniform park
    ['park_uniform_J=0,0', 'park_uniform_J=0,1'],
    ['park_uniform_J=0,0', 'park_uniform_J=0,2'],
    ['park_uniform_J=0,1', 'park_uniform_J=0,2'],
    #Compare n cluster park
    ['park_cluster_n=3', 'park_cluster_n=4'],
    ['park_cluster_n=3', 'park_cluster_n=5'],
    ['park_cluster_n=4', 'park_cluster_n=5'],

    #Compare jitter border square
    ['square_border_J=0,0', 'square_border_J=0,1'],
    ['square_border_J=0,0', 'square_border_J=0,2'],
    ['square_border_J=0,1', 'square_border_J=0,2'],
    #Compare jitter uniform square
    ['square_uniform_J=0,0', 'square_uniform_J=0,1'],
    ['square_uniform_J=0,0', 'square_uniform_J=0,2'],
    ['square_uniform_J=0,1', 'square_uniform_J=0,2'],
    #Compare n cluster square
    ['square_cluster_n=3', 'square_cluster_n=4'],
    ['square_cluster_n=3', 'square_cluster_n=5'],
    ['square_cluster_n=4', 'square_cluster_n=5'],


    ### Compare contexts

    #Compare park/square
    ['square_border_J=0,0', 'park_border_J=0,0'],
    ['square_border_J=0,1', 'park_border_J=0,1'],
    ['square_border_J=0,2', 'park_border_J=0,2'],
    ['square_uniform_J=0,0', 'park_uniform_J=0,0'],
    ['square_uniform_J=0,1', 'park_uniform_J=0,1'],
    ['square_uniform_J=0,2', 'park_uniform_J=0,2'],
    ['square_cluster_n=3', 'park_cluster_n=3'],
    ['square_cluster_n=4', 'park_cluster_n=4'],
    ['square_cluster_n=5', 'park_cluster_n=5'],

    #Compare algos

    #Compare border vs cluster park
    ['park_border_J=0,0', 'park_cluster_n=3'],
    ['park_border_J=0,1', 'park_cluster_n=3'],
    ['park_border_J=0,2', 'park_cluster_n=3'],
    ['park_border_J=0,0', 'park_cluster_n=4'],
    ['park_border_J=0,1', 'park_cluster_n=4'],
    ['park_border_J=0,2', 'park_cluster_n=4'],
    ['park_border_J=0,0', 'park_cluster_n=5'],
    ['park_border_J=0,1', 'park_cluster_n=5'],
    ['park_border_J=0,2', 'park_cluster_n=5'],
    #Compare border vs uniform park
    ['park_border_J=0,0', 'park_uniform_J=0,0'],
    ['park_border_J=0,1', 'park_uniform_J=0,0'],
    ['park_border_J=0,2', 'park_uniform_J=0,0'],
    ['park_border_J=0,0', 'park_uniform_J=0,1'],
    ['park_border_J=0,1', 'park_uniform_J=0,1'],
    ['park_border_J=0,2', 'park_uniform_J=0,1'],
    ['park_border_J=0,0', 'park_uniform_J=0,2'],
    ['park_border_J=0,1', 'park_uniform_J=0,2'],
    ['park_border_J=0,2', 'park_uniform_J=0,2'],
    #Compare uniform vs cluster park
    ['park_uniform_J=0,0', 'park_cluster_n=3'],
    ['park_uniform_J=0,1', 'park_cluster_n=3'],
    ['park_uniform_J=0,2', 'park_cluster_n=3'],
    ['park_uniform_J=0,0', 'park_cluster_n=4'],
    ['park_uniform_J=0,1', 'park_cluster_n=4'],
    ['park_uniform_J=0,2', 'park_cluster_n=4'],
    ['park_uniform_J=0,0', 'park_cluster_n=5'],
    ['park_uniform_J=0,1', 'park_cluster_n=5'],
    ['park_uniform_J=0,2', 'park_cluster_n=5'],

    #Compare border vs cluster square
    ['square_border_J=0,0', 'square_cluster_n=3'],
    ['square_border_J=0,1', 'square_cluster_n=3'],
    ['square_border_J=0,2', 'square_cluster_n=3'],
    ['square_border_J=0,0', 'square_cluster_n=4'],
    ['square_border_J=0,1', 'square_cluster_n=4'],
    ['square_border_J=0,2', 'square_cluster_n=4'],
    ['square_border_J=0,0', 'square_cluster_n=5'],
    ['square_border_J=0,1', 'square_cluster_n=5'],
    ['square_border_J=0,2', 'square_cluster_n=5'],
    #Compare border vs uniform square
    ['square_border_J=0,0', 'square_uniform_J=0,0'],
    ['square_border_J=0,1', 'square_uniform_J=0,0'],
    ['square_border_J=0,2', 'square_uniform_J=0,0'],
    ['square_border_J=0,0', 'square_uniform_J=0,1'],
    ['square_border_J=0,1', 'square_uniform_J=0,1'],
    ['square_border_J=0,2', 'square_uniform_J=0,1'],
    ['square_border_J=0,0', 'square_uniform_J=0,2'],
    ['square_border_J=0,1', 'square_uniform_J=0,2'],
    ['square_border_J=0,2', 'square_uniform_J=0,2'],
    #Compare uniform vs cluster square
    ['square_uniform_J=0,0', 'square_cluster_n=3'],
    ['square_uniform_J=0,1', 'square_cluster_n=3'],
    ['square_uniform_J=0,2', 'square_cluster_n=3'],
    ['square_uniform_J=0,0', 'square_cluster_n=4'],
    ['square_uniform_J=0,1', 'square_cluster_n=4'],
    ['square_uniform_J=0,2', 'square_cluster_n=4'],
    ['square_uniform_J=0,0', 'square_cluster_n=5'],
    ['square_uniform_J=0,1', 'square_cluster_n=5'],
    ['square_uniform_J=0,2', 'square_cluster_n=5'],
]

print(len(tests))
print(len(a))
