const resolvers = {
    Query: {
        aboutById(root, {id}, {prisma}) {
            return prisma.about({id: id});
        },
        abouts(root, args, {prisma}) {
            return prisma.abouts({where: {status: "show"}});
        },
        partnerBy(root, args, {prisma}) {
            return prisma.partnerSliders({where: {filepath: "5e16e8a7edea8919102700.jpg"}});
        },
        partners(root, args, {prisma}) {
            return prisma.partnerSliders();
        },
        homepageSlider(root, args, {prisma}) {
            return prisma.homepageSliders();
        },
    },
    Mutation: {
        createAbout(root, { textArm, textRus, textEng, status}, {prisma}) {

            return prisma.createAbout({
                textArm,
                textRus,
                textEng,
                status
            });
        },
        updateAbouts(root, args, {prisma}) {
            return  prisma.updateAbout({
                data:{textArm: args.textArm},
                where:{id:args.id}});
        }
    }
};

module.exports = resolvers;